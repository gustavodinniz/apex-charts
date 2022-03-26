import { Component, Input, OnInit } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexMarkers,
  ApexGrid,
  ApexTooltip,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexLegend,
} from 'ng-apexcharts';

@Component({
  selector: 'app-line-adwords',
  templateUrl: './line-adwords.component.html',
  styleUrls: ['./line-adwords.component.css']
})
export class LineAdwordsComponent implements OnInit {

  @Input() chart!: ApexChart;
  @Input() series!: ApexAxisChartSeries;
  @Input() stroke: any; //ApexStroke;
  @Input() markers!: ApexMarkers;
  @Input() grid!: ApexGrid;
  @Input() colors!: any;
  @Input() xaxis!: ApexXAxis
  @Input() title!: ApexTitleSubtitle
  @Input() subtitle!: ApexTitleSubtitle
  @Input() legend!: ApexLegend
  @Input() labels!: any;

  constructor() { }


  ngOnInit(): void {
    this.initializeChartOptions();
  }

  initializeChartOptions() {
    this.chart = {
      height: 300,
      width: "100%",
      type: 'line',
      zoom: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        top: 3,
        left: 2,
        blur: 4,
        opacity: 1,
      }
    };

    this.series = [{
      name: "Music",
      data: [1, 15, 26, 20, 33, 27]
    },
    {
      name: "Photos",
      data: [3, 33, 21, 42, 19, 32]
    },
    {
      name: "Files",
      data: [0, 39, 52, 11, 29, 43]
    }
    ];

    this.title = {
      text: 'Media',
      align: 'left',
      offsetY: 25,
      offsetX: 20
    };

    this. subtitle = {
      text: 'Statistics',
      offsetY: 55,
      offsetX: 20
    };

    this.stroke = {
      curve: 'smooth',
      width: 5
    };

    this.markers = {
      size: 1,
      strokeWidth: 0,
      hover: {
        size: 1
      }
    };

    this.grid = {
      show: true,
      padding: {
        bottom: 0
      }
    };

    this.labels = ['01/15/2002', '01/16/2002', '01/17/2002', '01/18/2002', '01/19/2002', '01/20/2002'];

    this.colors = ['#fff'];

    this.xaxis = {
      tooltip: {
        enabled: false
      }
    };

    this.legend = {
      position: 'top',
      horizontalAlign: 'right',
      offsetY: -20
    }
  }

}
