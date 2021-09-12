import {Component, OnChanges, OnInit} from '@angular/core';
import {CountedOrder} from '../../model/counted-order';
import {CountedOrderService} from '../../service/counted-order.service';
import {ColumnFilter} from '../../model/column-filter/column.filter';
import {CountedOrderFormService} from '../../service/counted-order-form.service';
import {NotificationModalComponent} from '../../modal/notification-modal/notification-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {OrderModalType} from '../../enum/order-modal-type';
import {CountedOrderModal} from '../../modal/order-modal/counted-order-modal';


@Component({
  selector: 'app-counted-order-table',
  templateUrl: './notification-table.component.html',
  styleUrls: ['./notification-table.scss']
})
export class NotificationTableComponent implements OnInit, OnChanges {

  countedOrders: CountedOrder[] = [];
  currentPage = 1;
  paginationSize = 10;
  collectionSize = 1;
  sort = 'created';
  sortDir = 'DESC';
  visibleColumns: ColumnFilter[];


  constructor(private countedOrderService: CountedOrderService,
              private countedOrderFormService: CountedOrderFormService,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.visibleColumns = this.countedOrderFormService.initializeCountedOrderVisibleColumns();
    this.onPageChange(1);
  }

  ngOnChanges(): void {
    this.onPageChange(this.currentPage);
  }

  onPageChange(page: number): void {

    this.countedOrderService.getAllCountedOrders('', this.currentPage - 1,
      this.paginationSize,
      this.sort,
      this.sortDir)
      .subscribe((response: any) => {
        this.countedOrders = response.content;
        this.collectionSize = response.totalElements;
      });
    this.currentPage = page;
  }

  onDelete(id: string): void {
    this.countedOrderService.deleteById(id)
      .subscribe(() => {
        this.onPageChange(this.currentPage);
      });
  }

  tableSortEvent(sortData: { sortColumnName: string, sortColumnDirection: string, sorted: boolean }) {
    this.sort = sortData.sortColumnName;
    this.sortDir = sortData.sortColumnDirection;
    this.onPageChange(1);
  }

  setVisibility(index: number) {
    this.visibleColumns[index].visible = !this.visibleColumns[index].visible;
  }

  onEdit(order: CountedOrder){
    const modalRef = this.modalService.open(CountedOrderModal);
    modalRef.componentInstance.mode = OrderModalType.EDIT;
    modalRef.componentInstance.order = order;
    modalRef.closed.subscribe((result)=>{
      this.onPageChange(this.currentPage);
    })
  }

  onBuy(){
    const modalRef = this.modalService.open(CountedOrderModal);
    modalRef.componentInstance.mode = OrderModalType.BUY;
    modalRef.closed.subscribe((result)=>{
      this.onPageChange(this.currentPage);
    })
  }

  onNotification(order:CountedOrder) {
    const modalRef = this.modalService.open(NotificationModalComponent);
    modalRef.componentInstance.order = order;
  }

  onSell() {
    const modalRef = this.modalService.open(CountedOrderModal);
    modalRef.componentInstance.mode = OrderModalType.SELL;
    modalRef.closed.subscribe((result)=>{
      this.onPageChange(this.currentPage);
    })
  }

  getBuyMode(): OrderModalType {
    return OrderModalType.BUY;
  }

  getEdit() {
    return OrderModalType.BUY;
  }
}
