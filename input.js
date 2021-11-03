const log = console.log

// stores the active TCP connection object
let connection;

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'a') {
    connection.write('Move: left')
  } else if (key === 's') {
    connection.write('Move: down')
  } else if (key === 'd') {
    connection.write('Move: right')
  } else if (key === 'w') {
    connection.write('Move: up')
  } else if (key === 'h') {
    connection.write("Say: Help, I'm being chased")
  } 
};

const setupInput = (conn) => {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);
  
  // const handleUserInput = () => {
  //   stdin.on('data', (key) => {
  //     // \u0003 maps to ctrl+c input
  //     if (key === '\u0003') {
  //       process.exit();
  //     }
  //     else if (key === 'a') {
  //       conn.write('Move: left')
  //     }
  //   })
  // }

  return stdin;
};


module.exports = {
  setupInput,
}