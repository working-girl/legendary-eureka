import { Component, OnInit } from '@angular/core';


declare let require: any
let crg = require('country-reverse-geocoding').country_reverse_geocoding();

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})

export class CountryComponent implements OnInit {
  countryName:string = 'Rusland';
  
  constructor() {  }
  
  ngOnInit() { }

  findCountry(lat:number, lng:number) {
	let country = crg.get_country(lat, lng);
  	this.countryName = country.name;
  }
}
