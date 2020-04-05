<template>
  <div class="WhatsNew">
    <v-card outlined>
      <v-card-title>
        <h3>
          <v-icon size="30">
            mdi-information
          </v-icon>
          最新のお知らせ
        </h3>
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
  padding: 15px 6px 6px 6px;
}
.WhatsNewsText {
  margin: 0 10pt 0 10pt;
}
</style>
