
<template>
  <section id="headerinfo">
    <!--<iframe src="https://advancecare.pt/rede-medica-mainhub-conteudos"> ddd</iframe>
    -->
    
    <v-img 
      height="800px"
      :src="require('@/assets/vol1.jpg')"
      class="white--text"
      gradient="to right, rgba(14,12,11,.71), rgba(14,12,11,.71)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="780"
          width="100%"
        >
        <h1 class=" display-3"> ENRICH LIFE </h1>
              
          <p>
              Ninguém pode fazer tudo, mas todo mundo pode fazer alguma coisa.
          </p>
          
         <!-- <div class="video">
            <b-embed type='video' auto controls >
              <source src="@/views/video.mp4" type="video/mp4">

            </b-embed>
          </div>-->
        </v-responsive>
      </v-container>
    </v-img>
     
  </section>
</template>


'bootstrap'
<script>
  import {BEmbed} from 'bootstrap-vue'
import Vue from 'vue'
  Vue.component('b-embed', BEmbed)
  export default {

   
    name: 'headerinfo',

    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '50vh' : '20vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
    props: {
      color: {
        type: String,
        default: 'primary',
      },
      depressed: {
        type: Boolean,
        default: true,
      },
      minWidth: {
        type: [Number, String],
        default: 164,
      },
      tile: {
        type: Boolean,
        default: true,
      },
    },
  }
</script>



<style>
 
  
</style>