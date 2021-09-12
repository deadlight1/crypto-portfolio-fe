import { Injectable } from '@angular/core';
import {ColumnFilter} from '../model/column-filter/column.filter';

@Injectable({
  providedIn: 'root'
})
export class CountedOrderFormService {

  constructor() {
  }

  initializeCountedOrderVisibleColumns(): ColumnFilter[] {
    return [
      new ColumnFilter('id', 'centered font-weight-bold', 'Id', true),
      new ColumnFilter('created', 'centered font-weight-bold', 'Created', true),
      new ColumnFilter('name', 'centered font-weight-bold', 'Name', true),
      new ColumnFilter('amount', 'centered font-weight-bold', 'Amount', true),
      new ColumnFilter('average_price', 'centered font-weight-bold', 'Average Price', true),
      new ColumnFilter('current_price', 'centered font-weight-bold', 'Current Price', true),
      new ColumnFilter('quantity', 'centered font-weight-bold', 'Quantity', true),
      new ColumnFilter('cost', 'centered font-weight-bold', 'Cost', true),
      new ColumnFilter('margin', 'centered font-weight-bold', 'Margin', true),
      new ColumnFilter('volume24h', 'centered font-weight-bold', 'Volume 24h', true),
      new ColumnFilter('percentChange1h', 'centered font-weight-bold', 'Percent Change 1h', true),
      new ColumnFilter('percentChange24h', 'centered font-weight-bold', 'Percent Change 24h', true),
      new ColumnFilter('profit', 'centered font-weight-bold', 'Profit', true),
      new ColumnFilter('profit_in_percents', 'centered font-weight-bold', 'Profit In Percents', true),
      new ColumnFilter('edit', 'centered font-weight-bold', 'Edit', true),
      new ColumnFilter('delete', 'centered font-weight-bold', 'Delete', true),
      new ColumnFilter('notify', 'centered font-weight-bold', 'Notify', true)
    ];
  }
}
