import React, { useState, useRef, useEffect} from 'react'

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
      channel:'live_trades_btcusd'
    }, 
    {
      name:'Etherium',
      price:'0', 
      min:'0', 
      max:'0', 
      channel:'live_trades_ethusd'
    }],)

  

  useEffect(() => {

    const conn = new W3CWebSocket('wss://ws.bitstamp.net/')
  
    conn.onopen = function() {
    
      console.log('WebSocket Client Connected');

      subscribe(Coins)     
      
    }


   
    conn.onmessage  = function( msg ){

      //gets msg details
      const details = JSON.parse(msg.data)
      const price   = details.data.price
      const channel = details.channel

      Coins.forEach(coin => {          
        
        //finding which coin is it

        if (coin.channel == channel) {
          
          const name     = coin.name
          const maxPrice = max(coin, price)
          const minPrice = min(coin, price)     

          let updatedList = Coins.map(item => 
            {
              if (item.name == name){
                console.log(item)

                return Object.assign(item, {price:price, max:maxPrice, min:minPrice})

                // return {...item, price:price, max:maxPrice, min:minPrice}; //gets everything that was already in item, and updates it
              }
              return item; // else return unmodified item 
          });
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
      console.log(coin, price)
      let max = coin.max

      if (coin.max < price) {

        return price
      }

      return max

      
    }

    //gets the lowest price
    function min(coin, price) {

      let min = coin.min

      console.log(coin.min)
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

      <table key="table">
        <thead>
            <tr className="title-row">
              <th className="title">Market</th>
              <th className="title">Price</th>
              <th className="title">Change 24H</th>
              <th className="title">Dynamic</th>
            </tr>
        </thead>
        <tbody>

          {Coins.map( crypto =>{
            return Coin(crypto)
          })}

         

        </tbody>

    </table>

  
     
    </>
  )

  

}




export default App;
