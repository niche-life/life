<template>
  <div class="SideNavigation">
    <v-navigation-drawer app absolute permanent floating>
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
