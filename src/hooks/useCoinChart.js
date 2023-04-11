export default function useCoinChart( coin ) 
{
  const backgroundColor = getChartColor( coin )
  const chartWidth  = 150  
  const chartHeight = 75
  const maxPoints   = 6

  const chartData = {
      labels: coin.name,
      datasets: [{
        label: 'price',
        labels: [],
        data: coin.last_sales ? coin.last_sales.slice( -6 ) : [],
        fill: true,
        backgroundColor,
        showLine: false ,
        tension: 0.1,
        borderWidth: 0,
        scaleShowLabels : false,
        maxPoints,
      }],
  }

  const chartOptions = { 
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
      },
  }
    
  return { chartData, chartOptions, chartWidth, chartHeight }
}

function getChartColor( coin )
{
  const positiveColor = 'rgb(45, 206, 84)'
  const negativeColor = 'rgb(255, 0, 0)'

  let backgroundColor = positiveColor
  const previousSale  = coin.last_sales ? coin.last_sales[  coin.last_sales.length - 2 ] : 0
  
  if ( previousSale > coin.price ) 
  {   
    backgroundColor = negativeColor
  }

  return backgroundColor
}
