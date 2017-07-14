import { Component, OnInit } from '@angular/core';
import { WordsService } from './words.service';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css']
})
export class FlagsComponent implements OnInit {

  flagData:any;
  words:any;

  private data1 = ["breakgin","break into","break off","breakgout","break up","breat","breath","breathegin","breathegout","breathe","breathing","breed","brick","bridge","brief","briefly","bright","brightly","brilliant"];
  private data2 = ["bringgout","bringgup","broad","bring","bringgback","broadcat","broadly","broken","brother","brown","bruh","bubble","breakfat","ability","able","about","above","abroad","abence","breakfast","than"];
  private data3 = ["breakgup","breat","breath","breathegin","breathegout","breathe","breathing","breed","brick","bridge","brief","briefly","bright","brightly","brilliant","bringgback","bringgdown","bringgforward","bringgout","bringgup","bring","broad","broadcat","broadly","broken","brother"];
  private data4 = ["bringgdown","bringgforward","thi","dadsa","dajda","lorum","abandon","abandoned","Hello","world","normally","you","want","more","word","breakgin","breakginto","breakgoff","breakgout","brown","bruh","bubble"];

  constructor(private wordsService: WordsService) { }

  ngOnInit() { }

  loadData(num: string){ //just some dummy hardcoded data

    switch (num) {
      case "1":
        this.prepareData(this.data1)
        break;
      case "2":
        this.prepareData(this.data2)
        break;
      case "3":
        this.prepareData(this.data3)
        break;
      case "3":
        this.prepareData(this.data4)
        break; 
      default:
        break;
    }
  }

  prepareData(w: Array<string>){
    this.words = w.map((d) => {
        return {text: d, size: 10 + Math.random() * 150, test: "haha"};
      })   
  }
  
}
