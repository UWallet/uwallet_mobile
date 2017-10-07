import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { RestProvider } from '../../providers/rest/rest';
//import { CreditCardsService } from '../../providers/rest/CreditCardsService';
import { CreditCard } from '../../models/CreditCard';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    creditCardToCreate = new CreditCard('3224444444444444', 40000, 5,2030);
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
    this.createCardPrueba();
  }

  createCardPrueba() {
  		this.rest.CreateCard(this.creditCardToCreate)
  				.subscribe(
  				CreditCard => this.creditCardToCreate,
  				error => this.errorMessage = <any>error);
  	}
  pruebamagica() {
    this.rest.pruebamagica()
       .subscribe(
         error =>  this.errorMessage = <any>error);
  }
}
