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
      <div class="WhatsNewsText">
        <v-card-text>
          <div v-for="(item, i) in items" :key="i">
            <p>
              <nuxt-link class="WhatsNew-item" :to="getNewsUrl(item)">
                <time>{{ item.date }}</time>
                <span>{{ item.text }}</span>
              </nuxt-link>
            </p>
          </div>
        </v-card-text>
      </div>
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
  padding: 6px;
}
.WhatsNewsText {
  margin: 0 10pt 0 10pt;
}
</style>
