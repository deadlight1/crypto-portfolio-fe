import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {CountedOrderService} from '../../service/counted-order.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OrderRequest} from '../../model/order-request';
import {ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CoinService} from '../../service/coin.service';
import {Coin} from '../../model/coin';
import {CountedOrder} from '../../model/counted-order';
import {OrderModalType} from '../../enum/order-modal-type';
import {EnumUtils} from '../../_helpers/enum-utils';


@Component({
  selector: 'counted-order-modal',
  templateUrl: './counted-order-modal.html'
})
export class CountedOrderModal implements OnInit {
  coins: Coin[];

  @Input()
  order: CountedOrder;
  @Input()
  mode: OrderModalType;
  orderFormGroup: FormGroup;

  @Output()
  changed: EventEmitter<string> = new EventEmitter<string>();

  constructor(public modalService: NgbActiveModal,
              private coinService: CoinService,
              private countedOrderService: CountedOrderService) {
  }

  ngOnInit(): void {
    if (this.order) {
      this.orderFormGroup = new FormGroup({
        id: new FormControl(this.order.id),
        coinId: new FormControl(this.order.coinId),
        search: new FormControl(''),
        orderType: new FormControl(this.order.orderType),
        name: new FormControl(this.order.name),
        amount: new FormControl(this.order.amount, [Validators.min(0), Validators.required]),
        averagePrice: new FormControl(this.order.averagePrice, [Validators.min(0), Validators.required])
      });
    } else {
      this.orderFormGroup = new FormGroup({
        name: new FormControl(''),
        search: new FormControl(),
        coinId: new FormControl(),
        orderType: new FormControl(),
        amount: new FormControl('', [Validators.min(0), Validators.required]),
        averagePrice: new FormControl('', [Validators.min(0), Validators.required]),
        margin: new FormControl(0, [Validators.min(0)])
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
    const margin = this.orderFormGroup.get('margin')?.value;
    const orderRequest: OrderRequest = {
      coinId: this.orderFormGroup.get('coinId')?.value,
      name: this.orderFormGroup.get('name')?.value,
      amount: this.orderFormGroup.get('amount')?.value,
      averagePrice: this.orderFormGroup.get('averagePrice')?.value,
      margin: margin > 0 ? margin : 1
    };
    if (EnumUtils.isBuyMode(this.mode)) {
      orderRequest.orderType = 'BUY';
      this.countedOrderService.createBuy(orderRequest)
        .subscribe(() => {
          this.modalService.close('Saved');
        });
    } else if (EnumUtils.isEditMode(this.mode)) {
      this.countedOrderService.update(this.order.id, {
        name: orderRequest.name,
        amount: orderRequest.amount,
        averagePrice: orderRequest.averagePrice,
        margin: orderRequest.margin
      })
        .subscribe(() => {
          this.modalService.close('Saved');
        });
    } else if (EnumUtils.isSellMode(this.mode)) {
      orderRequest.orderType = 'SELL';
      this.countedOrderService.createSell(orderRequest)
        .subscribe(() => {
          this.modalService.close('Saved');
        });
    }
  }

  onSearch() {
    this.coinService.search(this.orderFormGroup.get('search').value)
      .subscribe((coins: Coin[]) => {
        this.coins = coins;
      });
  }

  isBuyMode() {
    return EnumUtils.isBuyMode(this.mode);
  }

  isEditMode() {
    return EnumUtils.isEditMode(this.mode);
  }


}
