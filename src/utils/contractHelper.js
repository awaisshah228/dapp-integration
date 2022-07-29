import web3NoAccount from './web3'


const getContract = (abi, address, web3) => {
    const _web3 = web3 ?? web3NoAccount;
    // console.log('_web3',_web3);
    return new _web3.eth.Contract(abi, address)
}

export const getBep20Contract = (address, web3) => {
    return getContract(yfEthAbi, address, web3)
}
