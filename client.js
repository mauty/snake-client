const log = console.log

const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
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