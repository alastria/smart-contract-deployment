# Smart Contract deployment on Alastria networks

This repository provides practical example to deploy Smart Contracts in both T and B networks, following different approaches:

## Remix

##### Metamask: Add T Network information

- **Network:** B Network
- **New RPC URL:** http://YOUR_NODE_IP:22000
- **Chain ID:** 83584648538


##### Metamask: Add B Network information

- **Network:** B Network
- **New RPC URL:** http://YOUR_NODE_IP:8545
- **Chain ID:** 2020

##### Remix: Deploy

![N|RemixDeploy](https://ik.imagekit.io/alastria/Remix-deploy)


## Truffle
#### Installation
```sh
npm install -g truffle
cd Truffle
npm i
```

#### Deployment in T Network
```sh
truffle compile
truffle migrate --network alastriat
```

#### Deployment in B Network
```sh
truffle compile
truffle migrate --network alastriab
```

## Hardhat
> Coming soon
