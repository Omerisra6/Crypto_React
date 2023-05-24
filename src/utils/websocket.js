import { w3cwebsocket as W3CWebSocket } from "websocket";

export const createSocket = ( coins, setCoins ) => {

    const socketURL = process.env.REACT_APP_SOCKET_URL || 'wss://ws.bitstamp.net/'

    const socketClient = new W3CWebSocket( socketURL )

    attachListenersToSocket( socketClient, coins, setCoins )

    return socketClient
}

function  attachListenersToSocket ( socketClient, coins, setCoins ) {

    socketClient.onopen = function(){
        subscribeCoins( coins, socketClient )      
    }

    socketClient.onmessage = ( msg ) => {

        const details = JSON.parse( msg.data )
        const price   = details.data.price
        const channel = details.channel

        if( ! price )
        {
            return
        }

        const updatedCoins = getUpdatedCoinPrices( coins, price, channel )

        //setting new coins list
        setCoins( updatedCoins )
    }
}

function subscribeCoins( coins, socketClient ) 
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

function getUpdatedCoinPrices( coins, price, channel ) 
{
    return coins.map( coin => {          
    
        if ( coin.channel !== channel ) 
        {
            return coin
        }

        const prices = coin.last_sales ?? []
        
        prices.push( price )

        return Object.assign( coin, { price:price, last_sales:prices } )
    });
}