<template>
  <v-container fluid style="padding: 0px;">
    <v-img
      :src="src"
      gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      :max-height="$vuetify.breakpoint.xsOnly ? '360vh' : '60vh'"
    >
      <v-row
        class="white--text text--accent-1 fill-height"
        :class="[$vuetify.breakpoint.xsOnly ? 'ma-4' : 'ma-8']"
      >
        <v-col>
          <div
            class="my-4"
            :class="[
              $vuetify.breakpoint.xsOnly
                ? 'headline font-weight-bold'
                : 'display-2 font-weight-bold',
            ]"
            v-text="title"
          ></div>
          <div class="mx-1 body-1 text-justify font-weight-medium">
            <slot />
          </div>
        </v-col>
      </v-row> </v-img
  ></v-container>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
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
