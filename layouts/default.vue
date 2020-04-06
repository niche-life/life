<template>
  <v-app class="app">
    <div v-if="loading" class="loader">
      now loading...
    </div>
    <div v-else class="appContainer">
      <NavigationForMoreSM
        :links="links"
        v-if="!$vuetify.breakpoint.smAndDown"
      />
      <NavigationForXS :links="links" v-else />
      <v-content>
        <v-container>
          <nuxt />
        </v-container>
      </v-content>
    </div>
  </v-app>
</template>

<script>
import NavigationForMoreSM from "@/components/NavigationForMoreSM.vue";
import NavigationForXS from "@/components/NavigationForXS.vue";

export default {
  components: {
    NavigationForMoreSM,
    NavigationForXS,
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
          icon: "mdi-frequently-asked-questions",
        },
        {
          title: "当サイトについて",
          to: "/about",
          icon: "mdi-information-outline",
        },
      ],
    };
  },
  mounted() {
    this.loading = false;
  },
};
</script>

<style lang="scss">
.app {
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
}

.body {
  background-color: black;
}

.loader {
  height: 200px;
  width: 150px;
  position: fixed;
  top: 50%;
  left: 50%;
}
</style>
