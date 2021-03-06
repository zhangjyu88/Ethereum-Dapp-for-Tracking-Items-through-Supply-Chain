#  Ethereum Dapp for Tracking Items through Supply Chain

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

The DApp User Interface when running should look like...

![truffle test](images/ftc_product_overview.png)

![truffle test](images/ftc_farm_details.png)

![truffle test](images/ftc_product_details.png)

![truffle test](images/ftc_transaction_history.jpg)


## Diagrams:

### Activity Diagram
![Activity Diagram](images/Activity.jpg)

### Sequence Diagram
![Sequence Diagram](images/Sequence.jpg)

### State Diagram
![State Diagram](images/State.jpg)

### Class Diagram
![Class Diagram](images/Class.jpg)

## Rinkeby Deployment Address:

* [FarmerRole address](https://rinkeby.etherscan.io/address/0xa83B92F24119Ac33E87859606e1B8B43734F839B)
* [DistributorRole address](https://rinkeby.etherscan.io/address/0xE46f324020098616C2b038B7E5BBB016c1AD6C47)
* [RetailerRole address](https://rinkeby.etherscan.io/address/0xC218216233b85c43fD94b3b75435E91966018Ef3)
* [ConsumerRole address](https://rinkeby.etherscan.io/address/0x68b7c2c042066F0dDE093FbA7ae4A7feD9e966c6)
* [SupplyChain address](https://rinkeby.etherscan.io/address/0x4EFd5b34D2AAe25f9006c9D44DABBCf7b9F40165)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

```
Give examples (to be clarified)
```

### Installing

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/udacity/nd1309/tree/master/course-5/project-6
```

Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
npm install
npm install --save truffle-hdwallet-provider
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

Your terminal should look something like this:

![truffle test](images/ganache-cli.jpg)

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

Your terminal should look something like this:

![truffle test](images/truffle_compile.png)

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

![truffle test](images/truffle_migrate.jpg)

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

![truffle test](images/truffle_test.jpg)

In a separate terminal window, launch the DApp:

```
npm run dev
```

## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [IPFS](https://ipfs.io/) - IPFS is the Distributed Web | A peer-to-peer hypermedia protocol
to make the web faster, safer, and more open.
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.


## Authors

See also the list of [contributors](https://github.com/your/project/contributors.md) who participated in this project.

## Acknowledgments

* Solidity
* Ganache-cli
* Truffle
* IPFS
