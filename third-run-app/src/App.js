import React from 'react';
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  ConnectWallet,
  embeddedWallet,
} from '@thirdweb-dev/react';

function App() {
  return (
    <ThirdwebProvider
      activeChain="goerli"
      clientId={process.env.REACT_APP_CLIENT_ID}
      supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect(), embeddedWallet()]}
    >
      <ConnectWallet
        theme={"light"}
        modalSize={"wide"}
      />
      {/* <ConnectWallet modalSize="compact" /> */}
    </ThirdwebProvider>
  );
}

export default App;
