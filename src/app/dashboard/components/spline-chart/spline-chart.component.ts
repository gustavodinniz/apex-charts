import { Component, Input, OnInit, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";

@Component({
  selector: 'app-spline-chart',
  templateUrl: './spline-chart.component.html',
  styleUrls: ['./spline-chart.component.css']
})
export class SplineChartComponent implements OnInit {

  @Input() chart!: ApexChart;
  @Input() series!: ApexAxisChartSeries;
  @Input() xaxis!: ApexXAxis;
  @Input() stroke!: ApexStroke;
  @Input() tooltip!: ApexTooltip;
  @Input() dataLabels!: ApexDataLabels;

  constructor() {
  }

  ngOnInit(): void {
    this.initializeChartOptions();
  }

  private initializeChartOptions(): void {

    this.series = [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41]
      }
    ];

    this.chart = {
      height: 400,
      width: "100%",
      type: "area"
    };

    this.dataLabels = {
      enabled: false
    };

    this.stroke = {
      curve: "smooth"
    };

    this.xaxis = {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z"
      ]
    };

    this.tooltip = {
      x: {
        format: "dd/MM/yy HH:mm"
      }
    };
  }

}
