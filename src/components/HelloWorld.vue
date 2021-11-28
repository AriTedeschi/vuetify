<template>
  <v-card>
    <div class="mx-auto;background-color:gray;">
      <v-content width="100%">
        <div style="margin-left: 5%; margin-right: 5%;font-size:20px;">
          <h1>Hackathon:</h1>
          <p>
            Hackathons are events which involve people interested in
             solve problems and develop innovative solutions to issues
             specific. The origin of the term refers to the combination of the words hack
             (program) and marathon (marathon).
          </p>
          <p>
            However, it's been a while since Hackathons stopped being events
             focused only on programmers and began to be space for
             professionals such as designers, managers, developers,
             innovation experts and users.
          </p>
          <p>
            So, this marathon is for projects and ideas to be
             discussed and developed. Taking into account opinions,
             resources and knowledge of all professionals involved.
          </p>
          <p>Confira o hacking atual do Hackathon abaixo:</p>
        </div>
        <div style="margin-left: 5%; margin-right: 5%">
          <Table />
        </div>
      </v-content>
    </div>
  </v-card>
</template>


<script>
import Table from "./home/Table";
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
      links: ["Home", "Contacts", "Settings"],
      mini: true,
    };
  },
  components: {
    Table
  },
};
</script>