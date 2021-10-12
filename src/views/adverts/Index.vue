<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Anúncios',

    metaInfo: { title: 'Anúncios' },

    extends: View,
 
    mixins: [
      LoadSections([
       'hero-alt-adverts',
        'Advertsorg'
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'about',
      },
    },
  }
</script>
