<template>
  <base-info-card title="Nóticias">
    <a
      v-for="feature in features"
      :key="feature"
      :text="feature"
      class="mb-8 grey--text body-1 d-block text-none"
      href="#"
      v-html="`&rsaquo; ${feature}`"
    />
  </base-info-card>
</template>

<script>
  export default {
    name: 'SectionFeaturesAlt',

     components: {
      BaseInfoCard: () => import('@/components/base/InfoCard'),
      
    },

    data: () => ({
      features: [
        'Zero Installation',
        'Easy Customization',
        'User Friendly Design',
        '24/7 Support Desk',
        'SEO Optimized',
      ],
    }),
  }
</script>
