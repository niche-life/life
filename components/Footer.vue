<template>
  <v-footer dark padless>
    <v-card flat tile class="flex teal lighten-1 white--text text-center">
      <div v-if="!isContact()">
        <v-card-text class="white--text body-1 mt-3"
          >ニッチェ・ライフへの各種お問い合わせはこちらから</v-card-text
        >
        <v-card-text>
          <nuxt-link to="/contact">
            <v-btn rounded outlined large>お問い合わせ</v-btn>
          </nuxt-link>
        </v-card-text>
      </div>
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :href="icon.path"
          class="mx-2 white--text"
          icon
        >
          <v-icon size="30px" v-text="icon.icon" />
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
  methods: {
    isContact() {
      return this.$route.name == "contact";
    },
  },
  data() {
    return {
      icons: [
        { icon: "fab fa-twitter", path: "https://twitter.com/nichelife_tw" },
        { icon: "fab fa-github", path: "https://github.com/niche-life/life" },
      ],
    };
  },
};
</script>
