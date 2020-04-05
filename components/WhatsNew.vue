<template>
  <div class="WhatsNew">
    <v-card>
      <v-card-title>
        <h4>
          <v-icon size="20">
            mdi-information
          </v-icon>
          最新のお知らせ
        </h4>
      </v-card-title>
      <v-card-text>
        <div v-for="(item, i) in items" :key="i">
          <nuxt-link class="WhatsNew-item" :to="getNewsUrl(item)">
            <time>{{ item.date }}</time>
            <span>{{ item.text }}</span>
          </nuxt-link>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getNewsUrl: function (item) {
      if (item.url) {
        return "/" + item.url;
      }
      return "news/" + item.date;
    },
  },
};
</script>

<style lang="scss">
.WhatsNew {
  padding: 10px;
}
</style>
