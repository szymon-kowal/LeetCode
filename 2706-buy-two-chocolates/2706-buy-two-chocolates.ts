function buyChoco(prices: number[], money: number): number {
    prices = prices.sort((a,b) => (a - b));
    if (prices[0] + prices[1] <= money) return (money - (prices[0] + prices[1]))
    return money;
};