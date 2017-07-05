import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { IdcardComponent } from './idcard/idcard.component';
import { SearchQuery } from './models/search-query.model';
import { DescCardComponent } from './desc-card/desc-card.component';
import { TabviewComponent } from './tabview/tabview.component';
import { FlagsComponent } from './flags/flags.component';
import { NetworkComponent } from './network/network.component';
import { StatsComponent } from './stats/stats.component';
import { NavStatsComponent } from './nav-stats/nav-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchbarComponent,
    IdcardComponent,
    DescCardComponent,
    TabviewComponent,
    FlagsComponent,
    NetworkComponent,
    StatsComponent,
    NavStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SearchQuery],
  bootstrap: [AppComponent]
})
export class AppModule { }
