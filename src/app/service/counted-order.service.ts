import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OrderRequest} from '../model/order-request';

@Injectable({
  providedIn: 'root'
})
export class CountedOrderService {

  constructor(private http: HttpClient) {
  }

  public getAllCountedOrders(id: string, start: number, size: number, sort: string, sortDir: string) {
    return this.http.get(`http://localhost:8080/api/order?id=${id}&start=${start}&size=${size}&sort=${sort}&sortDir=${sortDir}`);
  }

  createBuy(orderRequest: OrderRequest) {
    return this.http.post('http://localhost:8080/api/order', orderRequest);
  }

  deleteById(id: string) {
    return this.http.delete(`http://localhost:8080/api/order/${id}`);
  }

  update(id: string, orderRequest: any) {
    return this.http.put(`http://localhost:8080/api/order/${id}`,orderRequest);
  }

  createSell(orderRequest: OrderRequest) {
    return this.http.post('http://localhost:8080/api/order_sell', orderRequest);
  }
}
