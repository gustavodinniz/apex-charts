import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexFill,
  ApexLegend
} from "ng-apexcharts";

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.css']
})
export class StackedBarChartComponent implements OnInit {

  @Input() legend!: ApexLegend;
  @Input() fill!: ApexFill;
  @Input() title!: ApexTitleSubtitle;
  @Input() plotOptions!: ApexPlotOptions;
  @Input() chart!: ApexChart;
  @Input() series!: ApexAxisChartSeries;
  @Input() xaxis!: ApexXAxis;
  @Input() stroke!: ApexStroke;
  @Input() tooltip!: ApexTooltip;
  @Input() dataLabels!: ApexDataLabels;

  constructor() { }

  ngOnInit(): void {
    this.initializeChartOptions();
  }

  initializeChartOptions() {
    this.series = [
      {
        name: "Marine Sprite",
        data: [44, 55, 41, 37, 22, 43, 21]
      },
      {
        name: "Striking Calf",
        data: [53, 32, 33, 52, 13, 43, 32]
      },
      {
        name: "Tank Picture",
        data: [12, 17, 11, 9, 15, 11, 20]
      },
      {
        name: "Bucket Slope",
        data: [9, 7, 5, 8, 6, 9, 4]
      },
      {
        name: "Reborn Kid",
        data: [25, 12, 19, 32, 25, 24, 10]
      }
    ];

    this.chart = {
      type: "bar",
      height: 400,
      width: "100%",
      stacked: true,
      stackType: "100%"
    };

    this.plotOptions = {
      bar: {
        horizontal: true
      }
    };

    this.stroke = {
      width: 1,
      colors: ["#fff"]
    };

    this.title = {
      text: "100% Stacked Bar"
    };

    this.xaxis = {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014]
    };

    this.tooltip = {
      y: {
        formatter: function (val) {
          return val + "K";
        }
      }
    };

    this.fill = {
      opacity: 1
    };

    this.legend = {
      position: "top",
      horizontalAlign: "left",
      offsetX: 40
    };
  }

}
