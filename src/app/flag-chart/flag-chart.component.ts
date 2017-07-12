import { Component, OnChanges, Input, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import * as canvas from 'canvas';
import * as d3v4cloud from 'd3-v4-cloud';

@Component({
  selector: 'app-flag-chart',
  templateUrl: './flag-chart.component.html',
  styleUrls: ['./flag-chart.component.css']
})
export class FlagChartComponent implements OnChanges {

  @ViewChild('flagcloud') element: ElementRef
  @Input() private flagdata
  @Input() private words

  private margin: any 
  private host: d3.Selection
  private svg: d3.Selection
  private width: number
  private height: number
  private htmlElement: HTMLElement


  constructor() { }

  /*Chart will be rebuild every time the @Input is updated*/
  ngOnChanges(): void{
  	this.htmlElement = this.element.nativeElement
    this.host = d3.select(this.htmlElement)
    this.setup()
    this.buildSVG()
    this.drawFlagCloud()
  }

  private setup(): void {
    this.margin = { top: 5, bottom: 0, left: 0, right: 0 }
    this.width = this.htmlElement.clientWidth - this.margin.left - this.margin.right
    this.height = this.width * 0.5 - this.margin.top - this.margin.bottom
  }

  private buildSVG(): void {
    this.host.html('')
    this.svg = this.host.append("svg")
      .attr("viewBox", `0 0 ${this.width} ${this.height}`)
  }

  private drawFlagCloud() {

	let con = this.svg.append("g")

    let zoom_handler = d3.zoom()
        .on("zoom", zoom_actions);

    zoom_handler(this.svg); 

	let color = d3.scaleOrdinal(d3.schemeCategory20);


	let layout: any
	layout = d3v4cloud.cloud()
		.size([this.width, this.height])
    	.words(this.words)
	    .padding(5)
	    .rotate(function() { return ~~(Math.random() * 2) * 90; })
	    .font("Impact")
	    .fontSize(function(d) { return d.size; })

	layout.on("end", draw(this.words, con, layout));
	layout.start()

	//console.log(layout)
    function zoom_actions(){
        con.attr("transform", d3.event.transform)
    }

	function draw(words,container,layout) {
	  	let con = container
		      .attr("width", layout.size()[0])
		      .attr("height", layout.size()[1])
	      .append("g")
	      	  .attr("transform", "translate(" + layout.size()[0] / 3 + "," + layout.size()[1] / 3 + ")")
	      .selectAll("text")
	      	  .data(words)
		  .enter().append("text")
		      .style("font-size", function(d) { return d.size + "px"; })
		      .style("font-family", "Impact")
		      .style("fill", function(d, i) { return color(i); })
		      .attr("text-anchor", "middle")
		      .attr("transform", function(d, i) {
		      		    var xvar = (256 * (Math.random() + .5)) >> 1;
        				var yvar = (256 * (Math.random() + .5)) >> 1;
        				var rotate = cloudRotate.call(this, d, i)

	        			return "translate(" + [xvar, yvar] + ")rotate(" + rotate + ")"
	      	  })
	         .text(function(d) { return d.text; });

		function cloudRotate() {
  			return (~~(Math.random() * 6) - 3) * 30;
		}
	}
  }
}