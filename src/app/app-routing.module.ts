import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

const routes: Routes = [
  {
    path: '',
    component: SearchbarComponent
  },
  {
  	path: 'home',
  	component: HomeComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
