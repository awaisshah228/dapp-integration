import { useCallback } from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
// import { useToast } from '../state/hooks'
import { connectorsByName } from '../utils/web3React'
import { setupNetwork } from '../utils/wallet'

const useAuth = () => {
  const { activate, deactivate } = useWeb3React()
//   const { toastError } = useToast()

  
  const login = useCallback((connectorID) => {
      const connector = connectorsByName[connectorID]
      if (connector) {
      activate(connector, async (error) => {

        // if (error instanceof UnsupportedChainIdError) {
        //   const hasSetup = await setupNetwork()
        //   if (hasSetup) {
        //     activate(connector)
        //   }
        // } else {
        //   connector.walletConnectProvider = undefined
        // //   toastError(error.name, error.message)
        //   console.log(error.name, error.message)
        // }
      })
      localStorage.setItem('isWalletConnected', true)
    } else {
    //   toastError("Can't find connector", 'The connector config is wrong')
    console.log("could not find connector  ")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const logout=async ()=>{
    try {
      deactivate()
      localStorage.setItem('isWalletConnected', false)
    } catch (ex) {
      console.log(ex)
    }
  }

  return { login, logout }
}

export default useAuth
