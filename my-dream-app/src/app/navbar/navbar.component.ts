import { Component, OnInit } from '@angular/core';
import { SearchQuery } from '../models/search-query.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public searchinfo: SearchQuery) { }

  ngOnInit() {
  }

}
