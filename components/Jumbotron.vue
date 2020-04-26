<template>
  <div class="Jumbotron">
    <v-img
      v-if="this.namespace === 'index'"
      src="/top.jpg"
      :height="[$vuetify.breakpoint.xsOnly ? '80vh' : '60vh']"
      gradient="to top, rgba(0,0,0,0), rgba(25,32,72,0.4)"
    >
      <v-container fill-height fluid :px-12="$vuetify.breakpoint.mdAndUp">
        <v-row align="top" class="teal--text text--accent-1 pa-4 fill-height">
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
            <div class="mb-4 subtitle-1">
              ISSN (Online) 2188-0972
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
    <v-sheet
      v-else
      :min-height="$vuetify.breakpoint.smAndDown ? '45vh' : '300px'"
      color="grey lighten-3"
      height="20vh"
    >
      <v-container fill-height>
        <v-row align-content="center" justify="center" class="fill-height">
          <v-col cols="12">
            <h1 class="display-1 text-center" v-text="contents.title" />
            <br />
            <p class="text-center" v-html="contents.desc"></p>
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
        case "contact":
          return {
            title: "お問い合わせ",
            desc: "",
          };
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
