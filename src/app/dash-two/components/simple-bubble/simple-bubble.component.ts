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
  selector: 'app-simple-bubble',
  templateUrl: './simple-bubble.component.html',
  styleUrls: ['./simple-bubble.component.css']
})
export class SimpleBubbleComponent implements OnInit {

  @Input() series!: ApexAxisChartSeries;
  @Input() chart!: ApexChart;
  @Input() xaxis!: ApexXAxis;
  @Input() yaxis!: ApexYAxis | ApexYAxis[];
  @Input() dataLabels!: ApexDataLabels;
  @Input() title!: ApexTitleSubtitle;
  @Input() fill!: ApexFill;

  constructor() { }

  ngOnInit(): void {
    this.initializeChartOptions();
  }

  initializeChartOptions() {
    this.series = [
      {
        name: "Bubble1",
        data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: "Bubble2",
        data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: "Bubble3",
        data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: "Bubble4",
        data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60
        })
      }
    ];

    this.chart = {
      height: 400,
      width: "100%",
      type: "bubble"
    };

    this.dataLabels = {
      enabled: false
    };

    this.fill = {
      opacity: 0.8
    }

    this.title = {
      text: "Simple Bubble Chart"
    };

    this.xaxis = {
      tickAmount: 12,
      type: "category"
    };

    this.yaxis = {
      max: 70
    };

  }

  public generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

}
