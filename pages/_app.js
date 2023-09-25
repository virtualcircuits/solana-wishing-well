import Head from 'next/head'
import '../styles/global.css'
// Import WalletConnectionProvider from components
import { WalletConnectProvider } from '../components/WalletConnectProvider'
// Import the solana wallet css
import '@solana/wallet-adapter-react-ui/styles.css'
 

function MyApp({ Component, pageProps }) {
    return (
        <>
            <div style={{ textAlign: 'center', color: 'white', fontSize: '30px' }}>Solana Blockchain</div>
            <div style={{ textAlign: 'center', color: 'white', fontSize: '50px' }}>Wish List</div>
            <div style={{ textAlign: 'center', color: 'white', fontSize: '11px' }}>INSTRUCTIONS: {'\u00A0'} 1. Connect to Phantom Wallet, {'\u00A0'} {'\u00A0'} 2. Click Initialize for New User, {'\u00A0'} {'\u00A0'} 3. Add your Name and Wish and Press Enter, {'\u00A0'} {'\u00A0'} 4. Click the Check Box for Wish Granted, {'\u00A0'} {'\u00A0'} 5. Click the Trash Icon if you want to delete a Wish Granted </div>

            <main>
                {/* Wrap provider around App */}
                <WalletConnectProvider>
                    <Component {...pageProps} />
                </WalletConnectProvider>
            </main>
           
        </>
    )
}

export default MyApp






