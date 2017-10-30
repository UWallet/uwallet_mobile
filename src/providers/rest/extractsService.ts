import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

//import {AngularFireDatabase } from '../../../node_modules/angularfire2/src/database/database';
//import {FirebaseListObservable } from '../../../node_modules/angularfire2/src/database-deprecated/firebase_list_observable';


@Injectable()
export class ExtractsServiceProvider {
  private apiUrl ='http://'+localStorage.getItem("ip")+ ':4000';
  constructor(public http: Http) {
    //console.log('Hello RestProvider Provider');
  }

  GetAllExtracts(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token")});
    let options = new RequestOptions({ headers: headers });
    return this.http.get((this.apiUrl+ '/all_extracts'), options)
                .catch(this.handleError);
  }
  GetExtractsByDays(d_0,m_0,a_0,d_1,m_1,a_1): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token")});
    let options = new RequestOptions({ headers: headers });
    return this.http.get((this.apiUrl+ '/day_extracts?d_0='+d_0+'&m_0='+m_0+'&a_0='+a_0+'&d_1='+d_1+'&m_1='+m_1+'&a_1='+a_1), options)
                .catch(this.handleError);
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
