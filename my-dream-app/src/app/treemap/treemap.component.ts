import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { treeData } from './treeData';
import * as d3 from 'd3';

@Component({
  selector: 'app-treemap',
  // encapsulation: ViewEncapsulation.None,
  templateUrl: './treemap.component.html',
  styleUrls: ['./treemap.component.css']
})
export class TreemapComponent implements OnInit, AfterViewInit {
  // @ViewChild('treemap') element: ElementRef

  // private width:number;
  // private height:number;
  private color:any;
  private mytreemap:any;
  private div:any;

  constructor() {
    
  }

  ngOnInit() {
  	const margin = {top: 40, right: 10, bottom: 10, left: 10};
    const width = 960 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    this.color = d3.scaleOrdinal().range(d3.schemeCategory20c);

    this.mytreemap = d3.treemap().size([width, height]).round(true);
    
    this.div = d3.select("#chart")
            .style("position", "relative")
            .style("width", (width + margin.left + margin.right) + "px")
            .style("height", (height + margin.top + margin.bottom) + "px")
            .style("left", margin.left + "px")
            .style("top", margin.top + "px");
  }

  ngAfterViewInit() {
    this.drawTreemap();
  }

  drawTreemap() {
    let root = d3.hierarchy(treeData, (d) => d.children )
                .sum((d) => d.size );
  
    let mytree = this.mytreemap(root);
    
    let node = this.div.datum(root).selectAll(".node")
        .data(mytree.leaves())
        .enter().append("div")
          .attr("class", "node")
          .style("left", (d) => d.x0 + "px")
          .style("top", (d) => d.y0 + "px")
          .style("width", (d) => Math.max(0, d.x1 - d.x0 - 1) + "px")
          .style("height", (d) => Math.max(0, d.y1 - d.y0  - 1) + "px")
          .style("background", (d) => this.color(d.parent.data.name))
          .text((d) => d.data.name);
  }
}
