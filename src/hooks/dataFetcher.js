
import useWeb3 from './useWeb3'
import { useEffect,useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'


export const useContractBalance = () => {
    const { account } = useWeb3React();
    // const [balance, setBalance] = useState(new BigNumber(0))
    const [balance, setBalance] = useState(0)
    const web3 = useWeb3()
    // const { fastRefresh } = useRefresh()
    
    useEffect(() => {
        const fetchBalance = async () => {
            const res = await web3.eth.getBalance(account)
            // setBalance(new BigNumber(res))
            setBalance(res);
        }
        if(account){
            fetchBalance()
        }
        
    })

    return balance
}