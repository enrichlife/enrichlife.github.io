<template>
  <section id="about-us" class="overflow-hidden mr-5 mt-16">
    <v-container class="fill-height py-0 my-8 mx-8">
      <v-row no-gutters>
        <v-col cols="12" md="6" class="mx-1">
          <v-img :src="require('@/assets/vol2.jpg')" height="100%" width="100%" />
        </v-col>

        <v-col
          class="align-content-space-between layout wrap"
          cols="12"
          md="5"
          :pa-5="$vuetify.breakpoint.smAndDown"
        >
          <v-row align="center" justify="center">
            <v-col cols="12" md="12" class="ml-4">
              <v-heading :is="tag" class="display-2 v-heading mt-6 mb-3 text-center"
                >Bem-vindo/a
              </v-heading>
              <p text-center>
                Bem vindo, a Enrich Life é uma rede social de voluntariado eletrónico que
                está dividida em duas partes essenciais, a area da rede social que permite
                os utilizadores fazerem partilhas de experiencia vividas em projetos de
                voluntariado e a area do voluntariado eletrónico.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "BaseHeading",
  components: {
    BaseText: () => import("@/components/base/Info"),
  },
  props: {
    tag: {
      type: String,
      default: "h1",
    },
  },
};
</script>

<style></style>
