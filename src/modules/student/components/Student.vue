<template>
    <v-card
        class="mx-auto"
        max-width="1000"
    >
        <v-toolbar
        flat
        color="blue darken-2"
        dark
        >
        <v-toolbar-title>Jose Antonio Mendoza Tarapues</v-toolbar-title>
        </v-toolbar>
        <v-tabs vertical>
        <v-tab>
            <v-icon left>
            mdi-account
            </v-icon>
            Perfil
        </v-tab>
        <v-tab>
            <v-icon left>
            mdi-timeline
            </v-icon>
            Historial
        </v-tab>
        <v-tab>
            <v-icon left>
            mdi-school
            </v-icon>
            Programas
        </v-tab>

        <v-tab-item>
            <v-card>
                <v-row>
                    <v-col cols="4" color="#F9FBE7">
                        <v-row align="center" justify="center">
                            <v-col cols="9">
                                <v-img
                                    src="@/assets/images/perfil.jpg"
                                    width="150px"
                                    height="200px"
                                ></v-img>
                                <v-btn
                                rounded
                                color="success"
                                dark
                                class="mt-4"
                                >
                                Activo
                                <v-icon right>
                                    mdi-account
                                </v-icon>
                                </v-btn>
                                <v-row class="mt-2">
                                    <v-col>
                                        <v-btn
                                            class="mx-2"
                                            fab
                                            dark
                                            small
                                            color="teal"
                                            outlined
                                            >
                                            <v-icon dark>
                                                mdi-eye
                                            </v-icon>
                                            </v-btn>
                                            <v-btn
                                            class="mx-2"
                                            fab
                                            dark
                                            small
                                            color="teal"
                                            outlined
                                            >
                                            <v-icon dark>
                                                mdi-pencil
                                            </v-icon>
                                            </v-btn>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        
                    </v-col>
                    <v-col cols="8" align="left">
                        <v-row>
                            <v-col cols="3" align="right">Código:</v-col>
                            <v-col cols="9">00010</v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="3" align="right">Nombre:</v-col>
                            <v-col cols="9">Jose Antonio Mendoza Tarapues</v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="3" align="right">Cédula:</v-col>
                            <v-col cols="9">1023244656</v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="3" align="right">Ciudad:</v-col>
                            <v-col cols="9">Villavicencio</v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="3" align="right">Edad:</v-col>
                            <v-col cols="9">21 años</v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="3" align="right">Celular:</v-col>
                            <v-col cols="9">321 2047527</v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="3" align="right">Correo:</v-col>
                            <v-col cols="9">josemendoza@gmail.com</v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card>
        </v-tab-item>
        <v-tab-item>
            <v-card>
                <v-data-table
                  :headers="headers"
                  :items="histories"
                  sort-by="calories"
                  class="elevation-1"
                >
                  <template v-slot:top>
                    <v-toolbar
                      flat
                    >
                      <v-toolbar-title>HISTORIAL</v-toolbar-title>
                      <v-divider
                        class="mx-4"
                        inset
                        vertical
                      ></v-divider>
                      <v-spacer></v-spacer>
                      <v-dialog
                        v-model="dialog"
                        max-width="700px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="light-green darken-2"
                            dark
                            class="mb-2"
                            v-bind="attrs"
                            v-on="on"
                          >
                            Nueva observación
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                          </v-card-title>

                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col
                                  cols="3"
                                >
                                  <v-text-field
                                    v-model="editedItem.fecha"
                                    label="Fecha"
                                  ></v-text-field>
                                </v-col>
                                <v-col
                                  cols="9"
                                >
                                  <v-text-field
                                    v-model="editedItem.evento"
                                    label="Evento"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col
                                  cols="12"
                                >
                                  <v-text-field
                                    v-model="editedItem.observacion"
                                    label="Observación"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-card-text>

                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue darken-3"
                              text
                              @click="close"
                            >
                              Cancelar
                            </v-btn>
                            <v-btn
                              color="blue darken-3"
                              text
                              @click="save"
                            >
                              Crear
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                      <v-dialog v-model="dialogDelete" max-width="550px">
                        <v-card>
                          <v-card-title class="headline">¿Está seguro de eliminar esta observación?</v-card-title>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-3" text @click="closeDelete">Cancelar</v-btn>
                            <v-btn color="blue darken-3" text @click="deleteItemConfirm">Eliminar</v-btn>
                            <v-spacer></v-spacer>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-toolbar>
                  </template>
                  <template v-slot:item.actions="{ item }">
                    <v-icon
                      small
                      class="mr-2"
                      @click="editItem(item)"
                    >
                      mdi-pencil
                    </v-icon>
                    <v-icon
                      small
                      @click="deleteItem(item)"
                    >
                      mdi-delete
                    </v-icon>
                  </template>
                  <template v-slot:no-data>
                    <v-btn
                      color="primary"
                      @click="initialize"
                    >
                      Reset
                    </v-btn>
                  </template>
                </v-data-table>
            </v-card>
        </v-tab-item>
        <v-tab-item >
            <v-row>
              <v-col cols="4">
                <v-card
                  class="mx-auto"
                  max-width="250"
                  color="light-green lighten-5"
                >
                  <v-img
                    class="white--text align-end"
                    height="150px"
                    src="@/assets/images/enfermeria.png"
                  >
                  </v-img>
                  <v-card-title>Auxiliar en Enfermería</v-card-title>
                  <v-card-subtitle class="pb-0">
                    Técnico
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>II semestre</div>

                    <v-chip
                      class="ma-2"
                      color="green"
                      text-color="white"
                    >
                      Terminado
                    </v-chip>
                  </v-card-text>

                  <v-card-actions>

                    <v-btn
                      color="light-blue darken-3"
                      text
                    >
                      Explorar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card
                  class="mx-auto"
                  max-width="250"
                  color="light-green lighten-5"
                >
                  <v-img
                    class="white--text align-end"
                    height="150px"
                    src="@/assets/images/svb.png"
                  >
                  </v-img>
                  <v-card-title>Soporte Vital Básico</v-card-title>
                  <v-card-subtitle class="pb-0">
                    Curso
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div></div>

                    <v-chip
                      class="ma-2"
                      color="green"
                      text-color="white"
                    >
                      Terminado
                    </v-chip>
                  </v-card-text>

                  <v-card-actions>

                    <v-btn
                      color="light-blue darken-3"
                      text
                    >
                      Explorar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
        </v-tab-item>
        </v-tabs>
    </v-card>
</template>

<script>
export default {
    name: 'Student',
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Fecha',
          align: 'start',
          sortable: false,
          value: 'fecha',
        },
        { text: 'Evento', value: 'evento' },
        { text: 'Observación', value: 'observacion' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      histories: [],
      editedIndex: -1,
      editedItem: {
        fecha: '',
        evento: 0,
        observacion: 0,
      },
      defaultItem: {
        fecha: '',
        evento: 0,
        observacion: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nueva observación' : 'Editar observación'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.histories = [
          {
            fecha: '26/01/2020',
            evento: 'Cambio estado estudiante',
            observacion: 'Se registra el estudiante en el sistema',
          },
          {
            fecha: '28/01/2020',
            evento: 'Cambio estado académico',
            observacion: 'Se registra el estudiante en el programa Técnico en Auxiliar de Enfermería',
          }
        ]
      },

      editItem (item) {
        this.editedIndex = this.histories.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.histories.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.histories.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.histories[this.editedIndex], this.editedItem)
        } else {
          this.histories.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>