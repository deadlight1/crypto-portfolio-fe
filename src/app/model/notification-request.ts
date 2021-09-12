export class NotificationRequest {
  coinId: number;
  orderId: string;
  profitInPercent: number;
  profit: number;
  price: number;
  percentChange1h: number;
  percentChange24h: number;
  notificationType: 'COIN' | 'ORDER';
}
