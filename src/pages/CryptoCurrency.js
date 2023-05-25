import React from "react";
import Poster from "../components/Poster";
import CoinsTable from "../components/CoinsTable";
import { SocketProvider } from "../contexts/SocketContext";

export default function CryptoCurrency() {
  return (
    <div className="crypto-page">
      <Poster />
      <SocketProvider>
        <CoinsTable />
      </SocketProvider>
    </div>
  );
}
