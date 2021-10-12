<template>
  <div>
    <base-info-card
      :title="title"
      :subtitle="subtitle"
      space="4"
      color="primary"
    />

    <base-text-field label="Name" v-model="name"/>

    <base-text-field label="Email" v-model="email"/>

    <base-text-field label="Subject" v-model="subject"/>

    <base-textarea
      class="mb-6"
      label="Menssagem"
      v-model="message"
    />

    <base-btn
    @click="sendemail" 
    >
      Enviar Menssagem
    </base-btn>
  </div>
</template>

<script>
  export default {
    name: 'BaseContactForm',
    components: {
      //InfoFeatures: () => import('@/components/InfoFeatures'),
      BaseInfoCard: () => import('@/components/base/InfoCard'),
      BaseTextField: () => import('@/components/base/TextField'),
      BaseTextarea: () => import('@/components/base/Textarea'),
      BaseBtn: () => import('@/components/base/Btn')
    },
  

    // Injected from the Vuetify Themeable mixin
    inject: ['theme'],

    props: {
      subtitle: String,
      title: {
        type: String,
        default: 'MAIL US YOUR MESSAGE',
      },
    },
  }
</script>
