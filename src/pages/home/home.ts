import { Component } from '@angular/core';
import { NavController, MenuController  } from 'ionic-angular';
import { ExtractosPage } from '../extractos/extractos';
import { TransaccionesPage } from '../transacciones/transacciones';
import { PendientesPage } from '../pendientes/pendientes';
import { AlertController } from 'ionic-angular';
import { ExtractsServiceProvider } from '../../providers/rest/extractsService';

//import {AngularFireDatabase } from '../../../node_modules/angularfire2/src/database/database';
//import {FirebaseListObservable } from '../../../node_modules/angularfire2/src/database-deprecated/firebase_list_observable';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private menu: MenuController, public navCtrl: NavController, public alertCtrl: AlertController, public rest:ExtractsServiceProvider) {
  }
  goToExtractos(params){
    if (!params) params = {};
    this.navCtrl.push(ExtractosPage);
  }goToTransacciones(params){
    if (!params) params = {};
    this.navCtrl.push(TransaccionesPage);
  }goToPendientes(params){
    if (!params) params = {};
    this.navCtrl.push(PendientesPage);
  }
  alarm() {
   let prompt = this.alertCtrl.create({
     title: 'Generar extracto',
     message: "Introduce la fecha inicial y la fecha final de extracto:",
     inputs: [
       {
          name: 'fecha1',
          placeholder: 'fecha inicio',
          type: 'date'
        },
        {
           name: 'fecha2',
           placeholder: 'fecha final',
           type: 'date'
         },
     ],
     buttons: [
       {
         text: 'Cancelar',
         handler: data => {

         }
       },
       {
         text: 'Generar',
         handler: data => {
           var arrInc=String(data.fecha1).split("-");
           var arrFin=String(data.fecha2).split("-");
           var d_0=parseInt(arrInc[2]);
           var m_0=parseInt(arrInc[1]);
           var a_0=parseInt(arrInc[0]);
           var d_1=parseInt(arrFin[2]);
           var m_1=parseInt(arrFin[1]);
           var a_1=parseInt(arrFin[0]);
           //console.log(a_1);
           this.rest.GetExtractsByDays(d_0,m_0,a_0,d_1,m_1,a_1)
               .subscribe(
                   error => {
                   //console.log(error);
                   },
                   () => {

                   }
                   );
                   this.showResult();
         }
       }
       ,
       {
         text: 'Generar extracto historico',
         handler: data => {
           this.rest.GetAllExtracts().subscribe(
             obj => {
               this.showResult();
               //console.log(obj);
             }
           );
         }
       }
     ]
   });
   prompt.present();
 }

 showResult() {
 let alert = this.alertCtrl.create({
   title: '¡Extracto Generado!',
   message: 'Hemos generado el extracto, revisa tu correo.',
   cssClass: 'alert-success',
   buttons: [
     {
     text: 'OK',
     handler: data => {
       }
     }
   ]
 });
 alert.present();
 }

  ionViewDidLoad() {
  this.menu.swipeEnable(true, 'menu');
  this.menu.swipeEnable(true, 'menuNotifications');
  //console.log("Estoy en home, la token es:",localstorage.getItem("token"));
  }
}
