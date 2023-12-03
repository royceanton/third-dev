import React from 'react';
import {
  ThirdwebProvider,
  ConnectWallet,
  embeddedWallet,
} from '@thirdweb-dev/react';

// Your custom UI components for the wallet connection
//import DurchNetSelectUI from './DurchNetSelectUI'; // make sure to create this component
//import DurchNetConnectUI from './DurchNetConnectUI'; // make sure to create this component

function App() {
  // Configuration for the embedded wallet with custom branding and UI
  const embeddedWalletConfig = embeddedWallet({
    auth: {
      options: ["email", "facebook", "apple", "google"], // Customize as needed
    },
    meta: {
      name: "Durch.net Wallet", // Your brand name for the wallet
      //iconURL: "/path/to/your/brand/icon.png", // Path to your brand's icon
    },
    //connectUI: DurchNetConnectUI, // Your custom React component for connection UI
    //selectUI: DurchNetSelectUI, // Your custom React component for selection UI
  });

  return (
    <ThirdwebProvider
      activeChain="mainnet" // This sets the default chain to Ethereum Mainnet
      clientId={process.env.REACT_APP_CLIENT_ID} // Client ID from your .env file
      supportedWallets={[embeddedWalletConfig]} // Passing the customized config
    >
      <ConnectWallet />
    </ThirdwebProvider>
  );
}

export default App;
