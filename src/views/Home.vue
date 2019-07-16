<template>
  <div class="clients">

    <div class="client" v-for="client in clients" v-bind:key="client.context.username" :id="client.context.username">
      <div class="ch" @click="hideDisplayBody(client.context.username)">
        <div class="ch-status">
          <div class="ch-status-elem ch-status-active" v-if="client.activity == 0"></div>
          <div class="ch-status-elem ch-status-delay" v-else-if="client.activity == 1"></div>
          <div class="ch-status-elem ch-status-problem" v-else-if="client.activity == 2"></div>
          <div class="ch-status-elem ch-status-fatal" v-else-if="client.activity == 3"></div>
        </div>
        <div class="ch-title">
          <div class="ch_machineName">{{ client.context.machineName }}</div>
          <div class="ch_username">{{ client.context.username }}</div>
        </div>
        <div class="ch-lastPing"> {{ client.secondsElapsed }}</div>
      </div>
      <div class="chbody" style="display:none">
        <div class="chactions">
          <button class="chaction">Create campaign</button>
          <button class="chaction">Create campaign</button>
          <button class="chaction">Create campaign</button>
        </div>
      </div>

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
  methods:{
    startGettingElapsedTime: function(){
      var self = this;
      setInterval(function(){ 
        store.state.clients.forEach((client)=>{
        var diff = Math.floor((new Date() - new Date(client.lastPing)) / 1000);
        if(diff <= 30) client.activity = 0;
        else if(diff <= 50) client.activity = 1;
        else if(diff <= 120) client.activity = 2;
        else client.activity = 3;
        client.secondsElapsed =  diff + ' seconds';
      });
       }, 1000);
    },
    hideDisplayBody: function(id){
      if(document.getElementById(id).querySelectorAll('.chbody')[0].style.display == 'none')
        document.getElementById(id).querySelectorAll('.chbody')[0].style.display = 'block';
      else
        document.getElementById(id).querySelectorAll('.chbody')[0].style.display = 'none';
    }
  },
  computed:{
    clients: function(){ return store.state.clients; } 
  },
  created(){
    this.startGettingElapsedTime();
  }
};
</script>


<style scoped lang=scss>
.client{
  background-color: #ececec;
  margin: 5px;
  opacity: .6;
  &:hover{ opacity: 1; }
}

.ch{
  position:relative;
  width:100%;
  height: 40px;
  cursor:hand; cursor:pointer;
  
  .ch-status {
    .ch-status-elem {
      width: 20px; height: 20px;
      position:absolute;
      left:10px; top:10px;
      border-radius: 50px;
    }

    .ch-status-active{ background-color: green; }
    .ch-status-delay{ background-color: yellow; }
    .ch-status-problem{ background-color: red; }
    .ch-status-fatal{ background-color: darkred; }
  }

  .ch-title{
    position:absolute;
    left: 50px; top: 5px;
    text-align: left;

    .ch_machineName{ font-size: 13px; }
    .ch_username{}
  }

  .ch-lastPing{ 
    position:absolute;
    right:5px;
    font-size: 12px;
    top: 10px;
  }
}


.chbody{
  padding:10px;
  text-align: left;
  width: 100%;

  .chactions{ text-align: left; width: 100%;}
  .chaction{ 
    margin: 2px; 
    cursor:hand; cursor:pointer;
    background-color:gray; color:white; border:none; border-radius: 3px; padding: 2px 10px;
  }
}





</style>
