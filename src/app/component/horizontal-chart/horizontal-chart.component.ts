import {Component, Input, OnInit} from '@angular/core';
import {Label} from 'ng2-charts';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';

@Component({
  selector: 'app-horizontal-chart',
  templateUrl: './horizontal-chart.component.html',
  styleUrls: ['./horizontal-chart.component.css']
})
export class HorizontalChartComponent implements OnInit {

  constructor() {
  }

  @Input()
  barChartLabels: Label[] = [];
  @Input()
  barChartType: ChartType = 'horizontalBar';
  @Input()
  barChartLegend = true;
  @Input()
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  @Input()
  barChartData: ChartDataSets[] = [
    {data: [], label: 'Loading'}
  ];

  ngOnInit(): void {

  }

}
