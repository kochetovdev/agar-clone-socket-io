const express = require("express");
const socketio = require("socket.io");

const app = express();

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(9000);
const io = socketio(expressServer);

// App organization
// servers.js is NOT the entry point. It creates our servers
// and exports them

module.exports = {
  app,
  io,
};
