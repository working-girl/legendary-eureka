import { Component, OnChanges, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import * as canvas from 'canvas';
import * as d3v4cloud from 'd3-v4-cloud';


//https://codepen.io/znak/pen/rOgXoV

@Component({
  selector: 'app-flag-chart',
  templateUrl: './flag-chart.component.html',
  styleUrls: ['./flag-chart.component.css']
})
export class FlagChartComponent implements OnChanges, AfterViewInit {

  @ViewChild('flagcloud') element: ElementRef
  @Input() private flagdata

  private margin: any 
  private host: d3.Selection
  private svg: d3.Selection
  private width: number
  private height: number
  private htmlElement: HTMLElement


  constructor() { }

  ngAfterViewInit() {
    this.htmlElement = this.element.nativeElement
    this.host = d3.select(this.htmlElement)
    this.setup()
    this.buildSVG()
    this.drawFlagCloud()
    //console.log(this.htmlElement)

  }
  /*Chart will be rebuild every time the @Input is updated*/
  ngOnChanges(): void{
    /*if (!this.graph.flagdata === 0 || !this.host) return;

    this.setup()
    this.buildSVG()
    this.drawGraph()*/
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
      //.append("g")
      //.attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

      //console.log(this.svg)
  }

  private drawFlagCloud() {

  	let words = ["Hello", "world", "normally", "you", "want", "more", "words",
	      "than", "this"]

	let w = words.map(function(d) {
	      		return {text: d, size: 10 + Math.random() * 90, test: "haha"};
	    	})
	console.log(w)

	let color = d3.scaleOrdinal(d3.schemeCategory20);

	let layout: any
	layout = d3v4cloud.cloud()
		.size([this.width, this.height])
    	.words(w)
	    .padding(5)
	    .rotate(function() { return ~~(Math.random() * 2) * 90; })
	    .font("Impact")
	    .fontSize(function(d) { return d.size; })

	layout.on("end", draw(w, this.svg, layout));
	layout.start()

	
	console.log(layout)

	function draw(words,container,layout) {
		console.log(words)
		console.log(container)
		console.log(layout)

	  	  container.append("g")
		      .attr("width", layout.size()[0])
		      .attr("height", layout.size()[1])
	      .append("g")
	      	  .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
	      .selectAll("text")
	      	  .data(words)
	      .enter().append("text")
		      .style("font-size", function(d) { return d.size + "px"; })
		      .style("font-family", "Impact")
		      .style("fill", function(d, i) { return color(i); })
		      .attr("text-anchor", "middle")
		      .attr("transform", function(d) {
		      		console.log(d.x + ','+ d.y)
	        		return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
	      	  })
	         .text(function(d) { return d.text; });
	}
  }
}