<template>
  <div class="Index">
    <SeriesShowCase />
    <ImageTile
      :src="require('@/assets/index/top3.jpg')"
      title="オープンアクセス・投稿無料"
    >
      <p>
        『ニッチェ・ライフ』誌は、誰でも無料で読めるウェブ生物雑誌です。あなたの調査研究活動の成果や、生き物の魅力を広く伝えるための記事を集めて発行しています。
      </p>
      <p>
        あらゆる生物について、分布記録、観察結果、生態調査、研究手法の開発、特定の分類群に関する総説、活動の報告など幅広い記事を取り扱います。
      </p>
      <p>
        投稿・掲載料は無料です。投稿規定をご確認の上、生物に関する記事をご投稿下さい。生き物好きの皆様、研究者の皆様からの投稿をお待ちしております。
      </p>
      <v-btn class="ma-4 font-weight-bold" dark outlined x-large to="/rules">
        投稿について
      </v-btn>
    </ImageTile>
    <ImageTile
      :src="require('@/assets/index/top4.jpg')"
      title="ニッチェ・ライフの目的"
    >
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
    </ImageTile>
    <div class="Index">
      <div class="twitter-timeline-container">
        <a
          id="twitterTimeline"
          class="twitter-timeline"
          href="https://twitter.com/NicheLife_Tw?ref_src=twsrc%5Etfw"
          >Tweets by NicheLife_Tw</a
        >
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </div>
    </div>
  </div>
</template>

<script>
import News from "@/data/news.json";
import WhatsNew from "@/components/WhatsNew.vue";
import ImageTile from "@/components/ImageTile.vue";
import SeriesShowCase from "@/components/SeriesShowCase.vue";

export default {
  components: {
    WhatsNew,
    ImageTile,
    SeriesShowCase,
  },
  data() {
    return {
      newsItems: News.newsItems.slice(0, 1),
    };
  },
  mounted() {
    this.adjustTwitterTimelineHeight();
  },
  methods: {
    adjustTwitterTimelineHeight() {
      var twitterTimeline = document.getElementById("twitterTimeline");
      if (window.innerWidth <= 600) {
        twitterTimeline.setAttribute("data-height", "300");
      } else {
        twitterTimeline.setAttribute("data-height", "800");
      }
    },
  },
  head() {
    return {
      title: "トップ",
    };
  },
};
</script>

<style lang="scss">
.twitter-timeline-container {
  max-width: 1000px;
  margin: 20px auto;
}
@media (max-width: 600px) {
  .twitter-timeline-container {
    padding: 10px; /* スマホ表示ではパディングを10pxに変更 */
  }
}
</style>
