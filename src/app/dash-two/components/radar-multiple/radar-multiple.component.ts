import { Component, Input, OnInit } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexMarkers,
  ApexStroke
} from "ng-apexcharts";

@Component({
  selector: 'app-radar-multiple',
  templateUrl: './radar-multiple.component.html',
  styleUrls: ['./radar-multiple.component.css']
})
export class RadarMultipleComponent implements OnInit {

  @Input() series!: ApexAxisChartSeries;
  @Input() chart!: ApexChart;
  @Input() xaxis!: ApexXAxis;
  @Input() yaxis!: ApexYAxis | ApexYAxis[];
  @Input() dataLabels!: ApexDataLabels;
  @Input() title!: ApexTitleSubtitle;
  @Input() fill!: ApexFill;
  @Input() markers!: ApexMarkers;
  @Input() stroke!: ApexStroke;

  constructor() { }

  ngOnInit(): void {
    this.initializeChartOptions();
  }

  initializeChartOptions() {
    this.series = [
      {
        name: "Series Blue",
        data: [80, 50, 30, 40, 100, 20]
      },
      {
        name: "Series Green",
        data: [20, 30, 40, 80, 20, 80]
      },
      {
        name: "Series Orange",
        data: [44, 76, 78, 13, 43, 10]
      }
    ];

    this.chart = {
      height: 350,
      type: "radar",
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      }
    };

    this.stroke = {
      width: 0
    };

    this.dataLabels = {
      enabled: false
    };

    this.fill = {
      opacity: 0.4
    };

    this.markers = {
      size: 0
    };

    this.title = {
      text: "Radar Chart - Multi Series"
    };

    this.xaxis = {
      categories: ["2011", "2012", "2013", "2014", "2015", "2016"]
    };

  }

}
