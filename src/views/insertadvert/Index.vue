<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Inicio',

    metaInfo: { title: 'Inicio' },

    extends: View,

    mixins: [
      LoadSections([
        'insert-advert',
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
