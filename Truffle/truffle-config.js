const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
require("dotenv").config();

const private_key = process.env.SIGNER_PRIVATE_KEY;

module.exports = {
  networks: {
    alastriat: {
      gasPrice: 0x0,
      provider: () => new HDWalletProvider(private_key, process.env.T_NODE_IP),
      network_id: 83584648538,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    alastriab: {
      gasPrice: 0x0,
      provider: () => new HDWalletProvider(private_key, process.env.B_NODE_IP),
      network_id: 2020,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: "0.8.1",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
        evmVersion: "byzantium"
      }
    }
  }
}
