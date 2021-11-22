import React from 'react'
import { Line } from 'react-chartjs-2'

export default function Coin(coin) {

    //checks the coin change (positive/negative)
    let background = 'rgb(255, 0, 0)'
    
    if ( coin.last_sales[coin.last_sales.length - 2] < coin.price) {
        
        background = 'rgb(45, 206, 84)'
    }
    
    //stes the chart options and data
    const data = {
        labels: coin.name,
        datasets: [{
          label: '',
          labels:[],
          data: coin.last_sales,
          fill: true,
          backgroundColor: background,
          showLine: false ,
          tension: 0.1,
          borderWidth: 0,
          scaleShowLabels : false,
          
        
        }],
        
       
    }

    const options = { 
        maintainAspectRatio: false, responsive: false,  
            
        plugins: {
            legend: {
              display: false
            }
        },
        scales: {
            y: {
              ticks: {
                display: false,
              }
            },
            x: {
                ticks:{
                    display: false,
                }
            }
        }
       
}

    return (
        <tr className="coin-row" key={coin.name}>
            <td className="coin-logo"><img src={coin.logo}/></td>
            <td className="coin-name">
                <h4>{coin.name}</h4>
                <h4 className="short-name">({coin.short_name})</h4>
            </td>
            <td className="coin-price">{coin.price}</td>
            <td className="coin-max">{coin.max}</td>
            <td className="coin-min">{coin.min}</td>
            <Line width={150} height={75} data={data} className="chart" options={options}/>
        </tr>   
    )
        
       
}
