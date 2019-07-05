<template>
  <div class="clients">

    <div v-for="client in clients" v-bind:key="client.context.username">
      {{ client.context.username }}
    </div>

  </div>
</template>

<script>
import store from "../store";

export default {
  name: "home",
  components: { },
  created(){

  },
  computed:{
    clients: function(){ return store.state.clients;}
  }
};
</script>
