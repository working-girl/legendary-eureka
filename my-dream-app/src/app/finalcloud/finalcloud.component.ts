import { Component, OnInit, AfterViewInit, OnChanges, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import * as d3v4cloud from 'd3-v4-cloud';

@Component({
  selector: 'app-finalcloud',
  templateUrl: './finalcloud.component.html',
  styleUrls: ['./finalcloud.component.css']
})
export class FinalcloudComponent implements OnInit, AfterViewInit {
  @ViewChild('flagcloud') element: ElementRef

  private input: string;
  private host: d3.Selection;
  private svg: d3.Selection;
  private margin: any;
  private width:number;
  private height:number;
  private fill:any;
  private htmlElement: HTMLElement;
  private xScale:any;
  private yScale:any;
  // private layout:any;

  constructor() { }
  	
  ngOnInit() {
  	this.htmlElement = this.element.nativeElement
    this.host = d3.select(this.htmlElement)
    this.margin = { top: 5, bottom: 0, left: 0, right: 0 }
    this.width = 800 // this.htmlElement.clientWidth - this.margin.left - this.margin.right
    this.height = 600 // this.width * 0.5 - this.margin.top - this.margin.bottom      
    this.fill = d3.scaleOrdinal(d3.schemeCategory20);
  	this.input = "Of course that’s your contention. You’re a first year grad student. You just got finished readin’ some Marxian historian, Pete Garrison probably. You’re gonna be convinced of that ’til next month when you get to James Lemon and then you’re gonna be talkin’ about how the economies of Virginia and Pennsylvania were entrepreneurial and capitalist way back in 1740. That’s gonna last until next year. You’re gonna be in here regurgitating Gordon Wood, talkin’ about, you know, the Pre-Revolutionary utopia and the capital-forming effects of military mobilization… ‘Wood drastically underestimates the impact of social distinctions predicated upon wealth, especially inherited wealth.’ You got that from Vickers, Work in Essex County, page 98, right? Yeah, I read that, too. Were you gonna plagiarize the whole thing for us? Do you have any thoughts of your own on this matter? Or do you, is that your thing? You come into a bar. You read some obscure passage and then pretend, you pawn it off as your own, as your own idea just to impress some girls and embarrass my friend? See, the sad thing about a guy like you is in 50 years, you’re gonna start doin’ some thinkin’ on your own and you’re gonna come up with the fact that there are two certainties in life. One: don’t do that. And two: you dropped a hundred and fifty grand on a fuckin’ education you coulda got for a dollar fifty in late charges at the public library.";
  }

  ngAfterViewInit() {
  	this.drawWordCloud(this.input);
  }

  drawWordCloud(text_string:string) {
  	let common = "naked,i,me,my,myself,we,us,our,ours,ourselves,you,your,yours,yourself,yourselves,he,him,his,himself,she,her,hers,herself,it,its,itself,they,them,their,theirs,themselves,what,which,who,whom,whose,this,that,these,those,am,is,are,was,were,be,been,being,have,has,had,having,do,does,did,doing,will,would,should,can,could,ought,i'm,you're,he's,she's,it's,we're,they're,i've,you've,we've,they've,i'd,you'd,he'd,she'd,we'd,they'd,i'll,you'll,he'll,she'll,we'll,they'll,isn't,aren't,wasn't,weren't,hasn't,haven't,hadn't,doesn't,don't,didn't,won't,wouldn't,shan't,shouldn't,can't,cannot,couldn't,mustn't,let's,that's,who's,what's,here's,there's,when's,where's,why's,how's,a,an,the,and,but,if,or,because,as,until,while,of,at,by,for,with,about,against,between,into,through,during,before,after,above,below,to,from,up,upon,down,in,out,on,off,over,under,again,further,then,once,here,there,when,where,why,how,all,any,both,each,few,more,most,other,some,such,no,nor,not,only,own,same,so,than,too,very,say,says,said,shall";
  	let word_count = {};
  	let words = text_string.split(/[ '\-\(\)\*":;\[\]|{},.!?]+/);
    if (words.length == 1){
      word_count[words[0]] = 1;
    } else {
      words.forEach((d) => {
        let word = d.toLowerCase();
        if (word != "" && common.indexOf(word)==-1 && word.length>1){
          if (word_count[word]){
            word_count[word]++;
          } else {
            word_count[word] = 1;
          }
        }
      });
    }
    let word_entries = d3.entries(word_count);
    //console.log(word_entries);

    this.xScale = d3.scaleLinear()
           			.domain([0, d3.max(word_entries, (d) => { return d.value; })])
           			.range([10,100]);

    let layout: any;
    layout = d3v4cloud.cloud()
        .size([this.width, this.height])
        .timeInterval(20)
        .words(word_entries)
        .fontSize((d) => { return this.xScale(+d.value); })
        .text((d) => { return d.key; })
        .rotate(() => { return ~~(Math.random() * 2) * 90; })
        .font("Impact")
        .on("end", (words_entries) => { this.draw(word_entries) }) // SKAL sendes ind wtf
        .start();

    // layout.stop(); // røv og nøgler!
  }

  draw(words:any) {
  	let svg = d3.select("#chart")
      .append("svg")
        .attr("width", this.width + this.margin.left + this.margin.right)
        .attr("height", this.height + this.margin.top + this.margin.bottom);
    let con = svg.append("g")
    
    let zoom_handler = d3.zoom().on("zoom", zoom_actions);
    zoom_handler(svg)
    /*har flyttet funktionen ind igen, da jeg fik fejl*/
    function zoom_actions(){
      con.attr("transform", d3.event.transform)
    }

    con
        .attr("transform", "translate(" + [this.width >> 1, this.height >> 1] + ")")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", (d) => { return this.xScale(d.value) + "px"; })
        .style("font-family", "Impact")
        .style("fill", (d, i) => { return this.fill(i); })
        .attr("text-anchor", "middle")
        .attr("transform", (d) => { return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"; })
        .text((d) => { return d.key; });
    
    
  }

}
