import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { TransactionService } from '../../providers/rest/transactionsService';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-transacciones',
  templateUrl: 'transacciones.html'
})
export class TransaccionesPage {

  monto: number = 0;
  target: number;
  submitAttempt: boolean = false;

  validations_form: FormGroup;

  validation_messages = {
  'monto': [
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
      monto: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(1)
      ])),
      target: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('\\d+')
      ]))
    });
  }

  makeTransaction(){
    this.submitAttempt = true;
    console.log("ya casi :'v")
  }
}
