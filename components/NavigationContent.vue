<template>
  <div class="NavigationComponent">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="navTitle">
          ニッチェ・ライフ<br />
          Niche Life
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list nav>
      <v-list-item v-for="item in links" :key="item.title" :to="item.to" link>
        <v-list-item-avatar>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list-item>
      <div v-for="icon in icons" :key="icon">
        <v-btn icon :href="icon.url">
          <v-icon size="24px" :color="icon.color">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </div>
    </v-list-item>

    <v-divider></v-divider>

    <v-list-item>
      ISSN (Online) 2188-0972
    </v-list-item>

    <v-divider></v-divider>

    <v-list-item>
      <p class="caption">
        <br />
        Copyright © 2013-{{ new Date().getFullYear() }} Niche Life Editorial
        Comittee. All Rights Reserved, if not otherwise specified.
      </p>
    </v-list-item>
  </div>
</template>

<script>
export default {
  props: ["links"],
  data() {
    return {
      icons: [
        {
          icon: "fab fa-twitter",
          url: "https://twitter.com/nichelife_tw",
          color: "blue",
        },
        {
          icon: "fab fa-github",
          url: "https://github.com/niche-life/life",
          color: "black",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.navTitle {
  font-size: 25px;
  font-weight: 900;
  padding: 5px;
}
</style>
