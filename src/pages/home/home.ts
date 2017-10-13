import { Component } from '@angular/core';
import { NavController, MenuController  } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private menu: MenuController, public navCtrl: NavController) {
  }
  ionViewDidLoad() {
  this.menu.swipeEnable(false, 'menu');
  console.log("Estoy en home, la token es:",sessionStorage.getItem("token"));
  }
}
