<script src="./datos-personales.js"></script>

<style>

div.backgroundG{
    background: url('/images/fondo.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
}

</style>

<template>
  <div class="backgroundG">
    <LayoutTienda>
      <div class="container mt-5">
        <div class="row d-flex justify-content-center">
          <div class="col-xl-9">
            <div class="card">
              <div class="card-body" style="box-shadow: 0px 1px 19px #7e7c7c; padding: 0px;">
                <div class="row">
                  <div class="col-12 text-center" style="padding: 20px 0px;">
                    <i><h5>REGISTRO DE RESERVAS</h5></i>
                  </div>
                </div>
                <form-wizard
                  v-if="!url"
                  color="#93117ee8"
                  next-button-text="Siguiente"
                  back-button-text="Atras"
                  finish-button-text="Finalizar"
                  @on-complete="onComplete()"
                >
                  <tab-content icon="mdi mdi-human-greeting">
                    <div class="row">
                      <div class="col-12 col-lg-6">
                        <div class="mb-3">
                          <label for="rut">RUT</label>
                          <input
                            id="rut"
                            v-model="form.rut"
                            type="text"
                            class="form-control inputRUT"
                            v-on:input="checkRut(this)"
                          />
                          <span v-if="submitted && !form.rut"
                            >El rut es requerido.</span
                          >
                        </div>
                      </div>
                      <div class="col-12 col-lg-6">
                        <div class="mb-3">
                          <label for="email">Email</label>
                          <input
                            id="email"
                            v-model="form.email"
                            type="text"
                            class="form-control"
                          />
                          <span v-if="submitted && !form.email"
                            >El Email es requerido.</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 col-lg-6">
                        <div class="mb-3">
                          <label for="nombres">Nombres</label>
                          <input
                            id="nombres"
                            v-model="form.nombres"
                            type="text"
                            class="form-control"
                          />
                          <span v-if="submitted && !form.nombres"
                            >El nombre es requerido.</span
                          >
                        </div>
                      </div>
                      <div class="col-12 col-lg-6">
                        <div class="mb-3">
                          <label for="apellidos">Apellidos</label>
                          <input
                            id="apellidos"
                            v-model="form.apellidos"
                            type="text"
                            class="form-control"
                          />
                          <span v-if="submitted && !form.apellidos"
                            >El Apellidos es requerido.</span
                          >
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-12 col-lg-6">
                        <div class="mb-3">
                          <label for="celular">Celular</label>
                          <input
                            id="celular"
                            v-model="form.celular"
                            type="text"
                            class="form-control"
                          />

                          <span v-if="submitted && !form.celular"
                            >El Celular es requerido.</span
                          >
                        </div>
                      </div>
                      <div class="col-12 col-lg-6">
                        <div class="mb-3">
                          <label for="direccion">Dirección</label>
                          <input
                            id="direccion"
                            v-model="form.direccion"
                            type="text"
                            class="form-control"
                          />
                          <span v-if="submitted && !form.direccion"
                            >El dirección es requerido.</span
                          >
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-12 col-lg-6">
                        <div class="mb-3">
                          <label>Previsión</label>
                          <multiselect
                            v-model="form.prevension_id"
                            :options="optionsPrevension"
                            track-by="id_prevension"
                            label="nombre"
                          ></multiselect>

                          <span v-if="submitted && !form.prevension_id"
                            >Prevision es requerido.</span
                          >
                        </div>
                      </div>
                    </div>
                  </tab-content>
                  <tab-content icon="mdi mdi-clipboard-plus">
                    <div class="row">
                      <div class="col-12 col-lg-6">
                        <div class="mb-3">
                          <label for="sucursal">Sucursal</label>
                          <multiselect
                            v-model="form.sucursal"
                            :options="optionsSucursal"
                            label="nombre"
                          ></multiselect>
                        </div>
                      </div>
                      <div class="col-12 col-lg-6">
                        <div class="mb-3">
                          <label for="especialidad">Especialidad</label>
                          <multiselect
                            v-model="form.especialidad"
                            :options="optionsEspecialidad"
                            label="nombre"
                            @input="traerServicio()"
                          ></multiselect>
                        </div>
                      </div>
                    </div>
                    <div class="row" v-if="form.especialidad">
                      <div class="col-12 col-lg-6">
                        <div class="mb-3">
                          <label for="servicios">Servicios</label>
                          <multiselect
                            v-model="form.servicio"
                            :options="optionsServicio"
                            label="nombre"
                            @input="traerProfesional()"
                          ></multiselect>
                        </div>
                      </div>
                      <div class="col-12 col-lg-6">
                        <div class="mb-3">
                          <label for="profesional">Profesional</label>
                          <multiselect
                            v-if="form.servicio"
                            v-model="form.profesional"
                            :options="optionsProfesional"
                            :custom-label="customLabel"
                            @input="traerDiasDisponibles()"
                          ></multiselect>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 col-lg-6">
                        <div class="mb-3">
                          <label for="dia">Dia</label>
                          <datepicker
                            v-if="form.profesional"
                            class="form-control"
                            :disabledDates="disabledDates"
                            v-model="form.dia"
                            @input="traerHorario()"
                          ></datepicker>
                        </div>
                      </div>
                      <div class="col-12 col-lg-6">
                        <div class="mb-3">
                          <b-form-radio-group
                            class="custom-check"
                            id="btn-radios-1"
                            button-variant="primary"
                            v-model="form.hora_inicio"
                            :options="optionsHora"
                            buttons
                            name="radios-btn-default"
                          ></b-form-radio-group>
                        </div>
                      </div>
                    </div>
                  </tab-content>
                </form-wizard>

                <div class="card checkout-order-summary" v-else>
                  <div class="card-body">
                    <div class="p-3 bg-light mb-4">
                      <h5 class="font-size-16 mb-0">
                        Reserva
                        <span class="float-end ms-2">{{ codigo }}</span>
                      </h5>
                    </div>
                    <div class="table-responsive">
                      <table class="table table-centered mb-0 table-nowrap">
                        <thead>
                          <tr>
                            <th class="border-top-0" scope="col">Servicio</th>
                            <th class="border-top-0" scope="col">Precio</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h5 class="font-size-14 text-truncate">
                                <router-link
                                  to="/ecommerce/product-detail/1"
                                  class="text-dark"
                                  >{{ form.servicio.nombre }}</router-link
                                >
                              </h5>
                            </td>
                            <td>{{ subtotal }}</td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <h5 class="font-size-14 m-0">SubTotal :</h5>
                            </td>
                            <td>{{ subtotal }}</td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <h5 class="font-size-14 m-0">IVA :</h5>
                            </td>
                            <td>{{ iva }}</td>
                          </tr>
                          <tr class="bg-light">
                            <td colspan="2">
                              <h5 class="font-size-14 m-0">Total:</h5>
                            </td>
                            <td>{{ total }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="text-sm-right mt-2 mt-sm-0">
                    <a :href="url" class="btn btn-success " id="pagar">
                      <i class="uil uil-shopping-cart-alt me-1"></i> Pagar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutTienda>
  </div>
</template>
