import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { PendientesPage } from '../pendientes/pendientes';
import { HomePage } from '../home/home';
import { ListPendingPay } from '../../models/PendingPay';
import { PendingPayServiceProvider } from '../../providers/rest/pendingPayService';
import { AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'page-pago-pendiente',
  templateUrl: 'pago-pendiente.html'
})
export class PagoPendientePage {

  ListPay;
  listpay = new ListPendingPay(0,'','',0,'No');
  //cond=true;
  errorMessage: string;
  //res: string;
  payForm: FormGroup;
  //titleWindow: string;
  //messageWindow: string;
  constructor(public formBuilder: FormBuilder,private menu: MenuController, public navCtrl: NavController, public rest: PendingPayServiceProvider) {
  }

  ionViewWillLoad(){
      this.payForm = this.formBuilder.group({
        target_account:['',null],
        cost:['',null],
        description:['',null],
        date_pay:['',null]
      });
  }

  //se redirige a la pagina principal de pagos pendientes
  goToPendientes(params){
    if (!params) params = {};
    this.navCtrl.push(PendientesPage);
  }

  //se redirige al home
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage)
  }

  //Añade un nuevo pago pendiente
  AddPendingPay(){
    goToPendientes(null);


  }

}
