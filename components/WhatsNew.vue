<template>
  <div class="WhatsNew">
    <v-card outlined color="#fff2f7">
      <div class="WhatsNewsText">
        <v-card-text>
          <div v-for="(item, i) in items" :key="i">
            <v-icon size="20">
              mdi-information
            </v-icon>
            <nuxt-link class="WhatsNew-item" :to="getNewsUrl(item)">
              <time>{{ item.date }}</time>
              <span>{{ item.text }}</span>
            </nuxt-link>
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
  padding: 12px 6px 6px 6px;
}
.WhatsNewsText {
  margin: 0 0 0 0;
}
.WhatsNew-item {
  margin: 0 0 0 0;
  font-size: 18px;
}
</style>
