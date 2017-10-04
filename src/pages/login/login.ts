import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    errorMessage: string;
  constructor(public navCtrl: NavController, public rest: RestProvider) {
  }
  goToSignup(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SignupPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }
  ionViewDidLoad() {
    this.pruebamagica();
  }

  pruebamagica() {
    this.rest.pruebamagica()
       .subscribe(
         error =>  this.errorMessage = <any>error);
  }
}
