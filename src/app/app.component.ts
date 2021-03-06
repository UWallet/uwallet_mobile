import { Component, ViewChild } from '@angular/core';
import { AlertController, Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TransaccionesPage } from '../pages/transacciones/transacciones';
import { PendientesPage } from '../pages/pendientes/pendientes';
import { MiPerfilPage } from '../pages/mi-perfil/mi-perfil';

import { LoginPage } from '../pages/login/login';

import { FCM } from '@ionic-native/fcm';

import { UserService } from '../providers/rest/userService';
import { ProfileServiceProvider } from '../providers/profile-service/profile-service';

import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2/database';
import { Events } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;
  notifications: Observable<any[]>;
  arreglo = [];
  arreglo2= [];
  ActualUser: number;

  constructor(public events: Events,
              platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public fireDatabase: AngularFireDatabase,
              public rest: ProfileServiceProvider,
              public user: UserService,
              public alertCtrl: AlertController,
              public fcm: FCM) {
    this.notifications = this.fireDatabase.list('/registros');
    events.subscribe('user:login', () => {
      this.loadNotifications();
    });
    platform.ready().then(() => {
      fcm.onTokenRefresh().subscribe(token=>{
        localStorage.setItem("device_token", token);
      })

      fcm.getToken().then(token=>{
        localStorage.setItem("device_token", token);
      })

      fcm.onNotification().subscribe(data=>{
        console.log(data);
        if(data.wasTapped){

          alert( JSON.stringify(data) );
  }else{
  this.arreglo.push(data);
}  });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  logOut(params){
    if (!params) params = {};
    let device_token = localStorage.getItem("device_token");
    this.user.logout(device_token)
      .subscribe(
        res => {},
        error => {console.log(error);},
        () => {
          localStorage.setItem("token", "");
          this.navCtrl.setRoot(LoginPage);
        }
      )

  }


  loadNotifications() {
    this.rest.GetUserInfo().subscribe(
      obj => {
        //console.log(obj);
        this.ActualUser=obj.id;
      }
    );
    console.log(this.ActualUser)
    this.notifications.subscribe(notifications => {
    // items is an array
      this.arreglo2=[];
      notifications.forEach(notification => {
          if (notification.id_user==this.ActualUser){
              this.arreglo2.push(notification);
          }
          //console.log( notification.id_user);
      });
    });
    /*for (var i = 0; i < this.notifications.length; i++) {

    }*/
    this.arreglo= this.arreglo2;
  }

  setIP() {
    let prompt = this.alertCtrl.create({
      title: 'IP',
      message: "ip",
      cssClass: "alert-warning",
      inputs: [
        {
          name: 'ip',
          placeholder: 'ip'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            localStorage.setItem("ip",data.ip);
          }
        }
      ]
    });
    prompt.present();
  }

  goToTransacciones(params){
    if (!params) params = {};
    this.navCtrl.push(TransaccionesPage);
  }goToPendientes(params){
    if (!params) params = {};
    this.navCtrl.push(PendientesPage);
  }goToMiPerfil(params){
    if (!params) params = {};
    this.navCtrl.push(MiPerfilPage);
  }
}
