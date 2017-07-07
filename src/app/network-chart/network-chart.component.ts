import { Component, OnInit, OnChanges, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';

//https://bl.ocks.org/mbostock/4062045


@Component({
  selector: 'app-network-chart',
  templateUrl: './network-chart.component.html',
  styleUrls: ['./network-chart.component.css'],
})
export class NetworkChartComponent implements OnInit {

  @ViewChild('chart') element: ElementRef
  @Input() private graph
  private margin: any = { top: 20, bottom: 20, left: 0, right: 20};
  private chart: any;

  private host: d3.Selection
  private svg: d3.Selection
  private width: number
  private height: number
  private htmlElement: HTMLElement


  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.htmlElement = this.element.nativeElement
    this.host = d3.select(this.htmlElement)
    this.setup()
    this.buildSVG()
    this.drawGraph()

  }

  private setup(): void {
    this.width = 850
    this.height = 850
  }

  private buildSVG(): void {
    this.host.html("")
    this.svg = this.host.append("svg")
      .attr("viewBox", `0 0 ${this.width} ${this.height}`)
      /*.append("g")
      .attr("transform", `translate(${this.width / 2}, ${this.height / 2})`)*/
  }

   

  private drawGraph(){
    console.log(this.graph)
    let color = d3.scaleOrdinal(d3.schemeCategory20);

    let simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(function(d) { return d.id; }))
      .force("charge", d3.forceManyBody().strength(-400))
      .force("center", d3.forceCenter(this.width / 2, this.height / 2));
    

    let link = this.svg.append("g")
      .attr("class", "edges")
      .selectAll("line")
      .data(this.graph.edges)
      .enter().append("line")
      .attr("stroke-width", function(d) { return Math.sqrt(d.value);});

    let node = this.svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(this.graph.nodes)
      .enter().append("circle")
        .attr("r", 5)
        .attr("fill", function(d) { return color(d.group); })
        /*.call(d3.drag()
            .on("start", this.dragstarted)
            .on("drag", this.dragged)
            .on("end", this.dragended));*/



     node.append("title")
      .text(function(d) { return d.id; });

     simulation
      .nodes(this.graph.nodes)
      .on("tick", ticked);

     simulation.force("link")
      .links(this.graph.edges);


      function ticked() {
        link
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });

      console.log(node)
      console.log(link)    
    } 

    }



 

   /*dragstarted(d) {
    if (!d3.event.active) this.simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

   dragended(d) {
    if (!d3.event.active) this.simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }*/
}

	

	


  
