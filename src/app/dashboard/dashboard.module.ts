import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SplineChartComponent } from './components/spline-chart/spline-chart.component';



@NgModule({
  declarations: [
    DashboardComponent,
    BarChartComponent,
    AreaChartComponent,
    SplineChartComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
  ]
})
export class DashboardModule { }
