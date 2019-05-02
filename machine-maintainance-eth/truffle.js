// Allows us to use ES6 in our migrations and tests.
require('babel-register')


module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: '*'
    },
    prod: {
    network_id: 1,
    host: 'localhost',
    port: 8000
    },
    testnet: {
    network_id: 1,
    host: "localhost",
    port: 80
    },
    respberry: {
    network_id: 1,
    host: "localhost",
    port: 8545
    }
  },
  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
};
