import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {User} from '../../models/User';


@Injectable()
export class UserService {
  private apiUrl = 'http://10.203.152.166:4000/users';
  constructor(public http: Http) {

  }


  login(email: string, password: string, device_token: string){
    let body = JSON.stringify(
      {email: email,
      password: password,
      device_token: device_token
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

  logout(device_token: string){
    let body = JSON.stringify({
      device_token: device_token
     });
    let headers = new Headers({ 'Content-Type': 'application/json' , 'Authorization': localStorage.getItem("token")});
    let options = new RequestOptions({ headers: headers });
    return this.http.post((this.apiUrl+'/logout'), body, options)
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
