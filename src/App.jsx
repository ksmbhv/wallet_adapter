import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';
import { SendTokens } from './SendTokens';
import { SignMessage } from './SignMessage';

import { Airdrop } from './Airdrop';
import { ShowSolBalance } from './ShowSolBalance';

function App() {
  //const network = WalletAdapterNetwork.Devnet;

  //const endpoint = useMemo(() => clusterApiUrl(network), [network]);
//https://solana-devnet.g.alchemy.com/v2/O2Xi7AAUR4uZHUk-xcRzsWQ8Bc07f-Xz
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}> 
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton></WalletMultiButton>
          <WalletDisconnectButton></WalletDisconnectButton>
      <div>
        Hi There, Enter your Address to recieve SOL from Testnet Faucet.
      </div>
      <Airdrop></Airdrop>
      <ShowSolBalance></ShowSolBalance>
      <SignMessage></SignMessage>
      <SendTokens></SendTokens>
      </WalletModalProvider>
    </WalletProvider>
    </ConnectionProvider>
  );
}

export default App