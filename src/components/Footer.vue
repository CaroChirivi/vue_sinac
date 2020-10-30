<template>
    <v-footer
        light
        padless
        fixed
        v-if="$store.getters['login/isUserConnected']"
      >
        <v-col cols="12">
          <v-card
            flat
            tile
            class="blue darken-4 white--text text-center"
          >
            <v-card-text class="white--text">
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 white--text"
                icon
                right
              >
                <v-icon size="20px">
                  {{ icon }}
                </v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <strong>SINAC</strong> Sistema Integral Administrativo de Corteorinoquia. 
              <strong> 
                <v-icon dark>
                  mdi-copyright
                </v-icon>
                {{ new Date().getFullYear() }}
              </strong>
            </v-card-text>
          </v-card>
        </v-col>
    </v-footer>
</template>

<script>
export default {
    name: 'Footer',
    data: () => ({
      icons: [
        'mdi-web',
        'mdi-cast-education',
        'mdi-facebook',
      ],
    })
}
</script>