import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkDashComponent } from './dark-dash.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SparkOneComponent } from './components/spark-one/spark-one.component';
import { SparkTwoComponent } from './components/spark-two/spark-two.component';
import { SparkThreeComponent } from './components/spark-three/spark-three.component';
import { SparkFourComponent } from './components/spark-four/spark-four.component';
import { LineAdwordsComponent } from './components/line-adwords/line-adwords.component';
import { RadialBarBottomComponent } from './components/radial-bar-bottom/radial-bar-bottom.component';
import { DarkAreaChartComponent } from './components/dark-area-chart/dark-area-chart.component';
import { DarkBarChartComponent } from './components/dark-bar-chart/dark-bar-chart.component';



@NgModule({
  declarations: [
    DarkDashComponent,
    SparkOneComponent,
    SparkTwoComponent,
    SparkThreeComponent,
    SparkFourComponent,
    LineAdwordsComponent,
    RadialBarBottomComponent,
    DarkAreaChartComponent,
    DarkBarChartComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule
  ]
})
export class DarkDashModule { }
