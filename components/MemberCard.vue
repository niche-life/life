<template>
  <div class="MemberCard">
    <v-card>
      <v-img :src="items.src" height="300px"></v-img>
    </v-card>
    <v-card-title v-text="items.name"></v-card-title>
    <v-card-subtitle v-text="items.role"></v-card-subtitle>
    <v-card-text v-text="items.specialist"></v-card-text>
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
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss"></style>
