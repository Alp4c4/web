import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './component/chart/chart.component';
import { ChartWomenComponent } from './component/chart-women/chart-women.component';
import { HomeComponent} from './component/home/home.component'
import {SearchPageComponent}from'./component/search-page/search-page.component'
import {TestbaseComponent}from './component/testbase/testbase.component'
const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'women',component:ChartWomenComponent},
  {path:'men',component:ChartComponent},
  {path:'search',component:SearchPageComponent},
  {path:'test',component:TestbaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
