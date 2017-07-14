import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//import { Connection } from '../models/connections';

@Injectable()
export class NetworkService {

  userid: string
  connections: any

  constructor(private http: Http) { }


  /*getUserRelations(id: string): Observable<any> {
  	return this.http
  		.get('assets/gowalla/data.json', {})
  		.map( res => res.json())
  	}*/
  
  /*get relations from mongodbd for specific user*/
  getRelations(id:String): Observable<any> {
  	return this.http.get('api/connections')
              .map( res => res.json())
  }

}
