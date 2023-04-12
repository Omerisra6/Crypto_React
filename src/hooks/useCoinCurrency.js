import { useEffect, useState } from "react";
import { createSocketConnection, socketOnMessage } from "../utils/websocket";

export default function useCoins( ) 
{
    const baseUrl = 'wss://ws.bitstamp.net/'
    const [coins, setCoins ] = useState(
        [
            {
                name:'Bitcoin',
                short_name:'BTC',
                channel:'live_trades_btcusd',
                logo:'assets/bitcoin-icon.svg'
            }, 
            {
                name:'Ethereum',
                short_name:'ETH',
                channel:'live_trades_ethusd',
                logo:'assets/ethereum-icon.svg'
            }
        ]
    )
    
    const socketClient = createSocketConnection( baseUrl, coins )
    useEffect( () => {

        socketOnMessage( socketClient, coins, setCoins )
    }, [ coins, socketClient ] )

    return coins
}