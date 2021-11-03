const log = console.log
const net = require("net");
const { connect } = require('./client')


log("Connecting ...");
connect();