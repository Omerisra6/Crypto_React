import React from 'react'
import { Bar } from 'react-chartjs-2'

export default function Coin(coin) {
    return (
        <tr className="coin-row" key={coin.name}>
           <Bar  data={[10,20,30,40]}/>
            <td className="coin-name">{coin.name}</td>
            <td className="coin-price">{coin.price}</td>
            <td className="coin-max">{coin.max}</td>
            <td className="coin-min">{coin.min}</td>
        </tr>   
    )
        
       
}
