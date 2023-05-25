import React, { useContext } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const socketURL = process.env.REACT_APP_SOCKET_URL || 'wss://ws.bitstamp.net/'
const socket    = new W3CWebSocket( socketURL )

export const SocketContext = React.createContext( null );

export const useSocket = () => {
    
    return useContext( SocketContext )  
}

export const SocketProvider = ( { children } ) => {

    return <SocketContext.Provider value={ socket } children={ children }/>
}