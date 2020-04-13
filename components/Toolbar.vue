<template>
  <v-app-bar
    dark
    v-scroll="onScroll"
    app
    elevate-on-scroll
    :color="!isScrolling ? 'teal' : 'teal'"
  >
    <v-img max-width="3%" src="/twitter_img.png" class="shrink" />
    <v-spacer />
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-toolbar-items>
        <template v-for="(item, i) in items">
          <v-btn :key="i" :to="item.path" text>
            <span v-text="item.text" />
          </v-btn>
          <v-divider vertical />
        </template>
      </v-toolbar-items>
    </template>
    <v-menu v-else>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-card color="primary" dark>
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
        path: "/member",
        text: "編集委員",
      },
      {
        path: "/about",
        text: "当サイトについて",
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
