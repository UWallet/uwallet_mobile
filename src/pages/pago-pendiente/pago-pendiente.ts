import { Component } from '@angular/core';
  import { NavController, MenuController } from 'ionic-angular';
  import { HomePage } from '../home/home';
  import { PendientesPage } from '../pendientes/pendientes';
  import { ListPendingPayCreate } from '../../models/PendingPay';
  import { PendingPayServiceProvider } from '../../providers/rest/pendingPayService';
  import { AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Events } from 'ionic-angular';


  @Component({
    selector: 'page-pago-pendiente',
    templateUrl: 'pago-pendiente.html'
  })
  export class PagoPendientePage {

    listpay = new ListPendingPayCreate('','',0,0,false);
    cond=true;
    errorMessage: string;
    messageWindow: string;
    AlertClass: string;
    titleWindow: string;
    //res: string;
    payForm: FormGroup;
    validation_messages = {
    'target_account': [
        { type: 'required', message: 'Campo obligatorio.' },
        { type: 'min', message: 'El numero de cuenta no es valido.' }
      ],
      'cost': [
        { type: 'required', message: 'Campo obligatorio.' },
        { type: 'min', message: 'El monto ingresado no es valido.' }
      ],
      'description': [
          { type: 'required', message: 'Campo obligatorio.' },
        ],
        'date_pay': [
          { type: 'required', message: 'Campo obligatorio.' }
        ],
    }
    constructor(public formBuilder: FormBuilder,private menu: MenuController, public navCtrl: NavController, public rest: PendingPayServiceProvider, public alertCtrl: AlertController, public events: Events) {
    }

    ionViewWillLoad(){
      this.payForm = this.formBuilder.group({
        target_account: new FormControl('', Validators.compose([
          Validators.required,
          Validators.min(1)
        ])),
        cost: new FormControl('', Validators.compose([
          Validators.required,
          Validators.min(1)
        ])),
        description: new FormControl('', Validators.compose([
          Validators.required
        ])),
        date_pay: new FormControl('', Validators.compose([
          Validators.required
        ]))
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
      this.goToPendientes(null);
      this.rest.createItemOfList(this.listpay)
        .subscribe(
          res => this.listpay,
          error => {this.errorMessage = <any>error;
            console.log(error)
           this.handleError(error);
          },
          () => {
              //this.showSuccess();
              if (this.cond==true){
              this.events.publish('list:created');
              this.titleWindow="¡Recordatorio añadido con exito!";
              this.messageWindow="El recordatorio aparecera en tu cuenta";
              this.AlertClass="alert-success";
              this.showResult();
              this.goToPendientes(null);
            }
          }
        )


    }

    showResult() {
    let alert = this.alertCtrl.create({
      title: this.titleWindow,
      message: this.messageWindow,
      cssClass: this.AlertClass,
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

    private handleError (error: Response | any) {
        var temp=String(error);
        this.AlertClass="alert-danger";
        //console.log(String(error));
      if(error.status==403){
        this.cond=false;
        this.titleWindow="Error";
        this.messageWindow="No tienes los permisos para realizar esta operacion";
          this.showResult();
      }
      if(error.status==404){
        this.cond=false;
        this.titleWindow="Error";
        this.messageWindow="La cuenta de destino no existe";
        this.showResult();
      }
      if(temp.startsWith("422")){
        this.cond=false;
        this.titleWindow="Error";
        if (temp.includes("[")){
          var beg=temp.indexOf("[");
          var end=temp.indexOf("]");
          this.messageWindow= temp.substring(beg+2,end-1);
        }
        //console.log("hola");

        //this.messageWindow="Valores incorrectos";
        this.showResult();
      }
      if(temp.startsWith("404")){
        this.cond=false;
        this.titleWindow="Error";
        this.messageWindow="La cuenta de destino no existe" ;
        this.showResult();
      }
    }
  }
