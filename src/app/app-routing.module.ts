import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country/country.component';

import { HomeComponent } from './home/home.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { NetworkComponent } from './network/network.component';
import { StatsComponent } from './stats/stats.component';
import { TreeComponent } from './tree/tree.component';

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
  	  	}
  	  ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
