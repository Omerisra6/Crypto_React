import React from 'react'
import { Line } from 'react-chartjs-2'

export default function Coin(coin) {

    const data = {
        labels: coin.name,
        datasets: [{
          label: 'price',
          data: coin.last_sales,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
    }

    return (
        <tr className="coin-row" key={coin.name}>
            <td className="coin-name">{coin.name}</td>
            <td className="coin-price">{coin.price}</td>
            <td className="coin-max">{coin.max}</td>
            <td className="coin-min">{coin.min}</td>
            <Line  height={200} width={400} data={data} options={{ maintainAspectRatio: false, responsive: false }}/>
        </tr>   
    )
        
       
}
