import { Component, Input, OnInit } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexMarkers,
  ApexGrid,
  ApexTooltip,
  ApexXAxis
} from 'ng-apexcharts';

@Component({
  selector: 'app-spark-three',
  templateUrl: './spark-three.component.html',
  styleUrls: ['./spark-three.component.css']
})
export class SparkThreeComponent implements OnInit {

  @Input() chart!: ApexChart;
  @Input() series!: ApexAxisChartSeries;
  @Input() stroke: any; //ApexStroke;
  @Input() markers!: ApexMarkers;
  @Input() grid!: ApexGrid;
  @Input() tooltip!: ApexTooltip;
  @Input() colors!: any;
  @Input() xaxis!: ApexXAxis

  constructor() { }

  ngOnInit(): void {
    this.initializeChartOptions();
  }

  initializeChartOptions() {
    this.chart = {
      id: 'spark3',
      group: 'sparks',
      type: 'line',
      height: 80,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 2,
        opacity: 0.2,
      }
    };

    this.series = [{
      data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
    }];

    this.stroke = {
      curve: 'smooth'
    };

    this.markers = {
      size: 0
    };

    this.grid = {
      padding: {
        top: 20,
        bottom: 10,
        left: 110
      }
    };

    this.colors = ['#fff'];

    this.xaxis = {
      crosshairs: {
        width: 1
      },
    };

    this.tooltip = {
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function formatter(val) {
            return '';
          }
        }
      }
    };
  }

}
