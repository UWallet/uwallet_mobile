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
import { UserService } from '../providers/rest/userService';
import { ProfileServiceProvider } from '../providers/profile-service/profile-service';
import { TransactionService } from '../providers/rest/transactionsService';
import { ExtractsServiceProvider } from '../providers/rest/extractsService';
import { PendingPayServiceProvider } from '../providers/rest/pendingPayService';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { FCM } from '@ionic-native/fcm';

//import { AngularFireModule } from '../../node_modules/angularfire2/src/core/angularfire2';
//import { AngularFireDatabaseModule } from '../../node_modules/angularfire2/src/database/database.module';


const firebaseConfig = {
    apiKey: "AIzaSyCjhQCw9scm2EklDAD7vbku9ybB-jIfYX0",
    authDomain: "notifications-db.firebaseapp.com",
    databaseURL: "https://notifications-db.firebaseio.com",
    projectId: "notifications-db",
    storageBucket: "notifications-db.appspot.com",
    messagingSenderId: "82818122160"
};
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
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig,'notifications'),
    AngularFireDatabaseModule
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
    UserService,
    ProfileServiceProvider,
    TransactionService,
    FCM,
    PendingPayServiceProvider,
    ExtractsServiceProvider

  ]
})

export class AppModule {


}
