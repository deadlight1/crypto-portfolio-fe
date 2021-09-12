import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {CountedOrderService} from '../../service/counted-order.service';
import {FormControl, FormGroup} from '@angular/forms';
import {OrderRequest} from '../../model/order-request';
import {ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Coin} from '../../model/coin';
import {CountedOrder} from '../../model/counted-order';
import {OrderModalType} from '../../enum/order-modal-type';
import {EnumUtils} from '../../_helpers/enum-utils';
import {NotificationService} from '../../service/notification.service';
import {NotificationRequest} from '../../model/notification-request';


@Component({
  selector: 'notification-modal',
  templateUrl: './notification-modal.component.html'
})
export class NotificationModalComponent implements OnInit {
  coins: Coin[];

  @Input()
  order: CountedOrder;
  @Input()
  mode: OrderModalType;
  notificationForm: FormGroup;

  @Output()
  changed: EventEmitter<string> = new EventEmitter<string>();

  constructor(public modalService: NgbActiveModal,
              private notificationService: NotificationService,
              private countedOrderService: CountedOrderService) {
  }

  ngOnInit(): void {
    if (this.order) {
      this.notificationForm = new FormGroup({
        id: new FormControl(),
        coinId: new FormControl(this.order.coinId),
        orderId: new FormControl(this.order.id),
        type: new FormControl(''),
        profitInPercent: new FormControl(),
        profit: new FormControl(),
        price: new FormControl(),
        percentChange1h: new FormControl(),
        percentChange24h: new FormControl()
      });
    } else {
      this.notificationForm = new FormGroup({
        id: new FormControl(),
        coinId: new FormControl(),
        orderId: new FormControl(),
        type: new FormControl(),
        profitInPercent: new FormControl(),
        profit: new FormControl(),
        price: new FormControl(),
        percentChange1h: new FormControl(),
        percentChange24h: new FormControl()
      });
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSave() {
    const notificationRequest: NotificationRequest = {
      coinId: this.order.coin.id,
      orderId: this.order.id,
      profit: this.notificationForm.get('profit').value,
      price: this.notificationForm.get('price').value,
      profitInPercent: this.notificationForm.get('profitInPercent').value,
      percentChange1h: this.notificationForm.get('percentChange1h').value,
      percentChange24h: this.notificationForm.get('percentChange24h').value,
      notificationType: 'ORDER'
    };
    console.log(notificationRequest)
    this.notificationService.create(notificationRequest)
      .subscribe(()=> {
        this.modalService.close();
      });
  }
}
