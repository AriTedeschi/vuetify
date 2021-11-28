<template>
   <v-container class=" mb-5" style="margin-left: 5%; padding-right: 10%;padding-bottom:100px">
      <v-row class="mt-2 mb-2">
        <h2>Mentors:</h2>
      </v-row>
      <v-row>
        <p>A mentor is a seasoned professional who informally helps guide a lesser experienced person in their professional endeavors.</p>
        <p>A mentorship is mutually beneficial for the mentor and mentee.Personal and professional development is important for everyone to achieve – one such relationship that can help those with lesser experience hone their professional skills is a mentorship. If you fall into this category, it is important to have a good understanding of what a mentor is, what qualities they have, and how to find and develop a great mentorship relationship.</p>
      </v-row>
      <v-row>
        <Table />
      </v-row>
    </v-container>
</template>
<script>
import Table from "../components/mentors/Table.vue";
export default {
  components: {
    Table
  },
  created () {
    document.title = "Mentors";
  },
};
</script>