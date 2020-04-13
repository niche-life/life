<template>
  <div class="Jumbotron">
    <v-img v-if="this.namespace === 'index'" src="/nichetit.jpg"> </v-img>
    <v-sheet
      v-else
      :min-height="$vuetify.breakpoint.smAndDown ? '45vh' : '300px'"
      color="grey lighten-3"
      height="20vh"
    >
      <v-container fill-height>
        <v-row align-content="center" justify="center" class="fill-height">
          <v-col cols="12">
            <h1 class="display-2 text-center" v-text="contents.title" />
            <br />
            <p class="text-center" v-text="contents.desc"></p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  computed: {
    namespace() {
      return this.$route.name;
    },
    contents() {
      switch (this.namespace) {
        case "series":
          return {
            title: "巻号一覧",
            desc:
              "ここに説明や導線用のボタン等がが入ります。ここに説明や導線用のボタン等がが入ります。",
          };
        case "series-id":
          return {
            title: "巻号詳細",
            desc:
              "ここに説明や導線用のボタン等がが入ります。ここに説明や導線用のボタン等がが入ります。",
          };
        case "rules":
          return {
            title: "投稿規定",
            desc:
              "ここに説明や導線用のボタン等がが入ります。ここに説明や導線用のボタン等がが入ります。",
          };
        case "faq":
          return {
            title: "よくある質問",
            desc:
              "ここに説明や導線用のボタン等がが入ります。ここに説明や導線用のボタン等がが入ります。",
          };
        case "member":
          return {
            title: "私達について",
            desc:
              "ここに説明や導線用のボタン等がが入ります。ここに説明や導線用のボタン等がが入ります。",
          };
        case "about":
          return {
            title: "当サイトについて",
            desc:
              "ここに説明や導線用のボタン等がが入ります。ここに説明や導線用のボタン等がが入ります。",
          };
        default:
          return "";
      }
    },
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss"></style>
