import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './component/chart/chart.component';
import { ChartWomenComponent } from './component/chart-women/chart-women.component';
import { HomeComponent} from './component/home/home.component'
const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'women',component:ChartWomenComponent},
  {path:'men',component:ChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
