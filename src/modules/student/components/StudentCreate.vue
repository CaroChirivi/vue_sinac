<template>
    <div>
        <v-row align="center" justify="center">
            <v-col cols="9">
                <v-card
                    class="mx-auto px-3 pb-8"
                    max-width="1200"
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
                            >
                                <span>Información General</span>
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step
                                :complete="e1 > 2"
                                step="2"
                            >
                                <span>Información de contacto</span>
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step step="3">
                                <span>Información de residencia</span>
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step step="4">
                                <span>Información de salud</span>
                            </v-stepper-step>
                            </v-stepper-header>

                            <v-stepper-items>
                            <v-stepper-content step="1">
                                <v-card
                                class="mb-12 px-2"
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
                                                    <v-select 
                                                        :items="tipo_docs"
                                                        item-text="name"
                                                        item-value="id"
                                                        label="Estado civil">
                                                    </v-select>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col cols="6">
                                                    <v-select 
                                                        :items="tipo_docs"
                                                        item-text="name"
                                                        item-value="id"
                                                        label="Tipo de población">
                                                    </v-select>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="4" align="center" justify="center">
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

                                <v-btn text to="/student">
                                    Cancelar
                                </v-btn>
                            </v-stepper-content>

                            <v-stepper-content step="2">
                                <v-card
                                class="mb-12 px-2"
                                color="blue-grey lighten-5"
                                height="300px"
                                >
                                    <v-row>
                                        <v-col cols="4">
                                            <v-text-field 
                                            v-model="celular"
                                            label="Celular">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-text-field 
                                            v-model="email"
                                            label="Correo electrónico">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-text-field 
                                            v-model="email_institucional"
                                            label="Correo electrónico institucional">
                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="8">
                                            <v-text-field 
                                            v-model="acudiente"
                                            label="Nombre acudiente">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-text-field 
                                            v-model="acudiente_documento"
                                            label="Documento acudiente">
                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="4">
                                            <v-text-field 
                                            v-model="acudiente_direccion"
                                            label="Dirección acudiente">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-text-field 
                                            v-model="acudiente_celular"
                                            label="Celular acudiente">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-select 
                                                :items="parentezco"
                                                item-text="name"
                                                item-value="id"
                                                label="Parentezco">
                                            </v-select>
                                        </v-col>
                                    </v-row>
                                </v-card>

                                <v-btn
                                color="blue darken-3"
                                dark
                                @click="e1 = 3"
                                >
                                Continue
                                </v-btn>

                                <v-btn text @click="e1 = 1">
                                    Anterior
                                </v-btn>
                                <v-btn text to="/student">
                                    Cancelar
                                </v-btn>
                            </v-stepper-content>

                            <v-stepper-content step="3">
                                <v-card
                                class="mb-12 px-2"
                                color="blue-grey lighten-5"
                                height="300px"
                                >
                                    <v-row>
                                        <v-col cols="4">
                                            <v-select 
                                                :items="parentezco"
                                                item-text="name"
                                                item-value="id"
                                                label="Tipo vivienda">
                                            </v-select>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-select 
                                                :items="parentezco"
                                                item-text="name"
                                                item-value="id"
                                                label="Estrato">
                                            </v-select>
                                        </v-col>
                                    </v-row>
                                </v-card>

                                <v-btn
                                color="blue darken-3"
                                @click="e1 = 4"
                                dark
                                >
                                Continue
                                </v-btn>

                                <v-btn text @click="e1 = 2">
                                    Anterior
                                </v-btn>
                                <v-btn text to="/student">
                                    Cancelar
                                </v-btn>
                            </v-stepper-content>

                            <v-stepper-content step="4">
                                <v-card
                                class="mb-12 px-2"
                                color="blue-grey lighten-5"
                                height="300px"
                                >
                                    <v-row>
                                        <v-col cols="4">
                                            <v-select 
                                                :items="parentezco"
                                                item-text="name"
                                                item-value="id"
                                                label="EPS">
                                            </v-select>
                                        </v-col>
                                        <v-col cols="2">
                                            <v-switch
                                            v-model="sisben"
                                            :label="`Sisben: ${sisben.toString()}`"
                                            ></v-switch>
                                        </v-col>
                                        <v-col cols="3">
                                            <v-select 
                                                :items="parentezco"
                                                item-text="name"
                                                item-value="id"
                                                label="Nivel">
                                            </v-select>
                                        </v-col>
                                        <v-col cols="3">
                                            <v-select 
                                                :items="parentezco"
                                                item-text="name"
                                                item-value="id"
                                                label="Grupo Sanguíneo">
                                            </v-select>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="4">
                                            <v-select 
                                                :items="parentezco"
                                                item-text="name"
                                                item-value="id"
                                                label="Discapacidad">
                                            </v-select>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-text-field 
                                            v-model="celular"
                                            label="Alergias">
                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="3">
                                            <v-switch
                                            v-model="sisben"
                                            :label="`Toma medicamentos: ${sisben.toString()}`"
                                            ></v-switch>
                                        </v-col>
                                        <v-col cols="9">
                                            <v-text-field 
                                            v-model="celular"
                                            label="Cuáles medicamentos">
                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-card>

                                <v-btn
                                color="blue darken-3"
                                dark
                                @click="e1 = 5"
                                >
                                Continue
                                </v-btn>

                                <v-btn text @click="e1 = 3">
                                    Anterior
                                </v-btn>
                                <v-btn text to="/student">
                                    Cancelar
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