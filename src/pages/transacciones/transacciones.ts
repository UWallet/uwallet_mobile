import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { TransactionService } from '../../providers/rest/transactionsService';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-transacciones',
  templateUrl: 'transacciones.html'
})
export class TransaccionesPage {

  amount: number = 0;
  target: number;
  submitAttempt: boolean = false;
  errorMessage: string;
  userError: boolean = false;
  res: string;

  validations_form: FormGroup;

  validation_messages = {
  'amount': [
      { type: 'required', message: 'Campo obligatorio.' },
      { type: 'min', message: 'El monto ingresado no es valido.' }
    ],
    'target': [
      { type: 'required', message: 'Campo obligatorio.' },
      { type: 'pattern', message: 'El numero de cuenta no es valido.'}
    ]
  }
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public rest: TransactionService, public alertCtrl: AlertController) {
  }

  ionViewWillLoad(){
    this.validations_form = this.formBuilder.group({
      amount: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(1)
      ])),
      target: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('\\d+')
      ]))
    });
  }

  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage)
  }

  makeTransaction(){
      this.rest.createTransaction(this.amount, this.target)
        .subscribe(
          res => this.res = res,
          error => {this.errorMessage = <any>error;
            console.log(error)
           this.handleError(error);
          },
          () => {
              this.showSuccess();
          }
        )
  }

  VerifyPass() {
    this.submitAttempt = true;
    if (this.validations_form.valid){
      let prompt = this.alertCtrl.create({
        title: 'Login',
        message: "Ingrese su contraseña",
        cssClass: 'alert-warning',
        inputs: [
          {
            name: 'contraseña',
            placeholder: 'Contraseña',
            type: "password"
          },
        ],
        buttons: [
          {
            text: 'Cancelar'
          },
          {
            text: 'Enviar',
            handler: data => {
              this.rest.verifyPass(data.contraseña)
                .subscribe(
                  res => this.res = res,
                  error => {this.errorMessage = <any>error;
                   this.handleError(error);
                  },
                  () => {
                    this.makeTransaction();
                  }
                )
            }
          }
        ]
      });
      prompt.present();
    }
  }

  showSuccess() {
  let alert = this.alertCtrl.create({
    title: '¡Transaccion exitosa!',
    message: 'La transaccion se ha realizado con exito.',
    cssClass: "alert-success",
    buttons: [
      {
      text: 'OK',
      handler: data => {
        this.target= null;
        this.amount=0;
        this.submitAttempt=false;
        this.validations_form.reset();
        }
      }
    ]
  });
  alert.present();
  }

  showFailPass() {
  let alert = this.alertCtrl.create({
    title: 'Contraseña Incorrecta',
    message: 'La contraseña que ingreso es incorrecta, intentelo de nuevo',
    cssClass: "alert-danger",
    buttons: [
      {
      text: 'OK',
      handler: data => {
        this.VerifyPass();
        }
      }
    ]
  });
  alert.present();
  }

  showFailMoney() {
  let alert = this.alertCtrl.create({
    title: 'Saldo insuficiente',
    message: 'Lo sentimos, no tiene suficiente saldo para realizar la transaccion.',
    cssClass: "alert-danger",
    buttons: [
      {
      text: 'OK'
      }
    ]
  });
  alert.present();
  }

  showFailUser() {
  let alert = this.alertCtrl.create({
    title: 'Cuenta no encontrada',
    message: 'No se encontro el numero de cuenta ingresada, verifique que sea correcta.',
    cssClass: "alert-danger",
    buttons: [
      {
      text: 'OK',
      handler: data => {
        this.userError=true;
        }
      }
    ]
  });
  alert.present();
  }

  private handleError (error: Response | any) {
    if(error.status==401){
        this.showFailPass();
    }
    if(error.status==400){
      this.showFailMoney();
    }
    if(error.status==404){
      this.showFailUser();
    }
  }
}
