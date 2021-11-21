<template>
  <v-card>
    <div class="Drawer float-left">
      <v-navigation-drawer permanent float-left>
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img
                src="https://randomuser.me/api/portraits/men/74.jpg"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6"> John Doe </v-list-item-title>
              <v-list-item-subtitle>johm_doe@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Submitted Challenges</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Mentors</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Skills evaluation</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
    <div class="mx-auto;background-color:gray;">
      <v-content width="100%">
        <div style="margin-left: 5%; margin-right: 5%">
          <h2>Sobre Hackathon:</h2>
          <p>
            Hackathons são eventos que envolvem pessoas interessadas em
            solucionar problemas e desenvolver soluções inovadoras para questões
            específicas. A origem do termo remete à combinação das palavras hack
            (programar) e marathon (maratona).
          </p>
          <p>
            Entretanto, há algum tempo que os Hackathons deixaram de ser eventos
            focados apenas em programadores e começaram a ser espaço para
            profissionais como designers, gestores, desenvolvedores,
            especialistas em inovação e usuários.
          </p>
          <p>
            Assim, essa maratona serve para que projetos e ideias sejam
            discutidos e desenvolvidos. Levando em consideração opiniões,
            recursos e conhecimentos de todos profissionais envolvidos.
          </p>
          <p>Confira o hacking atual do Hackathon abaixo:</p>
        </div>
        <div style="margin-left: 5%; margin-right: 5%">
          <Table />
        </div>
      </v-content>
    </div>

    <Footer />
  </v-card>
</template>


<script>
import Footer from "./Footer";
import Table from "./Table";
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
    Footer,
    Table,
  },
};
</script>