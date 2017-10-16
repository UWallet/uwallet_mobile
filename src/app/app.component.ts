import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TransaccionesPage } from '../pages/transacciones/transacciones';
import { PendientesPage } from '../pages/pendientes/pendientes';
import { MiPerfilPage } from '../pages/mi-perfil/mi-perfil';


import { LoginPage } from '../pages/login/login';

import { ProfileServiceProvider } from '../providers/profile-service/profile-service';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2/database';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;
  notifications: FirebaseListObservable<any>;
  arreglo = [];
  ActualUser: number;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public fireDatabase: AngularFireDatabase, public rest: ProfileServiceProvider) {
    this.notifications = this.fireDatabase.list('/registros');
    /*this.rest.GetUserInfo().subscribe(
      obj => {
        //console.log(obj);
        this.ActualUser=obj.id;
      }
    );*/
    this.notifications.subscribe(notifications => {
    // items is an array
      notifications.forEach(notification => {
          if (notification.id_user==1){
              this.arreglo.push(notification);
          }
          //console.log( notification.id_user);
      });
    });
    /*for (var i = 0; i < this.notifications.length; i++) {

    }*/
    console.log(  this.arreglo);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  logOut(params){
    if (!params) params = {};
    sessionStorage.setItem("token", "");
    this.navCtrl.push(LoginPage);

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
