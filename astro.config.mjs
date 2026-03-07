// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import cloudflare from "@astrojs/cloudflare";
import starlightScrollToTop from "starlight-scroll-to-top";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.niche-life.com",
  integrations: [
    sitemap(),
    starlight({
      title: "ニッチェ・ライフ",
      locales: {
        root: {
          label: '日本語',
          lang: 'ja',
        },
      },
      description:
        "『ニッチェ・ライフ』誌は、誰でも無料で読めるウェブ生物雑誌です。あなたの調査研究活動の成果や、生き物の魅力を広く伝えるための記事を集めて発行しています。",
      logo: {
        src: "./src/assets/icon.png", // TODO アイコン変更
      },
      tableOfContents: false,
      sidebar: [
        { label: "HOME", link: "/" },
        {
          label: "記事を読む",
          items: [
            {
              label: "最新号",
              link: "volumes/13",
            },
            {
              label: "バックナンバー",
              link: "volumes",
            },
          ],
        },
        {
          label: "雑誌について",
          items: [
            { label: "ニッチェ・ライフとは", slug: "about" },
            { label: "運営体制", slug: "editors" },
            {
              label: "新着ニュース",
              link: "news",
            },
          ],
        },
        {
          label: "投稿について",
          items: [
            // {
            //   label: "投稿のガイドライン",
            //   slug: "submit/guide",
            // },
            {
              label: "投稿規定",
              slug: "submit/rules",
            },
            // {
            //   label: "投稿フォーム",
            //   slug: "submit/form",
            // },
          ],
        },
        {
          label: "サポート",
          items: [
            {
              label: "お問い合わせ",
              slug: "contact",
            },
            {
              label: "FAQ",
              slug: "faq",
            },
          ],
        },
      ],
      social: [
        {
          icon: "x.com",
          label: "X.com",
          href: "https://x.com/NicheLife_Tw",
        },
      ],
      customCss: ["./src/styles/global.css"],
      pagefind: false,
      head: [],
      favicon: "./src/assets/icon.png", // TODO ファビコン変更
      components: {
        Footer: "./src/components/Footer.astro",
        Hero: "./src/components/Hero.astro",
        Header: "./src/components/Header.astro",
        SiteTitle: "./src/components/SiteTitle.astro",
      },
      plugins: [
        starlightScrollToTop({
          threshold: 10,
        }),
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),

  redirects: {
    // 旧URLリダイレクト設定 TODO 落ち着いたら削除
    "/rules": "/submit/rules",
    "/members": "/editors",
    "/series": "/volumes",
    "/series/1": "/volumes/1",
    "/series/2": "/volumes/2",
    "/series/3": "/volumes/3",
    "/series/4": "/volumes/4",
    "/series/5": "/volumes/5",
    "/series/6": "/volumes/6",
    "/series/7": "/volumes/7",
    "/series/8": "/volumes/8",
    "/series/9": "/volumes/9",
    "/series/10": "/volumes/10",
    "/series/11": "/volumes/11",
    "/series/12": "/volumes/12",
  },
});
