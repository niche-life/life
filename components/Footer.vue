<template>
  <v-footer dark padless>
    <v-card flat tile class="flex teal lighten-1 white--text text-center">
      <v-card-text class="white--text body-1"
        >ニッチェ・ライフへの各種お問い合わせはこちらから</v-card-text
      >
      <v-card-text>
        <v-btn rounded>お問い合わせ</v-btn>
      </v-card-text>
      <br />
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="40px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text body-1">
        Copyright © 2013-{{ new Date().getFullYear() }}
        <strong>Niche Life Editorial Comittee.</strong> All Rights Reserved, if
        not otherwise specified.
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["fab fa-twitter", "fab fa-github"],
  }),
};
</script>
