<template>
<base-info-card title="Instagram">
    <v-row dense>
        <v-col v-for="n in 6" :key="n" ols="auto">
            <base-img :src="require(`@/assets/insta-${n}.jpg`)" color="grey lighten-1" width="96" tile />
        </v-col>
    </v-row>
</base-info-card>
</template>

<script>
export default {
    name: 'Instagram',

    components: {
        BaseInfoCard: () => import('@/components/base/InfoCard'),
        BaseImg: () => import('@/components/base/Img'),
    },
}
</script>
