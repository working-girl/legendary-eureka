import { Component, AfterViewInit, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { treeData } from './treeData';
import * as d3 from 'd3';

@Component({
  selector: 'app-tree',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements AfterViewInit {

  @ViewChild('iptree') element: ElementRef

  private margin: any 
  private host: d3.Selection
  private svg: d3.Selection
  private htmlElement: HTMLElement   
  private width:number;
  private height:number;

  private treemap:any;
  private root:any;
  private i:number;
  private r:number;
  private duration:number;

  constructor() { }

  // ngOnInit() { }

  ngAfterViewInit() {
    this.htmlElement = this.element.nativeElement
    this.host = d3.select(this.htmlElement)  
    this.margin = { top: 5, bottom: 0, left: 10, right: 0 }
    this.width = this.htmlElement.clientWidth - this.margin.left - this.margin.right
    this.height = this.width * 0.5 - this.margin.top - this.margin.bottom      

    //let margin = {top: 20, right: 120, bottom: 20, left: 120};
	  //let width = 960 - margin.right - margin.left;
	  //let height = 800 - margin.top - margin.bottom;
 
    this.host.html('')
    this.svg = this.host.append("svg")
      .attr("viewBox", `-100 0 ${this.width} ${this.height}`)      
     
    let con = this.svg.append("g")

    let zoom_handler = d3.zoom().on("zoom", zoom_actions);
    zoom_handler(con);

    /*har flyttet funktionen ind igen, da jeg fik fejl*/
    function zoom_actions(){
      con.attr("transform", d3.event.transform)
    } 

	  con
      .attr("width", this.width + this.margin.right + this.margin.left)
      .attr("height", this.height + this.margin.top + this.margin.bottom)//;
      .append("g")
      //let g = this.svg.append("g")
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  
    this.i = 0;
    this.duration = 300;
    this.r = 5;
    this.root = null;
  

    this.treemap = d3.tree().size([this.height, this.width]);
    this.root = d3.hierarchy(treeData, (d) => { return d.children; });
	  this.root.x0 = this.height / 2;
	  this.root.y0 = 0;
	  this.root.children.forEach((d) => {return this.collapse(d)});
	  
	  this.update(this.root);

    // d3.select(self.frameElement).style("height", "800px");
  }

  collapse(d:any) {
  	if(d.children) {
    	d._children = d.children
    	d._children.forEach((d) => {return this.collapse(d)})
    	d.children = null
    }
  }

  update(source:any) {
  	let treeData = this.treemap(this.root);  

  	// Compute the new tree layout.
	  let nodes = treeData.descendants();
    let links = treeData.descendants().slice(1);

	  // Normalize for fixed-depth.
	  nodes.forEach((d) => { d.y = d.depth * 180; });

  	// Update the nodes…
  	let node = this.svg.selectAll('g.node')
			         .data(nodes, (d) => { return d.id || (d.id = ++this.i); });

  	// Enter any new nodes at the parent's previous position.
  	let nodeEnter = node.enter().append('g')
					          .attr('class', 'node')
					          .attr("transform", (d) => { return "translate(" + source.y0 + "," + source.x0 + ")"; })
					          .on('click', (d)=>{ return this.click(d); });
	
  	nodeEnter.append('circle')
  			     .attr('class', 'node')
			       .attr('r', 1e-6)
			       .style("fill", (d) => { return d._children ? "lightsteelblue" : "#fff"; });
	
  	nodeEnter.append("text")
		  	     .attr("dy", ".35em")
		  	     .attr("x", (d) => { return d.children || d._children ? -13 : 13; })
		  	     .attr("text-anchor", (d) => { return d.children || d._children ? "end" : "start"; })
		  	     .text((d) => { return d.data.name; })
       		   .style("fill-opacity", 0.5);

  	// Transition nodes to their new position.
  	let nodeUpdate = nodeEnter.merge(node);

	  nodeUpdate.transition()
    		  .duration(this.duration)
    		  .attr("transform", (d) => { return "translate(" + d.y + "," + d.x + ")"; });

  	nodeUpdate.select('circle')
		  .attr('r', this.r)
		  .style("fill", (d) => { return d._children ? "lightsteelblue" : "#fff"; })
	
  	/*nodeUpdate.select("text")
		          .style("fill-opacity", 0.5);*/
	
  	// Transition exiting nodes to the parent's new position.
  	let nodeExit = node.exit().transition()
		               .duration(this.duration)
		               .attr("transform", (d) => { return "translate(" + source.y + "," + source.x + ")"; })
		               .remove();
	
  	nodeExit.select('circle')
		        .attr('r', 1e-6);
	
  	nodeExit.select('text')
		        .style('fill-opacity', 1e-6);
	
  	// Update the links
  	let link = this.svg.selectAll('path.link')
			   .data(links, (d) => { return d.id; });
	
  	// Enter any new links at the parent's previous position.
  	let linkEnter = link.enter().insert('path', 'g')
		  			.attr("class", "link")
		  			.attr('d', (d) => {
						let o = {x: source.x0, y: source.y0}
						return this.diagonal(o, o);
		  			});
	
  	// Transition links to their new position.
  	let linkUpdate = linkEnter.merge(link);

  	linkUpdate.transition()
		  	  .duration(this.duration)
		  	  .attr("d", (d) => { return this.diagonal(d, d.parent) });
	
  	// Transition exiting nodes to the parent's new position.
  	let linkExit = link.exit().transition()
		  		         .duration(this.duration)
		  		         .attr("d", (d) => {
				   	         let o = {x: source.x, y: source.y};
				   	         return this.diagonal(o,o);
		  		         })
		  		         .remove();
	
  	// Stash the old positions for transition.
  	nodes.forEach((d) => {
		  d.x0 = d.x;
		  d.y0 = d.y;
  	});
  }

  diagonal(s, d) {
    let path = `M ${s.y} ${s.x}
                C ${(s.y + d.y) / 2} ${s.x},
                ${(s.y + d.y) / 2} ${d.x},
                ${d.y} ${d.x}`;
    return path;
  }

  click(d:any) {
  	if (d.children) {
  		d._children = d.children;
		  d.children = null;
  	} else {
  	  d.children = d._children;
		  d._children = null;
  	}
  	this.update(d);
  }

}
