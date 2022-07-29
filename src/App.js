import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

import { useWeb3React } from '@web3-react/core'
import useAuth from './hooks/useAuth';
import { useContractBalance } from './hooks/dataFetcher';

function App() {
  
  const[balance,setBalance]=useState()
  

  const { account } = useWeb3React();
  const { login, logout } = useAuth();
  
  const balances=useContractBalance()

  const connectMetaMask = () => {
    console.log("connect wallet ")
    // localStorage.setItem("connectorId", "injected")
    if (account) {
      logout()
      setBalance(null)
    } else {
      login("injected")
      setBalance(balances);
      
    }
  }
  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem('isWalletConnected') === 'true') {
        try {
        login("injected")
        setBalance(balances);
        } catch (ex) {
          console.log(ex)
        }
      }
    }
    connectWalletOnPageLoad()
  },[balances,account])
  return (
    <div className="App">
      <h1>{account}</h1>
      <h1>{balance}</h1>
      {/* <h1>{balances}</h1> */}
      {account ?
        <button className='btn-common ml-sm-5' onClick={connectMetaMask}>disconnect Wallet</button>
        :
        <button className='btn-common ml-sm-5' onClick={connectMetaMask}>Connect Wallet</button>
      }
    </div>
  );
}

export default App;
