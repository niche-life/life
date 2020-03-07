<template>
  <div class="About">
    <h2>巻号一覧</h2>

    <div v-for="(magazine, i) in magazineData" :key="i">
      <MagazineCard :items="magazine" />
    </div>
  </div>
</template>

<script>
import MagazineCard from "@/components/MagazineCard.vue";
import Magazine from "@/data/magazineData.json";

export default {
  components: {
    MagazineCard
  },
  data() {
    return {
      magazineData: Magazine.magazineData
    };
  },
  head() {
    return {
      title: "巻号一覧"
    };
  }
};
</script>
