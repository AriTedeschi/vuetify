<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="#bd9a03"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-card-title>{{region.nome}}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <div class="grey--text ms-4">State: {{region.UF.nome}} - {{region.UF.sigla}}</div>
      </v-row>

      <div class="my-4 text-subtitle-1">{{region.UF.regiao.nome}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

  </v-card>
</template>
<script>
export default {
  props:['region'],
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