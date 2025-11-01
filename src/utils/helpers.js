export const calculateAverage = (quotes) => {
  const avgBuy = quotes.reduce((a, q) => a + q.buy_price, 0) / quotes.length;
  const avgSell = quotes.reduce((a, q) => a + q.sell_price, 0) / quotes.length;
  return {
    average_buy_price: parseFloat(avgBuy.toFixed(2)),
    average_sell_price: parseFloat(avgSell.toFixed(2)),
  };
};

export const calculateSlippage = (quotes, average) => {
  return quotes.map((q) => ({
    source: q.source,
    buy_price_slippage: parseFloat(
      (
        (q.buy_price - average.average_buy_price) /
        average.average_buy_price
      ).toFixed(4)
    ),
    sell_price_slippage: parseFloat(
      (
        (q.sell_price - average.average_sell_price) /
        average.average_sell_price
      ).toFixed(4)
    ),
  }));
};
