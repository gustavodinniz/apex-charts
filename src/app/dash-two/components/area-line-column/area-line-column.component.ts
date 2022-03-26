import { Component, Input, OnInit } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexTooltip,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexStroke,
  ApexPlotOptions,
  ApexMarkers
} from "ng-apexcharts";

@Component({
  selector: 'app-area-line-column',
  templateUrl: './area-line-column.component.html',
  styleUrls: ['./area-line-column.component.css']
})
export class AreaLineColumnComponent implements OnInit {

  @Input() series!: ApexAxisChartSeries;
  @Input() chart!: ApexChart;
  @Input() xaxis!: ApexXAxis;
  @Input() yaxis!: ApexYAxis | ApexYAxis[];
  @Input() dataLabels!: ApexDataLabels;
  @Input() title!: ApexTitleSubtitle;
  @Input() fill!: ApexFill;
  @Input() tooltip!: ApexTooltip;
  @Input() colors!: any
  @Input() labels!: any;
  @Input() stroke: ApexStroke;
  @Input() plotOptions: ApexPlotOptions;
  @Input() markers: ApexMarkers;

  constructor() { }

  ngOnInit(): void {
    this.initializeChartOptions();
  }

  initializeChartOptions() {
    this.series = [
      {
        name: "TEAM A",
        type: "column",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
      },
      {
        name: "TEAM B",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
      },
      {
        name: "TEAM C",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
      }
    ];

    this.chart = {
      height: 400,
      width: "100%",
      type: "line",
      stacked: false
    };

    this.stroke = {
      width: [0, 2, 5],
      curve: "smooth"
    };

    this.plotOptions = {
      bar: {
        columnWidth: "50%"
      }
    };

    this.colors = ['#008FFB', '#FEB019']

    this.dataLabels = {
      enabled: false
    };

    this.labels = [
      "01/01/2003",
      "02/01/2003",
      "03/01/2003",
      "04/01/2003",
      "05/01/2003",
      "06/01/2003",
      "07/01/2003",
      "08/01/2003",
      "09/01/2003",
      "10/01/2003",
      "11/01/2003"
    ];

    this.markers = {
      size: 0
    };

    this.fill = {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    };

    this.title = {
      text: 'BoxPlot - Scatter Chart',
      align: 'left'
    };

    this.tooltip = {
      shared: false,
      intersect: true
    };

    this.xaxis = {
      type: "datetime"
    };

    this.yaxis = {
      title: {
        text: "Points"
      },
      min: 0
    };

    this.tooltip = {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        }
      }
    };

  }

}
