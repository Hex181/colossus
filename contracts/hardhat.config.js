require("@nomicfoundation/hardhat-toolbox");
var secret = require("./secret.json");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.6",

  defaultNetwork: "fire_testnet",
  networks: {
    hardhat: {
    },
    fire_testnet: {
      url: "https://rpc-testnet.5ire.network/",
      accounts: [`0x` + secret.PRIVATE_KEY],
      chainId: 997,
    },
  }
}
