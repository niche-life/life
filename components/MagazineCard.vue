<template>
  <div class="MagazineCard">
    <v-card>
      <v-card-title>
        {{ items.series }}
        <a :href="items.url">[PDF]</a>
      </v-card-title>
      <v-card-text>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img :src="items.image" max-width="300" />
          </v-col>
          <v-col class="magazine-text">
            <time>{{ items.publishedDate }}</time>刊行
            <span>{{ items.description }}</span>
            <div v-for="(article, i) in items.article" :key="i">
              <a :href="article.url">{{ article.title }}</a>
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
