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
import { PagoPendientePage } from '../pages/pago-pendiente/pago-pendiente';

import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { UserService } from '../providers/rest/userService';
import { ProfileServiceProvider } from '../providers/profile-service/profile-service';
import { TransactionService } from '../providers/rest/transactionsService';
import { PendingPayServiceProvider } from '../providers/rest/pendingPayService';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TransaccionesPage,
    PendientesPage,
    LoginPage,
    SignupPage,
    MiPerfilPage,
    ExtractosPage,
    PagoPendientePage
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
    ExtractosPage,
    PagoPendientePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    UserService,
    ProfileServiceProvider,
    TransactionService,
    PendingPayServiceProvider

  ]
})
export class AppModule {}
