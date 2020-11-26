<template>
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
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    name: 'Histories',
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