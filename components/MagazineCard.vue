<template>
  <div class="MagazineCard">
    <v-card>
      <v-card-title>
        {{ items.series }}
        <a :href="getPdfUrl(items.url)">[PDF]</a>
      </v-card-title>
      <v-card-text>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img v-bind:src="getThunmbnailUrl(items.image)" max-width="250" />
          </v-col>
          <v-col class="magazine-text">
            <time>{{ items.publishedDate }}</time
            >刊行
            <span>{{ items.description }}</span>
            <div v-for="(article, i) in items.article" :key="i">
              <a :href="getPdfUrl(article.url)">{{ article.title }}</a>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      s3baseUrl:
        "https://nichelife-media.s3-ap-northeast-1.amazonaws.com/paper/"
    };
  },
  methods: {
    getPdfUrl(path) {
      var url = this.s3baseUrl + path;
      return url;
    },
    getThunmbnailUrl(path) {
      var url = require("@/assets/" + path);
      return url;
    }
  }
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
