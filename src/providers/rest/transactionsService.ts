import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class TransactionService {

  private apiUrl = 'http://10.203.152.166:4000/';
  constructor(public http: Http) {

  }

  createTransaction(amount: number, target: number){
    let body = JSON.stringify(
      {userid: target,
      amount: amount
     });
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token")});
    let options = new RequestOptions({ headers: headers });
    return this.http.post((this.apiUrl+'/create_transaction'), body, options)
        .map((res: Response) => {
            return this.extractData(res);
      },
      (error: Response) =>{
        return error.json();
      })
  }

  verifyPass(password: string){
    let body = JSON.stringify(
      {password: password
     });
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token")});
    let options = new RequestOptions({ headers: headers });
    return this.http.post((this.apiUrl+'/users/verify_pass'), body, options)
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
