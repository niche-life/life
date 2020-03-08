<template>
  <v-app class="app">
    <div v-if="loading" class="loader">
      now loading...
    </div>
    <div v-else class="appContainer">
      <side-navigation :links="links" v-if="!$vuetify.breakpoint.smAndDown" />
      <top-navigation :links="links" v-else />
      <v-content>
        <v-container>
          <nuxt />
        </v-container>
      </v-content>
      <FooterComponent />
    </div>
  </v-app>
</template>

<script>
import SideNavigation from "@/components/SideNavigation.vue";
import TopNavigation from "@/components/TopNavigation.vue";

export default {
  components: {
    SideNavigation,
    TopNavigation
  },
  data() {
    return {
      loading: true,
      title: "ニッチェライフ - Niche Life",
      links: [
        { title: "トップ", to: "/", icon: "mdi-home" },
        { title: "巻・号一覧", to: "/series", icon: "mdi-bookshelf" },
        { title: "投稿規定", to: "/rules", icon: "mdi-pencil-ruler" },
        {
          title: "よくある質問",
          to: "/faq",
          icon: "mdi-frequently-asked-questions"
        },
        {
          title: "当サイトについて",
          to: "/about",
          icon: "mdi-information-outline"
        }
      ]
    };
  },
  mounted() {
    this.loading = false;
  }
};
</script>

<style lang="scss">
.app {
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
}

.loader {
  height: 200px;
  width: 150px;
  position: fixed;
  top: 50%;
  left: 50%;
}
</style>
