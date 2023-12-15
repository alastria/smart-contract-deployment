# Smart Contract deployment on Alastria networks

This repository provides practical example to deploy Smart Contracts in both T and B networks, following different approaches:

## Remix

First of all you need to install: [Metamask as browser extension]([https://www.google.com](https://metamask.io/download/)


#### Metamask: Add T Network information

- **Network:** T Network
- **New RPC URL:** http://YOUR_NODE_IP:22000
- **Chain ID:** 83584648538


#### Metamask: Add B Network information

- **Network:** B Network
- **New RPC URL:** http://YOUR_NODE_IP:8545
- **Chain ID:** 2020


#### Mandatory options for T Network 
These options also work for B Network, but are only mandatory for T Network.

<img src="https://ik.imagekit.io/alastria/options_for_t_network.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656492606348" alt="RemixDeploy" width="400">

#### Remix: Deployment (left side)
Just click on the "Deploy" button when your Smart Contract is ready.

<img src="https://ik.imagekit.io/alastria/Remix-deploy?ik-sdk-version=javascript-1.4.3&updatedAt=1654784727263" alt="Remix1" width="400">

#### Metamask: Network selection
You have to select your Alastria Network form Metamask.

<img src="https://ik.imagekit.io/alastria/selection_of_alastria_network.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656492649058" alt="Metamask1" width="400">


#### Metamask: Confirm transaction
You have to confirm the transaction of the Smart Contract deployment.

<img src="https://ik.imagekit.io/alastria/metamask_confirmation.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656492665353" alt="Metamask2" width="400">


#### Functions overview in Remix (left side)
You will see an overview of the public/external functions of your already deployed Smart Contract.

<img src="https://ik.imagekit.io/alastria/functions_overview.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656492696364" alt="Remix2" width="400">


#### Functions execution in Remix (left side)
You can directly execute your Smart Contract functions from the Remix web IDE for test purposes.

<img src="https://ik.imagekit.io/alastria/functions_execution.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656492681737" alt="Remix3" width="400">



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

#### Installation
```sh
npm init
npm install --save-dev hardhat
```

#### Deployment in T Network
```sh
npx hardhat clean
npx hardhat compile
npx hardhat run ./scripts/deploy.ts --network t_alastria
```

#### Deployment in B Network
```sh
npx hardhat clean
npx hardhat compile
npx hardhat run ./scripts/deploy.ts --network b_alastria
```


