<template> 
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="10" md="10">
                <v-card class="elevation-12">
                    <v-card-text class="py-0 pr-0  my-12">
                        <v-row>
                            <v-col class="pa-7"  cols="12" md="7">
                                <h2 class="text-center mt-10 mb-5">ADICIONAR NOVO ANÚNCIO</h2>
                                <v-form ref="form" v-model="valid" class="valid">
                                 <v-row>
                                    <v-col cols="12" md="6">
                                         <v-text-field
                                        v-model="title"
                                        :rules="fieldRules"
                                        label="Título"   
                                        counter
                                        maxlength="30"
                                        required
                                        dense
                                        outlined
                                    ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                        v-model="projectLocation"
                                        :rules="fieldRules"
                                        label="Localização do Projeto"
                                        required
                                        dense
                                        outlined
                                    ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                        v-model="aeroportLocation"
                                        :rules="fieldRules"
                                        label="Aeroporto de Chegada"
                                        required
                                        dense
                                        outlined
                                    ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                        v-model="age"
                                        :rules="fieldRules"
                                        label="Idade"
                                        placeholder="ex: msg msg msg"
                                        required
                                        dense
                                        outlined
                                    ></v-text-field>
                                    </v-col>
                                     
                                 </v-row>
                        

                                    <v-textarea
                                        v-model="description"
                                        :rules="fieldRules"
                                        outlined
                                        required
                                        dense
                                        name="input-7-4"
                                        label="Descrição do projeto"
                                    ></v-textarea>


                                    <v-row>
                                    
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                        v-model="projectLength"
                                        :rules="fieldRules"
                                        label="Duração do projecto"
                                        required
                                        dense
                                        outlined
                                    ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                        v-model="numberOfVolunteers"
                                        :rules="fieldRules"
                                        label="Número de Voluntários"
                                        required
                                        dense
                                        outlined
                                    ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                        v-model="accommodations"
                                        :rules="fieldRules"
                                        label="Alojamento"
                                        required
                                        dense
                                        outlined
                                    ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                        v-model="food"
                                        :rules="fieldRules"
                                        label="Refeições"
                                        placeholder="ex: msg msg msg"
                                        required
                                        dense
                                        outlined
                                    ></v-text-field>
                                    </v-col>
                                 </v-row>
                                 <v-textarea
                                        v-model="transfers"
                                        :rules="fieldRules"
                                        outlined
                                        required
                                        dense
                                        name="input-7-4"
                                        placeholder="Ex: Os transbordos do aeroporto estão incluídos tanto nos dias de chegada como de partida"
                                        label="Transbordos do Aeroporto"
                                    ></v-textarea>

                                    <v-file-input
                                        accept="image/"
                                        label="Inserir Imagem"
                                        v-model="file"
                                        show-size
                                        @change="onFilePicked"
                                    ></v-file-input>
                                
                                </v-form>
                                <div class="text-center my-7">
                                    <v-btn  
                                        color="primary" 
                                        :disabled="!valid" 
                                        id="custom-disabled" 
                                       @click="addProject()"
                                        :loading="isLoading"
                                    >
                                        Adicionar
                                    </v-btn>
                                </div>
                            </v-col>
                            <v-col class="righ-form pa-7" cols="12" md="5">
                                <div height="100%" width="100%">
                                    <div class="text-center ">
                                       <h2
                          class=" mt-6 mb-3 font-weight-medium"
                        >
                          Data de início:
                        </h2>
                        
                        <v-date-picker 
                          format="DD-MM-YYYY"
                            elevation="4"
                            required
                            class="ml-4 mb-6"
                          color="primary" 
                          v-model="pickerfrom" 
                          :min="new Date().toISOString().slice(0, 10)"
                          >
                        </v-date-picker>
                                    
                                    
</div>
                                    
                                </div>
                                
                            </v-col>
                        </v-row>  
                    </v-card-text>   
                </v-card>
            </v-col>
        </v-row>
    </v-container>
        
</template>

<script>
import{fb, db,storage} from '@/firebase.js';

export default {
    name: 'InsertAdvert',
    data() {
        return{
            isLoading: false,
            valid: false,
            title:'',
            aeroportLocation:'',
            projectLocation:'',
            pickerfrom:'',
            imageUrl: '',
            age:'',
            accommodations:'',
            food:'',
            projectLength:'',
            transfers:'',
            numberOfVolunteers:'',
            description:'',
            id:'',
            file:null,
            fieldRules: [
                v => !!v || 'campo obrigatório'
            ] ,
       }
    },
    methods:{
        resetForm() {
            this.$refs.form.reset()
        },

         onPickFile(){
            this.$refs.fileInput.click()
        },
        onFilePicked(event){
            const files = event.target.files
            let filename = files[0].name
            if(filename.lastIndexOf('.') <= 0){
                return alert('Escolha um ficheiro valido')
            }
            const fileReader = new FileReader()
             fileReader.addEventListener('load', () => {
                 this.imageUrl =  fileReader.result
            })
             fileReader.readAsDataURL(files[0])
             this.image = files[0]
        },

        async addProject() {
            try{
                this.isLoading = false

                //para por a foto de user no storge
                //var user = fb.auth().currentUser
                 var user = fb.auth().currentUser
                //const fileRef = "users/"+user.uid+"/profile.jpg"


                //upload file
                const fileRef = 'international_photos' + this.file.name
                storage.ref(fileRef).put(this.file)
                
                
                var docRef = db.collection("users").doc(user.uid);
                docRef.get().then((doc) => {
                    
                    this.companyName=doc.data().companyName
                });


                let data = {

                        accommodations: this.accommodations,
                        aeroport_location: this.aeroportLocation,
                        age: this.age,
                        companyID: user.uid,
                        description: this.description,
                        food: this.food,
                        location: this.projectLocation,
                        number_of_volunteers: this.numberOfVolunteers,
                        start_date: this.pickerfrom,
                        time_project:this.projectLength,
                        title: this.title,
                        transfers: this.transfers,
                        //companyName:this.companyName,
                        
                        image: fileRef,
                        upload: fileRef,
                }
                
                db.collection("internacional_volunteer").add(data)
                    .then((docRef) => {

                db.collection("internacional_volunteer").get().then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                        if (doc.data().image) {
                            storage
                            .ref()
                            .child(doc.data().image)
                            .getDownloadURL()
                            .then((url) => {
                                
                            var washingtonRef = db.collection("internacional_volunteer").doc(docRef.id);

                                return washingtonRef.update({
                                id: docRef.id,
                                image: url,
                                })

                            })
                        }

                        // end pertinent change
                        })
                    })
                    
                    
                        this.$router.replace('myadverts')

                        
                        .then(function() {
                            console.log("Document successfully updated, Document id :" , docRef.id);

                        })
                        .catch(function(error) {
                            // The document probably doesn't exist.
                            console.error("Error updating document: ", error);
                        });
                    })
                    .catch(function(error) {
                        console.error("Error writing document: ", error);
                    });
                }catch(e){
               console.log(e)
           }
       }
    },
}
</script>
<style>
    .righ-form{
        background-color: #e1e6e6;
    }
    .flex-end {
    background-color: pink;
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
    }
</style>