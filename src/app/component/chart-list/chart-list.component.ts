import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {StatisticService} from '../../service/statistic.service';
import {MostProfitableCoin} from '../../model/most-profitable-coin';

@Component({
  selector: 'app-chart-list',
  templateUrl: './chart-list.component.html',
  styleUrls: ['./chart-list.component.css']
})
export class ChartListComponent implements OnInit {
  constructor(private statisticService: StatisticService) {
  }

  portfolioStatistic: { startPrice: number, currentPrice: number, profit: number };
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

  @Input()
  barChartLabelsOrder: Label[] = [];
  @Input()
  barChartTypeOrder: ChartType = 'horizontalBar';
  @Input()
  barChartLegendOrder = true;
  @Input()
  barChartOptionsOrder: ChartOptions = {
    responsive: true,
  };
  @Input()
  barChartDataOrder: ChartDataSets[] = [
    {data: [], label: 'Loading'}
  ];

  ngOnInit(): void {
    this.statisticService.getMostProfitable()
      // @ts-ignore
      .subscribe((mostProfitable: MostProfitableCoin[]) => {
        const lables: Label[] = [];
        const dataa: number[] = [];
        for (let i = 0; i < mostProfitable.length; i++) {
          lables.push(mostProfitable[i].name);
          dataa.push(mostProfitable[i].profit);
        }
        this.barChartLabels = lables;
        this.barChartData = [{data: dataa, label: 'Most Profitable Coins'}];
      });
    this.statisticService.getMostProfitableOrders()
      // @ts-ignore
      .subscribe((mostProfitable: MostProfitableCoin[]) => {
        const lables: Label[] = [];
        const dataa: number[] = [];
        for (let i = 0; i < mostProfitable.length; i++) {
          lables.push(mostProfitable[i].name);
          dataa.push(mostProfitable[i].profit);
        }
        this.barChartLabelsOrder = lables;
        this.barChartDataOrder = [{data: dataa, label: 'Most Profitable Orders'}];
      });
    this.statisticService.getPortfolioStatistic()
      .subscribe((portfolioStatistic: { startPrice: number, currentPrice: number, profit: number }) => {
        this.portfolioStatistic = portfolioStatistic;
      });

  }
}
