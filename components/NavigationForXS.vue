<template>
  <div class="TopNavigation">
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>ニッチェ・ライフ - Niche Life</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute>
      <NavigationContent :links="links" />
    </v-navigation-drawer>
  </div>
</template>

<script>
import NavigationContent from "@/components/NavigationContent.vue";

export default {
  components: {
    NavigationContent,
  },
  props: ["links"],
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
