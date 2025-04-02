import { WalletAccountError } from "@solana/wallet-adapter-base";
import { useWallet } from "@solana/wallet-adapter-react";
// import { Connection } from "@solana/wallet-adapter-react";


export function Airdrop() {
    //hooks in react
    const wallet = useWallet();
    //const { Connection } = useConnection();

    function sendAirdropToUser() {
        alert("hi there")
        //await Connection.requestAirdrop(wallet.publicKey, 1000000000);
    }
    

    return <div>     
        hi from airdrop
        <input type="text" placeholder="Enter your address"></input>
        <button onClick={sendAirdropToUser}>Request Airdrop</button>
    </div>
}

//<button onClick={sendAirdropToUser}>Request Airdrop</button>
//whats wrong?
// 1. The `useConnection` hook is not imported from the correct package.
//how to fix it?
//telll
// 1. The `useConnection` hook should be imported from `@solana/wallet-adapter-react`.

// 2. The `Connection` variable is being redefined in the component scope, which is not necessary.
// 3. The `useConnection` hook is not being used correctly.
// 4. The `sendAirdropToUser` function is not properly handling the asynchronous nature of the `requestAirdrop` method.
// 5. The `requestAirdrop` method should be called with the correct parameters.
// 6. The `alert` statement is not necessary and can be removed.
// 7. The `useWallet` hook should be used to get the wallet's public key.