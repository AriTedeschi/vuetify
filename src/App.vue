<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <Appbar />
      </v-row>
      <v-row>
        <v-col md="2" sm="4">
          <Drawer />
        </v-col>
        <v-col md="10" sm="8" class="overflow-y-auto">
          <router-view />
        </v-col>
      </v-row>
      <v-row>
        <Footer />
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Appbar from "./components/Appbar.vue";
import Footer from "./components/Footer.vue";
import Drawer from "./components/Drawer";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Appbar,
    Footer,
    Drawer
  },
};
</script>
