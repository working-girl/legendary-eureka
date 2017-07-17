import { Component, OnInit } from '@angular/core';
import { SearchQuery } from '../models/search-query.model';

@Component({
  selector: 'app-idcard',
  templateUrl: './idcard.component.html',
  styleUrls: ['./idcard.component.css']
})
export class IdcardComponent implements OnInit {

  constructor(public searchinfo: SearchQuery) {}

  ngOnInit() {
  	console.log('Active user : '+ this.searchinfo.getSearchId())
  }

  getActivity() {
  	console.log("it worked!")
  }

}
