import { Component, OnChanges, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';

//https://bl.ocks.org/mbostock/4062045


@Component({
  selector: 'app-network-chart',
  templateUrl: './network-chart.component.html',
  styleUrls: ['./network-chart.component.css'],
})
export class NetworkChartComponent implements OnChanges, AfterViewInit {

  @ViewChild('network') element: ElementRef
  @Input() private graph
  private margin: any 
  private chart: any

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
    this.drawGraph()
    console.log(this.htmlElement)

  }

  /*Chart will be rebuild every time the @Input is updated*/
  ngOnChanges(): void{
    /*if (!this.graph.length === 0 || !this.host) return;

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
      .append("g")
      //.attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  private drawGraph(){

    var color = d3.scaleOrdinal(d3.schemeCategory20);

    var simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(function(d) { return d.id; }))
      .force("charge", d3.forceManyBody().strength(-400))
      .force("center", d3.forceCenter(this.width / 2, this.height / 2));
    
       console.log(simulation)
   
    var g = this.svg.append("g")

    var link = g.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(this.graph.edges)
      .enter().append("line")
      .attr("stroke", "#999")
      .attr("stroke-width", function(d) { return Math.sqrt(d.value);});

    var node = g.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(this.graph.nodes)
      .enter().append("circle")
        .attr("r", 5)
        .attr("fill", function(d) { return color(d.group); })
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
        );

    var zoom_handler = d3.zoom()
        .on("zoom", zoom_actions);

    zoom_handler(this.svg);  

    node.append("title")
      .text(function(d) { return d.id; });

    simulation
      .nodes(this.graph.nodes)
      .on("tick", ticked);

    simulation.force("link")
      .links(this.graph.edges);


    function zoom_actions(){
        g.attr("transform", d3.event.transform)
    }

    function ticked() {
        link
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });

      /*console.log(node)
      console.log(link) */   
    } 

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }
}

	

	


  
