import { w3cwebsocket as W3CWebSocket } from "websocket";

export const createSocketConnection = ( baseUrl, coins ) => {

    const socketClient = new W3CWebSocket( baseUrl )

    socketClient.onopen = function() 
    {
        subscribeCoins( coins )      
    }

    function subscribeCoins( coins ) 
    {
        coins.forEach(coin => {

            const subscribeOptions = {
            
                "event": "bts:subscribe",
                "data": {
                    "channel": coin.channel
                }
            }

            socketClient.send( JSON.stringify( subscribeOptions ));
        });  
    }

    return socketClient
}

export const socketOnMessage = ( socketClient, coins, setCoins ) => {

    socketClient.onmessage = ( msg ) => {

        const details = JSON.parse( msg.data )
        const price   = details.data.price
        const channel = details.channel

        if( ! price )
        {
            return
        }

        const updatedCoins = updateCoinPrices( coins, price, channel )       

        //setting new coins list
        setCoins( updatedCoins )
    }

    function updateCoinPrices( coins, price, channel ) 
    {
        return coins.map( coin => {          
        
            if ( coin.channel != channel ) 
            {
                return coin
            }

            const prices = coin.last_sales ?? []
            
            //adds the new price
            prices.push( price )

            //updates the coin
            return Object.assign( coin, { price:price, last_sales:prices } )
        });
    }
}