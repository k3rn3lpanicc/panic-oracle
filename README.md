# Panic Oracle
A simple version of an oracle system which connects the outside world to the blockchain's isolated smart contracts.

## Usage

### Prerequisites

Clone the repository, open a shell in the root directory, and run `npm install`

Then move to the `oracle contract` folder, and run `npm install`

## Run unit tests

Unit tests are implemented for the Solidity smart contract of the oracle, move into the `oracle contract` folder, 
and run the following command: `npm run test`

The results should be like this:

```bash
➜ npm run test

> erc20token-example@1.0.0 test
> npx hardhat test



  Panic Oracle
    Deployment
      ✔ Should deploy the contract (4625ms)
      ✔ Should set the new round by the owner (68ms)
      ✔ Should not be able to set new round by another person (87ms)
      ✔ Should get the latest round's data (46ms)


  4 passing (5s)
```

## Deploy the contract

If you need to deploy the contract on chain, move to the `oracle contract` folder, and run the following command: `npm run deploy:mumbai`

This would deploy the contract to Polygon Mumbai testnet.

** Note: in the `oracle contract` folder, create an `.env` file and fill these properties based on your information:

- MUMBAI_API_KEY="YOUR MUMBAI BLOCK EXPLORER API KEY HERE"
- PRIVATE_KEY="YOUR WALLETS PRIVATE KEY HERE"

The result of deploying the contract would look like this:

```bash
➜ npm run deploy:mumbai

> erc20token-example@1.0.0 deploy:mumbai
> npx hardhat run --network polygonMumbai ./scripts/deploy.ts

[ ☕️ ] Deploying the Panic Oracle to chain ...
[ ✅ ] Panic oracle deployed to: 0xe39524f263b4F72c327eD7443730ECf3abF1370a
[ ☕️ ] Waiting 20 seconds ...
[ ☕️ ] Verifying the contract's source code on block explorer ...
Successfully submitted source code for contract
contracts/PanicOracle.sol:PanicOracle at 0xe39524f263b4F72c327eD7443730ECf3abF1370a
for verification on the block explorer. Waiting for verification result...

Successfully verified contract PanicOracle on the block explorer.
https://mumbai.polygonscan.com/address/0xe39524f263b4F72c327eD7443730ECf3abF1370a#code
[ ✅ ] Contract's source code verified on block explorer.
```

## Run the oracle

To run the oracle, first you need to create an `.env` file in the project folder and fill in these information:

- CONTRACT_ADDRESS="THE CONTRACT ADDRESS THAT YOUVE DEPLOYED"
- PRIVATEKEY="THE PRIVATE KEY OF THE ORACLE"

Then you can simply run: `npm run start:dev` and the project would start in development mode

Each 30 seconds, the private key that you've put in the env file would send a transaction to the oracle contract, so make sure you have enough funds beforehand.

The result of running the oracle would look like this:

```bash
[ ☕️ ] Sending new round data to contract ...
[ ✅ ] Transaction submitted to contract, txHash: 0x91303bedfc4bda1404ce4cccaa9a53679475da28f886383e5878539d7a635646
[ ☕️ ] Sending new round data to contract ...
[ ✅ ] Transaction submitted to contract, txHash: 0x76d48c98c4478d811f436ce88d51373577872ca1bfc3adbb81b3e75d1696049b
[ ☕️ ] Sending new round data to contract ...
[ ✅ ] Transaction submitted to contract, txHash: 0xc74070a335a6d3ac429acac10f01c2255ce07591219f3ac0d0f27872267e61ca
[ ☕️ ] Sending new round data to contract ...
...
```
