# Smart Contract deployment on Alastria networks

This repository provides practical example to deploy Smart Contracts in both T and B networks, following different approaches:

## Remix

##### Metamask: Add T Network information

- **Network:** T Network
- **New RPC URL:** http://YOUR_NODE_IP:22000
- **Chain ID:** 83584648538


##### Metamask: Add B Network information

- **Network:** B Network
- **New RPC URL:** http://YOUR_NODE_IP:8545
- **Chain ID:** 2020

##### Remix: Deployment (left side)

![N|Remix1](https://ik.imagekit.io/alastria/Remix-deploy)

###### Mandatory options for T Network 
These options also work for B Network, but are only mandatory for T Network.
![N|RemixDeploy](https://ik.imagekit.io/alastria/options_for_t_network.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656492606348)

###### Metamask: Network selection
You have to select your Alastria Network form Metamask.
![N|Metamask1](https://ik.imagekit.io/alastria/selection_of_alastria_network.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656492649058)

###### Metamask: Confirm transaction
You have to confirm the transaction of the Smart Contract deployment.
![N|Metamask2](https://ik.imagekit.io/alastria/metamask_confirmation.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656492665353)

###### Functions overview in Remix (left side)
You will see an overview of the public/external functions of your already deployed Smart Contract.
![N|Remix2](https://ik.imagekit.io/alastria/functions_overview.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656492696364)

###### Functions execution in Remix (left side)
You can directly execute your Smart Contract functions from the Remix web IDE for test purposes.
![N|Remix3](https://ik.imagekit.io/alastria/functions_execution.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656492681737)


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
npx hardhat run ./scripts/vault-verify.ts --network t_alastria
```

#### Deployment in B Network
```sh
npx hardhat clean
npx hardhat compile
npx hardhat run ./scripts/vault-verify.ts --network b_alastria
```


