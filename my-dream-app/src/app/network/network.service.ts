import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//import { Connection } from '../models/connections';

@Injectable()
export class NetworkService {

  constructor(private http: Http) { }


  /*getTestData(id: string): Observable<any> {
  	return this.http
  		.get('assets/gowalla/data.json', {})
  		.map( res => res.json())
  	}*/
  
  getNodes(id:string): Observable<any> {

    console.log('requesting nodes on user: ' + id)

  	return this.http.get(`http://localhost:3001/my-dream-app/home/network/nodes/${id}`)
              .map( (res: Response) => res.json())
              .catch( (error: Response) => Observable.throw(error.json()));
  }

  getEdges(id:string): Observable<any> {

    console.log('requesting edges on user: ' + id)

    return this.http.get(`http://localhost:3001/my-dream-app/home/network/edges/${id}`)
              .map( (res: Response) => res.json())
              .catch( (error: Response) => Observable.throw(error.json()));
  }
}
