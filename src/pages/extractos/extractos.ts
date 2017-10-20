import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ExtractsServiceProvider } from '../../providers/rest/extractsService';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-extractos',
  templateUrl: 'extractos.html'
})
export class ExtractosPage {
  days: number;
  constructor(public navCtrl: NavController, public rest:ExtractsServiceProvider, public alertCtrl: AlertController) {
  }

  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage)
  }
  RenderAllExtracts(){
    this.rest.GetAllExtracts().subscribe(
      obj => {
        //console.log(obj);
      }
    );
  }
  RenderExtractsByDays() {
    let prompt = this.alertCtrl.create({
      title: 'Generar Extracto',
      message: "Ingrese desde hace cuantos dias desea generar su extracto",
      cssClass: "alert-warning",
      inputs: [
        {
          name: 'days',
          placeholder: 'dias'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: 'Generar',
          handler: data => {
            //console.log(data);

            /*this.days=parseInt(data.days)
            this.rest.GetExtractsByDays(  this.days)
  				      .subscribe(
            				error => {
                    //console.log(error);
                    },
                    () => {
                      if (this.cond==true){
                      this.RenderUserInfo();
                      this.titleWindow="¡tarjeta añadida con exito!";
                      this.messageWindow="La tarjeta ha sido vinculada a tu cuenta";
                      this.showResult();
                    }
                    }
                  );*/


          }

        }
      ]
    });
    prompt.present();
  }
}
