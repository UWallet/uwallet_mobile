import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {User} from '../../models/User';


@Injectable()
export class UserService {
  private apiUrl = 'http://192.168.99.102:4000/users';
  constructor(public http: Http) {

  }


  login(email: string, password: string){
    let body = JSON.stringify(
      {email: email,
      password: password
     });
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post((this.apiUrl+'/login'), body, options)
        .map((res: Response) => {
            return this.extractData(res);
      },
      (error: Response) =>{
        return error.json();
      })
  }

  register(User: User){
    let body = JSON.stringify(
      {
        user: User
      });
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post((this.apiUrl+'/register'), body, options)
        .map((res: Response) => {
            return this.extractData(res);
      },
      (error: Response) =>{
        return error.json();
      })
  }


  private extractData(res: Response) {
    if (res.status == 201){
      return { }
    }
    let body = res.json();
    return body || { };
  }

}
