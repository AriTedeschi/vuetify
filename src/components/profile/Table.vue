<template>
  <v-data-table
    mx-auto
    :headers="headers"
    :items="challenges"
    :options="options"
    class="elevation-1 mb-5"
  >
    <template v-slot:items="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.id }}</td>
      <td class="text-xs-right">{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.points }}</td>
      <td class="text-xs-right">{{ props.item.total }}</td>
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
        { text: "", value: "id" },
        {
          text: "Challenge name",
          align: "left",
          sortable: false,
          value: "name",
        },
        { text: "Points", value: "points" },
        { text: "Total", value: "total"}
      ],
      challenges: [
        {
          id: 1,
          name: "Spring Boot | Marketplace API",
          points: 9,
          total: 117,
        },
        {
          id: 2,
          name: "React Native App | Food App",
          points: 8,
          total: 87,
        },
        {
          id: 3,
          name: "Electron Application | Messaging App",
          points: 7,
          total: 42,
        },
        {
          id: 4,
          name: "Machine Learning Application",
          points: 6.5,
          total: 8,
        }
      ]
    };
  },
};
</script>
