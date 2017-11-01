import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import Encrypt from 'jsencrypt';


@Injectable()
export class TransactionService {
  private apiUrl ='http://'+localStorage.getItem("ip")+ ':4000';
  private publicKey: string = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDqAMvO0w5Lz3iyJObftSw8jFo/\n3CoyqaYLcWbA6A4mjCufMie8L+dA8kKO1M4JpmslU1h7W1fovOUDNc4ZukhMN/Pi\nvfaqROZ95GwQfLWjkKRBngSU5ITOBtqAuiBSeJgfZORe4C4NoiVkssfTUUgmYbs7\nwj1k5Jz0K0e1odGHzQIDAQAB\n-----END PUBLIC KEY-----";
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
    let encrypt = new Encrypt.JSEncrypt();
    encrypt.setPublicKey(this.publicKey);
    let EncryptedPassword=encrypt.encrypt(password);
    let body = JSON.stringify(
      {password: EncryptedPassword
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
