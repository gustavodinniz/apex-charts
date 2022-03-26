import { Component, Input, OnInit } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexFill,
  ApexStroke,
  ApexTooltip
} from 'ng-apexcharts';

@Component({
  selector: 'app-dark-area-chart',
  templateUrl: './dark-area-chart.component.html',
  styleUrls: ['./dark-area-chart.component.css']
})
export class DarkAreaChartComponent implements OnInit {

  @Input() chart!: ApexChart;
  @Input() series!: ApexAxisChartSeries;
  @Input() xaxis!: ApexXAxis;
  @Input() fill!: ApexFill;
  @Input() tooltip!: ApexTooltip;
  @Input() stroke!: ApexStroke;

  constructor() { }

  ngOnInit(): void {
    this.initializeChartOptions();
  }

  initializeChartOptions() {
    this.chart = {
      height: 380,
      type: 'area',
      stacked: false,
    };

    this.stroke = {
      curve: 'straight'
    }

    this.series = [{
      name: "Music",
      data: [11, 15, 26, 20, 33, 27]
    },
    {
      name: "Photos",
      data: [32, 33, 21, 42, 19, 32]
    },
    {
      name: "Files",
      data: [20, 39, 52, 11, 29, 43]
    }
    ];

    this.xaxis = {
      categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2'],
    };

    this.fill = {
      opacity: 1,
    }

    this.tooltip = {
      followCursor: true
    }

  }

}
