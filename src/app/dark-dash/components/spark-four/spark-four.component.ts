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
  selector: 'app-spark-four',
  templateUrl: './spark-four.component.html',
  styleUrls: ['./spark-four.component.css']
})
export class SparkFourComponent implements OnInit {

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
      id: 'spark4',
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
      data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61]
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
