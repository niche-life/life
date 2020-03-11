<template>
  <div class="SideNavigation">
    <v-navigation-drawer app fixed permanent floating style="left: auto;">
      <NavigationContent :links="links" />
    </v-navigation-drawer>
  </div>
</template>

<script>
import NavigationContent from "@/components/NavigationContent.vue";

export default {
  components: {
    NavigationContent
  },
  props: ["links"],
  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style lang="scss"></style>
