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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchbarComponent,
    IdcardComponent,
    DescCardComponent,
    TabviewComponent
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
