<template>
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
        <router-link to="/">
        <template>
          <v-img
            class="mx-2"
            src="@/assets/images/logo.jpg"
            max-height="120"
            max-width="120"
            contain
          ></v-img>
        </template>
        </router-link>
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
              <v-list v-for="father in fathers" :key="father.id">
                <v-list-item>
                  <v-list-item-title
                  >
                    menu.description
                  </v-list-item-title>
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
                {{ userAuth.name  }}
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
                    <v-list-item-title class="white--text">{{ userAuth.name }}</v-list-item-title>
                    <v-list-item-subtitle class="white--text">{{ userAuth.mail }}</v-list-item-subtitle>
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
                <v-list-item v-on:click="logout">
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
    <!-- <v-card 
      class="overflow-hidden" 
      v-if="$store.getters['login/isUserConnected']"
      >
        <v-app-bar
          scroll-threshold="500"
          color="#FFF"
          shrink-on-scroll
          prominent
          height="200px"
          scroll-target="#scrolling-techniques-7"
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
                        <v-list-item-title>item1</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>item2</v-list-item-title>
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
    </v-card> -->
</template>

<script>
  import eventBus from '@/eventBus'
  import { mapActions, mapState } from 'vuex'
  //import store from '@/router/index'

  export default {
    name: 'Header',
    data: () => ({
      userAuth: {
        name: '',
        mail: ''
      },
    }),
    created () {
      eventBus.$on('changeUserName', (event) => {
          this.userAuth.name = event.name
          this.userAuth.mail = event.email
      })
    },
    methods: {
      ...mapActions('header', ['getMenu']),
      changeUserName (newUserName) {
        console.log("Change name function");
        this.userName = newUserName
      },
      async logout () {
        try {
            this.spin.val = true
            // this.errorMessages.message = ''
            // this.errorMessages.array = []

            await LogoutServices.logout()
            .then(response => {
                console.log(response);
                this.$store.dispatch('login/signIn', null)
                this.$router.push('/signin')
                this.spin.val = false
                this.successMessage = response.data.message
            })
        }catch (error){
           // this.errorMessages.message = `Consulte a la administradora: ${error}`
            console.log("Error de afuera " + error);
        }

        //this.mySpinner.val = false
      },
    },
    computed: {
      ...mapState('header', ['menu'])
    },
    beforeCreate () {

    },
    created () {
      if(this.$store.getters['login/isUserConnected']) {
        const menus = this.getMenu()
        this.fathers = menus.fathers
        this.children = menus.children
      }
    }
}
</script>