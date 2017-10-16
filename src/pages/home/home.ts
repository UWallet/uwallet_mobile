import { Component } from '@angular/core';
import { NavController, MenuController  } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ExtractosPage } from '../extractos/extractos';
import { TransaccionesPage } from '../transacciones/transacciones';
import { PendientesPage } from '../pendientes/pendientes';

//import {AngularFireDatabase } from '../../../node_modules/angularfire2/src/database/database';
//import {FirebaseListObservable } from '../../../node_modules/angularfire2/src/database-deprecated/firebase_list_observable';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private menu: MenuController, public navCtrl: NavController) {
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

  ionViewDidLoad() {
  this.menu.swipeEnable(true, 'menu');
  this.menu.swipeEnable(true, 'menuNotifications');
  console.log("Estoy en home, la token es:",sessionStorage.getItem("token"));
  }
}
