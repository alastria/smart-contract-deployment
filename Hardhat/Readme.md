## Hardhat Guide 

#### Installation
```sh
npm install
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

