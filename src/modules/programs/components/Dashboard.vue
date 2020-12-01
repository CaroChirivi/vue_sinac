<template>
    <div>
        <div v-if="addPay">
            <v-btn
            dark
            class="my-6 light-green darken-2"
            @click="addPay = !addPay"
            >
                Agregar Pago
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
        v-if="!addPay"
        width="450"
        class="mx-auto my-10"
        >
        <v-card-title 
        class="font-weight-black 
                light-blue--text 
                text--lighten-5
                light-blue darken-3
                justify-center"
        >Registrar pago</v-card-title>
        <v-card-text>
            <v-form ref="main" @submit.prevent="createNewBook()">
                <v-row>
                    <v-col cols="12">
                        <v-autocomplete
                            v-model="values"
                            :items="items"
                            dense
                            label="Elija un pago"
                        ></v-autocomplete>
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
                                label="Fecha"
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
                        <v-text-field label="Valor"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <v-select
                        :items="items"
                        label="Forma de pago"
                        ></v-select>
                    </v-col>
                    <v-col cols="6">
                        <v-file-input
                            accept="image/*"
                            label="Evidencia pago"
                        ></v-file-input>
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
    name: 'Dashboard'
}
</script>