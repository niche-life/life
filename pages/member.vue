<template>
  <div class="AboutUs">
    <v-row>
      <v-col v-for="member in memberList" :key="member.name" cols="3">
        <MemberCard :items="member" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MemberCard from "@/components/MemberCard.vue";
import Member from "@/data/member.json";

export default {
  components: {
    MemberCard,
    Member,
  },
  data() {
    return {
      memberList: Member.memberList,
    };
  },
  head() {
    return {
      title: "私達について",
    };
  },
};
</script>
