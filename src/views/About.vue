<template>
  <div class="about">
    <h1>{{title}}</h1>
    <p>Voce clicou {{cont}} vezes</p>
    <button type="submit" v-on:click="increment"></button>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        title:'Sobre nós',
        cont:0
      }
    },
    methods:{
      increment(){
        this.cont+=1
      }
    }
  }
</script>