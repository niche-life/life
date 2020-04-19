<template>
  <v-container>
    <div class="Member">
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
    </div>
  </v-container>
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
