import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class UserService {
  private apiUrl = 'http://192.168.99.101:4000';
  constructor(public http: Http) {

  }
  Login(email: string, password: string){
    let body = JSON.stringify(
      {email: email,
      password: password
     });
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post((this.apiUrl+'/users/login'), body, options)
        .map((res: Response) => {
          if (res.status!=500) {
            this.extractData(res);
          }
        return res.json();
      })
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
