import Coin from './Coin'
import { createSocket } from '../utils/websocket'
import { useEffect, useRef, useState } from 'react'

export default function CoinsTable() 
{
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

    const socketClientRef = useRef( null )

    useEffect(() => {

        socketClientRef.current = socketClientRef.current ?? createSocket( coins, setCoins )
        
    }, [ coins ])
    
    
    
    return (
        <div key="table-container" className="table-container">
            <div className="table-wrapper">
            <table key="table">
                <thead>
                    <tr className="title-row">
                        <th className="title">Market</th>
                        <th className="title">Price</th>
                        <th className="title">Highet</th>
                        <th className="title">Lowest</th>
                        <th className="title"></th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map( crypto => {

                        return <Coin key={ crypto.name } coin={ crypto }/>
                    })}
                </tbody>
            </table>
            </div>
        </div>
    )
}