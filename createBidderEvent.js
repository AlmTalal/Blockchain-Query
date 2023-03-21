//Importing ethers librarie (It let us interact with the blockchain choosing diffferent providers)
const { ethers } = require("ethers");

//A requirment for using infura provider, it's a sample project id
const INFURA_ID = "5d19e896f00c4840bb5be686f31d8e0c";
//Creating the provider
const provider = new ethers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

//Declaring the contract address
const address = "0xa01a4aD6aEF50C6Bd91e28e04bE92dBe9F80a27a";
//Picking the necesary event from the contract's abi
const contractAbi = ["event CreateBidder(address b)"];
//creating the contract variable
const contract = new ethers.Contract(address, contractAbi, provider);

const main = async () => {
  //Picking the logs and putting them in an array
  const addresses = await contract.queryFilter("CreateBidder");

  for (let i = 0; i < addresses.length; i++) {
    //looping throw the logs and picking their addresses
    let buyer = addresses[i].address;
    console.log(buyer);
  }
};

main();
