import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-stats',
  templateUrl: './nav-stats.component.html',
  styleUrls: ['./nav-stats.component.css']
})
export class NavStatsComponent implements OnInit {

  cond1 = true
  cond2 = false

  constructor() { }

  ngOnInit() {
  }

  setInt(){
  	this.cond1 = true
  	this.cond2 = false
  }

  setCheck(){
  	this.cond2 = true
  	this.cond1 = false
  }
}
