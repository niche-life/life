<template>
  <v-app>
    <div v-if="loading" class="loader">
      <semipolar-spinner :animation-duration="2000" :size="65" color="green" />
    </div>
    <div v-else class="appContainer">
      <Toolbar />
      <v-content>
        <Jumbotron />
        <nuxt />
        <Footer />
      </v-content>
    </div>
  </v-app>
</template>

<script>
import Jumbotron from "@/components/Jumbotron.vue";
import Toolbar from "@/components/Toolbar.vue";
import Footer from "@/components/Footer.vue";
import SemipolarSpinner from "@/node_modules/epic-spinners/src/components/lib/SemipolarSpinner.vue";

export default {
  components: {
    Toolbar,
    Footer,
    Jumbotron,
    SemipolarSpinner,
  },
  data() {
    return {
      loading: true,
      title: "ニッチェライフ - Niche Life",
    };
  },
  mounted() {
    this.loading = false;
  },
};
</script>

<style lang="scss">
.loader {
  height: 200px;
  width: 150px;
  position: fixed;
  top: 50%;
  left: 50%;
}
</style>
