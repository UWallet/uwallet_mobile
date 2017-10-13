import { Component } from '@angular/core';
import { NavController, MenuController  } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { UserService } from '../../providers/rest/userService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private menu: MenuController,public formBuilder: FormBuilder, public navCtrl: NavController, public rest: UserService) {
  }

  ionViewWillLoad(){
      this.loginForm = this.formBuilder.group({
        email: ['',Validators.compose([Validators.email, Validators.required])],
        password: ['',Validators.required]
      });

  }

  ionViewDidLoad(){
    if(sessionStorage.getItem("token")!= '' && sessionStorage.getItem("token")){
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
      this.rest.login(email, password)
        .subscribe(
          res => this.token = res.auth_token,
          error => {this.errorMessage = <any>error;
            this.handleError(error);
          },
          () => {
              sessionStorage.setItem("token", this.token);
              this.goToHome(null);
          }
        )
      }
  }
  private handleError (error: Response | any) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
    if(error.status==401){
      this.unautorized=true;
    }
  }
}
