import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  input: string = ''

  constructor() { }

  ngOnInit() {
  }

  getGowalla(searchInput: string) {
  	this.input = searchInput 
  	console.log("You entered " + this.input)
  }  

}
