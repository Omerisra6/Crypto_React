export function socketOnOpen(coins, socketClient) {
  coins.forEach((coin) => {
    const subscribeOptions = {
      event: "bts:subscribe",
      data: {
        channel: coin.channel,
      },
    };

    socketClient.send(JSON.stringify(subscribeOptions));
  });
}

export function socketOnMessage(msg, coins, setCoins) {
  const details = JSON.parse(msg.data);
  const price = details.data.price;
  const channel = details.channel;

  if (!price) {
    return;
  }

  const updatedCoins = getUpdatedCoinPrices(coins, price, channel);

  //setting new coins list
  setCoins(updatedCoins);
}
function getUpdatedCoinPrices(coins, price, channel) {
  return coins.map((coin) => {
    if (coin.channel !== channel) {
      return coin;
    }

    const prices = coin.last_sales ?? [];

    prices.push(price);

    return Object.assign(coin, { price: price, last_sales: prices });
  });
}
