<template>
    <v-row align="center" justify="center">
        <v-col cols="4">
            <v-row
            class="fill-height"
            align="center"
            justify="center"
            >
            <template v-for="(button, i) in quickAccessButtons">
                <v-col
                :key="i"
                cols="12"
                md="4"
                >
                <v-hover v-slot="{ hover }">
                    <v-card
                        class="mx-auto corte-card pt-2"
                        max-width="160"
                        :elevation="hover ? 12 : 2"
                        :class="{ 'on-hover': hover }"
                        :to="getUrl(button.url)"
                    >
                        <v-img
                            :src="getIconUrl(button.direct_access_image)"
                            height="120px"
                            width="120px"
                            class="mx-5"
                        ></v-img>

                        <v-card-title 
                            class="text-h6 justify-center"
                        >
                            {{ button.description }}
                        </v-card-title>
                    </v-card>
                </v-hover>
                </v-col>
            </template>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
    name: 'Home',
    data: () => ({
        //quickButtons: [],
      transparent: 'rgba(255, 255, 255, 0)',
    }),
    methods: {
        ...mapActions('home', ['getQuickAccessButtons']),
        getIconUrl(img){
            return require(`../assets/images/${img}`)
        },
        getUrl(url){
            return url
        }
    },
    computed: {
        ...mapState('home', ['quickAccessButtons'])
    },
    beforeCreate () {
             console.log("Inicia spinner");
         },
    created () {
        console.log("created");
        this.quickButtons = this.getQuickAccessButtons()
        console.log(this.quickButtons);
    }
}
</script>

<style>
    .corte-card:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
</style>