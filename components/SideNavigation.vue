<template>
  <v-navigation-drawer app absolute permanent floating>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          ニッチェ・ライフ<br />
          Niche Life
        </v-list-item-title>
        <v-list-item-subtitle>
          the open access journal about biodiversity for all bio-lovers
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list nav>
      <v-list-item v-for="item in links" :key="item.title" :to="item.to" link>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list-item>
      ISSN (Online) 2188-0972
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["links"],
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.SideNavigation {
  position: -webkit-sticky;
  position: sticky;
}
</style>
