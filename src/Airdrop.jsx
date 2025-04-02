import { WalletAccountError } from "@solana/wallet-adapter-base";
import { useWallet } from "@solana/wallet-adapter-react";


export function Airdrop() {
    //hooks in react
    
    const wallet = useWallet();
    return <div>
        hi {wallet.publicKey.toString()}     
        hi from airdrop
        <input type="text" placeholder="Enter your address"></input>
        <button>Request Airdrop</button>
    </div>
}