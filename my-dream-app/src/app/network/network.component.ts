import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { NetworkService } from './network.service';
import { SearchQuery } from '../models/search-query.model';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css'],
})
export class NetworkComponent implements OnInit {
  	
  networkData //should be of type Network (model) 
 

  constructor(private dataService: NetworkService, public userinfo: SearchQuery) { }

  ngOnInit() {
  	this.getNetworkData(this.userinfo.getSearchId())
  }

  getNetworkData(id: number){
  	this.dataService.getRelations(id).subscribe(
    		data => {
          //this.networkData = data
          console.log(data)
        },
        error => {
          console.error(error)
        }
      )
  } 
}
