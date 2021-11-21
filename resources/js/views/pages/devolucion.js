import LayoutTienda from "../layouts/main2tienda.vue";
import { required, email, maxLength, minLength   } from "vuelidate/lib/validators";
import Swal from "sweetalert2";

export default {
  components: {
    LayoutTienda,
  },
  data() {
    return {
      mostrardatos: 0,
      form: {
        id_qr: "",
        nombre: "",
        email: "",
        celular: "",
        user_id: "",
      },
      submitted: false,
      alumno: "",
      colegio: "",
      curso: "",
      apoderado: "",
      id_admin: "",
    };
  },
  validations: {
    form: {
      nombre: {
        required,
      },
      email: {
        required,
        email,
      },
      celular: {
        required,
        maxLength: maxLength(8),
        minLength: minLength(8)
      },
    },
  },
  mounted() {
    this.traerInformacionPrenda();
  },
  methods: {
    onlyNumber ($event) {
      let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
          $event.preventDefault();
      }
  },
    traerInformacionUser() {
      if (localStorage.getItem("id")) {
        this.axios
          .get(`/api/administrador/${localStorage.getItem("id")}`)
          .then((res) => {
            console.log(res)
            this.id_admin = res.data.id_adm_colegio
          })
          .catch((error) => {
            console.log("error", error);
          });
      }
    },
    // 6192c629a669b

    traerInformacionPrenda() {
      var codeqr = this.$route.params.code;

      this.axios
        .get(`/api/traerinfqr/${codeqr}`)
        .then((res) => {
          console.log(res.data);
          this.form.id_qr = res.data.id_qr;
          this.colegio = res.data.alumnoqr.dellateventa.alumnos.colegio;
          this.curso = res.data.alumnoqr.dellateventa.alumnos.curso;
          this.alumno = res.data.alumnoqr.dellateventa.alumnos.nombre;
          this.apoderado =
            res.data.alumnoqr.dellateventa.venta.apoderado.nombre;
          this.mostrardatos =
            res.data.alumnoqr.dellateventa.venta.mostrar_nombre;

          this.traerInformacionUser();
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    guardar() {
      this.submitted = true;
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.axios
          .post(`/api/prendanotificadas`, this.form)
          .then((res) => {
            console.log(res);
            if (res.data == 1) {
              this.$router.push("/agradecimiento");
            } else {
              Swal.fire(
                "Notificar prenda perdida",
                "Lo sentimos, ha ocurrio un error, intentalo nuevamente.",
                "error"
              );
            }
          })
          .catch((error) => {
            console.log("error", error);
          });
      }
    },

    notificaradmin(){
      if (this.id_admin) {
        var form = {
          id_qr: this.form.id_qr,
          id_admin: this.id_admin
        };

        this.axios
          .post(`/api/prendanotificadas/admin`, form)
          .then((res) => {
            console.log(res);
            if (res.data == 1) {
              this.$router.push("/agradecimiento");
            } else {
              Swal.fire(
                "Notificar prenda perdida",
                "Lo sentimos, ha ocurrio un error, intentalo nuevamente.",
                "error"
              );
            }
          })
          .catch((error) => {
            console.log("error", error);
          });
      }
    }
  },
};
