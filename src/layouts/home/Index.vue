<template>
  <v-app>
    <home-nav-bar v-if="showMenu" />
    <div class="mx-4">
      <home-view />
    </div>

    <home-footer />
  </v-app>
</template>

<script>
export default {
  name: "HomeLayout",

  components: {
    HomeNavBar: () => import("@/layouts/home/Navbar"),
    HomeFooter: () => import("@/layouts/home/Footer"),
    HomeView: () => import("@/layouts/home/View"),
  },
  computed: {
    showMenu() {
      return this.$route.name !== "register";
    },
  },
};
</script>
