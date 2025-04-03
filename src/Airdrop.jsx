import { WalletAccountError } from "@solana/wallet-adapter-base";
import { useWallet } from "@solana/wallet-adapter-react";
// import { Connection } from "@solana/web3.js";
import { useConnection } from "@solana/wallet-adapter-react";

export function Airdrop() {
    //hooks in react
    const wallet = useWallet();
    //const { Connection } = useConnection();
    const { connection } = useConnection(); // lowercase 'connection'

    async function sendAirdropToUser() {
        await connection.requestAirdrop(wallet.publicKey, 1000000000);
        alert("airdropped Sol")
    }
    

    return <div>     
        <input type="text" placeholder="Enter your address"></input>
        <button onClick={sendAirdropToUser}>Request Airdrop</button>
    </div>
}