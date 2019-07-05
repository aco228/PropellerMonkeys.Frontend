import store from "../store";

export default{

  socket: null,
  connected: false,

  init: function(){
    this.socket = new WebSocket(store.getters.getWss + store.state.url + "/ws_frontend");
    this.socket.onopen = e => this.onOpen(e);
    this.socket.onclose = e => this.onClose(e);
    this.socket.onmessage = e => this.onMessage(e);
    this.socket.onerror = e => this.onError(e);
  },

  onOpen: function(e){
    console.log("CONNECTION IS OPENED", e);
    store.commit("setSocketHasConnection", true);
    this.connected = true;
  },

  onClose: function(){
    console.log("CONNECTION IS CLOSED");
    store.commit("setSocketHasConnection", false);
    this.connected = false;
  },

  onError: function(e) {
    console.log("CONNECTION HAS ERROR", e);
  },

  onMessage: function(e){
    console.log("RECEIVED MESSAGE", e);
    var payload = JSON.parse(e.data);
    if (payload == null) {
      console.error("Payload could not be parsed");
      return;
    }

    console.log(payload);

    // in case that this is console payload
    if (payload.subtype == "console")
      store.commit("addConsoleLog", {
        text: payload.text,
        created: payload.created
      });
  }

}