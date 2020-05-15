const HDWalletProvider = require("truffle-hdwallet-provider");
const fs = require("fs");
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    loc_develoments_develoments: {
      network_id: "*",
      port: 3000,
      host: "127.0.0.1"
    }
  }
};
