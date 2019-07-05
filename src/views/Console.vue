<template>
  <div>
    <div v-for="(log, index) in logs">
      <div class="log">
        <div class="logCreated">{{ log.created }}</div>
        <div class="logText">{{ log.text }}</div>
        <div style="clear:both"></div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  computed:{
    logs: function(){ return store.state.console_logs; }
  }
}
</script>


<style scoped>
  .log{padding: 2px;}
  .logCreated{
    float:left;
    background-color: bisque;
    padding: 0px 5px 0px 5px;
  }
  .logText{
    margin-left: 10px;
    float:left
  }

</style>

