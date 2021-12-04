<template>
  <div style="margin-bottom:10%;">
      <p style="padding-top:40px;">
        Check where we are located:
      </p>
    <v-row>
      <v-col cols="12" md="4" sm="6">
        <SelectBox
          :states="estados"
          v-model="selectedState"
          @defineState="informSelectedState"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="region in regions"
        :key="region.id"
        cols="12"
        md="4"
        sm="6"
      >
        <Card :region="region"></Card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SelectBox from "../components/locations/SelectBox";
import Card from "../components/locations/Card";

export default {
  name: "CardSkill",
  data: () => {
    return { selectedState: null};
  },
  computed: {
    estados() {
      return this.$store.getters.getEstados;
    },
    regions() {
      return this.$store.getters.getRegions;
    },
  },
  components: {
    SelectBox,
    Card
  },
  methods: {
    informSelectedState(state) {
      this.selectedState = state;
      console.log("Selected state: ", this.selectedState.nome);
      this.$store.dispatch('fetchRegionsByStateId', {
        stateId: this.selectedState.id
      });
    },
  },
  async created() {
    await this.$store.dispatch("fetchStates");
    document.title = "Locations";
  },
};
</script>