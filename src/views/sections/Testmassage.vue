<template>
  <div id="testservice" class="py-10 my-10">
    <v-container>
      <div id="vue">
        <div>
          <div class="c-modal" v-show="modal_1">
            <base-info-card class="mb-6" title="Anúncios de voluntariado" />
            <v-row>
              <v-col sm="12" md="4" v-for="advert in adverts" :key="advert.id">
                <v-card class="mx-auto">
                  <v-img
                    v-if="advert.upload"
                    class="white--text align-end"
                    height="250px"
                    :src="advert.upload"
                  />
                  <v-card-title>{{ advert.title }}</v-card-title>
                  <v-card-subtitle class="pb-0">
                    {{ advert.companyName }}</v-card-subtitle
                  >
                  <v-card-text class="text--primary">
                    <v-icon small> mdi-map-marker </v-icon> {{ advert.location }}
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="goTodetail(advert.id)">
                      Detalhes
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import { db, storage } from "@/firebase.js";
//import BusinessInfo from '@/components/base/BusinessInfo.vue'
export default {
  name: "BaseHeading",

  // massId:this.$route.params.Pid,

  components: {
    //  BaseInfoCard: () => import('@/components/base/InfoCard'),
    //'base-business-info': BusinessInfo,
  },
  data() {
    return {
      massages: [],
      rehabilitations: [],
      showmassage: false,
      showrehabilitation: false,
      showsupport: false,
      modal_1: true,
      modal_2: false,
      modal_3: false,
      adverts: [],
      cname: [],
    };
  },
  created() {
    try {
      db.collection("internacional_volunteer")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.data().upload) {
              storage
                .ref()
                .child(doc.data().upload)
                .getDownloadURL()
                .then((url) => {
                  db.collection("users")
                    .where("uid", "==", doc.data().companyID)
                    .get()
                    .then((querySnapshot) => {
                      querySnapshot.forEach((finallydoc) => {
                        this.adverts.push({
                          id: doc.id,
                          title: doc.data().title,
                          companyName: finallydoc.data().username,
                          location: doc.data().location,
                          upload: url,
                        });
                      });
                    });
                });
            } else {
              this.adverts.push({
                id: doc.id,

                title: doc.data().title,
                location: doc.data().location,
              });
            }

            // end pertinent change
          });
        });
    } catch (e) {
      console.log(e);
    }

    // end pertinent change
  },

  props: {
    tag: {
      type: String,
      default: "h1",
    },
  },
  methods: {
    goTodetail(massId) {
      this.$router.push({ name: "details", params: { Pid: massId } });
    },
  },
};
</script>

<style>
#Services {
  background-color: WhiteSmoke;
}
</style>
