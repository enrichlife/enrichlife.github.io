<template>
 <nav >
      <v-app-bar app clipped-left >
        <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">enrich</span>
          <span>life</span>
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

        <v-list flat>
          <v-list-item class="px-2" >
            <v-list-item-avatar >
              <v-avatar color="grey">
      <v-icon dark>
        mdi-account-circle
      </v-icon>
    </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title">
                {{username}} 
              </v-list-item-title>
              <v-list-item-subtitle>{{email}} </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

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

         <!---MARCAÇÃO-->
          <v-subheader>Consultas</v-subheader>
          <v-list-item-group
            v-model="selectedItem"
            color="primary"
          >
            <v-list-item
              v-for="(bookings, i) in bookings"
              :key="i"
              router :to="bookings.route"
            >
              <v-list-item-icon>
                <v-icon v-text="bookings.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="bookings.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          

         



          <!--GESTÃO DE CONTA -->
          <v-subheader>GESTÃO DE CONTA</v-subheader>
          <v-list-item-group
            v-model="selectedItem"
            color="primary"
          >
            <v-list-item
              v-for="(account, i) in account"
              :key="i"
              router :to="account.route"
            >
              <v-list-item-icon>
                <v-icon v-text="account.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="account.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>


<v-spacer></v-spacer>
          <v-list-item-group
            color="primary"
            class="end"
          >
            <v-list-item @click="logout">
              <v-list-item-icon>
                <v-icon>logout</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Terminar sessão</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>

        </v-list>
      
      </v-navigation-drawer>
    </nav>
</template>

<script>
import{fb,storage, db} from '@/firebase.js';
export default {

    data() {
        return {
            email:null,
            name:null,
            surname:null,
            drawer:false,
            selectedItem: 1,
            snackbar: true,
             
            bookings: [
              { text: 'Solicitações', icon: 'history', route:'requests' },
              { text: 'Histórico de Consulas', icon: 'history', route:'queryhistory' },
            ],
            
            services: [
              { text: 'Massagem', icon: 'spa', route:'/team' },
              { text: 'Reabilitação Física', icon: 'fitness_center', route:'/' },
            ],

            account:[
              { text: 'Perfil', icon: 'mdi-account', route:'/user/profile' },
            ],
            
        }
    },

    created(){
      var user = fb.auth().currentUser
      this.email = user.email;

const fileRef = "users/"+user.uid+"/profile.jpg"

      storage.ref()
        .child(fileRef)
        .getDownloadURL()
        .then((url) => {
          
            this.image= url
          
        })

      db.collection('profiles').where('id', '==', user.uid).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        
        this.name = doc.data().name
        this.surname = doc.data().surname
      })
})
    },

    methods: {

        logout(){
            fb.auth().signOut()
            .then(() => {
                this.$router.replace('/enrichlife')
                
            }).catch((err) => {
                console.log(err);
            });
        }
    },
  }
</script>
<style lang="css">
  a { text-decoration: none; }
</style>