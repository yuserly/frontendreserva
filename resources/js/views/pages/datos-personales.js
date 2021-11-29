import LayoutTienda from "../layouts/main2tienda.vue";
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import Swal from "sweetalert2";
import Datepicker from "vuejs-datepicker";
import Multiselect from "vue-multiselect";
import moment from "moment";
import $ from 'jquery'

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
        id_sucursal: "",
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
      if ($event.length > 4) {
        this.axios
          .get(`/api/validarrutpaciente/${$event}`)
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

    checkRut() {

      var valor = this.form.rut.replace('.','');  // Quita Punto
      valor = valor.replace('-','');// Quita Guión
      var cuerpo = valor.slice(0,-1);// Aislar Cuerpo y Dígito Verificador
      var dv = valor.slice(-1).toUpperCase();
      this.form.rut = cuerpo + '-'+ dv// Formatear RUN

      if(cuerpo.length < 7) {// Si no cumple con el mínimo de digitos ej. (n.nnn.nnn)
          $('.inputRUT').attr('style', 'border-color: red !important');
          $('.btnSubmit').prop('disabled',  true);
          return false;
      }

      var suma = 0; // Calcular Dígito Verificador
      var multiplo = 2;

      for(var i=1;i<=cuerpo.length;i++) // Para cada dígito del Cuerpo
      {
          var index = multiplo * valor.charAt(cuerpo.length - i); // Obtener su Producto con el Múltiplo Correspondiente
          suma = suma + index; // Sumar al Contador General
          if(multiplo < 7) {
              multiplo = multiplo + 1;
          }else{
              multiplo = 2;
          } // Consolidar Múltiplo dentro del rango [2,7]
      }

      var dvEsperado = 11 - (suma % 11); // Calcular Dígito Verificador en base al Módulo 11
      dv = (dv == 'K')?10:dv; // Casos Especiales (0 y K)
      dv = (dv == 0)?11:dv;

      if(dvEsperado != dv) {
          $('.inputRUT').attr('style', 'border-color: red !important');
          $('.btnSubmit').prop('disabled',  true);
          this.form.nombres = ""
          this.form.apellidos = ""
          this.form.id_paciente = ""
          this.form.email = "";
          this.form.direccion = "";
          this.form.celular = "";
          this.form.prevension_id = "";
          return false;
      } // Validar que el Cuerpo coincide con su Dígito Verificador

      $('.inputRUT').attr('style', 'border-color: #40A944 !important');  // Si todo sale bien, eliminar errores (decretar que es válido)
      $('.btnSubmit').prop('disabled',  false);
      this.validarRut(this.form.rut);
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
      this.form.profesional = '';
      this.form.servicio = ''
      this.optionsServicio = [];
      this.optionsProfesional = [];
      this.form.dia = '';
      this.form.hora_inicio = '';
      this.optionsHora = [];

      this.axios
        .get(
          `/api/obtenerservicios/${this.form.especialidad.id_especialidad}/${this.form.sucursal.id_sucursal}`
        )
        .then((response) => {
          this.optionsServicio = response.data;
        });
    },

    traerProfesional() {
      this.form.dia = '';
      this.form.hora_inicio = '';
      this.optionsHora = [];
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

      this.form.hora_inicio = '';
      this.optionsHora = [];

      let diashabiles = [];
      let diassemana = [0, 1, 2, 3, 4, 5, 6];
      this.axios
        .get(
          `/api/traerdia/${this.form.profesional.profesional_id_profesional}/${this.form.sucursal.id_sucursal}`
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
      this.optionsHora = [];
      this.form.id_sucursal = this.form.sucursal.id_sucursal;
      this.form.id_dia = this.form.dia.getDay();
      this.form.dia = moment(this.form.dia).format("YYYY-MM-DD");
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
