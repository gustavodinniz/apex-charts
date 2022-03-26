import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkDashComponent } from './dark-dash.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SparkOneComponent } from './components/spark-one/spark-one.component';
import { SparkTwoComponent } from './components/spark-two/spark-two.component';
import { SparkThreeComponent } from './components/spark-three/spark-three.component';
import { SparkFourComponent } from './components/spark-four/spark-four.component';



@NgModule({
  declarations: [
    DarkDashComponent,
    SparkOneComponent,
    SparkTwoComponent,
    SparkThreeComponent,
    SparkFourComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule
  ]
})
export class DarkDashModule { }
