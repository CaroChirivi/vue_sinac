<template>
    <div>
        <div v-if="addProgram">
            <v-btn
            dark
            class="my-6 light-green darken-2"
            @click="addProgram = !addProgram"
            >
                Crear Programa
            </v-btn>
            <v-btn
            dark
            class="light-green--text text--darken-2 ml-6"
            text
            @click="$router.go(-1)"
            >
                Volver
            </v-btn>
        </div>
        <v-expand-x-transition>
        <v-card
        v-if="!addProgram"
        width="750"
        class="mx-auto my-10"
        >
        <v-card-title 
        class="font-weight-black 
                light-blue--text 
                text--lighten-5
                light-blue darken-3
                justify-center"
        >Registro de programa</v-card-title>
        <v-card-text>
            <v-form ref="main" @submit.prevent="createNewBook()">
                <v-row>
                    <v-col cols="4">
                        <v-autocomplete
                            v-model="values"
                            :items="items"
                            dense
                            label="Area"
                        ></v-autocomplete>
                    </v-col>
                    <v-col cols="4">
                        <v-autocomplete
                            v-model="values"
                            :items="items"
                            dense
                            label="Tipo"
                        ></v-autocomplete>
                    </v-col>
                    <v-col cols="4">
                        <v-autocomplete
                            v-model="values"
                            :items="items"
                            dense
                            label="Modalidad"
                        ></v-autocomplete>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <v-text-field label="Nombre corto"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-text-field label="Nombre largo"></v-text-field>
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
                        label="Descripción"
                        value=""
                        ></v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <v-select
                        :items="items"
                        label="Tipo de duración"
                        ></v-select>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field label="Tiempo de duración"></v-text-field>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn
                color="blue darken-3"
                class="mx-auto"
                dark
            >
                Registrar
            </v-btn>
            <v-btn
                color="blue darken-3"
                class="mx-auto"
                text
                dark
                @click="addPay = !addPay"
            >
                Cancelar
            </v-btn>
        </v-card-actions>
        
        </v-card>
        </v-expand-x-transition>
        <v-card
        width="800"
        class="mx-auto"
        >
            <v-expansion-panels 
            inset 
            :value="expanded"
            active-class="activePanel"
            >
                <v-expansion-panel>
                    <v-expansion-panel-header 
                    class="font-weight-black 
                    light-green--text 
                    text--darken-4"
                    >
                        Salud
                    </v-expansion-panel-header>
                    <v-expansion-panel-content >
                        <v-expansion-panels 
                        inset 
                        :value="expanded"
                        active-class="activePanel"
                        >
                            <v-expansion-panel>
                                <v-expansion-panel-header 
                                class="font-weight-black 
                                light-green--text 
                                text--darken-4"
                                >
                                    Curso
                                </v-expansion-panel-header>
                                <v-expansion-panel-content >
                                    
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                        <v-expansion-panels 
                        inset 
                        :value="expanded"
                        active-class="activePanel"
                        >
                            <v-expansion-panel>
                                <v-expansion-panel-header 
                                class="font-weight-black 
                                light-green--text 
                                text--darken-4"
                                >
                                    Taller
                                </v-expansion-panel-header>
                                <v-expansion-panel-content >
                                    
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                        <v-expansion-panels 
                        inset 
                        :value="expanded"
                        active-class="activePanel"
                        >
                            <v-expansion-panel>
                                <v-expansion-panel-header 
                                class="font-weight-black 
                                light-green--text 
                                text--darken-4"
                                >
                                    Seminarios
                                </v-expansion-panel-header>
                                <v-expansion-panel-content >
                                    
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                        <v-expansion-panels 
                        inset 
                        :value="expanded"
                        active-class="activePanel"
                        >
                            <v-expansion-panel>
                                <v-expansion-panel-header 
                                class="font-weight-black 
                                light-green--text 
                                text--darken-4"
                                >
                                    Técnicos
                                </v-expansion-panel-header>
                                <v-expansion-panel-content >
                                    <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title><router-link to="/programs/program">
                                    Auxiliar en Enfermería
                                    </router-link></v-list-item-title>
                                    </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title><router-link to="/programs/program">
                                    Jefe Enfermería
                                    </router-link></v-list-item-title>
                                    </v-list-item-content>
                                    </v-list-item>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header 
                    class="font-weight-black 
                    light-green--text 
                    text--darken-4">Pedagogía</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-expansion-panels 
                        inset 
                        :value="expanded"
                        active-class="activePanel"
                        >
                            <v-expansion-panel>
                                <v-expansion-panel-header 
                                class="font-weight-black 
                                light-green--text 
                                text--darken-4"
                                >
                                    Curso
                                </v-expansion-panel-header>
                                <v-expansion-panel-content >
                                    
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
    data: () => ({
        addProgram: true,
    }),
}
</script>