<template>
    <v-card>
        <v-row>
            <v-col cols="4" color="#F9FBE7" fill-width fluid>
                <v-row align="center" justify="center">
                    <v-col cols="9" align="center" justify="center">
                        <v-img
                            src="@/assets/images/perfil.png"
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
                    <v-col cols="3" align="right">Código estudiante:</v-col>
                    <v-col cols="9">00010</v-col>
                </v-row>
                <v-row>
                    <v-col cols="3" align="right">Nombre:</v-col>
                    <v-col cols="9">Sandra Milena Gomez Hernandez</v-col>
                </v-row>
                <v-row>
                    <v-col cols="3" align="right">Cédula:</v-col>
                    <v-col cols="9">1122015236</v-col>
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
                    <v-col cols="9">sandragomez@gmail.com</v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-card>
</template>