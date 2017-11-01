import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {User} from '../../models/User';
import Encrypt from 'jsencrypt';


@Injectable()
export class UserService {
  private apiUrl ='http://'+localStorage.getItem("ip")+ ':4000/users';
  private publicKey: string = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDqAMvO0w5Lz3iyJObftSw8jFo/\n3CoyqaYLcWbA6A4mjCufMie8L+dA8kKO1M4JpmslU1h7W1fovOUDNc4ZukhMN/Pi\nvfaqROZ95GwQfLWjkKRBngSU5ITOBtqAuiBSeJgfZORe4C4NoiVkssfTUUgmYbs7\nwj1k5Jz0K0e1odGHzQIDAQAB\n-----END PUBLIC KEY-----";
  constructor(public http: Http) {

  }

  login(email: string, password: string, device_token: string){
    //console.log(this.apiUrl);
    let encrypt = new Encrypt.JSEncrypt();
    encrypt.setPublicKey(this.publicKey);
    let EncryptedPassword=encrypt.encrypt(password);
    //console.log(this.EncryptedPassword);
    //console.log(password);
    let body = JSON.stringify(
      {email: email,
      password: EncryptedPassword,
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
    let session_token = localStorage.getItem("token");
    console.log( session_token);
    let headers = new Headers({ 'Content-Type': 'application/json' , 'Authorization': session_token});
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
    let encrypt = new Encrypt.JSEncrypt();
    encrypt.setPublicKey(this.publicKey);
    let EncryptedPassword=encrypt.encrypt(User.password);
    let EncryptedConfirPassword=encrypt.encrypt(User.password_confirmation);
    //console.log(this.EncryptedPassword);
    //console.log(password);
    let body = JSON.stringify(
      {user:
        {firstName: User.firstName,
        lastName: User.lastName,
        email: User.email,
        password: EncryptedPassword,
        password_confirmation: EncryptedConfirPassword
       }
    });
    console.log(body);
    console.log(EncryptedPassword);


    /*let body = JSON.stringify(
      {
        user: User
      });*/
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
