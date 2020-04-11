import colors from "vuetify/es5/util/colors";

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: "og: http://ogp.me/ns#",
    },
    titleTemplate: "%s - " + "ニッチェ・ライフ",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "本誌『ニッチェ・ライフ』では、ありとあらゆる生物の謎を解明するための調査研究活動や、生き物の魅力を広く伝えるための活動を推進することを目的に、生き物についての研究成果や新たな発見の報告、生き物に関するコラムなどを掲載していきます。",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "ニッチェ・ライフ",
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "", // TODO
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "ニッチェ・ライフ",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "本誌『ニッチェ・ライフ』では、ありとあらゆる生物の謎を解明するための調査研究活動や、生き物の魅力を広く伝えるための活動を推進することを目的に、生き物についての研究成果や新たな発見の報告、生き物に関するコラムなどを掲載していきます。",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "", // TODO
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "@NicheLife_Tw",
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: "@NicheLife_Tw",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "", // TODO
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/global.scss", "@fortawesome/fontawesome-free/css/all.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxtjs/vuetify",
    ["@nuxtjs/google-analytics", { id: "UA-44444955-1" }],
    "@nuxtjs/sitemap",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Sitemap module
   */
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://niche-life.com",
    exclude: ["/admin"],
    routes: [],
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,

      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          primary: "#1976D2",
          secondary: "#424242",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
        },
      },
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
