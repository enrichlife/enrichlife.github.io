
<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {

    metaInfo: { title: 'Início' },

    extends: View,

    mixins: [
      LoadSections([
        'Header-Info',
        'about-us',
        'services',
        'testimonials',
        //substituir os componentes por tags, ex: basa-title por h1
      ]),
    ],
    
    props: {
      id: {
        type: String,
        default: 'home',
      },
    },
  }
</script>
