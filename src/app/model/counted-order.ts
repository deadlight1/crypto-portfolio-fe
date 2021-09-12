import {Coin} from './coin';

export interface CountedOrder {
  id?: string;
  created?: Date;
  symbol: string;
  name: string;
  coinId: number;
  amount: number;
  averagePrice: number;
  quantity: number;
  cost: number;
  margin: number;
  orderType: 'BUY' | 'SELL';
  profit: number;
  profitInPercents: number;
  coin: Coin;
}
