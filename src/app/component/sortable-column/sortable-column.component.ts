import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sortable-column',
  templateUrl: './sortable-column.component.html',
  styleUrls: ['./sortable-column.component.scss']
})
export class SortableColumnComponent implements OnInit {

  @Input()
  sortColumnName: string;
  @Input()
  sortColumnDirection = 'DESC';
  @Input()
  sorted = false;

  @Output() sortColumnChanged: EventEmitter<{ sortColumnName: string, sortColumnDirection: string, sorted: boolean }> =
    new EventEmitter<{ sortColumnName: string, sortColumnDirection: string, sorted: boolean }>();

  constructor() {
  }

  ngOnInit() {
    // set the sort defaults
  }

  onSortChange() {
    this.sortColumnChanged.emit({
      sortColumnName: this.sortColumnName,
      sortColumnDirection: this.sortColumnDirection,
      sorted: this.sorted
    });
  }

  toggleSortDirection() {
    if (this.sortColumnDirection === 'ASC') {
      this.sortColumnDirection = 'DESC';
    } else {
      this.sortColumnDirection = 'ASC';
    }
    this.onSortChange();
  }

  sortColumn() {
    this.sorted = true;
    this.onSortChange();
  }
}
