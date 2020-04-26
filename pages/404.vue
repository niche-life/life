<template>
  <v-app dark>
    <v-sheet
      :min-height="$vuetify.breakpoint.smAndDown ? '45vh' : '300px'"
      color="grey lighten-3"
      height="20vh"
    >
      <v-container fill-height>
        <v-row align-content="center" justify="center" class="fill-height">
          <v-col cols="12">
            <h1
              v-if="error.statusCode === 404"
              class="display-1 text-center"
              v-text="pageNotFound"
            />
            <h1 v-else class="display-1 text-center" v-text="otherError"></h1>
            <br />
            <p class="text-center" v-html="desc"></p>
            <p class="text-center">
              <NuxtLink to="/">
                トップページに戻る
              </NuxtLink>
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
      pageNotFoundDesc: "お探しのページは見つかりませんでした。",
      otherErrorDesc: "何かしらのエラーが発生しました。",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
