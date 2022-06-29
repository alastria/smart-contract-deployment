import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
/* import "@openzeppelin/hardhat-upgrades"; */

dotenv.config();

const chainIds = {
  t_alastria: 83584648538,
  b_alastria: 2020
};

const { //This variables must be in the .env file, in order to work (like .env.example)
  PRIVATE_KEY,
  T_ALASTRIA_IP,
  B_ALASTRIA_IP
} = process.env;


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.1",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "byzantium"
    }
  },
  networks: {
    t_alastria: {
      url: `http:///${T_ALASTRIA_IP}:22000`,
      chainId: chainIds.t_alastria,
      gasPrice: 0,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : []
    },
    b_alastria: {
      url: `http:///${B_ALASTRIA_IP}:8545`,
      chainId: chainIds.b_alastria,
      gasPrice: 0,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : []
    }
  },
  mocha: {
    timeout: 0
  }
};

export default config;
