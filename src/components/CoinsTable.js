import Coin from "./Coin";

import { useEffect, useState } from "react";
import { useSocket } from "../contexts/SocketContext";
import { socketOnMessage, socketOnOpen } from "../utils/SocketHandlers";

export default function CoinsTable() {
  const socket = useSocket();

  const [coins, setCoins] = useState([
    {
      name: "Bitcoin",
      short_name: "BTC",
      channel: "live_trades_btcusd",
      logo: "assets/bitcoin-icon.svg",
    },
    {
      name: "Ethereum",
      short_name: "ETH",
      channel: "live_trades_ethusd",
      logo: "assets/ethereum-icon.svg",
    },
  ]);

  useEffect(() => {
    socket.onopen = () => {
      socketOnOpen(coins, socket);
    };
    socket.onmessage = (msg) => {
      socketOnMessage(msg, coins, setCoins);
    };
  }, [socket, coins]);

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
            {coins.map((crypto) => {
              return <Coin key={crypto.name} coin={crypto} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
