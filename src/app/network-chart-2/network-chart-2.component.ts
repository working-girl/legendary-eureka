import { Component, ElementRef, NgZone, OnDestroy, OnInit, Input } from '@angular/core';


import { D3Service, D3, Selection } from 'd3-ng2-service';

@Component({
  selector: 'app-network-chart-2',
  templateUrl: './network-chart-2.component.html',
  styleUrls: ['./network-chart-2.component.css']
})
export class NetworkChart2Component implements OnInit, OnDestroy {
  @Input() private graph	
  private d3: D3;
  private parentNativeElement: any;
  private d3Svg: Selection<SVGSVGElement, any, null, undefined>;	

  constructor(element: ElementRef, private ngZone: NgZone, d3Service: D3Service) { 
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  ngOnDestroy() {
    if (this.d3Svg.empty && !this.d3Svg.empty()) {
      this.d3Svg.selectAll('*').remove();
    }
  }

  ngOnInit() {

    console.log(this.graph)

  	let d3 = this.d3
    let d3ParentElement: Selection<HTMLElement, any, null, undefined>;
    let d3Svg: Selection<SVGSVGElement, any, null, undefined>;
    let d3G: Selection<SVGGElement, any, null, undefined>;
    let width: number;
    let height: number; 
    let color = d3.scaleOrdinal(d3.schemeCategory20);

    let simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(function(d) { return d.id; }))
      .force("charge", d3.forceManyBody().strength(-400))
      .force("center", d3.forceCenter(this.width / 2, this.height / 2));


        
    if (this.parentNativeElement !== null) {

      d3ParentElement = d3.select(this.parentNativeElement);
      d3Svg = this.d3Svg = d3ParentElement.select<SVGSVGElement>('svg');

      width = +d3Svg.attr('width');
      height = +d3Svg.attr('height');

      d3G = d3Svg.append<SVGGElement>('g');

      let link = d3Svg.append("g")
        .attr("class", "edges")
        .selectAll("line")
        .data(this.graph.edges)
        .enter().append("line")
        .attr("stroke-width", function(d) { return Math.sqrt(d.value);});

      let node = d3Svg.append("g")
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


    }     	
  }

}
