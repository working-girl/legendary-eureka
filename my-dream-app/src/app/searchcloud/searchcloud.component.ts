import { Component, OnInit, OnChanges, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { skillsData } from './skillsData';
import * as d3 from 'd3';
import * as d3v4cloud from 'd3-v4-cloud';
import * as _ from 'lodash';

@Component({
  selector: 'app-searchcloud',
  templateUrl: './searchcloud.component.html',
  styleUrls: ['./searchcloud.component.css']
})
export class SearchcloudComponent implements OnInit, OnChanges {

  @ViewChild('flagcloud') element: ElementRef

  private margin: any 
  private host: d3.Selection
  private svg: d3.Selection

  private minyears:any;
  private maxyears:any;
  private minfont:number;
  private maxfont:number;
  private width:number;
  private height:number;
  private fill:any;
  private MAX_TRIES:any;
  private htmlElement: HTMLElement  

  constructor() { }

  ngOnInit(): void {
    this.htmlElement = this.element.nativeElement
    this.host = d3.select(this.htmlElement)  
    this.margin = { top: 5, bottom: 0, left: 0, right: 0 }
    this.width = this.htmlElement.clientWidth - this.margin.left - this.margin.right
    this.height = this.width * 0.5 - this.margin.top - this.margin.bottom      

  	this.minyears = _.min(_.map(skillsData, 'years'));
    this.maxyears = _.max(_.map(skillsData, 'years'));
    this.minfont = 18;
    this.maxfont = 35;

    this.fill = d3.scaleOrdinal(d3.schemeCategory20);
    this.MAX_TRIES = (this.width > 400) ? 6 : 3;

    this.generateSkillCloud(0);
  }

  ngOnChanges(): void{}

  generateSkillCloud(retryCycle?:any) {
  	// let textfilter = document.getElementById('filter');
  	let textfilter = (<HTMLInputElement>document.getElementById('filter')).value;
  	let filterSkillsvar = _.filter(skillsData, (skill) => { return !textfilter || skill.name.toLowerCase().indexOf(textfilter.toLowerCase()) >= 0; });

  	// let skillsToDraw = this.transformToCloudLayoutObjects(filterSkillsvar, retryCycle);

	  let skillsToDraw = _.map(filterSkillsvar, (skill, retryCycle) => {
        let retval = {
    	    text: skill.name.toLowerCase() + ':' + skill.years + 'y',
            size: this.toFontSize(skill.years, skill.relevancy, retryCycle)
        };
        return retval;
    });

    let layout: any;
	      
      layout = d3v4cloud.cloud()
        .size([this.width, this.height])
        .words(skillsToDraw)
        .rotate(() => { return (~~(Math.random() * 6) - 2.5) * 30; })
        .font("Impact")
        .fontSize((d) => { return d.size; })
        .on("end", (fittedSkills) => {
            // check if all words fit and are included
            if (fittedSkills.length == skillsToDraw.length) {
                this.drawSkillCloud(fittedSkills); // finished
            }
            else if (!retryCycle || retryCycle < this.MAX_TRIES) {
                // words are missing due to the random placement and limited room space
                console.debug('retrying');
                // try again and start counting retries
                this.generateSkillCloud((retryCycle || 1) + 1);
            }
            else {
                // retries maxed and failed to fit all the words
                console.debug('gave up :(');
                // just draw what we have
                this.drawSkillCloud(fittedSkills);
            }
        })
        .start();
	}

    /**
     * 1. Determine font size based on years of experience relative to the skills with the least and most years of experience.
     * 2. Further increase / decrease font size based on relevancy (linux 20y is could less relevant than java 3y, so relevancy 
     *    .2 vs 1.5 could work for example).
     */
    toFontSize(years, relevancy, retryCycle) {
    	// translate years scale to font size scale and apply relevancy factor
    	let linearSize = (((years - this.minyears) / (this.maxyears - this.minyears)) * (this.maxfont - this.minfont) * relevancy) + this.minfont;
    	// make the difference between small sizes and bigger sizes more pronounced for effect
    	let polarizedSize = Math.pow(linearSize / 8, 3);
    	// reduce the size as the retry cycles ramp up (due to too many words in too small space)
    	let reduceSize = polarizedSize; //* ((this.MAX_TRIES - retryCycle) / this.MAX_TRIES);
    	return ~~reduceSize;
    }
        
    drawSkillCloud(words:any) {

    	//d3.select("#cloud svg").remove();
      this.host.html('')
      this.svg = this.host.append("svg")
      .attr("viewBox", `0 0 ${this.width} ${this.height}`)      
   	
      let con = this.svg.append("g")

      let zoom_handler = d3.zoom().on("zoom", zoom_actions);
      zoom_handler(this.svg);

      /*har flyttet funktionen ind igen, da jeg fik fejl*/
      function zoom_actions(){
            con.attr("transform", d3.event.transform)
      }

      con
    	    .attr("width", this.width)
    	    .attr("height", this.height)
    	    .append("g")
    	    .attr("transform", "translate(" + ~~(this.width / 2) + "," + ~~(this.height / 2) + ")")
    	    .selectAll("text")
    	    .data(words)
    	    .enter().append("text")
    	    .style("font-size", (d) => { return d.size + "px"; })
    	    .style("-webkit-touch-callout", "none")
    	    .style("-webkit-user-select", "none")
    	    .style("-khtml-user-select", "none")
    	    .style("-moz-user-select", "none")
    	    .style("-ms-user-select", "none")
    	    .style("user-select", "none")
    	    .style("cursor", "default")
    	    .style("font-family", "Impact")
    	    .style("fill", (d, i) => { return this.fill(i); })
    	    .attr("text-anchor", "middle")
    	    .attr("transform", (d) => { return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"; })
    	    .text((d) => { return d.text; });
    	    
    	// set the viewbox to content bounding box (zooming in on the content, effectively trimming whitespace)
    	let svg = document.getElementsByTagName("svg")[0];
    	let bbox = svg.getBBox();
    	let viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
    	svg.setAttribute("viewBox", viewBox);
    }
}
