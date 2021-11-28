<template>
  <div>
    <v-row>
      <v-col
        v-for="card in cards"
        :key="card.skillname"
        cols="12"
        md=4
        sm=6
      >
        <Card :card="card"></Card>
      </v-col>
      
        
    </v-row>
  </div>
</template>

<script>
  import Card from '../components/skills/Card'

  export default {
    name: 'CardSkill',
    computed:{
      cards(){
        return this.$store.state.skillscards;
      }
    },
    components: {
      Card
    },
    created () {
      document.title = "Skills";
    },
  }
</script>