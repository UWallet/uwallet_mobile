import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { PasswordValidator} from '../../validators/password.validator';
import { UserService } from '../../providers/rest/userService';
import { AlertController } from 'ionic-angular';


import { LoginPage } from '../login/login';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  user= {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password_confirmation: ''
  };
  errorMessage: string;
  res: string;
  submitAttempt: boolean = false;
  emailError: boolean = false;
  firstNameError: boolean = false;
  lastNameError: boolean = false;

  validations_form: FormGroup;
  matching_passwords_group: FormGroup;


  validation_messages = {
  'firstName': [
  		{ type: 'required', message: 'Campo obligatorio.' },
  		{ type: 'pattern', message: 'Nombre no valido.' }
  	],
  	'lastName': [
  		{ type: 'required', message: 'Campo obligatorio.' }
  	],
    'email': [
      { type: 'required', message: 'Campo obligatorio.' },
      { type: 'pattern', message: 'Email no valido.' }
    ],
    'password': [
      { type: 'required', message: 'Campo obligatorio.' },
      { type: 'minLength', message: 'La contraseña debe contener por lo menos 8 caracteres.' },
      { type: 'pattern', message: 'La contraseña debe contener por lo menos una letra mayuscula, una minuscula y un numero.' }
    ],
    'matching_passwords': [
      { type: 'areEqual', message: 'Las contraseñas no coinciden.'}
    ]
  }
  constructor(public navCtrl: NavController,public formBuilder: FormBuilder, public rest: UserService, public alertCtrl: AlertController) {
  }

  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage)
  }

  ionViewWillLoad(){
      this.matching_passwords_group = new FormGroup({
  		password: new FormControl('', Validators.compose([
  		 	Validators.minLength(8),
  		 	Validators.required,
  		 	Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
  		])),
  		confirm_password: new FormControl('', Validators.required)
  	 	}, (formGroup: FormGroup) => {
  		 return PasswordValidator.areEqual(formGroup);
  	});

    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.([a-z])+)+$/i;

    this.validations_form = this.formBuilder.group({
      firstName: new FormControl('', Validators.compose([
        Validators.required
      ])),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(EMAIL_REGEXP)
      ])),
      matching_passwords: this.matching_passwords_group,
      terms: new FormControl(true, Validators.pattern('true'))
    });
  }

  showAlert() {
  let alert = this.alertCtrl.create({
    title: '¡Registro Exitoso!',
    message: 'Se enviará un correo de confirmacion para activar tu cuenta.',
    cssClass: "alert-success",
    buttons: [
      {
      text: 'OK',
      handler: data => {
        this.goToLogin(null);
        }
      }
    ]
  });
  alert.present();
}

  register(){
    this.submitAttempt=true;
    if (this.validations_form.valid){
      this.rest.register(this.user)
        .subscribe(
          res => this.res = res,
          error => {this.errorMessage = <any>error;
           this.handleError(error);
          },
          () => {
              this.showAlert();
          }
        )
      }
  }

  private handleError (error: Response | any) {
      const body = error.json() || '';
      this.emailError = false;
      this.firstNameError = false;
      this.lastNameError = false;
    if(error.status==422){
      if (body["email"]){
        this.emailError = true;
      }
      if (body["firstName"]){
        this.firstNameError = true;
      }
      if (body["lastName"]){
        this.lastNameError = true;
      }
    }
  }
}
