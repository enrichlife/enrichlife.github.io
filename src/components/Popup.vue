<template>
   <div>
    <a
      color="primary"
      dark
      @click.stop="dialog = true"
    >
      Consultar preços
    </a>

    <v-dialog
      v-model="dialog"
      max-width="500"
    >
      <v-card>
        <v-card-title class="headline">
          Detalhes de preços:
        </v-card-title>

        <v-card-text>
          
        </v-card-text>
        

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            class="mb-3"
            text
            @click="submit"
            :loading="loading"
          >
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
</template>



<script>

  export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      dialog: false,
      title: '',
      content: '',
      inputRules: [
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ],
      loading: false,
    }),
    methods: {
      submit() {
        if(this.$refs.form.validate()){
          this.loading = true;
          
         

          
        }
      }
    }
  }
</script>