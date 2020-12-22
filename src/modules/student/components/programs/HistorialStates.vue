<template>
    <v-card 
    class="mt-5 mx-auto"
    width="80%"
    >
        <v-card-title
        class="teal--text text--lighten-5 
        light-green darken-3 
        font-weight-black"
        >Historial estados académicos. Grupo 2019 A I semestre</v-card-title>
        <div v-if="addState">
            <v-btn
            dark
            class="my-6 light-green darken-2"
            small
            @click="addState = !addState"
            >
                Cambio Estado
            </v-btn>
            <v-btn
            dark
            small
            class="light-green--text text--darken-2 ml-6"
            text
            @click="$router.go(-1)"
            >
                Volver
            </v-btn>
        </div>

        <v-expand-x-transition>
        <v-card
        v-if="!addState"
        width="500"
        class="mx-auto my-10"
        >
        <v-card-title 
        class="font-weight-black 
                light-blue--text 
                text--lighten-5
                light-blue darken-3
                justify-center"
        >Registro nuevo estado</v-card-title>
        <v-card-text>
            <v-form ref="main" @submit.prevent="createNewBook()">
                <v-row>
                    <v-col cols="6">
                        <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="date"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="date"
                                label="Picker in menu"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker
                            v-model="date"
                            no-title
                            scrollable
                            >
                            <v-spacer></v-spacer>
                            <v-btn
                                text
                                color="primary"
                                @click="menu = false"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                text
                                color="primary"
                                @click="$refs.menu.save(date)"
                            >
                                OK
                            </v-btn>
                            </v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col cols="6">
                        <v-select
                        :items="items"
                        label="Estado"
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-textarea
                        class="mt-2 mb-16"
                        name="input-7-1"
                        outlined
                        clearable
                        no-resize
                        rows="4"
                        label="Label"
                        value=""
                        ></v-textarea>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
        <v-card-actions class="mt-3">
            <v-btn
                color="blue darken-3"
                class="mx-auto"
                dark
            >
                Nuevo estado
            </v-btn>
            <v-btn
                color="blue darken-3"
                class="mx-auto"
                text
                dark
                @click="addState = !addState"
            >
                Cancelar
            </v-btn>
        </v-card-actions>
        
        </v-card>
        </v-expand-x-transition>

        <v-card-text class="py-0">
          <v-row>
              <v-col cols="10" class="mx-auto">
                  <v-timeline
                        align-top
                        dense
                    >
                        <v-timeline-item
                        color="light-green lighten-2"
                        small
                        >
                        <v-row class="pt-1" justify="start">
                            <v-col cols="3">
                            <strong>01/04/2019</strong>
                            </v-col>
                            <v-col>
                            <strong>Aplazado</strong>
                            <div class="caption">
                                El estudiante solicita el aplazamiento del semestre debido a enfermedad
                                de un familiar y debe viajar una temporada fuera de Villavicencio.
                                La estudiante solicita se le guarde el dinero para volver el próximo semestre.
                            </div>
                            </v-col>
                        </v-row>
                        </v-timeline-item>

                        <v-timeline-item
                        color="light-blue lighten-2"
                        small
                        >
                        <v-row class="pt-1" justify="start">
                            <v-col cols="3">
                            <strong>01/02/2019</strong>
                            </v-col>
                            <v-col>
                            <strong>Matriculado</strong>
                            <div class="caption">
                                El estudiante ha sido matriculado al I semestre en Auxiliar de Enfermería.
                                Grupo 2019 A I semestre.
                            </div>
                            </v-col>
                        </v-row>
                        </v-timeline-item>

                        <v-timeline-item
                        color="light-blue lighten-2"
                        small
                        >
                        <v-row class="pt-1" justify="start">
                            <v-col cols="3">
                            <strong>25/01/2019</strong>
                            </v-col>
                            <v-col>
                            <strong>Inscrito</strong>
                            <div class="caption">
                                El estudiante ha sido inscrito al I semestre en Auxiliar de Enfermería.
                                Grupo 2019 A I semestre.
                            </div>
                            </v-col>
                        </v-row>
                        </v-timeline-item>

                    </v-timeline>
              </v-col>
          </v-row>

          
        </v-card-text>
    </v-card>
</template>
</template>

<script>
export default {
    name: 'HistorialStates',
    data: () => ({
        addState: true,
        menu: false,
        date: new Date().toISOString().substr(0, 10),
    })
}
</script>