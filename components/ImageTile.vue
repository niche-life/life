<template>
  <v-img
    :src="src"
    :height="[$vuetify.breakpoint.xsOnly ? '100vh' : '60vh']"
    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
  >
    <v-container fill-height fluid :px-12="$vuetify.breakpoint.mdAndUp">
      <v-row align="top" class="white--text text--accent-1 ma-4 fill-height">
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
      </v-row> </v-container
  ></v-img>
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
