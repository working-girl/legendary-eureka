import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { NetworkService } from './network.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  	
  networkData //should be of type Network (model) 
  uid: string = "test"
 

  constructor(private dataService: NetworkService) { }

  ngOnInit() {
  	this.getNetworkData(this.uid)
  }

  getNetworkData(id: string){
  	this.dataService.getUserRelations(id).subscribe(
  		data => this.networkData = data);
  } 
}
