<template>
  <v-theme-provider dark>
    <section id="hero-alt-adverts">
      <base-img
        :height="$vuetify.breakpoint.mdAndUp ? 350 : 225"
        :gradient="gradient"
        :src="src"
        color="#45516b"
        flat
        max-width="100%"
        tile
      >
        <v-row
          v-if="title"
          align="center"
          class="ma-0 fill-height text-center"
          justify="center"
        >
          <v-col cols="12">
            <base-heading
              :title="title"
              space="2"
              weight="500"
            />

            <base-divider
              color="blue"
              dense
            />

            <v-breadcrumbs
              :items="items"
              class="justify-center pa-0"
              divider=">"
            />
          </v-col>
        </v-row>
      </base-img>
    </section>
  </v-theme-provider>
</template>

<script>
  // Components
  import {
    HexToRGBA,
    RGBAtoCSS,
  } from 'vuetify/lib/util/colorUtils'

  import Img from '@/components/base/Img.vue'
  import Heading from '@/components/base/Heading.vue'
  import Divider from '@/components/base/Divider.vue'

  export default {
    name: 'SectionHeroAlt',

    components: {
      'base-img': Img,
      'base-heading': Heading,
      'base-divider': Divider,
    },

    metaInfo () {
      return {
        changed: meta => (this.title = meta.titleChunk.toUpperCase()),
      }
    },

    provide: {
      heading: { align: 'center' },
    },

    data: () => ({
      title: '',
    }),

    computed: {
      gradient () {
        const color = `${this.$vuetify.theme.themes.light.secondary}CC`
        const overlay = RGBAtoCSS(HexToRGBA(color))

        return `to top, ${overlay}, ${overlay}`
      },
      src () {
        return this.$route.meta.src
      },
      items () {
        return [
          { text: 'INÍCIO', to: '/admin' },
          { text: this.title },
        ]
      },
    },
  }
</script>

