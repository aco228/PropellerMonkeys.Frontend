import axios from 'axios'
import store from "../store";

export default{

  construct: function(method){
    return store.state.url_protocol + store.state.url + '/' + method;
  },

  init: function(){
    var self = this;
    axios.get(this.construct("api/clients")).then(response => {
      console.log(response.data);
      store.state.clients = response.data;
      self.onFinish();
    });
  },

  onFinish:null

}