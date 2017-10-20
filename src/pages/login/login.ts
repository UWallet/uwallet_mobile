import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavController, MenuController  } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { UserService } from '../../providers/rest/userService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

    user = {
      email: '',
      password: ''
    };
    errorMessage: string;
    token: string;
    loginForm: FormGroup;
    submitAttempt: boolean = false;
    unautorized: boolean = false;

  constructor(private menu: MenuController, public events: Events ,public formBuilder: FormBuilder, public navCtrl: NavController, public rest: UserService) {
  }

  ionViewWillLoad(){
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?\.([a-z])*$/i;
      this.loginForm = this.formBuilder.group({
        email: ['',Validators.compose([Validators.pattern(EMAIL_REGEXP), Validators.required])],
        password: ['',Validators.required]
      });

  }

  ionViewDidLoad(){
    if(localStorage.getItem("token")!= '' && localStorage.getItem("token")){
        this.goToHome(null);
      }
  }

  goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage)
  }
  ionViewDidEnter() {
    this.menu.swipeEnable(false, 'menu');
  }

  login(){
    this.submitAttempt=true;
    if (this.loginForm.valid){
      let email = this.user.email;
      let password = this.user.password;
      let device_token = localStorage.getItem("device_token");
      this.rest.login(email, password, device_token)
        .subscribe(
          res => this.token = res.auth_token,
          error => {this.errorMessage = <any>error;
            this.handleError(error);
          },
          () => {
              localStorage.setItem("token", this.token);
              this.events.publish('user:login');
              this.goToHome(null);
          }
        )
      }
  }
  private handleError (error: Response | any) {
    if(error.status==401){
      this.unautorized=true;
    }
    const body = error.json() || '';
    console.log(body)
  }
}
