const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = ".....";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby:{
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/......`),
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
      from: "......"
    }
  },
  mocha: {
    timeout: 1000000
  },
  compilers: {
    solc: {
    }
  }
};
