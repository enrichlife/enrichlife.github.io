<template>
          <v-container class="fill-height" fluid>
            
           
            <v-row align="center" justify="center">
                <v-col cols="12" sm="10" md="10">
                    <v-card class="elevation-12">
                        <v-card-text class="pa-7 mt-12">
                            <h3 class="text-center ts my-5">Pedidos de Consultas</h3>
                            
  <v-data-table
    primary
    :headers="headers"
    :items="desserts"
    :search="search"
    sort-by="name"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Pedidos de Consultas</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>   

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Pesquisar"
        single-line
        hide-details
      ></v-text-field>


        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>   



        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          width="50%"
        >
          
          <v-card>
            <v-card-title>
              <span class="headline mb-3">{{ formTitle }}</span>
            </v-card-title>
              

            <v-card-text>
              <v-container>
                <v-row>


                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                  <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="pa-0"
                  >
                  <span class="font-weight-bold">Nome: </span>

                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="pa-0"
                  >
                    <span>{{editedItem.name}}</span>
                  </v-col>
                  </v-row>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                  <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="pa-0"
                  >
                  <span class="font-weight-bold">Email: </span>

                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="pa-0"
                  >
                    <span>{{editedItem.email}}</span>
                  </v-col>
                  </v-row>
                  </v-col>


                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                  <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="pa-0"
                  >
                  <span class="font-weight-bold">Contacto: </span>

                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="pa-0"
                  >
                    <span>{{editedItem.Contacto}}</span>
                  </v-col>
                  </v-row>
                  </v-col>


                  
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

                  <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="pa-0"
                  >
                  <span class="font-weight-bold">Descrição: </span>

                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="pa-0"
                  >
                    <span>{{editedItem.desc}}</span>
                  </v-col>
                  </v-row>
                  </v-col>


                  
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
  
  </v-data-table>


                        </v-card-text>   
                    </v-card>
                </v-col>
            </v-row>
          </v-container>
</template>

<script>
import{db} from '@/firebase.js';

export default {
    name: 'Requests',
    data() {
        return{
          search: '',
          agendar:false,
          cancel:false,
tec:[],
tech: null,
            isLoading: false,
           date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,

           dialog: false,
      dialogDelete: false,
      headers: [
        
        
        {
          text: 'Nome do Voluntário',
          align: 'start',
          value: 'name',
          width: "500px", 
          sortable: false
        },
        { text: 'Email', value: 'Email' , sortable: false,width: "300px"},
        { text: 'Contacto', value: 'Contacto' , sortable: false,width: "300px"},
        { text: 'Idade', value: 'Age', sortable: false ,width: "200px"},
        { text: 'Descrição', value: 'Descriçao', sortable: false ,width: "200px"},

     ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        name:'',
        Contacto: '',
        birth: '',
        morada: '',
        clinica: '',
        service: '',
        bookingDate: '',
        status:'',
        tech: '',
        favoriteDays: '',
        favoriteHours:'',
      },
      defaultItem: {
        id: '',
        name: '',
        Contacto: '',
        birth: '',
        morada: '',
        clinica: '',
        service: '',
        bookingDate: '',
        status:'',
        tech: '',
      },
       }
    },

computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Selection' : 'Agendar Consulta'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods:{
        resetForm() {
            this.$refs.form.reset()
        },
        
         initialize () {

    
      try{
        db.collection("bookings").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          
                this.desserts.push({
                 
                  name: doc.data().name ,
                  Contacto: doc.data().contact,
                  Age: doc.data().age,
                  Email: doc.data().email,
                  Descriçao: doc.data().desc,

                })
                              
        })
      })
    }catch(e){
      console.log(e)
    }

 
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
/*if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }*/

        db.collection("bookings").doc(this.editedItem.id).update({
    confirmateDay: this.date,
    technical: this.tech,
    status:"Confirmado",
    
})
.then(() => {
  this.agendar = true,
    console.log("Document successfully written!");
    this.desserts.splice(this.editedIndex, 1)
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
        this.close()
      },

      
    }
}
</script>
<style lang="css">
    
.ts{
    font-size: 29px;
}

</style>