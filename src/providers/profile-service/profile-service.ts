import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {CreditCard} from '../../models/CreditCard';
import {CardToTransfer} from '../../models/CreditCard';

/*
  Generated class for the ProfileServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileServiceProvider {
  private apiUrl = 'http://10.203.152.166:4000';
  constructor(public http: Http) {

  }
  GetUserInfo(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token")});
    let options = new RequestOptions({ headers: headers });
    return this.http.get((this.apiUrl+ '/users/get_user'), options)
                .map(this.extractData)
                .catch(this.handleError);
  }
  ChangePassword(password_digest: string, confirmation_token:string): Observable<any> {
    let body = JSON.stringify(
      {password_digest: password_digest,
      confirmation_token: confirmation_token
     });
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token")});
    let options = new RequestOptions({ headers: headers });
    return this.http.put((this.apiUrl+ '/users/update'), body, options)
                .map(this.extractData)
                .catch(this.handleError);
  }
  AllCreditCardsByUser(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token")});
    let options = new RequestOptions({ headers: headers });
    return this.http.get((this.apiUrl+ '/credit_cards'), options)
                .map(this.extractData)
                .catch(this.handleError);
  }
  CreateCard(creditCard: CreditCard) {
        let body = JSON.stringify( creditCard);
        //console.log(body);
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token")});
        let options = new RequestOptions({ headers: headers });
        return this.http.post((this.apiUrl+'/credit_cards/registercard'), body, options)
            .map((res: Response) => {
              if (res.status===200) {
                this.extractData;
              }
            })
            .catch(this.handleError);
    }
    DeleteCard(id) {
          let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token")});
          let options = new RequestOptions({ headers: headers });
          return this.http.delete((this.apiUrl+'/credit_cards?id='+id), options)
          .map((res: Response) => {
            if (res.status===201) {
              this.extractData;
            }
          })
          .catch(this.handleError);
      }
      TransferFromCardCard(cardToTransfer: CardToTransfer) {
            let body = JSON.stringify( cardToTransfer);
            let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token")});
            let options = new RequestOptions({ headers: headers });
            return this.http.post((this.apiUrl+'/credit_cards/transfer_money_from_card'), body, options)
                .map((res: Response) => {
                  if (res.status===200) {
                    this.extractData;
                  }
                })
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
