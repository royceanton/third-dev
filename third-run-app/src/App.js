import React from 'react';
import {
  ThirdwebProvider,
  ConnectWallet,
  embeddedWallet,
} from '@thirdweb-dev/react';

function App() {
  return (
    <ThirdwebProvider
      activeChain="goerli"
      clientId= {process.env.REACT_APP_CLIENT_ID}
      supportedWallets={[embeddedWallet()]}
    >
      <ConnectWallet />
    </ThirdwebProvider>
  );
}

export default App;
