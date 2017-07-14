import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { IdcardComponent } from './idcard/idcard.component';
import { SearchQuery } from './models/search-query.model';
import { DescCardComponent } from './desc-card/desc-card.component';
import { TabviewComponent } from './tabview/tabview.component';
import { NetworkComponent } from './network/network.component';
import { StatsComponent } from './stats/stats.component';
import { NavStatsComponent } from './nav-stats/nav-stats.component';

import { NetworkService } from './network/network.service';
import { NetworkChartComponent } from './network-chart/network-chart.component';
import { FlagsComponent } from './flags/flags.component';
import { FlagChartComponent } from './flag-chart/flag-chart.component';
import { WordsService } from './flags/words.service';
import { TreeComponent } from './tree/tree.component';

// import { D3Service } from 'd3-ng2-service';
//import { TestD3Component } from './test-d3/test-d3.component';
//import { BrushZoomComponent } from './brush-zoom/brush-zoom.component';
// import { NetworkChart2Component } from './network-chart-2/network-chart-2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchbarComponent,
    IdcardComponent,
    DescCardComponent,
    TabviewComponent,
    NetworkComponent,
    StatsComponent,
    NavStatsComponent,
    NetworkChartComponent,
    FlagsComponent,
    FlagChartComponent,
    CountryComponent,
 /* TestD3Component,
    BrushZoomComponent, */
    TreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [SearchQuery, NetworkService, WordsService], //D3Service
  bootstrap: [AppComponent]
})
export class AppModule { }
