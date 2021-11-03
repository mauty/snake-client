const log = console.log

const { connect } = require('./client')
const { setupInput } = require('./input')


log("Connecting ...");
connect();


setupInput();