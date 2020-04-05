<template>
  <div class="TextCard">
    <v-card outlined>
      <v-card-title v-if="title">
        {{ title }}
      </v-card-title>
      <v-divider></v-divider>
      <div class="TextCardText">
        <v-card-text>
          <slot />
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="scss">
.TextCard {
  padding: 7px;
}
.TextCardText {
  padding: 0 10px;
}
</style>
