<template>
  <div 
    id="testservice"  
    class="py-10 my-10"
  >
    <v-container >
     
      <div id="vue">
        <div>
          <div class="c-modal" v-show="modal_1">
          <base-info-card class="mb-6" title="Meus anúncios de voluntariado" />
          <v-row>
            <v-col cols="4" v-for="advert in adverts" :key="advert.id">
              <v-card
                class="mx-auto"
              >
                <v-img
                v-if="advert.upload"
                  class="white--text align-end"
                  height="250px"
                  :src="advert.upload"
                />
                  <v-card-title>{{advert.title}}</v-card-title>
                  <v-card-subtitle class="pb-0"> {{advert.companyName}}</v-card-subtitle>
                  <v-card-text class="text--primary">
                   <v-icon small>
                      mdi-map-marker
                    </v-icon> {{advert.location}}
                  </v-card-text>
                  <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                      color="orange "
                      text
                      @click="goTodetail(advert.id)"
                    >
                      Detalhes
                    </v-btn>
                    <v-dialog
      v-model="dialog"
      width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="error"
          text
          v-bind="attrs"
          v-on="on"
        >
          Apagar
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline text-center">Tem a certeza que quer apagar o seu anúncio?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog=false">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="deletead(advert.id)">Sim</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
      </v-card>
    </v-dialog>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </div>
      </div>
      </div>
      <v-dialog v-model="dialogDelete" max-width="540px">
          <v-card>
            <v-card-title class="headline text-center">Tem a certeza que quer apagar a consulta?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deletead">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-container>
  </div>   
</template>


<script>
import{fb, db, storage} from '@/firebase.js';
//import BusinessInfo from '@/components/base/BusinessInfo.vue'
  export default {
    name: 'MyAdverts',

   // massId:this.$route.params.Pid,
   

    components: {
    //  BaseInfoCard: () => import('@/components/base/InfoCard'),
      //'base-business-info': BusinessInfo,
    },
    data() {
      return{
      adverts:[],
      cname:[],
      showmassage: false,
      showrehabilitation: false,
      showsupport: false,
      modal_1: true,
      modal_2: false,
      modal_3: false,
      username:'',
      editedIndex: -1,
      dialog:false,
      
      }
    },
    created() {
      try{
         var user = fb.auth().currentUser

        db.collection("internacional_volunteer").where('companyID', '==', user.uid).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().upload) {
            storage
              .ref()
              .child(doc.data().upload)
              .getDownloadURL()
              .then((url) => {

                db.collection("users").where('uid', '==', doc.data().companyID).get().then((querySnapshot) => {
                  querySnapshot.forEach((finallydoc) =>{
                    this.adverts.push({
                  id: doc.id,
                  title: doc.data().title,
                  companyName: finallydoc.data().username,
                  location: doc.data().location,
                  upload: url,
                  })
                })
                
                })
              })
          } else {
            this.adverts.push({
              id: doc.id,
                  title: doc.data().title,
                  companyName: doc.data().companyName,
                  location: doc.data().location,
            })
          }

          // end pertinent change
        })
      })
    }catch(e){
      console.log(e)
    }

          // end pertinent change

    },

    props: {
      tag: {
        type: String,
        default: 'h1',
      },
    },
    methods:{
    goTodetail(massId){
      this.$router.push({name: 'detailsadverts', params:{Pid:massId} })
    },

    deletead(adid){
      console.log(adid)
        db.collection("internacional_volunteer").doc(adid).delete()
        .then(() => {
    this.cancel=true;
    console.log("Document successfully deleted!");
    
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });

        this.adverts.splice(this.editedIndex, 1)
       
    }
  },

  }
</script>

<style>



#Services{
 background-color:WhiteSmoke;
}

</style>
