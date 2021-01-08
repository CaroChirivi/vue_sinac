<template>
    <v-card>
        <v-row>
            <v-col cols="4" color="#F9FBE7" fill-width fluid>
                <v-row align="center" justify="center">
                    <v-col cols="9" align="center" justify="center">
                        <v-img
                            src="@/assets/images/enfermeria.png"
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
                    <v-col cols="3" align="right">Nombre Corto:</v-col>
                    <v-col cols="9">Aux. Enfermería.</v-col>
                </v-row>
                <v-row>
                    <v-col cols="3" align="right">Área:</v-col>
                    <v-col cols="9">Salud</v-col>
                </v-row>
                <v-row>
                    <v-col cols="3" align="right">Tipo:</v-col>
                    <v-col cols="9">Técnico</v-col>
                </v-row>
                <v-row>
                    <v-col cols="3" align="right">Modalidad:</v-col>
                    <v-col cols="9">Semipresencial</v-col>
                </v-row>
                <v-row>
                    <v-col cols="3" align="right">Duración:</v-col>
                    <v-col cols="9">3 Semestres</v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-card>
</template>