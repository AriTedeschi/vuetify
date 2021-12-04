<template>
  <div style="margin-bottom:10%;">
    <v-row>
      <v-col
        v-for="card in cards"
        :key="card.skillname"
        cols="12"
        md="4"
        sm="6"
      >
        <Card :card="card"></Card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Card from "../components/challenges/Card";

export default {
  name: "CardChallenges",
  created () {
    document.title = "Challenges";
  },
  computed: {
    cards() {
      return this.$store.state.challengesCards;
    },
  },
  components: {
    Card,
  },
};
</script>