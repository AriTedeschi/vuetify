<template>
  <v-app-bar color="dark" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="../../public/jsicon.png"
        transition="scale-transition"
        width="40"
      />
      <h2>
        <router-link style="color: #ffffff; text-decoration: none" to="/"
          >Javascript Hackathon Ranking</router-link
        >
      </h2>
    </div>
    <div style="margin-left: 5%">
      <router-link
        style="color: #ffffff; text-decoration: none; margin-left: 6%"
        to="/challenges"
        >Challenges</router-link
      >
      <router-link
        style="color: #ffffff; text-decoration: none; margin-left: 6%"
        to="/mentors"
        >Mentors</router-link
      >
      <router-link
        style="color: #ffffff; text-decoration: none; margin-left: 6%"
        to="/skills"
        >Skills</router-link
      >
      <router-link
        style="color: #ffffff; text-decoration: none; margin-left: 6%"
        to="/locations"
        >Locations</router-link
      >
      <router-link
        style="color: #ffffff; text-decoration: none; margin-left: 6%"
        to="/profile"
        >Profile</router-link
      >
    </div>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({}),
};
</script>