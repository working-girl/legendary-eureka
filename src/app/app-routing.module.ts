import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { NetworkComponent } from './network/network.component';
import { FlagsComponent } from './flags/flags.component';

const routes: Routes = [
  {
    path: '',
    component: SearchbarComponent
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
  	  		component: NetworkComponent
  	  	},
  	  	{
  	  		path: 'flag',
  	  		component: FlagsComponent
  	  	}
  	  ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
