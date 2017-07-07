/*import { Component, ElementRef, NgZone, OnDestroy, OnInit, Input } from '@angular/core';


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

  	let d3 = this.d3
    let d3ParentElement: Selection<HTMLElement, any, null, undefined>;
    let d3Svg: Selection<SVGSVGElement, any, null, undefined>;
    let d3G: Selection<SVGGElement, any, null, undefined>;
    let width: number;
    let height: number; 
    
    if (this.parentNativeElement !== null) {

      d3ParentElement = d3.select(this.parentNativeElement);
      d3Svg = this.d3Svg = d3ParentElement.select<SVGSVGElement>('svg');

      width = +d3Svg.attr('width');
      height = +d3Svg.attr('height');

      d3G = d3Svg.append<SVGGElement>('g');

    }     	
  }

}*/
