import LayoutTienda from "../layouts/main2tienda.vue";
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import Swal from "sweetalert2";
import Datepicker from "vuejs-datepicker";
import Multiselect from "vue-multiselect";
import moment from "moment";

export default {
  components: {
    LayoutTienda,
    Datepicker,
    Multiselect,
    FormWizard,
    TabContent,
  },
  data() {
    return {
      optionsSucursal: [],
      optionsEspecialidad: [],
      optionsServicio: [],
      optionsProfesional: [],
      optionsPrevension: [],
      submitted: false,
      url:'',
      total: 0,
      iva:0,
      subtotal:0,
      codigo: '',
      disabledDates: {
        days: [6, 0],
        to: new Date(Date.now() - 8640000),
      },
      form: {
        sucursal: "",
        especialidad: "",
        servicio: "",
        profesional: "",
        dia: "",
        id_dia: "",
        hora_inicio: "",
        hora_fin: "",
        email: "",
        rut: "",
        nombres: "",
        apellidos: "",
        celular: "",
        direccion: "",
        prevension_id: "",
        id_paciente: "",
      },
      optionsHora: [],
    };
  },

  mounted() {
    this.traerSucursal();
    this.traerEspecialidad();
    this.traerPrevision();
  },
  methods: {
    customLabel({ profesional }) {
      return `${profesional.nombres} ${profesional.apellidos} `;
    },
    traerPrevision() {
      this.axios.get(`/api/obtenerprevision/`).then((response) => {
        this.optionsPrevension = response.data;
      });
    },
    validarRut($event) {
      if ($event.target.value.length > 4) {
        this.axios
          .get(`/api/validarrutpaciente/${$event.target.value}`)
          .then((response) => {
            if (response.data != 0) {
              this.form.nombres = response.data.nombres;
              this.form.apellidos = response.data.apellidos;
              this.form.id_paciente = response.data.id_paciente;
              this.form.rut = response.data.rut;
              this.form.email = response.data.email;
              this.form.direccion = response.data.direccion;
              this.form.celular = response.data.celular;
              this.form.prevension_id = response.data.prevision;
            } else {
              this.rutexist = false;
            }
          });
      }
    },
    traerSucursal() {
      this.axios.get(`/api/obtenersucursal`).then((response) => {
        this.optionsSucursal = response.data;
      });
    },
    traerEspecialidad() {
      this.axios.get(`/api/obtenerespecialidad`).then((response) => {
        console.log(response);
        this.optionsEspecialidad = response.data;
      });
    },

    onComplete() {
      if (
        !this.form.rut ||
        !this.form.email ||
        !this.form.nombres ||
        !this.form.apellidos ||
        !this.form.direccion ||
        !this.form.celular ||
        !this.form.prevension_id ||
        !this.form.hora_inicio ||
        !this.form.sucursal ||
        !this.form.especialidad ||
        !this.form.servicio ||
        !this.form.profesional
      ) {
        this.submitted = true;

        Swal.fire({
          position: "center",
          icon: "error",
          title: "Debes completar todos los datos solicitados",
          showConfirmButton: false,
          timer: 1000,
        });

        return;
      } else {
        var hora_fin = moment(this.form.dia + " " + this.form.hora_inicio)
          .add(this.form.especialidad.intervalo, "m")
          .format("YYYY-MM-DD HH:mm:ss");
        this.form.hora_fin = moment(hora_fin).format("HH:mm:ss");

        console.log(this.form);

        this.axios.post(`/api/crearreserva`, this.form).then((response) => {
          console.log(response);

          if(response.data.url){

            this.url = response.data.url;
            this.codigo = response.data.codigo;
            this.subtotal = response.data.subtotal;
            this.iva = response.data.iva;
            this.total = response.data.total;

          }
        });
      }
    },
    traerServicio() {
      this.axios
        .get(
          `/api/obtenerservicios/${this.form.especialidad.id_especialidad}/${this.form.sucursal.id_sucursal}`
        )
        .then((response) => {
          this.optionsServicio = response.data;
        });
    },
    traerProfesional() {
      this.axios
        .get(
          `/api/obtenerprofesional/${this.form.servicio.id_servicio}/${this.form.sucursal.id_sucursal}`
        )
        .then((response) => {
          console.log(response);
          this.optionsProfesional = response.data;
        });
    },
    traerDiasDisponibles() {
      let diashabiles = [];
      let diassemana = [0, 1, 2, 3, 4, 5, 6];
      this.axios
        .get(
          `/api/traerdia/${this.form.profesional.profesional_id_profesional}`
        )
        .then((response) => {
          if (response.data.length > 0) {
            response.data.forEach((element, i) => {
              if (element["dia"]["dia"] == 7) {
                element["dia"]["dia"] = 0;
              }

              diashabiles.push(element["dia"]["dia"]);
            });
          }

          for (let i = 0; i < diashabiles.length; i++) {
            for (let j = 0; j < diassemana.length; j++) {
              if (diashabiles[i] == diassemana[j]) {
                diassemana.splice(j, 1);
              }
            }
          }

          this.disabledDates.days = diassemana;
        });
    },
    traerHorario() {
      this.form.id_dia = this.form.dia.getDay();
      this.form.dia = moment(this.form.dia).format("YYYY-MM-DD");
      console.log(this.form);
      this.axios
        .post(`/api/traerhorariofrontend`, this.form)
        .then((response) => {
          console.log(response);

          var rangosdisponibles = response.data.rangosdisponibles;
          var rangoshoraactual = response.data.rangoshoraactual;

          for (let i = 0; i < rangosdisponibles.length; i++) {
            for (let j = 0; j < rangoshoraactual.length; j++) {
              if (rangosdisponibles[i] == rangoshoraactual[j]) {
                rangosdisponibles.splice(i, 1);
              }
            }
          }

          for (let k = 0; k < rangosdisponibles.length; k++) {
            this.optionsHora.push({
              text: rangosdisponibles[k],
              value: rangosdisponibles[k],
            });
          }

          console.log(this.optionsHora);
        });
    },
  },
};
