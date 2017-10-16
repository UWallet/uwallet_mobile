import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html'
})
export class PendientesPage {

  constructor(public navCtrl: NavController) {
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage)
  }
}
