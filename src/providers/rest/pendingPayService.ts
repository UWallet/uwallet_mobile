import { Injectable } from '@angular/core';
 import { Http, Response, Headers, RequestOptions } from '@angular/http';
 import { Observable } from 'rxjs/Observable';
 import 'rxjs/add/operator/catch';
 import 'rxjs/add/operator/map';
 import 'rxjs/add/observable/throw';
 import { ListPendingPay } from '../../models/PendingPay';

 @Injectable()
 export class PendingPayServiceProvider {
   private apiUrl = 'http://192.168.99.102:4000';
   constructor(public http: Http) {}
   //prueba =new ListPendingPay (0,0,'','',0,'No');
   createItemOfList(PendingPay: ListPendingPay){
     let body = JSON.stringify(PendingPay);
     let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': sessionStorage.getItem("token")});
     let options = new RequestOptions({ headers: headers });
     return this.http.post((this.apiUrl+'/lists'), body, options)
     .map((res: Response) => {
       if (res.status===200) {
         this.extractData;
       }
     })
     .catch(this.handleError);
   }

   ModifyPendingPay(any) {
     let body = JSON.stringify(any);
     let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': sessionStorage.getItem("token")});
     let options = new RequestOptions({ headers: headers });
     return this.http.put((this.apiUrl+'/lists?id='+any.id),body, options)
     .map((res: Response) => {
       if (res.status===201) {
         this.extractData;
       }
       })
       .catch(this.handleError);
     }

   DeletePendingPay(id) {
         let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': sessionStorage.getItem("token")});
         let options = new RequestOptions({ headers: headers });
         return this.http.delete((this.apiUrl+'/lists?id='+id), options)
         .map((res: Response) => {
           if (res.status===201) {
             this.extractData;
           }
         })
         .catch(this.handleError)
         ;
     }

   AllPendingPaysByUser(): Observable<any> {
     let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': sessionStorage.getItem("token")});
     let options = new RequestOptions({ headers: headers });
     return this.http.get((this.apiUrl +'/lists/by_user'), options)
                 .map(this.extractData)
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
