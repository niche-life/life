<template>
  <div class="Jumbotron">
    <v-img
      v-if="this.namespace === 'index'"
      :src="require('@/assets/index/top.jpg')"
      :height="$vuetify.breakpoint.xsOnly ? '80vh' : '60vh'"
    >
      <v-container fill-height fluid :px-12="$vuetify.breakpoint.mdAndUp">
        <v-row class="teal--text pa-4 fill-height outline">
          <v-col>
            <div
              class="mb-4"
              :class="[
                $vuetify.breakpoint.xsOnly
                  ? 'headline font-weight-bold'
                  : 'display-2 font-weight-bold',
              ]"
            >
              すべての生き物好きのための生物雑誌
            </div>
            <h1
              class="font-weight-black mb-4"
              :class="[$vuetify.breakpoint.xsOnly ? 'display-1' : 'display-3']"
            >
              ニッチェ・ライフ
            </h1>
            <div class="mb-4 subtitle-1 font-weight-bold">
              ISSN (Online) 2188-0972
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
    <v-sheet
      v-else
      :min-height="$vuetify.breakpoint.smAndDown ? '20vh' : '100px'"
      color="teal lighten-2"
      height="20vh"
    >
      <v-container fill-height>
        <v-row align-content="center" justify="center" class="fill-height">
          <v-col cols="12">
            <h1
              class="display-1 text-center white--text font-weight-black"
              v-text="contents.title"
            />
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
            desc: "",
          };
        case "series-id":
          return {
            title: "巻号詳細",
            desc: "",
          };
        case "rules":
          return {
            title: "投稿規定",
            desc: "",
          };
        case "faq":
          return {
            title: "よくある質問",
            desc: "",
          };
        case "members":
          return {
            title: "編集委員一覧",
            desc: "",
          };
        case "about":
          return {
            title: "当サイトについて",
            desc: "",
          };
        case "contact":
          return {
            title: "お問い合わせ",
            desc: "",
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

<style lang="scss">
.outline {
  color: #000;
  text-shadow: 1px 1px 0 #fff, -1px -1px 0 #fff, -1px 1px 0 #fff,
    1px -1px 0 #fff, 0px 1px 0 #fff, 0-1px 0 #fff, -1px 0 0 #fff, 1px 0 0 #fff;
}
</style>
