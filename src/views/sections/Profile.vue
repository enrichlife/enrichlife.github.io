<template>
    <div 
      id="about-page"  
      class="my-10"
    >
     <v-container >
       
        <v-row no-gutters>
            <v-col
                cols="12"
                md="6"
                class="pa-2"
                v-for="profile in profiles" :key="profile.id"
              >
                <v-card
    class="mx-auto"
    outlined
    elevation="10"
  >
  <v-row no-gutters>
    <v-col
      cols="12"
      md="4"
      xs="12"
      class="pa-2"
    >
      <v-img
        v-if="profile.image"
        :src="profile.image"
      ></v-img>
    </v-col>

    <v-col
      cols="12"
      md="8"
      class="pa-2"
    >
      
      <v-list-item-content class="">
        <v-list-item-title class="headline mb-1">
        {{profile.name}}
        </v-list-item-title>
        <v-list-item-subtitle>
          <v-icon> location_on </v-icon>
          Lisboa, Portugal
        </v-list-item-subtitle>
       
        <v-tab class="primary--text my-4 pa-0 text-decoration-underline" >
            <span>Editar perfil</span> 
          </v-tab>

      </v-list-item-content>
    </v-col>

    <v-col
      cols="12"
      md="12"
      class="pa-2"
    >
      
      <v-list-item-content>
        <v-list-item-title class="primary--text subtitle-1 mb-0">
         Dados Pessoais
        </v-list-item-title>
        <v-divider class="primary--text"></v-divider>
        <div class="pt-5">
          <h4 style="text-transform: uppercase" class="py-3 mb-3" >
            Informações de Contacto
          </h4>
          
            <v-row class="email-content" no-gutters>
              <v-col
              cols="12"
              md="4"
              class="pa-2">
                <span class="font-weight-bold">Email:</span>
              </v-col>
              <v-col
              cols="12"
              md="8"
              class="pa-2">
                <span>{{profile.email}}</span>
              </v-col>
            </v-row>
            <v-row class="address-content" no-gutters>
              <v-col
              cols="12"
              md="4"
              class="pa-2">
                <span class="font-weight-bold">Endereço:</span>
              </v-col>
              <v-col
              cols="12"
              md="8"
              class="pa-2">
                <span>123, Rajar Goli, South Mugda</span>
              </v-col>
            </v-row>
            <v-row class="mobile-content" no-gutters>
              <v-col
              cols="12"
              md="4"
              class="pa-2">
                <span class="font-weight-bold">Telemóvel:</span>
              </v-col>
              <v-col
              cols="12"
              md="8"
              class="pa-2">
                <span>963786278</span>
              </v-col>
            </v-row>
        </div>
        

      </v-list-item-content>
    </v-col>

    <v-col
      cols="12"
      md="12"
      class="pa-2"
    >
      
      <v-list-item-content>
        <div>
          <h4 style="text-transform: uppercase" class="py-3 mb-3" >
            Informações Básicas
          </h4>
          
            <v-row class="birth-content" no-gutters>
              <v-col
              cols="12"
              md="4"
              class="pa-2 font-weight-bold">
                <span class="font-weight-bold">Data de Nascimento:</span>
              </v-col>
              <v-col
              cols="12"
              md="8"
              class="pa-2">
                <span>{{profile.birth}}</span>
              </v-col>
            </v-row>
            <v-row class="gender-content" no-gutters>
              <v-col
              cols="12"
              md="4"
              class="pa-2">
                <span class="font-weight-bold">Género:</span>
              </v-col>
              <v-col
              cols="12"
              md="8"
              class="pa-2">
                <span>{{profile.gender}}</span>
              </v-col>
            </v-row>
            <v-row class="weight-content" no-gutters>
              <v-col
              cols="12"
              md="4"
              class="pa-2">
                <span class="font-weight-bold">Peso:</span>
              </v-col>
              <v-col
              cols="12"
              md="8"
              class="pa-2">
                <span>{{profile.weight}}</span>
              </v-col>
            </v-row>
        </div>
        

      </v-list-item-content>
    </v-col>
  </v-row>
  </v-card>
  </v-col>

  <v-col
      cols="12"
      md="3"
      class="pa-2"
    >
      <v-card
    class="mx-auto"
    outlined
    elevation="10"
  >
  <v-card-title>
    Consultas Agendadas:
  </v-card-title>
  <v-card-text class="display-3 text-center">
      {{ca}}
  </v-card-text>
  
  </v-card>
  </v-col>

  <v-col
    cols="12"
    md="3"
    class="pa-2"
  >
    <v-card
    class="mx-auto"
    outlined
    elevation="10"
  >
    <v-card-title>
      Consultas Realizadas:
    </v-card-title>
    <v-card-text class="display-3 text-center">
      {{count}}
    </v-card-text>  
  </v-card>
  </v-col>
          </v-row>
          </v-container>
    </div>   
  
</template>



<script>
import{ fb, db, storage} from '@/firebase.js';
  export default {
    name: 'Profile',
    data() {
      return{
      profiles:[],
      count: null,
      ca: null,
      
      }
    },
    props: {
      tag: {
        type: String,
        default: 'h1',
      },
    },

    created(){
      try{
        var user = fb.auth().currentUser
        var docRef = db.collection("profiles").doc(user.uid);


const fileRef = "users/"+user.uid+"/profile.jpg"
         
        docRef.get().then((doc) => {
          if (fileRef != null) {
            storage.ref()
              .child(fileRef)
              .getDownloadURL()
              .then((url) => {
                this.profiles.push({
                  id: doc.id,
                  name: doc.data().name +" "+doc.data().surname ,
                  email: doc.data().email,
                  birth: doc.data().birth,
                  gender:doc.data().gender,
                  weight:doc.data().weight,
                  image: url,
                })
              })
          } else {
            this.profiles.push({
              id: doc.id,
                  name: doc.data().name,
                  email: doc.data().email,
                  birth: doc.data().birth,
                  gender:doc.data().gender,
            })
          }

          // end pertinent change
        
      })
    }catch(e){
      console.log(e)
    }
    const currentUser = fb.auth().currentUser
    console.log(currentUser);


 db.collection('bookings').where('userId', '==', user.uid).where('status', '==', "Concluido").get().then((querySnapshot) => {
      
        this.count = querySnapshot.size
        console.log(querySnapshot.size);

        
      
})

db.collection('bookings').where('userId', '==', user.uid).where('status', '==', "Confirmado").get().then((querySnapshot) => {
      
        this.ca = querySnapshot.size
        
      
})
    
    }
  }







</script>

<style>

h2{
  font-size: 35px;
  
}
</style>
