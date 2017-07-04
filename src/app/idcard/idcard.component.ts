import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idcard',
  templateUrl: './idcard.component.html',
  styleUrls: ['./idcard.component.css']
})
export class IdcardComponent implements OnInit {

  userid = "234532";

  constructor() { }

  ngOnInit() {
  }

  getActivity() {
  	console.log('it works!')
  }

}
