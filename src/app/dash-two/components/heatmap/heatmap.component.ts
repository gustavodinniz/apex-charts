import { Component, Input, OnInit } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexTooltip,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexPlotOptions
} from "ng-apexcharts";

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent implements OnInit {

  @Input() series!: ApexAxisChartSeries;
  @Input() chart!: ApexChart;
  @Input() xaxis!: ApexXAxis;
  @Input() yaxis!: ApexYAxis | ApexYAxis[];
  @Input() dataLabels!: ApexDataLabels;
  @Input() title!: ApexTitleSubtitle;
  @Input() fill!: ApexFill;
  @Input() tooltip!: ApexTooltip;
  @Input() colors!: any;
  @Input() plotOptions!: ApexPlotOptions;

  constructor() { }

  ngOnInit(): void {
    this.initializeChartOptions();
  }

  initializeChartOptions() {
    this.series = [
      {
        name: "Jan",
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: "Feb",
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: "Mar",
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: "Apr",
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: "May",
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: "Jun",
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: "Jul",
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: "Aug",
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      },
      {
        name: "Sep",
        data: this.generateData(20, {
          min: -30,
          max: 55
        })
      }
    ];

    this.chart = {
      height: 400,
      width: "100%",
      type: "heatmap"
    };

    this.plotOptions = {
      heatmap: {
        shadeIntensity: 0.5,
        colorScale: {
          ranges: [
            {
              from: -30,
              to: 5,
              name: "low",
              color: "#00A100"
            },
            {
              from: 6,
              to: 20,
              name: "medium",
              color: "#128FD9"
            },
            {
              from: 21,
              to: 45,
              name: "high",
              color: "#FFB200"
            },
            {
              from: 46,
              to: 55,
              name: "extreme",
              color: "#FF0000"
            }
          ]
        }
      }
    };

    this.dataLabels = {
      enabled: false
    };

    this.title = {
      text: "HeatMap Chart with Color Range"
    };


  }

  public generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = "w" + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }

}
