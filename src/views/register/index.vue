
<template>
  <v-app>
      <v-content>
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="4" md="4">
                    <v-card class="elevation-12">
                        <v-card-text class="pa-7 mt-12">
                            <v-row>
                                <v-col cols="12" md="8">
                                    <router-link to="/biensaude">
                                        <v-img  max-width="230px" src="/EFLogo.png" > </v-img>
                                    </router-link>
                                </v-col>
                            </v-row>
                            <h2 class="text-center mt-10 mb-5">Criar uma nova conta EnrichLife</h2>
                            
                            
                             <div class="text-center ">
                                <v-avatar 
                                    color="grey" 
                                    size="92"  
                                    class="text-center"  
                                    accept="image/"
                                    label="File input"

                                >
                                    <img
                                        :src="imageUrl"
                                    >
                                </v-avatar>
                            </div>

                            <div class="text-center mt-2">
                               

                                <input 
                                    type="file" 
                                    ref="fileInput" 
                                    acept="image/*"
                                    @change="onFilePicked"
                                >
                            </div>


                            <v-form v-model="valid" class="valid">
                                <v-row>
                                    <v-col
                                    cols="12"
                                    md="12"
                                    >
                                        <v-text-field
                                        v-model="username"
                                        :rules="nameRules"
                                        required
                                        label="Nome"
                                        name="Nome"
                                        type="text"
                                        prepend-icon="person"
                                        color="primary"
                                        />
                                    </v-col>
                                 
                                </v-row>

                                <v-text-field
                                v-model="email"
                                label="Email"
                                name="Email"
                                prepend-icon="email"
                                type="text"
                                color="primary"
                                :rules="emailRules"
                                class="pt-0"
                                />

                                <v-text-field
                                v-model="password"
                                prepend-icon="lock"
                                :append-icon="show ? 'visibility' : 'visibility_off'"
                                :rules="[rules.required, rules.min, rules.uplength, rules.num, rules.char]"
                                :type="show ? 'text' : 'password'"
                                name="password"
                                label="Password"
                                hint="Utilize 8 ou mais carateres numa mistura de letras, números e símbolos. "
                                @click:append="show = !show"
                                ></v-text-field>

                                <v-text-field
                                v-model="rePassword"
                                prepend-icon="lock"
                                :append-icon="show1 ? 'visibility' : 'visibility_off'"
                                :rules="[rules.required, rules.min, passwordConfirmationRule]"
                                :type="show1 ? 'text' : 'password'"
                                name="input-10-1"
                                label="Digite novamente a password"
                                @click:append="show1 = !show1"
                                ></v-text-field>
                                <div class="text-center mt-4">
                                Já tem uma conta? 
                                <router-link to="/login">
                                    <a class="primary--text text-decoration-underline" >Entrar</a> 
                                </router-link>
                            </div>
                            </v-form>
                            <div class="text-center mb-7">
                            <v-btn  color="primary" :disabled="!valid" id="custom-disabled" @click="register" >REGISTAR</v-btn>
                            </div>
                            
                        </v-card-text>   
                    </v-card>
                </v-col>
            </v-row>
          </v-container>
      </v-content>
  </v-app>
</template>
<script>

import {fb,db, storage} from '@/firebase.js';

export default {
    data:() => ({
        step: 1,
        date: null,
        menu: false,
        valid:false,
        show: false,
        show1: false,
        password: '',
        rePassword: '',
        imageUrl: '',
        image: null,
        username: '',
        dateFormatted: null,
        row: '',
        email: '',
        isNinja: true,
        
        

        nameRules: [
            v => !!v || 'Nome é obrigatório',
            v => v.length <= 20 || 'O nome deve ser inferior a 20 caracteres',
        ],
        emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /^(([^<>ºª*+`´!"#$%=&/()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(v) || 'E-mail must be valid',
      ],
      rules: {
        required: (value) => !!value || "Obrigatório.",
        min: (v) => v.length >= 8 || "Min. 8 caracters",
        uplength: (v) => /[A-Z]+/.test(v) || 'Deve ter um carácter maiúsculo',
        num:(v) => /[0-9]+/.test(v) || 'Deve ter um número',
        char: (v) =>  /([._!@$%])/.test(v) || 'Deve ter um carácter especial [._!@#$%]'
      },

    }),
    computed: {
        computedDateFormatted () {
        return this.formatDate(this.date)
        },
        passwordConfirmationRule() {
        return this.password === this.rePassword || "A palavra-passe deve corresponder";
        },
    },
    
    watch: {
        date () {
        this.dateFormatted = this.formatDate(this.date)
    }

    },
    methods: {

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

        save (date) {
            this.$refs.menu.save(date)
        },
        formatDate (date) {
        if (!date) return null

         const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
    },
    parseDate (date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${year}`
    },
   
   
    
    register(){
                    

        fb.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
    
           const fileRef = "/avatars/"+user.user.uid
            storage.ref(fileRef).put(this.image)

             const userphoto = storage.ref().child("/avatars/"+user.user.uid) .getDownloadURL();
             console.log(userphoto);
  
                
                  
                        db.collection("users").doc(user.user.uid).set({
                            username: this.username,
                            type: "Organização",
                            uid: user.user.uid,
                            email: this.email,
                            avatar: userphoto, 

                        })
                        .then(function() {
                            console.log("Registado como Organização");
                        })
                        .catch(function(error) {
                            console.error("Error writing document: ", error);
                        });

                        this.$router.replace('login')
                 

                })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('A palavra-passe é demasiado fraca.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });

      },
    },
    props: {
        source:String
    }
};
</script>
<style>
h2{
    font-size: 19px;
}
#custom-disabled.v-btn--disabled {
    background-color: rgb(231, 231, 231) !important;
}
</style>