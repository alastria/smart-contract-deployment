## Truffle Guide 

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

