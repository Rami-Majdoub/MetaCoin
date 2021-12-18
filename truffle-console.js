// test the contract
let metaCoin = await MetaCoin.deployed();
const account1 = (await web3.eth.getAccounts())[0]
const account2 = (await web3.eth.getAccounts())[1]
(await metaCoin.getBalance(account1)).toNumber();
await metaCoin.sendCoin(account2, 2);
(await metaCoin.getBalance(account1)).toNumber();

// const accounts = await web3.eth.getAccounts();
// (await metaCoin.getBalance('0x7eB2182A625Edf1ab650Ca111df5eA6d7aDCce2f')).toNumber();
// ( await web3.eth.getAccounts())[0]

(await metaCoin.getBalanceInEth(account1)).toNumber();

// 2
const accounts = await web3.eth.getAccounts();
const deployed = await MetaCoin.deployed();
(await deployed.getBalance(accounts[0])).toNumber();
(await deployed.getBalance(accounts[1])).toNumber();
(await deployed.getBalance(accounts[2])).toNumber();
