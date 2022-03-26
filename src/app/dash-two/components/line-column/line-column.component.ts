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
  selector: 'app-line-column',
  templateUrl: './line-column.component.html',
  styleUrls: ['./line-column.component.css']
})
export class LineColumnComponent implements OnInit {

  @Input() series!: ApexAxisChartSeries;
  @Input() chart!: ApexChart;
  @Input() xaxis!: ApexXAxis;
  @Input() stroke: any; //ApexStroke;
  @Input() yaxis!: ApexYAxis | ApexYAxis[];
  @Input() dataLabels!: ApexDataLabels;
  @Input() title!: ApexTitleSubtitle;
  @Input() fill!: ApexFill;
  @Input() tooltip!: ApexTooltip;
  @Input() labels!: any;

  constructor() { }

  ngOnInit(): void {
    this.initializeChartOptions();
  }

  initializeChartOptions() {
    this.series = [
      {
        name: "Website Blog",
        type: "column",
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
      },
      {
        name: "Social Media",
        type: "line",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      }
    ];

    this.chart = {
      height: 400,
      width: "100%",
      type: "line"
    };

    this.dataLabels = {
      enabled: true,
      enabledOnSeries: [1]
    };

    this.stroke = {
      width: [0, 4]
    };

    this.title = {
      text: "Traffic Sources"
    };

    this.labels = [
      "01 Jan 2001",
      "02 Jan 2001",
      "03 Jan 2001",
      "04 Jan 2001",
      "05 Jan 2001",
      "06 Jan 2001",
      "07 Jan 2001",
      "08 Jan 2001",
      "09 Jan 2001",
      "10 Jan 2001",
      "11 Jan 2001",
      "12 Jan 2001"
    ]

    this.xaxis = {
      type: "datetime"
    };

    this.yaxis = [
      {
        title: {
          text: "Website Blog"
        }
      },
      {
        opposite: true,
        title: {
          text: "Social Media"
        }
      }
    ];

  }

}
