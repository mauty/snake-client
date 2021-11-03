const log = console.log

const net = require("net");
const { IP, PORT } = require('./constants')

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('data', (data) => {
    log(data.toString());
  });

  conn.on('connect', () => {
    log('Successfully connected');
    conn.write('Name: MSA')
  });
  
 
  conn.on('connect', () => {
      // setTimeout(() => { conn.write('Move: up'); }, 200);
  });
  
  return conn;
};

module.exports = {
  connect,
};