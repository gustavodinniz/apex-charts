import { Component, Input, OnInit } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexTooltip,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexYAxis
} from "ng-apexcharts";

@Component({
  selector: 'app-boxplot-scatter',
  templateUrl: './boxplot-scatter.component.html',
  styleUrls: ['./boxplot-scatter.component.css']
})
export class BoxplotScatterComponent implements OnInit {

  @Input() series!: ApexAxisChartSeries;
  @Input() chart!: ApexChart;
  @Input() xaxis!: ApexXAxis;
  @Input() yaxis!: ApexYAxis | ApexYAxis[];
  @Input() dataLabels!: ApexDataLabels;
  @Input() title!: ApexTitleSubtitle;
  @Input() fill!: ApexFill;
  @Input() tooltip!: ApexTooltip;
  @Input() colors!: any;

  constructor() { }

  ngOnInit(): void {
    this.initializeChartOptions();
  }

  initializeChartOptions() {
    this.series = [
      {
        name: 'box',
        type: 'boxPlot',
        data: [
          {
            x: new Date('2017-01-01').getTime(),
            y: [54, 66, 69, 75, 88]
          },
          {
            x: new Date('2018-01-01').getTime(),
            y: [43, 65, 69, 76, 81]
          },
          {
            x: new Date('2019-01-01').getTime(),
            y: [31, 39, 45, 51, 59]
          },
          {
            x: new Date('2020-01-01').getTime(),
            y: [39, 46, 55, 65, 71]
          },
          {
            x: new Date('2021-01-01').getTime(),
            y: [29, 31, 35, 39, 44]
          }
        ]
      },
      {
        name: 'outliers',
        type: 'scatter',
        data: [
          {
            x: new Date('2017-01-01').getTime(),
            y: 32
          },
          {
            x: new Date('2018-01-01').getTime(),
            y: 25
          },
          {
            x: new Date('2019-01-01').getTime(),
            y: 64
          },
          {
            x: new Date('2020-01-01').getTime(),
            y: 27
          },
          {
            x: new Date('2020-01-01').getTime(),
            y: 78
          },
          {
            x: new Date('2021-01-01').getTime(),
            y: 15
          }
        ]
      }
    ];

    this.chart = {
      height: 400,
      width: "100%",
      type: "boxPlot"
    };

    this.colors = ['#008FFB', '#FEB019']

    this.dataLabels = {
      enabled: false
    };

    this.fill = {
      opacity: 0.8
    }

    this.title = {
      text: 'BoxPlot - Scatter Chart',
      align: 'left'
    };

    this.tooltip = {
      shared: false,
      intersect: true
    };

    this.xaxis = {
      type: 'datetime',
    };

    this.yaxis = {
      max: 70
    };

  }

}
