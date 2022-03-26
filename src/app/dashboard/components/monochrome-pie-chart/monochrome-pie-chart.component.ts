import { Component, Input, OnInit } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle
} from "ng-apexcharts";

@Component({
  selector: 'app-monochrome-pie-chart',
  templateUrl: './monochrome-pie-chart.component.html',
  styleUrls: ['./monochrome-pie-chart.component.css']
})
export class MonochromePieChartComponent implements OnInit {

  @Input() chart!: ApexChart;
  @Input() title!: ApexTitleSubtitle;
  @Input() responsive!: ApexResponsive[];
  @Input() labels: any;
  @Input() theme!: ApexTheme;
  @Input() series!: ApexNonAxisChartSeries;

  constructor() { }

  ngOnInit(): void {
    this.initializeChartOptions();
  }

  initializeChartOptions() {
    this.series = [25, 15, 44, 55, 41, 17];

    this.chart = {
      height: 400,
      width: "100%",
      type: "pie"
    };

    this.labels = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    this.theme = {
      monochrome: {
        enabled: true
      }
    };

    this.title = {
      text: "Number of leads"
    }

    this.responsive = [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  }
}
