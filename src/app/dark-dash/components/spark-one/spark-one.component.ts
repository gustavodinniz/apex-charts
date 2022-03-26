import { Component, Input, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexMarkers,
  ApexGrid,
  ApexTooltip
} from 'ng-apexcharts';

@Component({
  selector: 'app-spark-one',
  templateUrl: './spark-one.component.html',
  styleUrls: ['./spark-one.component.css']
})
export class SparkOneComponent implements OnInit {

  @Input() chart!: ApexChart;
  @Input() series!: ApexAxisChartSeries;
  @Input() stroke: any; //ApexStroke;
  @Input() markers!: ApexMarkers;
  @Input() grid!: ApexGrid;
  @Input() tooltip!: ApexTooltip;
  @Input() colors!: any;

  constructor() { }

  ngOnInit(): void {
    this.initializeChartOptions();
  }

  initializeChartOptions() {
    this.chart = {
      id: 'spark1',
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
      data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
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
