<template>
  <v-card width="300" class="mx-auto" tile flat>
    <v-container>
      <v-img v-bind:src="getThunmbnailUrl(items.src)" height="300"></v-img>
      <v-card-title v-text="items.name" class="text-left"></v-card-title>
      <v-card-subtitle v-text="items.role" class="text-left"></v-card-subtitle>
      <v-card-text v-text="items.specialist" class="text-left"></v-card-text>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    getThunmbnailUrl(path) {
      var url = require("@/assets/members/" + path);
      return url;
    },
  },
};
</script>

<style lang="scss"></style>
