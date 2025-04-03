import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import React from 'react';

export function SignMessage() {
    const { publickey, SignMessage} = useWallet();
    
    async function onClick() {
        if (!publickey) throw new Error("Wallet not connected");
        if (!SignMessage) throw new Error("Wallet isnt supporting signing of messages");

        const message = document.getElementById("message").value;
        const encodedMessage = newTextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);

        if (!ed25519.verify(signature, encodedMessage, publickey.toBytes())) throw new Error('Message Signature Invalid');
        alert('success', `Message signature: ${bs58.encode(signature)}`);
    };

    return (
        <div>
            <input id='message' type='text' placeholder="Message" />
            <button onClick={onClick}>
                Sign the Message
            </button>
        </div>
    );
};