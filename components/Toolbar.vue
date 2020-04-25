<template>
  <v-app-bar
    dark
    v-scroll="onScroll"
    app
    elevate-on-scroll
    :color="!isScrolling ? 'teal' : 'teal'"
  >
    <v-spacer />
    <v-divider vertical />
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-toolbar-items>
        <template v-for="(item, i) in items">
          <v-btn :key="i" :to="item.path" text>
            <span class="body-1 font-weight-bold" v-text="item.text" />
          </v-btn>
          <v-divider vertical />
        </template>
        <v-btn v-for="icon in icons" :key="icon" class="mx-2 white--text" icon>
          <v-icon size="30px" v-text="icon" />
        </v-btn>
      </v-toolbar-items>
    </template>
    <v-menu v-else>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon size="35px">mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-card color="teal" dark>
        <v-list color="transparent">
          <template v-for="(item, i) in items">
            <v-list-item :key="i" :to="item.path">
              <v-list-item-title v-text="item.text" />
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
// Utilities
export default {
  data: () => ({
    isScrolling: false,
    icons: ["fab fa-twitter", "fab fa-github"],
    items: [
      {
        path: "/",
        text: "トップへ",
      },
      {
        path: "/series",
        text: "巻号一覧",
      },
      {
        path: "/rules",
        text: "投稿規定",
      },
      {
        path: "/members",
        text: "編集委員",
      },
      {
        path: "/about",
        text: "当サイトについて",
      },
      {
        path: "/contact",
        text: "お問い合わせ",
      },
    ],
  }),

  methods: {
    onScroll() {
      this.isScrolling =
        (window.pageYOffset || document.documentElement.scrollTop || 0) > 20;
    },
  },
};
</script>
