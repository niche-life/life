<template>
  <div class="Index">
    <v-img
      src="/top3.jpg"
      :height="[$vuetify.breakpoint.xsOnly ? '60vh' : '60vh']"
      gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    >
      <v-container fill-height fluid :px-12="$vuetify.breakpoint.mdAndUp">
        <v-row align="top" class="white--text text--accent-1 pa-4 fill-height">
          <v-col>
            <div
              class="mb-4"
              :class="[
                $vuetify.breakpoint.xsOnly
                  ? 'headline'
                  : 'display-2 font-weight-light',
              ]"
            >
              オープンアクセス・投稿無料
            </div>
            <div class="mb-4">
              <p>
                『ニッチェ・ライフ』誌は、誰でも無料で読めるウェブ生物雑誌です。あなたの調査研究活動の成果や、生き物の魅力を広く伝えるための記事を集めて発行しています。
              </p>
              <p>
                あらゆる生物について、分布記録、観察結果、生態調査、研究手法の開発、特定の分類群に関する総説、活動の報告など幅広い記事を取り扱います。
              </p>
              <p>
                投稿・掲載料は無料です。投稿規定をご確認の上、生物に関する記事をご投稿下さい。生き物好きの皆様、研究者の皆様からの投稿をお待ちしております。
              </p>
              <v-btn class="ma-4" dark outlined x-large>
                投稿について
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container></v-img
    >
    <v-img
      src="/top4.jpg"
      :height="[$vuetify.breakpoint.xsOnly ? '60vh' : '60vh']"
      gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    >
      <v-container fill-height fluid :px-12="$vuetify.breakpoint.mdAndUp">
        <v-row align="top" class="white--text text--accent-1 pa-4 fill-height">
          <v-col>
            <div
              class="mb-4"
              :class="[
                $vuetify.breakpoint.xsOnly
                  ? 'headline'
                  : 'display-2 font-weight-light',
              ]"
            >
              ニッチェ・ライフの目的
            </div>
            <div class="mb-4">
              <p>
                「ニッチェ」とは、生態学用語で、ある生物が生活する環境や、そこでその生物が利用する資源のことを意味します。
              </p>
              <p>
                開けた土地に群落をつくるというニッチェを持つ植物、その植物を利用するというニッチェをもつ草食動物、草原で草食動物を捕食するというニッチェをもつ肉食動物......すべての生物は、地球のどこかのニッチェを占めて暮らしています。1mm四方の小さな隙間をニッチェとして利用するものから、広大な土地をニッチェとして利用するものまで、あらゆる生き物がこの地球に存在しています。もちろん、ヒトも地球上の様々な環境をニッチェとして生きています。
              </p>
              <p>
                しかしそんな多くの生き物について、地球上に何種類いるか（分類）、どこにいるか（分布）、どのように生きているか（生態）などについて、まだまだ知られていない謎がたくさん残されています。
              </p>
              <p>
                本誌は、そうした生き物の姿を、誰でも気軽に学術的な形で記録できる媒体となることを目指し、発行を行っています。本誌を読んだ皆さんが、その多様な生き様をもっと知りたい、その多様性の一端を明らかにしたい、多様性を次世代に残していきたいと感じていただければ幸いです。
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container></v-img
    >
  </div>
</template>

<script>
import TextCard from "@/components/TextCard.vue";
import News from "@/data/news.json";
import WhatsNew from "@/components/WhatsNew.vue";

export default {
  components: {
    TextCard,
    WhatsNew,
  },
  data() {
    return {
      newsItems: News.newsItems.slice(0, 1),
    };
  },
  head() {
    return {
      title: "トップ",
    };
  },
};
</script>

<style lang="scss">
.Index {
  h1 {
    line-height: 30pt;
  }
  h2 {
    margin-top: 20pt;
    margin-bottom: 10pt;
  }
  p {
    margin: 0 10pt 7pt 10pt;
  }
}
</style>
