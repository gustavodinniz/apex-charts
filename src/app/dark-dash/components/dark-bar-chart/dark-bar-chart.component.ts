import { Component, Input, OnInit } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexFill
} from 'ng-apexcharts';

@Component({
  selector: 'app-dark-bar-chart',
  templateUrl: './dark-bar-chart.component.html',
  styleUrls: ['./dark-bar-chart.component.css']
})
export class DarkBarChartComponent implements OnInit {

  @Input() chart!: ApexChart;
  @Input() plotOptions!: ApexPlotOptions;
  @Input() series!: ApexAxisChartSeries;
  @Input() xaxis!: ApexXAxis;
  @Input() fill!: ApexFill

  constructor() { }

  ngOnInit(): void {
    this.initializeChartOptions();
  }

  initializeChartOptions() {
    this.chart = {
      height: 300,
      width: "100%",
      type: 'bar',
      stacked: true,
    };

    this.plotOptions = {
      bar: {
        columnWidth: '30%',
        horizontal: false,
      },
    };

    this.series = [{
      name: 'PRODUCT A',
      data: [14, 25, 21, 17, 12, 13, 11, 19]
    }, {
      name: 'PRODUCT B',
      data: [13, 23, 20, 8, 13, 27, 33, 12]
    }, {
      name: 'PRODUCT C',
      data: [11, 17, 15, 15, 21, 14, 15, 13]
    }];

    this.xaxis = {
      categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2', '2012 Q3', '2012 Q4'],
    };

    this.fill = {
      opacity: 1
    }

  }

}
