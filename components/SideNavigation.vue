<template>
  <v-navigation-drawer 
      app
      absolute
      permanent
      floating
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          ニッチェ・ライフ<br /> 
          Niche Life
        </v-list-item-title>
        <v-list-item-subtitle>
          the open access journal about biodiversity for all bio-lovers
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        link
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list-item>
    ISSN (Online) 2188-0972
    </v-list-item>

  </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'トップ', to: '/' },
          { title: '巻・号一覧', to: '/series'},
          { title: '投稿規定', to: '/rules', icon: '' },
          { title: 'FAQ', to: '/faq', icon: '' },
          { title: '当サイトについて', to: '/about', icon: '' },
        ],
      }
    },
  }
</script>
