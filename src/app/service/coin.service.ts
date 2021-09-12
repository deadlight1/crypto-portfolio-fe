import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient) {
  }

  public search(name?: string) {
    if (name) {
      return this.http.get(`http://localhost:8080/api/coin?name=${name}`);
    } else {
      return this.http.get(`http://localhost:8080/api/coin`);
    }
  }
}
