<template>
 <!--<div>
        <v-app-bar 
          app 
          elevation="6"
          color="white"
        >
          <v-toolbar-title class="ml-6 py-2">
            <router-link to="/enrichlife">
              <v-img max-width="230px" height="100%" src="/EFLogo.png" > </v-img>
            </router-link>
          </v-toolbar-title>
            
          <v-spacer></v-spacer>

          <div class="hidden-xs-only">
          <v-tabs 
          class="mr-16"
           v-model="tabs" 
           optional>
          <v-tab v-for="(name, i) in items"
            :key="i"
             :to="{ name }"
            :ripple="false"
            text class="secondary--text" >
           <span >
           {{ name }}
            </span> 
          </v-tab>
          
          
          <v-tabs-slider color="primary"></v-tabs-slider>
        </v-tabs>
        </div>
        
        </v-app-bar>
    </div>-->
     <nav >
      <v-app-bar app clipped-left >
        <v-app-bar-nav-icon  v-show="!mobile" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase grey--text">
           <router-link to="/enrichlife">
              <v-img max-width="230px" height="100%" src="/EFLogo.png" > </v-img>
            </router-link>
        </v-toolbar-title>
        
      </v-app-bar>

      <!--expand-on-hover-->
      <v-navigation-drawer
        width="270"
        app
        src="/imgnavbar.jpg"
        gradient="to right, rgba(14,12,11,.71), rgba(14,12,11,.71)"
        expand-on-hove
        clipped
        v-model="drawer"
        class=" white--text"
      >

        <v-list nav >
          <!---INICIO-->
          <v-list-item-group
            color="primary"
          >
          
              <v-list-item :to="{path: '/admin', name: 'adverts'}">
                <v-list-item-icon>
                  <v-icon>home</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Anúncios</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
          </v-list-item-group>
          <!---->

          <!---ADICIONAR ANUNCIO-->
          <v-list-item-group
            color="primary"
          >
          
              <v-list-item :to="{path: '/admin', name: 'insertadverts'}">
                <v-list-item-icon>
                  <v-icon>spa</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Adicionar Anúncio</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
          </v-list-item-group>
          <!---->

          <!---ADICIONAR REABILITAÇÃO FÍSICA-->
          <v-list-item-group
            color="primary"
          >
          
              <v-list-item :to="{path: '/admin', name: 'myadverts'}">
                <v-list-item-icon>
                  <v-icon>fitness_center</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Meus Anúncios</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
          </v-list-item-group>
          <!---->

        </v-list>
      
      </v-navigation-drawer>
    </nav>
</template>

<script>

export default {

    data() {
        return {

          
            drawer:false,

            tabs: null,
             items: [
             'Início',
              'Sobre',
              'Serviços',
            ],
        }
    },
  }
</script>
<style lang="css">
  a { text-decoration: none; }
</style>