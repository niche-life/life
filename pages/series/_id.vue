<template>
  <div class="About">
    <h2>巻号詳細</h2>
    <div v-for="(magazine, i) in magazineData" :key="i">
      <div v-if="magazine.no == $route.params.id">
        <MagazineDetailCard :items="magazine" />
      </div>
    </div>
  </div>
</template>

<script>
import MagazineDetailCard from "@/components/MagazineDetailCard.vue";
import Magazine from "@/data/magazineData.json";

export default {
  components: {
    MagazineDetailCard,
  },
  data() {
    return {
      magazineData: Magazine.magazineData,
    };
  },
  head() {
    return {
      title: "巻号一覧",
    };
  },
};
</script>
