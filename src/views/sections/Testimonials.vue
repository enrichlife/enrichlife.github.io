<template>
<v-row>
  <v-col cols="12" md="12">
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
    class="mx-auto"
    elevation="12"
    
  >
   
    <v-card-text class=" comment grow d-flex flex-wrap justify-md-start justify-center " >
Não vivemos sozinhos neste mundo, se todos disponibilizarmos um pouco do nosso tempo, poderemos ter um mundo bem melhor.    </v-card-text>

    <v-card-actions class="text--center">
      <v-row>
        <v-col cols="12">
          <div class="grow  d-flex flex-wrap justify-md-start justify-center " >
          <v-list-item-avatar class="text--center" color=" grey darken-3">
          <v-img
            class="elevation-6 text--center"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>
        
     

        

        
      </div>
        </v-col>
        <v-col cols="12">
          <div class="grow d-flex flex-wrap justify-md-start justify-center ">

          <p class="grow d-flex flex-wrap justify-md-start justify-center " >Afonso Macedo</p>
          <p class="grow d-flex flex-wrap justify-md-start justify-center " >CEO/Founder</p>
      </div>
        </v-col>
      </v-row>
      
      

        

        
      
    </v-card-actions>
  </v-card>
          </v-col>
         
        </v-row>
    </div>  
  </v-col>
</v-row>
     
  
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
.r{
  width: 100%;
}
</style>
