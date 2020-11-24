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

                            <v-stepper-step 
                                :complete="e1 > 3"
                                step="3"
                            >
                                <span>Información de residencia</span>
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step 
                                :complete="e1 > 4"
                                step="4"
                            >
                                <span>Información de salud</span>
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step 
                                :complete="e1 > 5"
                                step="5"
                            >
                                <span>Información académica</span>
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step
                                :complete="e1 > 6"
                                step="6"
                            >
                                <span>Información laboral</span>
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step step="7">
                                <span>Documentos adjuntos</span>
                            </v-stepper-step>
                            </v-stepper-header>

                            <v-stepper-items class="mt-10">
                            <!-- información general -->
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
                                                    <v-menu
                                                        ref="menu"
                                                        v-model="menu"
                                                        :close-on-content-click="false"
                                                        transition="scale-transition"
                                                        offset-y
                                                        min-width="290px"
                                                    >
                                                        <template v-slot:activator="{ on, attrs }">
                                                        <v-text-field
                                                            v-model="fecha_nacimiento"
                                                            label="Fecha de nacimiento"
                                                            prepend-icon="mdi-calendar"
                                                            readonly
                                                            v-bind="attrs"
                                                            v-on="on"
                                                        ></v-text-field>
                                                        </template>
                                                        <v-date-picker
                                                        ref="picker"
                                                        v-model="fecha_nacimiento"
                                                        :max="new Date().toISOString().substr(0, 10)"
                                                        min="1950-01-01"
                                                        @change="save"
                                                        ></v-date-picker>
                                                    </v-menu>
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
                            <!-- fin información general -->
                            <!-- información contacto -->
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
                            <!-- fin información contacto -->
                            <!-- información residencia -->
                            <v-stepper-content step="3">
                                <v-card
                                class="mb-12 px-2"
                                color="blue-grey lighten-5"
                                height="300px"
                                >
                                    <v-row>
                                        <v-col cols="4">
                                            <v-row>
                                                <v-col cols="10">
                                                    <v-text-field 
                                                    v-model="celular"
                                                    label="Barrio">
                                                    </v-text-field>
                                                </v-col>
                                                <v-col cols="1">
                                                    <v-btn
                                                    color="blue darken-3"
                                                    fab
                                                    x-small
                                                    dark
                                                    >
                                                    <v-icon>mdi-magnify</v-icon>
                                                    </v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-text-field 
                                            v-model="celular"
                                            label="Comuna">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-text-field 
                                            v-model="celular"
                                            label="Municipio">
                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="4">
                                            <v-select 
                                                :items="parentezco"
                                                item-text="name"
                                                item-value="id"
                                                label="Tipo vía 1">
                                            </v-select>
                                        </v-col>
                                        <v-col cols="2">
                                            <v-text-field 
                                            v-model="celular"
                                            label="Número de vía 1">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="2">
                                            <v-text-field 
                                            v-model="celular"
                                            label="Letra vía 1">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="2">
                                            <v-select 
                                                :items="parentezco"
                                                item-text="name"
                                                item-value="id"
                                                label="Cardinal vía 1">
                                            </v-select>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="4">
                                            <v-select 
                                                :items="parentezco"
                                                item-text="name"
                                                item-value="id"
                                                label="Tipo vía 2">
                                            </v-select>
                                        </v-col>
                                        <v-col cols="2">
                                            <v-text-field 
                                            v-model="celular"
                                            label="Número vía 2">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="2">
                                            <v-text-field 
                                            v-model="celular"
                                            label="Letra via 2">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="2">
                                            <v-select 
                                                :items="parentezco"
                                                item-text="name"
                                                item-value="id"
                                                label="Cardinal vía 2">
                                            </v-select>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="4">
                                            <v-text-field 
                                            v-model="celular"
                                            label="Complemento dirección">
                                            </v-text-field>
                                        </v-col>
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
                            <!-- fin información residencia -->
                            <!-- información salud -->
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
                            <!-- fin información salud -->
                            <!-- información académica -->
                            <v-stepper-content step="5">
                                <v-card
                                class="mb-12 px-2"
                                color="blue-grey lighten-5"
                                height="200px"
                                >
                                    <v-row>
                                        <v-col cols="4">
                                            <v-select 
                                                :items="parentezco"
                                                item-text="name"
                                                item-value="id"
                                                label="Nivel de estudio">
                                            </v-select>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-text-field 
                                            v-model="celular"
                                            label="Nombre de la institución donde terminó el bachillerato">
                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="6">
                                            <v-text-field 
                                            v-model="celular"
                                            label="Título obtenido">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="6">
                                            <v-text-field 
                                            v-model="celular"
                                            label="Título técnico">
                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="3">
                                            <v-menu
                                                v-model="menu2"
                                                :close-on-content-click="false"
                                                :nudge-right="40"
                                                transition="scale-transition"
                                                offset-y
                                                min-width="290px"
                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                    v-model="date"
                                                    label="Fecha de graduación"
                                                    prepend-icon="mdi-calendar"
                                                    readonly
                                                    v-bind="attrs"
                                                    v-on="on"
                                                ></v-text-field>
                                                </template>
                                                <v-date-picker
                                                v-model="date"
                                                @input="menu2 = false"
                                                ></v-date-picker>
                                            </v-menu>
                                        </v-col>
                                        <v-col cols="3">
                                            <v-switch
                                            v-model="sisben"
                                            :label="`Acta de grado: ${sisben.toString()}`"
                                            ></v-switch>
                                        </v-col>
                                        <v-col cols="3">
                                            <v-switch
                                            v-model="sisben"
                                            :label="`Diploma: ${sisben.toString()}`"
                                            ></v-switch>
                                        </v-col>
                                        
                                    </v-row>
                                </v-card>

                                <v-btn
                                color="blue darken-3"
                                dark
                                @click="e1 = 6"
                                >
                                Continue
                                </v-btn>

                                <v-btn text @click="e1 = 4">
                                    Anterior
                                </v-btn>
                                <v-btn text to="/student">
                                    Cancelar
                                </v-btn>
                            </v-stepper-content>
                            <!-- fin información académica -->
                            <!-- información laboral -->
                            <v-stepper-content step="6">
                                <v-card
                                class="mb-12 px-2"
                                color="blue-grey lighten-5"
                                height="200px"
                                >
                                    <v-row>
                                        <v-col cols="3">
                                            <v-switch
                                            v-model="sisben"
                                            :label="`Trabaja actualmente: ${sisben.toString()}`"
                                            ></v-switch>
                                        </v-col>
                                        <v-col cols="9">
                                            <v-text-field 
                                            v-model="celular"
                                            label="Nombre de la empresa">
                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="4">
                                            <v-text-field 
                                            v-model="celular"
                                            label="Ocupación">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-text-field 
                                            v-model="celular"
                                            label="Dirección">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-text-field 
                                            v-model="celular"
                                            label="Teléfono">
                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-card>

                                <v-btn
                                color="blue darken-3"
                                dark
                                @click="e1 = 7"
                                >
                                Continue
                                </v-btn>

                                <v-btn text @click="e1 = 5">
                                    Anterior
                                </v-btn>
                                <v-btn text to="/student">
                                    Cancelar
                                </v-btn>
                            </v-stepper-content>
                            <!-- fin información laboral -->
                            <!-- documentos adjuntos -->
                            <v-stepper-content step="7">
                                <v-card
                                class="mb-12 px-2"
                                color="blue-grey lighten-5"
                                height="100px"
                                >
                                    <v-row>
                                        <v-col cols="4">
                                            <v-file-input
                                            v-model="adjunto_cedula"
                                            placeholder="Cédula"
                                            label="Cédula"
                                            multiple
                                            prepend-icon="mdi-paperclip"
                                        >
                                            <template v-slot:selection="{ text }">
                                            <v-chip
                                                small
                                                label
                                                color="blue darken-1"
                                                dark
                                            >
                                                {{ text }}
                                            </v-chip>
                                            </template>
                                        </v-file-input>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-file-input
                                            v-model="adjunto_acta"
                                            placeholder="Acta de grado"
                                            label="Acta de grado"
                                            multiple
                                            prepend-icon="mdi-paperclip"
                                        >
                                            <template v-slot:selection="{ text }">
                                            <v-chip
                                                small
                                                label
                                                color="blue darken-1"
                                                dark
                                            >
                                                {{ text }}
                                            </v-chip>
                                            </template>
                                        </v-file-input>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-file-input
                                            v-model="adjunto_diploma"
                                            placeholder="Diploma"
                                            label="Diploma"
                                            multiple
                                            prepend-icon="mdi-paperclip"
                                        >
                                            <template v-slot:selection="{ text }">
                                            <v-chip
                                                small
                                                label
                                                color="blue darken-1"
                                                dark
                                            >
                                                {{ text }}
                                            </v-chip>
                                            </template>
                                        </v-file-input>
                                        </v-col>
                                    </v-row>
                                </v-card>
                                 <v-btn
                                 to="/student/student"
                                color="blue darken-3"
                                dark
                                >
                                Registrar
                                </v-btn>

                                <v-btn text @click="e1 = 6">
                                    Anterior
                                </v-btn>
                                <v-btn text to="/student">
                                    Cancelar
                                </v-btn>
                            </v-stepper-content>
                            <!-- fin documentos adjuntos -->
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
        date: new Date().toISOString().substr(0, 10),
        fecha_nacimiento: null,
        menu: false,
        menu: false,
        modal: false,
        menu2: false,
        adjunto_cedula: [],
        adjunto_acta: [],
        adjunto_diploma: [],
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
    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
    },
}
</script>