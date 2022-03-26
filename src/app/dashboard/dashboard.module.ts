import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SplineChartComponent } from './components/spline-chart/spline-chart.component';
import { MonochromePieChartComponent } from './components/monochrome-pie-chart/monochrome-pie-chart.component';
import { StackedBarChartComponent } from './components/stacked-bar-chart/stacked-bar-chart.component';
import { MultipleYAxisChartComponent } from './components/multiple-y-axis-chart/multiple-y-axis-chart.component';



@NgModule({
  declarations: [
    DashboardComponent,
    BarChartComponent,
    AreaChartComponent,
    SplineChartComponent,
    MonochromePieChartComponent,
    StackedBarChartComponent,
    MultipleYAxisChartComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
  ]
})
export class DashboardModule { }
