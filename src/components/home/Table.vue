<template>
  <v-data-table
    mx-auto
    :headers="headers"
    :items="competitors"
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
        { text: "Points", value: "point" },
        { text: "Age (g)", value: "age" },
        { text: "Challenges (g)", value: "challenges" },
      ],
      competitors: [
        {
          name: "Jose Malcom da Silta",
          point: 130,
          age: 30,
          challenges: 5,
        },
        {
          name: "Maria Antonia Josa",
          point: 122,
          age: 34,
          challenges: 6,
        },
        {
          name: "Mathues Rodolfo Estonia",
          point: 89,
          age: 24,
          challenges: 2,
        },
        {
          name: "Marcio Peixeira Stone",
          point: 157,
          age: 44,
          challenges: 7,
        },
        {
          name: "Clotilde das Graças",
          point: 100,
          age: 31,
          challenges: 5,
        },
        {
          name: "Ramon Texugo",
          point: 123,
          age: 26,
          challenges: 4,
        },
        {
          name: "Michael de Santa",
          point: 45,
          age: 38,
          challenges: 1,
        },
        {
          name: "Elton Garcia",
          point: 0,
          age: 21,
          challenges: 0,
        },
      ],
    };
  },
};
</script>
