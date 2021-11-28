<template>
  <v-data-table
    mx-auto
    :headers="headers"
    :items="mentors"
    :options="options"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.names }}</td>
      <td class="text-xs-right">{{ props.item.points }}</td>
      <td class="text-xs-right">{{ props.item.age }}</td>
      <td class="text-xs-right">{{ props.item.challenges }}</td>
    </template>
  </v-data-table>
</template>
<script>
export default {
  data() {
    return {
      mini: true,
      options: {
        itemsPerPage: 5,
      },
      headers: [
        {
          text: "Competitor name",
          align: "left",
          sortable: false,
          value: "name",
        },
        { text: "Previous Points", value: "point" },
        { text: "Age", value: "age" },
        { text: "Challenges", value: "challenges" },
      ],
      mentors: [
        {
          name: "Evie-Mae Palacios",
          point: 4202,
          age: 43,
          challenges: 40,
        },
        {
          name: "Dougie Bloom",
          point: 2334,
          age: 23,
          challenges: 23,
        },
        {
          name: "Gregory Watt",
          point: 1245,
          age: 33,
          challenges: 17,
        },
        {
          name: "Ubaid Nicholson",
          point: 4433,
          age: 45,
          challenges: 32,
        },
        {
          name: "Ruben Roy",
          point: 1212,
          age: 36,
          challenges: 15,
        },
        {
          name: "James",
          point: 2456,
          age: 27,
          challenges: 21,
        },
        {
          name: "Samina Webster",
          point: 3424,
          age: 21,
          challenges: 34,
        },
        {
          name: "Gavin Donaldson",
          point: 1000,
          age: 42,
          challenges: 12,
        },
      ],
    };
  },
};
</script>
