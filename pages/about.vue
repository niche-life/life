<template>
  <div class="About">
    <TextCard title="ブラウザ環境について">
      <p>
        当サイトは以下の環境でご覧いただくことを推奨いたします。<br />
        <br />
        Microsoft Edge 最新版<br />
        Mozilla Firefox 最新版<br />
        Google Chrome 最新版 (Windows10以上)<br />
        Apple Safari (OS X) 最新版<br />
        Opera Software ASA Opera 最新版<br />
      </p>
    </TextCard>

    <TextCard title="当サイトへのリンクについて">
      <p>
        当サイトへのリンクは自由です。
      </p>
    </TextCard>

    <TextCard title="Google Analyticsの利用について">
      <p>
        Webページを訪問したユーザーの興味により適したコンテンツを提供するための参考として、Webページの訪問状況を把握し分析するために、Google社が提供するGoogle
        Analyticsを利用しています。<br />
        Google
        Analyticsの利用規約及びプライバシーポリシーに関する説明については、Google
        Analyticsのサイトをご覧ください。<br />
      </p>

      <ul>
        <li>
          <a
            href="https://marketingplatform.google.com/about/analytics/terms/jp"
            target="_blank"
            rel="noopener"
          >
            Google Analytics利用規約
          </a>
        </li>
        <li>
          <a
            href="https://policies.google.com/privacy?hl=ja"
            target="_blank"
            rel="noopener"
          >
            Googleのプライバシーポリシー
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/analytics/answer/6004245"
            target="_blank"
            rel="noopener"
          >
            Google Analyticsに関する詳細情報
          </a>
        </li>
      </ul>
    </TextCard>

    <TextCard title="ソースコードについて">
      <p>
        詳しくは<a
          href="https://github.com/niche-life/life"
          target="_blank"
          rel="noopener"
          >GitHubリポジトリ</a
        >をご確認ください。
      </p>
    </TextCard>
  </div>
</template>

<script>
import TextCard from "@/components/TextCard.vue";

export default {
  components: {
    TextCard,
  },
  head() {
    return {
      title: "当サイトについて",
    };
  },
};
</script>
