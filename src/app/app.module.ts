import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DarkDashModule } from './dark-dash/dark-dash.module';
import { DashTwoModule } from './dash-two/dash-two.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    DashboardModule,
    DarkDashModule,
    DashTwoModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
