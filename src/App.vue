<template>
  <div id="app">
    <div v-if="getConnectionStatus == false">
      Server is not running!
    </div>
    <div v-else>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/console">Console</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import store from "./store";

export default {
  computed:{
    getConnectionStatus: function(){ return store.state.socket_hasConnection; }
  }
}
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
