import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import sockets from "./libs/SocketConnection";
import api from "./libs/API";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    api.onFinish = function(){
      sockets.init();
    };
    api.init();
    
  },

  methods: {}
}).$mount("#app");
