import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import {CreditCard} from '../../models/CreditCard';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CreditCardsServiceProvider {
  private apiUrl = 'http://10.203.152.166:4000';
  constructor(public http: Http) {
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
        console.log(body);
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token")});
        let options = new RequestOptions({ headers: headers });
        return this.http.post(('http://192.168.99.101:4000/credit_cards/registercard'), body, options)
            .map((res: Response) => {
              if (res.status===201) {
                this.extractData;
              }
            })
            .catch(this.handleError);
    }


private extractData(res: Response) {
  let body = res.json();
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
