import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TransaccionesPage } from '../pages/transacciones/transacciones';
import { PendientesPage } from '../pages/pendientes/pendientes';
import { MiPerfilPage } from '../pages/mi-perfil/mi-perfil';


import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
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
