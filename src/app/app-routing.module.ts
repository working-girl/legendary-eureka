import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { NetworkComponent } from './network/network.component';
import { StatsComponent } from './stats/stats.component';
import { TreeComponent } from './tree/tree.component';
import { FlagsComponent } from './flags/flags.component';
import { FlagChartComponent } from './flag-chart/flag-chart.component'
import { CountryComponent } from './country/country.component';
import { SearchcloudComponent } from './searchcloud/searchcloud.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  {
    path: '',
    component: SearchbarComponent
  },
  {
    path: 'country',
    component: CountryComponent
  },
  {
    path: 'tree',
    component: TreeComponent,
  },
  {
    path: 'searchcloud',
    component: SearchcloudComponent,
  },
  {
    path: 'timeline',
    component: TimelineComponent,
  },
  {
  	path: 'home',
  	component: HomeComponent,
  	  children: [

  	  	{
  	  		path: '',
  	  		redirectTo: 'network',
  	  		pathMatch: 'full'
  	  	},
  	  	{
  	  		path: 'network',
  	  		component: NetworkComponent,
  	  	},
        {
          path: 'flags',
          component: FlagsComponent,
        }
  	  ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
