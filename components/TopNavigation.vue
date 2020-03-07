<template>
  <div class="TopNavigation">
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>ニッチェ・ライフ - Niche Life</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute>
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
  </div>
</template>

<script>
export default {
  props: ["links"],
  data() {
    return {
      drawer: false
    };
  }
};
</script>
