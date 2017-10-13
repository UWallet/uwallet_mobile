import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

/*
  Generated class for the ProfileServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileServiceProvider {
  private apiUrl = 'http://192.168.99.102:4000';
  constructor(public http: Http) {

  }
  GetUserInfo(): Observable<string[]> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token")});
    let options = new RequestOptions({ headers: headers });
    return this.http.get((this.apiUrl+ '/users/get_user'), options)
                .map(this.extractData)
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
