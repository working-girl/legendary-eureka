import { Component, OnInit } from '@angular/core';


declare let require: any
let crg = require('country-reverse-geocoding').country_reverse_geocoding();

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})

export class CountryComponent implements OnInit {
  validCoords:boolean = false;
  countryName:string = 'Disneyland';
  countryCode:string = 'DSL';
    
  constructor() {  }
  
  ngOnInit() { }

  findCountry(lat:number, lng:number) {
	let country = crg.get_country(lat, lng);
	if(country !== null)
	{
		this.validCoords = true;
		this.countryName = country.name;
  		this.countryCode = country.code;
	} else {
		this.validCoords = false;
	}
  }
}
