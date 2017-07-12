import { Component, OnInit, AfterViewInit } from '@angular/core';
import { treeData } from './treeData';
import * as d3 from 'd3'

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit, AfterViewInit {
  private treemap:any;
  private root:any;
  // private diagonal:any;
  private svg:any;
  private i:number;
  private duration:number;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    let margin = {top: 20, right: 90, bottom: 30, left: 90};
	  let width = 960 - margin.right - margin.left;
	  let height = 500 - margin.top - margin.bottom;
  
	  /*this.diagonal = d3.diagonal()
	  				.projection(function(d) { return [d.y, d.x]; });*/
  
	  this.svg = d3.select("app-tree").append("svg")
      	       .attr("width", width + margin.right + margin.left)
      	       .attr("height", height + margin.top + margin.bottom)
    		       .append("g")
      	         .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
    this.i = 0;
    this.duration = 750;
    this.root = null;
  
    this.treemap = d3.tree().size([height, width]);
    this.root = d3.hierarchy(treeData, (d) => { return d.children; });
	  this.root.x0 = height / 2;
	  this.root.y0 = 0;
	  this.root.children.forEach((d) => {return this.collapse(d)});
	  
	  this.update(this.root);
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
		  	 .text((d) => { return d.data.name; });
//		  .style("fill-opacity", 1e-6);

  	// Transition nodes to their new position.
  	let nodeUpdate = nodeEnter.merge(node);

	  nodeUpdate.transition()
    		  .duration(this.duration)
    		  .attr("transform", (d) => { return "translate(" + d.y + "," + d.x + ")"; });

  	nodeUpdate.select('circle')
		  .attr('r', 10)
		  .style("fill", (d) => { return d._children ? "lightsteelblue" : "#fff"; })
		  .attr('cursor', 'pointer');
	
  	/*nodeUpdate.select("text")
		  .style("fill-opacity", 1);*/
	
  	// Transition exiting nodes to the parent's new position.
  	let nodeExit = node.exit().transition()
		               .duration(this.duration)
		               .attr("transform", (d) => { return "translate(" + source.y + "," + source.x + ")"; })
		               .remove();
	
  	nodeExit.select('circle')
		  .attr('r', 1e-6);
	
  	nodeExit.select('text')
		  .style('fill-opacity', 1e-6);
	
  	// Update the links…
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
  		console.log('children')
		  d._children = d.children;
		  d.children = null;
  	} else {
  	  console.log('no children')
		  d.children = d._children;
		  d._children = null;
  	}
  	this.update(d);
  }

}
