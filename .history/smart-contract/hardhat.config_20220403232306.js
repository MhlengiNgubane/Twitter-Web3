require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/N0kApF31XcG2o0xUVtSncuEItYwrXy61',
      accounts: [
        '3ca02',
      ],
    },
  },
};
