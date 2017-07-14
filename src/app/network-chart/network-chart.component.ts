import { Component, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';

//https://bl.ocks.org/mbostock/4062045

@Component({
  selector: 'app-network-chart',
  templateUrl: './network-chart.component.html',
  styleUrls: ['./network-chart.component.css'],
})

export class NetworkChartComponent implements AfterViewInit {

  @ViewChild('network') element: ElementRef;
  @Input() private netgraph;

  private svg: d3.Selection;
  private color: any;
  private simulation: any;
  private link: any;
  private node: any;

  constructor() { }

  ngAfterViewInit() {
    this.setup();
    this.drawGraph();
  }

  /*Chart will be rebuild every time the @Input is updated
  ngOnChanges(): void{
    /*if (!this.graph.length === 0 || !this.host) return;
    this.setup()
    this.buildSVG()
    this.drawGraph()
  }*/

  private setup() {
    let htmlElement = this.element.nativeElement;
    let host = d3.select(htmlElement);
    let margin = { top: 5, bottom: 0, left: 0, right: 0 };
    let width = htmlElement.clientWidth - margin.left - margin.right;
    let height = width * 0.5 - margin.top - margin.bottom;

    host.html('');
    this.svg = host.append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      //.append("g")
      //.attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    this.color = d3.scaleOrdinal(d3.schemeCategory20);
    this.simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id((d) => { return d.id; }))
      .force("charge", d3.forceManyBody().strength(-400))
      .force("center", d3.forceCenter(width / 2, height / 2));
  }

  ticked() {
    this.link
        .attr("x1", (d) => { return d.source.x; })
        .attr("y1", (d) => { return d.source.y; })
        .attr("x2", (d) => { return d.target.x; })
        .attr("y2", (d) => { return d.target.y; });

    this.node
        .attr("cx", (d) => { return d.x; })
        .attr("cy", (d) => { return d.y; });
  } 

 private drawGraph(){
    let g = this.svg.append("g")

    this.link = g.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(this.netgraph.edges)
      .enter().append("line")
        .attr("stroke", "#999")
        .attr("stroke-width", (d) => { return Math.sqrt(d.value); });

    this.node = g.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(this.netgraph.nodes)
      .enter().append("circle")
        .attr("r", 5)
        .attr("fill", (d) => { return this.color(d.group); })
        .call(d3.drag()
          .on("start", (d) => { return this.dragstarted(d); })
          .on("drag", (d) => { return this.dragged(d); })
          .on("end", (d) => { return this.dragended(d); })
        );

    this.node.append("title")
      .text((d) => { return d.id; });

    this.simulation
      .nodes(this.netgraph.nodes)
      .on("tick", ()=>{return this.ticked()});

    this.simulation.force("link")
      .links(this.netgraph.edges);

    let zoom_handler = d3.zoom()
        .on("zoom", () => g.attr("transform", d3.event.transform));
    zoom_handler(this.svg);
  }

  dragged(d:any) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }
  
  dragended(d:any) {
    if (!d3.event.active) this.simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
  
  dragstarted(d:any) {
    if (!d3.event.active) this.simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }
}
