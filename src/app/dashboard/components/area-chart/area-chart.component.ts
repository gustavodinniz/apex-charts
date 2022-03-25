import { Component, Input, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle } from 'ng-apexcharts';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent implements OnInit {

  @Input() chart!: ApexChart;

  @Input() title!: ApexTitleSubtitle;

  @Input() series!: ApexAxisChartSeries;

  ngOnInit(): void {
    this.initializeChartOptions();
  }

  private initializeChartOptions(): void {
    this.title = {
      text: "My First Angular Chart"
    };

    this.series = [{
      name: "My-series",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }];

    this.chart = {
      height: 400,
      width: "100%",
      type: "area"
    }
  }
}
