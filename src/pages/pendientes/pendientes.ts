import { Component } from '@angular/core';
import { NavController, MenuController,} from 'ionic-angular';
import { PagoPendientePage } from '../pago-pendiente/pago-pendiente';
import { HomePage } from '../home/home';
import { PendingPayServiceProvider } from '../../providers/rest/pendingPayService';
import { AlertController } from 'ionic-angular';
import { ListPendingPay } from '../../models/PendingPay';

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html'
})

export class PendientesPage {

  ListPay;
  listpay = new ListPendingPay(0,0,'','',0,false);

  cond=true;
  errorMessage: string;
  res: string;

  titleWindow: string;
  messageWindow: string;
  constructor(private menu: MenuController, public navCtrl: NavController,
    public rest: PendingPayServiceProvider, public alertCtrl: AlertController) {
  }

  //se redirige al home
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage)
  }

  //se redirige a la pagina que crea un pago pendiente
  goToPagoPendiente(params){
    if (!params) params = {};
    this.navCtrl.push(PagoPendientePage);
  }

  //Muestra la lista de pagos pendientes
  ionViewDidLoad() {
    this.RenderPendingPays();
    this.menu.swipeEnable(true, 'menu');
  }

  //listas de un usuario en un array ListPay
  RenderPendingPays(){
    this.rest.AllPendingPaysByUser().subscribe(
      arr => {
        this.ListPay = arr;
        console.log(arr);
      }
    );
  }

  //ventana emergente de acción satidfactoria
  showResult() {
  let alert = this.alertCtrl.create({
    title: this.titleWindow,
    message: this.messageWindow,
    cssClass: "alert-success",
    buttons: [
      {
      text: 'OK',
      handler: data => {
        this.RenderPendingPays();
        }
      }
    ]
  });
  alert.present();
  }

  //borrar un pago pendiente
  deletePendingPay() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Eliminar un pago pendiente');
    for (var i = 0; i < this.ListPay.length; i++) {
      alert.addInput({
        type: 'radio',
        label: 'Cta: '+this.ListPay[i].target_account+' - '+this.ListPay[i].description,
        value:  this.ListPay[i].id,
        checked: false
      });
    }

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.rest.DeletePendingPay(data)
            .subscribe(
                error => {
                  this.errorMessage = <any>error
                  this.cond = false;
                //this.handleError(error);
                },
                () => {
                  console.log(this.cond)
                  if (this.cond==true){
                  this.RenderPendingPays();
                  this.titleWindow="¡Pago pendiente eliminado exitosamente!";
                  this.messageWindow="El pago pendiente ha sido desvinculado a tu cuenta";
                  this.showResult();
                }
                }
                );
      }
    });
    this.RenderPendingPays();
    alert.present();
  }

  editPendingPay() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Modificar Pago Pendiente');
    for (var i = 0; i < this.ListPay.length; i++) {
      alert.addInput({
        type: 'radio',
        label: 'Cta: '+this.ListPay[i].target_account+' - '+this.ListPay[i].description,
        value:  this.ListPay[i].id,
        checked: false
      });
    }

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.rest.ModifyPendingPay(data, this.listpay)
            .subscribe(
                error => {this.errorMessage = <any>error
                this.handleError(error);
                },
                () => {
                  if (this.cond==true){
                  this.listpay.state = 'Si'
                  this.RenderPendingPays();
                  this.titleWindow="¡Pago pendiente realizado!";
                  this.messageWindow=" ¡Muy bien! Estás con una deuda menos";
                  this.showResult();
                }
                }
                );
      }
    });
    this.RenderPendingPays();
    alert.present();
  }

  public handleError (error: Response | any) {

      console.log(error.status);
    if(error.status==403){
      this.cond=false;
      this.titleWindow="Error";
      this.messageWindow="La tarjeta no esta registrada en tu cuenta";
        this.showResult();
    }
    if(error.status==400){
      this.cond=false;
      this.titleWindow="Error";
      this.messageWindow="No tienes suficiente dinero en tu tarjeta para la transferencia";
      this.showResult();
    }
    if(error.status==422){
      console.log("hola");
      this.cond=false;
      this.titleWindow="Error";
      this.messageWindow="Valores incorrectos";
      this.showResult();
    }
  }
}
