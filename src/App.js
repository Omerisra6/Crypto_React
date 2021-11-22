import React, { useState,  useEffect} from 'react'
import Coin from './Coin'
import { w3cwebsocket as W3CWebSocket } from "websocket";
import Header from './Header';
import Poster from './Poster';


function App() {

  const [Coins, setCoins ] = useState([
    {
      name:'Bitcoin',
      price:'0', 
      min:'0', 
      max:'0', 
      short_name:'BTC',
      last_sales:[],
      channel:'live_trades_btcusd',
      logo:'assets/bitcoin-btc-logojpg.jpg'
    }, 
    {
      name:'Etherium',
      price:'0', 
      min:'0', 
      max:'0', 
      short_name:'ETH',
      last_sales:[],
      channel:'live_trades_ethusd',
      logo:'assets/etherium-logo.png'
    }],)

  

  useEffect(() => {

    //connecting to socket
    const conn = new W3CWebSocket('wss://ws.bitstamp.net/')
  
    conn.onopen = function() {
    
      console.log('WebSocket Client Connected');

      //subscribing to all socket channels
      subscribe(Coins)     
      
    }


    conn.onmessage  = function( msg ){

      //gets msg details
      const details = JSON.parse(msg.data)
      const price   = details.data.price
      const channel = details.channel

      if( ! price){
        return
      }

      Coins.forEach(coin => {          
        
        //finding which coin is it
        if (coin.channel == channel) {
          
          const name     = coin.name
          const maxPrice = max(coin, price)
          const minPrice = min(coin, price)     

          let updatedList = Coins.map(item => 
            {
              if (item.name == name){

                //removes the first element in the array if neccesery
                const prices = item.last_sales
               
                //adds the new price
                prices.push(price)

                //updates the coin
                return Object.assign(item, {price:price, max:maxPrice, min:minPrice, last_sales:prices})
              }
              return item; // else return unmodified item 
          });

          //setting new coins list
          setCoins( updatedList )
        
        }
      });
    }
    

    function subscribe(Coins) {
      Coins.forEach(coin => {

        conn.send(JSON.stringify({
          
          "event": "bts:subscribe",
          "data": {
              "channel": coin.channel
          }
      
        }));

      });
      
    }
  
    //gets the highest price
    function max(coin, price) {
      let max = coin.max

      if (coin.max < price) {

        return price
      }

      return max

      
    }

    //gets the lowest price
    function min(coin, price) {

      let min = coin.min
      if (coin.min > price || ! coin.min || coin.min == 0) {

        return price
      }

      return min


    }
    
  }, [])
 

  
  return (
    <>

      {Header()}

      {Poster()}
      <div key="table-container" className="table-container">
        <table key="table">
          <thead>
              <tr className="title-row">
              <th classsName="title"></th>
                <th classsName="title"></th>
                <th className="title">Price</th>
                <th className="title">Highet</th>
                <th className="title">Lowest</th>
                <th className="title">Latest</th>
              </tr>
          </thead>
          <tbody>

            {Coins.map( crypto =>{
              return Coin(crypto)
            })}

            

          </tbody>

      </table>
    </div>

  
     
    </>
  )

  

}




export default App;
