import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { NetworkService } from './network.service';
import { SearchQuery } from '../models/search-query.model';
import { NetworkChartComponent } from '../network-chart/network-chart.component';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css'],
})
export class NetworkComponent implements OnInit {
  
  @ViewChild(NetworkChartComponent) networkChartComponent: NetworkChartComponent 	

  checkins: any
  nodes: any
  edges: any


  constructor(private dataService: NetworkService, public userinfo: SearchQuery) { }

  ngOnInit() {
  	//this.getNetworkData(this.userinfo.getSearchId())
  }


  getNodes(){
    this.dataService.getNodes(this.userinfo.getSearchId()).subscribe(
        data => {
          this.checkins = data
          console.log(data)
        },
        error => {
          console.error(error)
        }
      )
  }

  getEdges(){
    this.dataService.getEdges(this.userinfo.getSearchId()).subscribe(
        data => {
          this.edges = data.edges
          //console.log(data)
          console.log(data.edges)
        },
        error => {
          console.error(error)
        }
      )
  }


  buildNetwork(){
    this.networkChartComponent.ngAfterViewInit()
  }
}
