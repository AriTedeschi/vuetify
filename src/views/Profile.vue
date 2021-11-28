<template>
  <div>
    <v-container fluid class=" mb-5">
      <v-row class="mt-2 mb-2">
        <h2>Profile:</h2>
      </v-row>
      <v-row>
        <v-col md="2" sm="8">
          <v-row>
            <img style="border-radius: 50%;"
            src="https://randomuser.me/api/portraits/men/74.jpg"/>
          </v-row>
        </v-col>
        <v-col md="4" sm="8">
          <v-row class="mt-5">
            <p style="float:left;">Name: </p>
            <p style="float:left;padding-left:10px;border-bottom: 1px black solid">John Doe</p>
          </v-row>
        </v-col>
        <v-col md="4" sm="8">
          <v-row class="mt-5">
            <p style="float:left;">E-mail: </p>
            <p style="float:left;padding-left:10px;border-bottom: 1px black solid">john_doe@gmail.com</p>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="4" sm="8" offset-md="2" >
          <v-row class="mt-1">
            <p style="float:left;">Creation date: </p>
            <p style="float:left;padding-left:10px;border-bottom: 1px black solid">2021-11-21</p>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <h2>Challenges:</h2>
      </v-row>
      <v-row class="mb-5">
          <Table />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Table from "../components/profile/Table.vue";
export default {
  components: {
    Table
  },
  created () {
    document.title = "Profile";
  },
};
</script>