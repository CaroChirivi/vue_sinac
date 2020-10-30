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
                    </v-card>
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
          img: 'person_search.png',
        },
        {
          title: 'Pagos',
          img: 'report.png',
        },
        {
          title: 'Programas',
          img: 'person_search.png',
        },
      ],
      transparent: 'rgba(255, 255, 255, 0)',
    }),
    methods: {
        getIconUrl(img){
            console.log(img);
            return require(`../assets/images/${img}`)
        }
    }
}
</script>