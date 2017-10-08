import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TransaccionesPage } from '../pages/transacciones/transacciones';
import { PendientesPage } from '../pages/pendientes/pendientes';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { MiPerfilPage } from '../pages/mi-perfil/mi-perfil';
import { ExtractosPage } from '../pages/extractos/extractos';


import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { UserService } from '../providers/rest/userService';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TransaccionesPage,
    PendientesPage,
    LoginPage,
    SignupPage,
    MiPerfilPage,
    ExtractosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TransaccionesPage,
    PendientesPage,
    LoginPage,
    SignupPage,
    MiPerfilPage,
    ExtractosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    UserService
  ]
})
export class AppModule {}
