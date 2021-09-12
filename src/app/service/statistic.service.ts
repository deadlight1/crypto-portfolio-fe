import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {
  constructor(private http: HttpClient) {
  }

  public getMostProfitable() {
    return this.http.get('http://localhost:8080/api/statistic/most_profitable');
  }

  getMostProfitableOrders() {
    return this.http.get('http://localhost:8080/api/statistic/most_profitable_orders');
  }

  getPortfolioStatistic(){
    return this.http.get('http://localhost:8080/api/statistic/portfolio_statistic');
  }
}
