import {Injectable} from '@angular/core';
import {NotificationRequest} from '../model/notification-request';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) {
  }

  create(notificationRequest: NotificationRequest) {
    return this.http.post('http://localhost:8080/api/notification', notificationRequest);
  }
}
