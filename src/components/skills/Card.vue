<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="#bd9a03"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card-title>{{card.skillname}}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="card.points"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
        <div class="grey--text ms-4">{{card.points}}</div>
      </v-row>

      <div class="my-4 text-subtitle-1">{{card.subtitle}}</div>

      <div>
        {{card.feedback}}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Challenges Associate:</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="yellow accent-4 black--text"
        column
      >
      <v-chip v-for="(challenge, i) in card.challenges" :key="i"
                draggable>
            {{challenge.name}}
        </v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="#1E1E1E" text @click="request">
        Request reavaliation
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props:['card'],
  data: () => ({
    loading: false,
    selection: 1
  }),

  methods: {
    request() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>