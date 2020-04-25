<template>
  <v-container>
    <v-row class="my-4">
      <v-col
        v-for="member in memberList"
        :key="member.name"
        align="center"
        justify="center"
      >
        <MemberCard :items="member" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MemberCard from "@/components/MemberCard.vue";
import Members from "@/data/members.json";

export default {
  components: {
    MemberCard,
    Members,
  },
  data() {
    return {
      memberList: Members.memberList,
    };
  },
  head() {
    return {
      title: "編集委員",
    };
  },
};
</script>
