export class Coin {
  id?: number;
  created?: Date;
  symbol: string;
  name: string;
  amount: number;
  price: number;
  volume24h: number;
  percentChange1h: number;
  percentChange24h: number;

  constructor(symbol: string) {
    this.symbol = symbol;
  }
}
