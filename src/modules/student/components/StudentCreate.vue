<template>
    <div>
        <v-row align="center" justify="center">
            <v-col cols="9">
                <v-card
                    class="mx-auto px-3"
                    max-width="1200"
                    style="overflow-y: scroll;"
                >
                    <v-row align="center" justify="center">
                            <v-col>
                                <h5 class="corte-module-subtitle">REGISTRO NUEVO ESTUDIANTE</h5>
                            </v-col>
                    </v-row>
                    <v-form class="text-left">
                        <v-stepper v-model="e1">
                            <v-stepper-header>
                            <v-stepper-step
                                :complete="e1 > 1"
                                step="1"
                                color="light-blue darken-1"
                            >
                                <span class="light-blue--text text--lighten-1">Información General</span>
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step
                                :complete="e1 > 2"
                                step="2"
                            >
                                Name of step 2
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step step="3">
                                Name of step 3
                            </v-stepper-step>
                            </v-stepper-header>

                            <v-stepper-items>
                            <v-stepper-content step="1">
                                <v-card
                                class="mb-12"
                                color="blue-grey lighten-5"
                                height="300px"
                                >
                                    <v-row>
                                        <v-col cols="8">
                                            <v-row>
                                                <v-col cols="6">
                                                    <v-select 
                                                        :items="tipo_docs"
                                                        item-text="name"
                                                        item-value="id"
                                                        label="Tipo de documento">
                                                    </v-select>
                                                </v-col>
                                                <v-col cols="6">
                                                    <v-text-field 
                                                    v-model="documento"
                                                    label="Número de documento">
                                                    </v-text-field>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col cols="6">
                                                    <v-text-field 
                                                    v-model="primer_apellido"
                                                    label="Primer apellido">
                                                    </v-text-field>
                                                </v-col>
                                                <v-col cols="6">
                                                    <v-text-field 
                                                    v-model="segundo_apellido"
                                                    label="Segundo apellido">
                                                    </v-text-field>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col cols="6">
                                                    <v-text-field 
                                                    v-model="fecha_nacimiento"
                                                    label="Fecha nacimiento">
                                                    </v-text-field>
                                                </v-col>
                                                <v-col cols="6">
                                                    <v-text-field 
                                                    v-model="estado_civil"
                                                    label="Estado civil">
                                                    </v-text-field>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col cols="6">
                                                    <v-text-field 
                                                    v-model="Tipo_poblacion"
                                                    label="Tipo población">
                                                    </v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="4">
                                            <ImagePreview /> 
                                        </v-col>
                                    </v-row>
                                    
                                </v-card>

                                <v-btn
                                color="blue darken-3"
                                dark
                                @click="e1 = 2"
                                >
                                Continuar
                                </v-btn>

                                <v-btn text>
                                Cancel
                                </v-btn>
                            </v-stepper-content>

                            <v-stepper-content step="2">
                                <v-card
                                class="mb-12"
                                color="grey lighten-1"
                                height="200px"
                                ></v-card>

                                <v-btn
                                color="primary"
                                @click="e1 = 3"
                                >
                                Continue
                                </v-btn>

                                <v-btn text>
                                Cancel
                                </v-btn>
                            </v-stepper-content>

                            <v-stepper-content step="3">
                                <v-card
                                class="mb-12"
                                color="grey lighten-1"
                                height="200px"
                                ></v-card>

                                <v-btn
                                color="primary"
                                @click="e1 = 1"
                                >
                                Continue
                                </v-btn>

                                <v-btn text>
                                Cancel
                                </v-btn>
                            </v-stepper-content>
                            </v-stepper-items>
                        </v-stepper>
                        
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import ImagePreview from '@/components/ImagePreview'

export default {
    name: 'StudentCreate',
    components: {
        ImagePreview
    },
    data: () => ({
        search: true,
        tipo_doc: '',
        sisben: false,
        e1: 1,
        tipo_docs: [
        {
          name: 'Cédula de ciudadanía',
          id: '1',
        },
        {
          name: 'Tarjeta de identidad',
          id: '2',
        },
        ]
    }),
}
</script>