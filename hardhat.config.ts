import { HardhatUserConfig } from "hardhat/config";
import "@openzeppelin/hardhat-upgrades"
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + "/.env" });
const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/i52HvKY2UtarqpbA7AxrWnxQJHMI0RXK",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    mainnet: {
      url: "https://eth-mainnet.g.alchemy.com/v2/qIqrAFSAjjkZhvX42lejf3X_6THLQxLR",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    polygonMainnet: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/MsfKKcvyX7YUvgH2jU7BQTbPzlKKgQba",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/6422400310bc4cb784d6a819632808b9",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: "VIT7XVFNT1RIGIMPDPY6QKEVJJ94DSNVVW",
      polygon: "9UHP9XAJW9C5CGVRG5IQ29ZEKTB7N12TRE",
      goerli: "31WXEYFAGW4JBBSRRJZRJQB2GB5D6MB48W",
      mainnet: "31WXEYFAGW4JBBSRRJZRJQB2GB5D6MB48W",
    },
  },
  gasReporter: {
    enabled: true,
    outputFile:"gas-report.txt",
    currency: "USD",
    noColors:true,
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    // token:"MATIC"
  },
};
export default config;
