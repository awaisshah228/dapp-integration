import { InjectedConnector } from '@web3-react/injected-connector'

const ConnectorNames = {
    Injected: "injected",
    
}



const injected = new InjectedConnector({ supportedChainIds: [ 1, 3, 4, 5, 42] })
export const connectorsByName = {
    [ConnectorNames.Injected]: injected,
   
}

export const getLibrary = (provider) => {
    return provider
}
