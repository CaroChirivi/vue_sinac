<template>
    <v-row align="center" justify="center">
        <v-col cols="4">
            <v-row
            class="fill-height"
            align="center"
            justify="center"
            >
            <template v-for="(item, i) in items">
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
                        :to="getUrl(item.url)"
                    >
                        <v-img
                            :src="getIconUrl(item.img)"
                            height="120px"
                            width="120px"
                            class="mx-5"
                        ></v-img>

                        <v-card-title 
                            class="text-h6 justify-center"
                        >
                            {{ item.title }}
                        </v-card-title>
                    </v-card>
                    <!-- <v-card
                    :elevation="hover ? 12 : 2"
                    :class="{ 'on-hover': hover }"
                    >
                    <v-img
                        :src="getIconUrl(item.img)"
                        height="225px"
                    >
                        <v-card-title class="title white--text">
                        <v-row
                            class="fill-height flex-column"
                            justify="space-between"
                        >
                            <p class="mt-4 subheading text-left">
                            {{ item.title }}
                            </p>
                        </v-row>
                        </v-card-title>
                    </v-img>
                    </v-card> -->
                </v-hover>
                </v-col>
            </template>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'Home',
    data: () => ({
        items: [
        {
          title: 'Estudiantes',
          img: 'person_search_peque.png',
          url: '/student/student'
        },
        {
          title: 'Programas',
          img: 'professions.png',
        },
        {
          title: 'Pagos',
          img: 'pagos.png',
        },
        {
          title: 'Reportes',
          img: 'report.png',
        },
        {
          title: 'Plataformas',
          img: 'plataformas.png',
        },
      ],
      transparent: 'rgba(255, 255, 255, 0)',
    }),
    methods: {
        getIconUrl(img){
            return require(`../assets/images/${img}`)
        },
        getUrl(url){
            return '/student/student'
        }
    }
}
</script>

<style>
    .corte-card:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
</style>