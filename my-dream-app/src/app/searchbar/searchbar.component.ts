import { Component, OnInit } from '@angular/core';
import { SearchQuery } from '../models/search-query.model';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(public searchinfo: SearchQuery) { }

  ngOnInit() {
  }
}
