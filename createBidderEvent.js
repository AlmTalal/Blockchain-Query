const { ethers } = require("ethers");

const INFURA_ID = "5d19e896f00c4840bb5be686f31d8e0c";
const provider = new ethers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const address = "0xa01a4aD6aEF50C6Bd91e28e04bE92dBe9F80a27a";
const contractAbi = ["event CreateBidder(address b)"];
const contract = new ethers.Contract(address, contractAbi, provider);

const main = async () => {
  const addresses = await contract.queryFilter("CreateBidder");

  for (let i = 0; i < addresses.length; i++) {
    let buyer = addresses[i].address;
    console.log(buyer);
  }
};

main();
