import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashTwoComponent } from './dash-two.component';
import { LineColumnComponent } from './components/line-column/line-column.component';
import { SimpleBubbleComponent } from './components/simple-bubble/simple-bubble.component';
import { RadarMultipleComponent } from './components/radar-multiple/radar-multiple.component';
import { BoxplotScatterComponent } from './components/boxplot-scatter/boxplot-scatter.component';
import { AreaLineColumnComponent } from './components/area-line-column/area-line-column.component';
import { HeatmapComponent } from './components/heatmap/heatmap.component';



@NgModule({
  declarations: [
    DashTwoComponent,
    LineColumnComponent,
    SimpleBubbleComponent,
    RadarMultipleComponent,
    BoxplotScatterComponent,
    AreaLineColumnComponent,
    HeatmapComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashTwoModule { }
