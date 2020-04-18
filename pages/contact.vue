<template>
  <div class="Contact">
    <TextCard title="メールでのお問い合わせ">
      <p>
        メールでのお問い合わせは次のアドレスからお願いします。<br />
        <a href="mailto:info@niche-life.com">info@niche-life.com</a>
      </p>
      <p>
        お問い合わせ内容によっては、数日以上のお時間をいただく場合やお答えできない場合がございます。また、回答の時間指定はお受けできませんのであらかじめご了承ください。
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
      title: "お問い合わせ",
    };
  },
};
</script>
