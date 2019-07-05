import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // main
    url_protocol: 'http://',
    url: 'localhost:52613',
    socket_hasConnection:false,

    // clients context
    clients:[],

    // logs
    console_logs:[]
  },
  mutations: {
    setSocketHasConnection(state, payload) { state.socket_hasConnection = payload; },
    addConsoleLog(state, payload) { 
      state.console_logs.unshift(payload); 
      if(state.console_logs.length >= 500)
        state.console_logs = state.console_logs.slice(500, state.console_logs.length - 1);
    }

  },
  getters:{
    getWss: function(state) { return state.url_protocol == 'https://' ? 'wss://' : 'ws://'; }
  }
});
