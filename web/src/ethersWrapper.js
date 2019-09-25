import { ethers } from 'ethers';
import Web3 from 'web3';
import simpleCounter from './contracts/SimpleCounter.json'

let ethersWrapper = {};
console.log(simpleCounter.abi)
let contractAddress = '0x9C8d6a1d5b3aecAF2bF8D06cd50aa37806a70c54'

async function loadEthersProvider()  {
    if (typeof window.ethereum !== 'undefined'
    || (typeof window.web3 !== 'undefined')) {
    // console.log(window.web3.version);
    // Web3 browser user detected. You can now use the provider.
    let address = await window.ethereum.enable();
    console.log(`${address}`)
    //NOTE: must wrap window.etherm to get provider, not window.web3
    // links up metamask with your dapp
    let provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
    
    console.log(provider)
    var signer = provider.getSigner();
    let contract = new ethers.Contract(contractAddress, simpleCounter.abi, signer);
    console.log(contract)
    let counter = await contract.counter();
    console.log(counter)
    let tx = await contract.increment();
    await tx.wait();
    counter = await contract.counter();
    console.log(counter)
}};

async function loadweb3Provider() {
    if (typeof window.ethereum !== 'undefined'
    || (typeof window.web3 !== 'undefined')) {
        let address = await window.ethereum.enable();
        let web3 = new Web3(window.ethereum);
        
        let contract = new web3.eth.Contract(
            simpleCounter.abi, 
            contractAddress ,
            {from:'0xc6Ada1b4e8c885B40E54b35E7471f0467a2c9f89', gasPrice: '20000000000'});
        
        let counter = await contract.methods.counter().call();
        console.log(counter);

        await contract.methods.increment().send();

        counter = await contract.methods.counter().call();
        console.log(counter);
        
}};

loadweb3Provider();
// loadEthersProvider();

export default ethersWrapper;