import { Component, OnInit } from '@angular/core';

declare var require: any
var crg = require('country-reverse-geocoding').country_reverse_geocoding();
var country = crg.get_country(47.32, 0.72);

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  

  constructor() {  }
  ngOnInit() { console.log(country.name); }

}
