import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DarkDashRoutes } from './dark-dash/dark-dash-routing.module';
import { DashTwoRoutes } from './dash-two/dash-two-routing.module';
import { DashboardRoutes } from './dashboard/dashboard-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  ...DashboardRoutes,
  ...DarkDashRoutes,
  ...DashTwoRoutes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
