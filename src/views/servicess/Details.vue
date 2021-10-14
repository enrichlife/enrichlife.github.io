<template>
  <v-container class="fill-height" fluid>
    <v-spacer></v-spacer>
    <div>
      <v-alert
        v-model="done"
        color="green"
        dismissible
        text
        elevation="14"
        type="success"
      >
        Inscrição realizada com sucesso!
      </v-alert>

      <div class="details"></div>
      <div v-for="(advert, index) in adverts" :key="index">
        <div class="col-md-12" v-if="massId == advert.id">
          <div class="">
            <v-row no-gutters>
              <v-col cols="12" md="7" sm="12" class="pa-2">
                <img v-if="advert.upload" :src="advert.upload" class="img-fluid" />
              </v-col>

              <v-col cols="12" md="5" class="pa-2" height="35px">
                <div id="info" class="pa-4">
                  <h1 class="mb-5">{{ advert.title }}</h1>

                  <base-info-card title="Detalhes principais:" />
                  <ul class="mb-16">
                    <li class="mb-3">
                      <v-icon> mdi-clock-start </v-icon>
                      Data de Início: {{ advert.start_date }}
                    </li>
                    <li class="mb-3">
                      <v-icon> access_time </v-icon>
                      Duração: {{ advert.time_project }}
                    </li>
                    <li class="mb-3">
                      <v-icon> mdi-map-marker-radius </v-icon>
                      Localização:{{ advert.location }}
                    </li>
                    <li class="mb-3">
                      <v-icon> mdi-cake-variant-outline </v-icon>
                      Idade:{{ advert.age }}
                    </li>
                    <li class="mb-3">
                      <v-icon> translate </v-icon>
                      Idiomas disponibilizados: Português, Inglês, Espanhol
                    </li>
                  </ul>
                  <v-row justify="center">
                    <v-dialog v-model="dialog" persistent max-width="600px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark v-bind="attrs" v-on="on" class="mb-4">
                          Inscreva-se
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          <span class="text-h5">Formulário de Inscrição</span>
                        </v-card-title>
                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  v-model="name"
                                  label="Nome"
                                  outlined
                                  required
                                  dense
                                ></v-text-field>
                              </v-col>

                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  v-model="contact"
                                  label="Contacto"
                                  outlined
                                  required
                                  dense
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field
                                  v-model="email"
                                  label="Email"
                                  outlined
                                  required
                                  dense
                                ></v-text-field>
                              </v-col>

                              <v-col cols="12" sm="6">
                                <v-select
                                  :items="['0-17', '18-29', '30-54', '54+']"
                                  label="Idade"
                                  outlined
                                  required
                                  dense
                                  v-model="age"
                                ></v-select>
                              </v-col>

                              <v-col cols="12">
                                <v-textarea
                                  v-model="desc"
                                  outlined
                                  required
                                  dense
                                  name="input-7-4"
                                  placeholder="Demonstre o seu interesse em concorrer para este voluntariado"
                                  label="Descrição"
                                ></v-textarea>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="dialog = false">
                            Cancelar
                          </v-btn>
                          <v-btn
                            color="blue darken-1"
                            text
                            @click="(dialog = false), ins(), (done = true)"
                          >
                            Inscrever
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-row>
                </div>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12" md="8" class="pa-2">
                <div id="info" class="pa-6">
                  <base-info-card title="Descrição geral" />
                  <p>
                    {{ advert.description }}
                  </p>

                  <!-- <base-info-card class="pt-8" title="A quem se destina" />
                <p>
                  esta é uma massagem muito sensível e realizada em profundidade na qual
                  os movimentos efetuados são particularmente delicados. É caracterizada
                  pelos movimentos delicados, a suavidade e a importância da respiração.
                  Todavia, às vezes, pode ser mais vigorosa, a fim de relaxar os músculos.
                </p>
                <base-info-card class="pt-8" title="O que esperar" />
                <p>
                  Meio dia de acesso às modernas instalações de terapia Acqua e piscina
                  interior aquecida e possibilidade de relaxar no salão do solário no meio
                  de Lisboa.
                </p>
                <p>
                  Para quem gosta de spa e bem-estar, as instalações de terapia Acqua
                  compõem um santuário exclusivo dedicado ao bem-estar e rejuvenescimento,
                  com experiências sensoriais e de calor como chuveiros sensoriais,
                  piscina dinâmica, jacuzzi, sauna, banho de vapor, chuveiro de balde,
                  Mergulho a frio, fonte de gelo e caminhada de resfriamento.
                </p>-->
                </div>
              </v-col>
              <v-col cols="12" md="4" class="pa-2">
                <div id="infolat" class="pa-4">
                  <base-info-card class="pt-8" title="Informações Adicionais" />
                  <ul>
                    <li class="mb-3">
                      <v-icon> mdi-bed </v-icon>
                      Acomodação: {{ advert.accommodations }}
                    </li>
                    <li class="mb-3">
                      <v-icon> mdi-airplane-marker </v-icon>
                      Aeroporto: {{ advert.aeroport_location }}
                    </li>
                    <li class="mb-3">
                      <v-icon> mdi-taxi </v-icon>
                      Tranporte: {{ advert.transfers }}
                    </li>
                    <li class="mb-3">
                      <v-icon> mdi-food </v-icon>
                      Alimentação: {{ advert.food }}
                    </li>
                    <li class="mb-3">
                      <v-icon> mdi-account-multiple </v-icon>
                      Nº de Voluntários: {{ advert.number_of_volunteers }}
                    </li>
                  </ul>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script>
import { db, storage } from "@/firebase.js";

export default {
  name: "details",
  components: {
    BaseInfoCard: () => import("@/components/base/InfoCard"),
  },
  data() {
    return {
      title: "Details",
      massId: this.$route.params.Pid,
      snackbar: true,
      dialog: false,
      done: false,
      name: "",
      email: "",
      contact: "",
      desc: "",
      age: "",

      adverts: [],
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
                          description: doc.data().description,
                          time_project: doc.data().time_project,
                          accommodations: doc.data().accommodations,
                          aeroport_location: doc.data().aeroport_location,
                          age: doc.data().age,
                          food: doc.data().food,
                          number_of_volunteers: doc.data().number_of_volunteers,
                          start_date: doc.data().start_date,
                          transfers: doc.data().transfers,
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
  },
  methods: {
    async ins() {
      try {
        let data = {
          name: this.name,
          email: this.email,
          contact: this.contact,
          desc: this.desc,
          age: this.age,
        };

        db.collection("bookings")
          .add(data)
          .then((docRef) => {
            (this.name = ""),
              (this.email = ""),
              (this.contact = ""),
              (this.desc = ""),
              (this.age = ""

                .then(function () {
                  console.log("Document successfully updated, Document id :", docRef.id);
                })
                .catch(function (error) {
                  // The document probably doesn't exist.
                  console.error("Error updating document: ", error);
                }));
          })
          .catch(function (error) {
            console.error("Error writing document: ", error);
          });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#info {
  text-align: left;
  background-color: white;
  width: 100%;
  height: 100%;
}
#infolat {
  text-align: left;
  background-color: white;
  width: 100%;
  max-height: 500px;
}

li {
  list-style-type: none;
}

img {
  width: 100%;
  height: 100%;
}

.col-md-12 {
  background-color: whitesmoke;
}
</style>
