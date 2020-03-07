<template>
  <v-app class="app">
    <div v-if="loading" class="loader">
      now loading...
    </div>
    <div v-else class="appContainer">

      <side-navigation />

      <v-content>
        <v-container>
          <nuxt />
        </v-container>
      </v-content>

    </div>
  </v-app>
</template>

<script>
import SideNavigation from '@/components/SideNavigation.vue'

export default {
  components: {
    SideNavigation,
  },
  data() {
    return {
      loading: true,
      title: 'ニッチェライフ - Niche Life'
    }
  },
  mounted() {
    this.loading = false
  }
}
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
