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
      clientId="bb92503f0218ec501594a4cd84d24cb0"
      supportedWallets={[embeddedWallet()]}
    >
      <ConnectWallet />
    </ThirdwebProvider>
  );
}

export default App;
