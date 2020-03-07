<template>
  <div class="TextCard">

    <v-card>
      <v-card-title v-if="title">
         {{ title }}
      </v-card-title>
      <v-card-text>
        <slot />
      </v-card-text>
    </v-card>

  </div>
</template>

<script>
export default {
  props: ['title'],
}
</script>

<style lang="scss">
.TextCard {
  padding: 10px;
}
</style>