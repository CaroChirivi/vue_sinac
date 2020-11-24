<template>
    <div>
        <v-card
            class="mx-auto px-3 pb-8"
            max-width="700"
        >
            <v-row>
                <v-col cols="4">
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
                        <v-col cols="3">Código:</v-col>
                        <v-col cols="9">00010</v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="3">Nombre:</v-col>
                        <v-col cols="9">Jose Antonio Mendoza Tarapues</v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="3">Cédula:</v-col>
                        <v-col cols="9">1023244656</v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="3">Ciudad:</v-col>
                        <v-col cols="9">Villavicencio</v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="3">Edad:</v-col>
                        <v-col cols="9">21 años</v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="3">Celular:</v-col>
                        <v-col cols="9">321 2047527</v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="3">Correo:</v-col>
                        <v-col cols="9">josemendoza@gmail.com</v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-card>
        <v-row>

        </v-row>
    </div>
</template>