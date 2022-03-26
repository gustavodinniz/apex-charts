import { Component, Input, OnInit } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexLegend,
  ApexPlotOptions,
} from 'ng-apexcharts';

@Component({
  selector: 'app-radial-bar-bottom',
  templateUrl: './radial-bar-bottom.component.html',
  styleUrls: ['./radial-bar-bottom.component.css']
})
export class RadialBarBottomComponent implements OnInit {

  @Input() chart!: ApexChart;
  @Input() plotOptions!: ApexPlotOptions;
  @Input() series!: any;
  @Input() stroke: any; //ApexStroke;
  @Input() labels!: any;
  @Input() legend!: ApexLegend

  constructor() { }

  ngOnInit(): void {
    this.initializeChartOptions();
  }

  initializeChartOptions() {
    this.chart = {
      type: 'radialBar',
      height: 350,
      width: 380,
    };

    this.plotOptions = {
      radialBar: {
        inverseOrder: true,
        hollow: {
          margin: 5,
          size: '48%',
          background: 'transparent',

        },
        track: {
          show: false,
        },
        startAngle: -180,
        endAngle: 180

      },
    }

    this.series = [71, 63, 77];

    this.stroke = {
      lineCap: 'round'
    };

    this.labels = ['June', 'May', 'April'];

    this.legend = {
      show: true,
      floating: true,
      position: 'right',
      offsetX: 70,
      offsetY: 240
    };
  }

}
