<template>
  <v-app>
    <v-content>
      <v-main>
        <Spinner :start="spin.val"/>
        <v-app-bar
          scroll-threshold="500"
          color="#FFF"
          shrink-on-scroll
          prominent
          height="200px"
          scroll-target="#scrolling-techniques-7"
          v-if="$store.getters['login/isUserConnected']"
        >
          <v-row>
            <v-col cols="2">
              <template>
                <v-img
                  class="mx-2"
                  src="@/assets/images/logo.jpg"
                  max-height="120"
                  max-width="120"
                  contain
                ></v-img>
              </template>

              <v-row class="ml-13">
                <v-col>
                  <v-menu
                    open-on-hover
                    bottom
                    origin="center center"
                    transition="scale-transition"
                    offset-y
                    class="m-l-15"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-app-bar-nav-icon
                        v-bind="attrs"
                        v-on="on"
                        class="blue darken-4 rounded"
                        color="white"
                        small
                      >
                        <v-icon
                        >mdi-menu</v-icon>
                      </v-app-bar-nav-icon>
                    </template>
                    <v-list>
                      <v-list-item>
                        <v-list-item-title>Usuarios</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Estudiantes</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="d-flex justify-lg-space-around">
              <v-toolbar-title>
                    <div align="center" class="font-weight-black">
                        <div>
                        <h1 class="blue-grey--text text--darken-2">SISTEMA INTEGRAL
                            <span class="light-green--text text--darken-3">ADMINISTRATIVO</span>
                        </h1>
                        <h1 class="blue-grey--text text--darken-2">CORTEORINOQUIA
                            <span class="light-green--text text--darken-3">SINAC</span>
                        </h1>
                        </div>
                    </div>
              </v-toolbar-title>
            </v-col>
            <v-col cols="2" class="d-flex justify-end">
              <v-row class="px-6 py-16">
                <v-menu
                  bottom
                  right
                  transition="scale-transition"
                  origin="top left"
                >
                  <template v-slot:activator="{ on }">
                    <v-chip
                      pill
                      v-on="on"
                    >
                      <v-avatar 
                        color="blue darken-4" 
                        left
                      >
                        <v-icon dark>
                          mdi-account-circle
                        </v-icon>
                      </v-avatar>
                      Diana Carolina Tarapues Chirivi
                    </v-chip>
                  </template>
                  <v-card width="300">
                    <v-list light color="blue darken-3">
                      <v-list-item>
                        <v-list-item-avatar>
                          <v-avatar 
                            color="blue lighten-1"
                          >
                            <v-icon dark left>
                              mdi-account-circle
                            </v-icon>
                          </v-avatar>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title class="white--text">Carolina Tarapues</v-list-item-title>
                          <v-list-item-subtitle class="white--text">carotarapues@gmail.com</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-btn
                            icon
                            @click="menu = false"
                          >
                            <v-icon color="white">mdi-close-circle</v-icon>
                          </v-btn>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>
                    <v-list>
                      <v-list-item @click="() => {}">
                        <v-list-item-action>
                          <v-icon color="blue darken-4">mdi-account-key</v-icon>
                        </v-list-item-action>
                        <v-list-item-subtitle>Cambiar contraseña</v-list-item-subtitle>
                      </v-list-item>
                      <v-list-item @click="() => {}">
                        <v-list-item-action>
                          <v-icon color="blue darken-4">mdi-logout</v-icon>
                        </v-list-item-action>
                        <v-list-item-subtitle>Cerrar sesión</v-list-item-subtitle>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-menu>
              </v-row>
            </v-col>
          </v-row>
        </v-app-bar>
        <v-sheet 
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        max-height="800"
        color="#F1F0F1">
        <v-container fluid style="height: 1500px;">
          <Errors
            :error-message="errorMessages.message" 
            :errors="errorMessages.array"     
            ref="errors"                 
          ></Errors>
          <router-view />
        </v-container>
        </v-sheet>
        <Footer />      
      </v-main>
    </v-content>
  </v-app>
</template>

<script>

  import Header from '@/components/Header'
  import Footer from '@/components/Footer'

  export default {
    name: 'App',
    data: () => ({
      spin: {
        val: false
      },
      errorMessages: {
        message: '',
        array: []
      }
    }),
    provide() {
      return {
        mySpinner: this.spin,
        errorMessages: this.errorMessages
      }
    },
    components: {
      Header,
      Footer
    }
  };
</script>