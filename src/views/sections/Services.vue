<template>
    <div 
      id="services"  
      class="py-16 ma-16"
    >
      
        <v-heading 
          :is="tag"
          class="display-2 v-heading mb-14 text-center"
          >
            Novidades
        </v-heading>
        <v-row>
         
          
          <v-col cols="12" md="6">
           <v-card
    class="mx-auto"
    max-width="419px"
    height="370px"
  >
    <v-img
     class="white--text align-end"
                :src="require('@/assets/ef_img_nov2.jpg')"
                height="200px"
              >
    </v-img>
          <v-card-title class="ml-2 pa-1">Enrich Life App</v-card-title>


    <v-card-text class="text--primary">
      <div>Já disponivel na sua aplicação móvel todos os anúncios de voluntariado disponiveis a que se pode inscrever!</div>

    </v-card-text>

    
  </v-card>
          </v-col>
          <v-col cols="12" md="6">
           <v-card
    class="mx-auto"
    max-width="419"
    height="370px"

  >
     <v-img
      class="white--text align-end"
                :src="require('@/assets/ef_img_nov.jpg')"
                height="200px"
              >
              
    </v-img>
      <v-card-title  class="ml-2 pa-1">Enrich Life</v-card-title>

    <v-card-text class="text--primary">
      <div>Crie já a sua conta Enrich Life e tenha acesso a todo o conteúdo disponivel de voluntariado nacional e internacional!</div>
    </v-card-text>

    
  </v-card>
          </v-col>
        </v-row>
    </div>   
  
</template>



<script>
  export default {
    name: 'BaseHeading',
    
    data: () => ({
      showmassage: false,
      showrehabilitation: false,
      showsupport: false,
    }),

    props: {
      tag: {
        type: String,
        default: 'h1',
      },
    },
  }
</script>

<style>

#Services{
 background-color:WhiteSmoke;
}



</style>
