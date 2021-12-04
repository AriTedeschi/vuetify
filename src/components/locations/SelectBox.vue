<template>
  <v-select
    :items="states"
    @input="changeState()"
    v-model="selectedOption"
    label="Pick a state"
  >
    <template slot="selection" slot-scope="data">
      {{ data.item.sigla }} - {{ data.item.nome }}
    </template>
    <template v-slot:item="{ item, attrs, on }">
      <v-list-item v-bind="attrs.sigla" v-on="on">
        <v-list-item-title
          :id="attrs['aria-labelledby']"
          v-text="item.sigla + ' - ' + item.nome"
        ></v-list-item-title>
      </v-list-item>
    </template>
  </v-select>
</template>
<script>
export default {
  props: ["states"],
  data: function () {
    return {
      selectedOption: 0,
    };
  },
  methods: {
    changeState: function () {
      this.$emit("defineState", this.selectedOption);
    },
  },
};
</script>