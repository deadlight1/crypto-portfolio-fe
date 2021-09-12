export interface OrderRequest {
  coinId: number;
  name: string;
  amount: number;
  averagePrice: number;
  orderType?: 'BUY' | 'SELL';
  margin?: number;
}
