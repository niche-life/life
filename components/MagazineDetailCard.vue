<template>
  <div class="MagazineCard">
    <v-card>
      <v-card-title>
        {{ items.series }}
      </v-card-title>
      <v-divider></v-divider>
      <v-card-subtitle>
        <v-btn
          outlined
          :href="getPdfUrl(items.url)"
          target="_blank"
          rel="noopener"
        >
          <v-icon small>fas fa-file-pdf</v-icon>&nbsp;PDF</v-btn
        >
      </v-card-subtitle>
      <v-card-text>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img v-bind:src="getThunmbnailUrl(items.image)" max-width="250" />
          </v-col>
          <v-col class="magazine-text">
            <time>{{ items.publishedDate }}</time
            >刊行 <br /><br />
            <div v-for="(article, i) in items.article" :key="i">
              <p>
                <a
                  :href="getPdfUrl(article.url)"
                  target="_blank"
                  rel="noopener"
                  >{{ getPaperText(article) }}</a
                >
              </p>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <br />
    <v-btn outlined to="/series">
      <v-icon small>fas fa-arrow-circle-left</v-icon>
      &nbsp;一覧に戻る</v-btn
    >
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      s3baseUrl: this.$conf.s3_bucket_url + "/series/",
    };
  },
  methods: {
    getPdfUrl(path) {
      var url = this.s3baseUrl + path;
      return url;
    },
    getThunmbnailUrl(path) {
      var url = this.$conf.s3_bucket_url + "/thumbnail/" + path;
      return url;
    },
    getPaperText(article) {
      var author = article.author ? " (" + article.author + ")" : "";
      return article.page + ": " + article.title + author;
    },
  },
};
</script>

<style lang="scss">
.MagazineCard {
  padding: 10px;
}

.magazine-text {
  padding: 20px;
}
</style>
