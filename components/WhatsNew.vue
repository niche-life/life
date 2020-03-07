<template>
  <div class="WhatsNew">
    <v-card>
      <v-card-title>
        <h2>
          <v-icon size="30">
            mdi-information
          </v-icon>
          最新のお知らせ
        </h2>
      </v-card-title>
      <v-card-text>
        <div v-for="(item, i) in items" :key="i">
          <a
            class="WhatsNew-item"
            :href="item.url"
            target="_blank"
            rel="noopener"
          >
            <time>{{ item.date }}</time>
            <span>{{ item.text }}</span>
          </a>
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
      required: true
    }
  }
};
</script>

<style lang="scss">
.WhatsNew {
  padding: 10px;
}
</style>
