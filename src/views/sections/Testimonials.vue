<template>
    <div 
      id="services"  
      class="py-16 ma-16"
    >
      
        <v-heading 
          :is="tag"
          class="tt v-heading mb-14 text-center"
          >
            Equipa Enrich Life
        </v-heading>
        <v-row class="team">
         
          
          <v-col cols="12" md="6">
          <v-card
    class="mx-auto ci"
    elevation="12"
    min-width="400"
    
  >
   
    <v-card-text class=" comment" >
Não vivemos sozinhos neste mundo, se todos disponibilizarmos um pouco do nosso tempo, poderemos ter um mundo bem melhor.    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar class="text--center" color=" grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Afonso Macedo, CEO/Founder</v-list-item-title>
        </v-list-item-content>

        
      </v-list-item>
      

        

        
      
    </v-card-actions>
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

.team{
  justify-content: center;
}
.comment{
  font-family: "Lora", serif;
    font-style: italic;
    color: #888888;
        font-size: 17px;

}
.ci{
  text-align: center;
}
.tt{
      font-family: "Open Sans", sans-serif;
    color: #000;
    font-weight: 300;
    font-size: 40px;
    line-height: 50px;
}
</style>
