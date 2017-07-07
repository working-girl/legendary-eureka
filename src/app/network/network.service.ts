import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { NetworkModel } from './network-model';

@Injectable()
export class NetworkService {

  userid: string

  constructor(private http: Http) { }

  getUserRelations(id: string): Observable<any> {
  	return this.http
  		.get('/assets/gowalla/data.json', {})
  		.map( res => res.json())
  	}

}
