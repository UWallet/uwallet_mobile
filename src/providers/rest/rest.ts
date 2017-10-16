import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

//import {AngularFireDatabase } from '../../../node_modules/angularfire2/src/database/database';
//import {FirebaseListObservable } from '../../../node_modules/angularfire2/src/database-deprecated/firebase_list_observable';


@Injectable()
export class RestProvider {
  private apiUrl = 'http://192.168.99.102:4000';
  constructor(public http: Http) {
    console.log('Hello RestProvider Provider');
  }



private extractData(res: Response) {
  let body = res.json();
  //console.log(body);
  return body || { };
}
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
