<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Tela inicial</router-link> |
      <router-link to="/about">Sobre</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
body{
  background-color:#0d2f57;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: ##d6861e;
}

#nav a.router-link-exact-active {
  color: #d6861e;
}
</style>
