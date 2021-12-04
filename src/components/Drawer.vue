<template>
  <v-navigation-drawer permanent float-left width="100%">
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/74.jpg"></v-img>
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
      <v-list-item :to="{path: '/challenges'}">
        <v-list-item-icon>
          <v-icon>mdi-folder</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Challenges</v-list-item-title>
      </v-list-item>
      <v-list-item :to="{path: '/mentors'}">
        <v-list-item-icon>
          <v-icon>mdi-account-multiple</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Mentors</v-list-item-title>
      </v-list-item>
      <v-list-item :to="{path: '/skills'}">
        <v-list-item-icon>
          <v-icon>mdi-star</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Skills evaluation</v-list-item-title>
      </v-list-item>
      <v-list-item :to="{path: '/locations'}">
        <v-list-item-icon>
          <v-icon>mdi-map-clock</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Locations</v-list-item-title>
      </v-list-item>
      <v-list-item :to="{path: '/profile'}">
        <v-list-item-icon>
          <v-icon>mdi-account-reactivate</v-icon>
        </v-list-item-icon>
        <v-list-item-title>My profile</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({}),
};
</script>