import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css']
})
export class FlagsComponent implements OnInit {

  flagData
  constructor() {
  	
  }

  ngOnInit() {
  	this.flagData = sortByFrequency(["two", "two", "seven", "seven", "seven", "seven", "seven", "seven", "seven", "three", "three", "three", "eight", "eight", "eight", "eight", "eight", "eight", "eight", "eight", "five", "five", "five", "five", "five", "four", "four", "four", "four", "nine", "nine", "nine", "nine", "nine", "nine", "nine", "nine", "nine", "one", "ten", "ten", "ten", "ten", "ten", "ten", "ten", "ten", "ten", "ten", "six", "six", "six", "six", "six", "six"])
		.map(function(d,i) {
			//console.log(d);
        	return {text: d, size: -i};
    });

	function sortByFrequency(arr) {
		var f = {};
		arr.forEach(function(i) { f[i] = 0; });
		var u = arr.filter(function(i) { return ++f[i] == 1; });
		return u.sort(function(a, b) { return f[b] - f[a]; });
	}
	//console.log(this.flagData)
  }

}
