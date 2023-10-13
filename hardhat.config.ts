import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });
const config: HardhatUserConfig = {
  solidity: "0.8.18",


  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/3932027bc24b4df089d1ab33886ad3db",
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
    }
  }

};

export default config;
