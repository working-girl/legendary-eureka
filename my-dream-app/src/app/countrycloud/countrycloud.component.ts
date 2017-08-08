import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-countrycloud',
  templateUrl: './countrycloud.component.html',
  styleUrls: ['./countrycloud.component.css']
})
export class CountrycloudComponent implements OnInit, AfterViewInit {
  // @ViewChild('flagcloud') element: ElementRef

  private width:number;
  private height:number;
  private format:any;
  private color:any;
  private stratify:any;
  private treemap:any;

  constructor() { 
    this.width = 960;
    this.height = 1060;
    this.format = d3.format(",d");

	  this.color = d3.scaleOrdinal()
    			      .range(d3.schemeCategory10.map((c) => { c = d3.rgb(c); c.opacity = 0.6; return c; }));

	  this.stratify = d3.stratify()
    			      .parentId((d) => { return d.id.substring(0, d.id.lastIndexOf(".")); });

	  this.treemap = d3.treemap()
    			      .size([this.width, this.height])
    			      .padding(1)
    			      .round(true);
  }

  ngOnInit() {
  	
  }

  ngAfterViewInit() {
    this.drawTreemap();
  }

  drawTreemap() {
    d3.csv("flares.csv", type, function(error, data) {
      if (error) throw error;

  	  let root = this.stratify(data)
      			.sum((d) => { return d.value; })
      			.sort((a, b) => { return b.height - a.height || b.value - a.value; });

      this.treemap(root);

      d3.select("app-countrycloud")
        .selectAll(".node")
        .data(root.leaves())
        .enter().append("div")
          .attr("class", "node")
          .attr("title", (d) => { return d.id + "\n" + this.format(d.value); })
          .style("left", (d) => { return d.x0 + "px"; })
          .style("top", (d) => { return d.y0 + "px"; })
          .style("width", (d) => { return d.x1 - d.x0 + "px"; })
          .style("height", (d) => { return d.y1 - d.y0 + "px"; })
          .style("background", (d) => { while (d.depth > 1) d = d.parent; return this.color(d.id); })
        .append("div")
          .attr("class", "node-label")
          .text((d) => { return d.id.substring(d.id.lastIndexOf(".") + 1).split(/(?=[A-Z][^A-Z])/g).join("\n"); })
        .append("div")
          .attr("class", "node-value")
          .text((d) => { return this.format(d.value); });
    });

    function type(d) {
      d.value = +d.value;
      return d;
    }
  }
}
