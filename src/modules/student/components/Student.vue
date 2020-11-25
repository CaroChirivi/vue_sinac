<template>
    <v-card
        class="mx-auto"
        max-width="900"
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
            mdi-lock
            </v-icon>
            Historial
        </v-tab>
        <v-tab>
            <v-icon left>
            mdi-access-point
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
                    :items="desserts"
                    sort-by="calories"
                    class="elevation-1"
                >
                    <template v-slot:top>
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>My CRUD</v-toolbar-title>
                        <v-divider
                        class="mx-4"
                        inset
                        vertical
                        ></v-divider>
                        <v-spacer></v-spacer>
                        <v-dialog
                        v-model="dialog"
                        max-width="500px"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                            color="primary"
                            dark
                            class="mb-2"
                            v-bind="attrs"
                            v-on="on"
                            >
                            New Item
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
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                    v-model="editedItem.name"
                                    label="Dessert name"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                    v-model="editedItem.calories"
                                    label="Calories"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                    v-model="editedItem.fat"
                                    label="Fat (g)"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                    v-model="editedItem.carbs"
                                    label="Carbs (g)"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                    v-model="editedItem.protein"
                                    label="Protein (g)"
                                    ></v-text-field>
                                </v-col>
                                </v-row>
                            </v-container>
                            </v-card-text>

                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="close"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="save"
                            >
                                Save
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                        <v-dialog v-model="dialogDelete" max-width="500px">
                        <v-card>
                            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
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
        <v-tab-item>
            <v-card max-width="100" max-height="100">Técnico Auxiliar enfermería</v-card>
                <v-card max-width="100" max-height="100" class="ml-10">Curso SVB-RCP</v-card>
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
        { text: 'Acciones', value: 'acciones', sortable: false },
      ],
      histories: [],
      editedIndex: -1,
      editedItem: {
        fecha: '',
        evento: '',
        history: '',
      },
      defaultItem: {
        fecha: '',
        evento: '',
        history: '',
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
            fecha: '28/01/20',
            evento: 'Cambio estado estudiante',
            history: 'Estudiante registrado en el sistema.'
          },
          {
            fecha: '28/01/20',
            evento: 'Cambio estado académico',
            history: 'Estudiante registrado en el programa auxiliar en enfermería. Grupo 2020 A I semestre.'
          },
          {
            fecha: '28/01/20',
            evento: 'Cambio estado académico',
            history: 'Estudiante matriculado en el programa auxiliar en enfermería. Grupo 2020 A I semestre.'
          },
          {
            fecha: '20/03/20',
            evento: 'Cambio estado académico',
            history: 'Estudiante cursando el programa auxiliar en enfermería. Grupo 2020 A I semestre.'
          },
          {
            fecha: '02/04/20',
            evento: 'Cambio estado académico',
            history: 'Estudiante aplaza semestre del programa auxiliar en enfermería. Grupo 2020 A I semestre.'
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