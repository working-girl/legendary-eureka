import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//import { Connection } from '../models/connections';

@Injectable()
export class NetworkService {

  constructor(private http: Http) { }


  /*getUserRelations(id: string): Observable<any> {
  	return this.http
  		.get('assets/gowalla/data.json', {})
  		.map( res => res.json())
  	}*/
  
  /*get relations from mongodbd for specific user*/
  getRelations(id:number): Observable<any> {

    console.log('requesting contacts on user: ' + id)

  	return this.http.get(`http://localhost:3001/my-dream-app/home/network/${id}`)
              .map( (res: Response) => res.json())
              .catch( (error: Response) => Observable.throw(error.json()));
  }

}
