const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = "magic burger accuse sudden book stamp easy dial sting exile promote vanish";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby:{
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/b69db4c588ef4f9b812c87eaf1f5d0af`),
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
      from: "0xf37745461FB7320c3cB2a0Cd9888c08a9326c145"
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