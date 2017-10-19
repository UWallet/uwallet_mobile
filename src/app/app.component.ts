import { Component, ViewChild } from '@angular/core';
import { AlertController, Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TransaccionesPage } from '../pages/transacciones/transacciones';
import { PendientesPage } from '../pages/pendientes/pendientes';
import { MiPerfilPage } from '../pages/mi-perfil/mi-perfil';

import { LoginPage } from '../pages/login/login';

import { FCM } from '@ionic-native/fcm';

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
  ActualUser: number;

  constructor(public events: Events,
              platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public fireDatabase: AngularFireDatabase,
              public rest: ProfileServiceProvider,
              public alertCtrl: AlertController,
              public fcm: FCM) {
    this.notifications = this.fireDatabase.list('/registros');
    events.subscribe('user:login', () => {
      this.loadNotifications();
    });
    platform.ready().then(() => {
      fcm.onTokenRefresh().subscribe(token=>{
        console.log(token);
      })
      fcm.subscribeToTopic('2');

      fcm.getToken().then(token=>{
        console.log(token);
      })

      fcm.onNotification().subscribe(data=>{
        if(data.wasTapped){
          console.log("Received in background");
        } else {
          console.log("Received in foreground");
        };
      })
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  logOut(params){
    if (!params) params = {};
    sessionStorage.setItem("token", "");
    this.navCtrl.setRoot(LoginPage);

  }

  loadNotifications() {
    this.rest.GetUserInfo().subscribe(
      obj => {
        //console.log(obj);
        this.ActualUser=obj.id;
      }
    );
    //console.log(this.ActualUser)
    this.notifications.subscribe(notifications => {
    // items is an array
      this.arreglo=[];
      notifications.reverse().forEach(notification => {
          if (notification.id_user==this.ActualUser){
              this.arreglo.push(notification);
          }
          //console.log( notification.id_user);
      });
    });
    /*for (var i = 0; i < this.notifications.length; i++) {

    }*/
    console.log(  this.arreglo);
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
