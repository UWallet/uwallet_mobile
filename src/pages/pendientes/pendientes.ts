import { Component } from '@angular/core';
 import { NavController, MenuController } from 'ionic-angular';
 import { HomePage } from '../home/home';
 import { ListPendingPay } from '../../models/PendingPay';
 import { PendingPayServiceProvider } from '../../providers/rest/pendingPayService';
 import { AlertController } from 'ionic-angular';
 import { FormBuilder, FormGroup } from '@angular/forms';
 import { PagoPendientePage } from '../pago-pendiente/pago-pendiente';

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html'
})
export class PendientesPage {
     ListPay;
     listpay = new ListPendingPay(0,'','',0,0,false);
     listpayToCreate = new ListPendingPay(1,'','',0,0,false);
     listpayToUpdate = new ListPendingPay(1,'','',0,0,false);
     cond=true;
     errorMessage: string;
     res: string;

     titleWindow: string;
     messageWindow: string;
     constructor(private menu: MenuController, public navCtrl: NavController,
       public rest: PendingPayServiceProvider, public alertCtrl: AlertController) {
     }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage)
  }
  goToPagoPendiente(params){
     if (!params) params = {};
     console.log("hola");
     this.navCtrl.push(PagoPendientePage);
   }
   a(){
      console.log("hola");
    }

   //Muestra la lista de pagos pendientes
   ionViewDidLoad() {
     this.RenderPendingPays();
     this.menu.swipeEnable(true, 'menu');
   }

   //listas de un usuario en un array ListPay
   RenderPendingPays(){
     this.rest.AllPendingPaysByUser().subscribe(
       arr => {
         this.ListPay = arr;
         console.log(arr);
       }
     );
   }

   //ventana emergente de acción satidfactoria
   showResult() {
   let alert = this.alertCtrl.create({
     title: this.titleWindow,
     message: this.messageWindow,
     cssClass: "alert-success",
     buttons: [
       {
       text: 'OK',
       handler: data => {
         this.RenderPendingPays();
         }
       }
     ]
   });
   alert.present();
   }

   //borrar un pago pendiente
   deletePendingPay() {
     let alert = this.alertCtrl.create();
     alert.setTitle('Eliminar un pago pendiente');
     for (var i = 0; i < this.ListPay.length; i) {
       alert.addInput({
         type: 'radio',
         label: ('Cta: ').concat((String(this.ListPay[i].target_account).concat(' - ')).concat(String(this.ListPay[i].description))),
         value:  this.ListPay[i].id,
         checked: false
       });
     }

     alert.addButton('Cancel');
     alert.addButton({
       text: 'OK',
       handler: data => {
         this.rest.DeletePendingPay(data)
             .subscribe(
                 error => {
                   this.errorMessage = <any>error
                   this.cond = false;
                 //this.handleError(error);
                 },
                 () => {
                   console.log(this.cond)
                   if (this.cond==true){
                   this.RenderPendingPays();
                   this.titleWindow="¡Pago pendiente eliminado exitosamente!";
                   this.messageWindow="El pago pendiente ha sido desvinculado a tu cuenta";
                   this.showResult();
                 }
                 }
                 );
       }
     });
     this.RenderPendingPays();
     alert.present();
   }

   editPendingPay() {
     let alert = this.alertCtrl.create();
     alert.setTitle('Modificar Pago Pendiente');
     for (var i = 0; i < this.ListPay.length; i) {
       alert.addInput({
         type: 'radio',
         label: ('Cta: ').concat((String(this.ListPay[i].target_account).concat(' - ')).concat(String(this.ListPay[i].description))),
         value:  this.ListPay[i].id,
         checked: false
       });
     }

     alert.addButton('Cancel');
     alert.addButton({
       text: 'OK',
       handler: data => {
         this.rest.ModifyPendingPay(data, this.listpay)
             .subscribe(
                 error => {this.errorMessage = <any>error
                 this.handleError(error);
                 },
                 () => {
                   if (this.cond==true){
                   this.listpay.state_pay = true
                   this.RenderPendingPays();
                   this.titleWindow="¡Pago pendiente realizado!";
                   this.messageWindow=" ¡Muy bien! Estás con una deuda menos";
                   this.showResult();
                 }
                 }
                 );
       }
     });
     this.RenderPendingPays();
     alert.present();
   }









   addCard() {
     let prompt = this.alertCtrl.create({
       title: 'Crear Un recordatorio de deuda',
       message: "Ingresa la infromacion solicitada",
       cssClass: "alert-warning",
       inputs: [
         {
           name: 'description',
           placeholder: 'descripción'
         },
         {
           name: 'date_pay',
           placeholder: 'fecha de pago'
         },
         {
           name: 'cost',
           placeholder: 'costo'
         },
         {
           name: 'target_account',
           placeholder: 'cuenta destino'
         }
       ],
       buttons: [
         {
           text: 'Cancelar',
           handler: data => {
             //console.log('Cancel clicked');
           }
         },
         {
           text: 'Guardar',
           handler: data => {
             //console.log(data);
             this.listpayToCreate.description=String(data.description)
             this.listpayToCreate.date_pay =String( data.date_pay)
             this.listpayToCreate.cost=parseInt(data.cost)
             this.listpayToCreate.target_account=parseInt(data.target_account)
             this.rest.createItemOfList(this.listpayToCreate)
                 .subscribe(
                     List => this.listpayToCreate,
                     error => {this.errorMessage = <any>error
                     //console.log(error);
                     this.handleError(error);
                     },
                     () => {
                       /*if (this.cond==true){
                       this.RenderUserInfo();
                       this.titleWindow="¡tarjeta añadida con exito!";
                       this.messageWindow="La tarjeta ha sido vinculada a tu cuenta";
                       this.showResult();
                     }*/
                     }
                     );


           }

         }
       ]
     });
     prompt.present();
   }


   deletecard() {
     let alert = this.alertCtrl.create();
     alert.setTitle('Eliminar un pago pendiente');
     for (var i = 0; i < this.ListPay.length; i++) {
       alert.addInput({
         type: 'radio',
         label:  ('Cta: ').concat((String(this.ListPay[i].target_account).concat(' - ')).concat(String(this.ListPay[i].description))),
         value:  this.ListPay[i].id,
         checked: false
       });
     }

     alert.addButton('Cancelar');
     alert.addButton({
       text: 'Borrar',
       handler: data => {
         //this.testRadioOpen = false;
         //console.log(data);
         this.rest.DeletePendingPay(data)
             .subscribe(
                 error => {this.errorMessage = <any>error
                 //this.handleError(error);
                 },
                 () => {
                  /* if (this.cond==true){
                   this.RenderUserInfo();
                   this.titleWindow="¡tarjeta borrada exitosamente!";
                   this.messageWindow="La tarjeta ha sido desvinculada a tu cuenta";
                   this.showResult();
                 }*/
                 }
                 );

       }
     });
     //this.RenderUserInfo();
     alert.present();
   }

   updateCard() {
     let alert = this.alertCtrl.create();
     alert.setTitle('Modificar el estado de la deuda');
     for (var i = 0; i < this.ListPay.length; i++) {
       alert.addInput({
         type: 'radio',
         label:  ('Cta: ').concat((String(this.ListPay[i].target_account).concat(' - ')).concat(String(this.ListPay[i].description))),
         value:  this.ListPay[i],
         checked: false
       });
     }

     alert.addButton('Cancelar');
     alert.addButton({
       text: 'Cambiar',
       handler: data => {
         this.listpayToUpdate=data;
         data.state_pay=true;
         console.log(data);
         this.rest.ModifyPendingPay(data)
             .subscribe(
                 error => {this.errorMessage = <any>error
                 //this.handleError(error);
                 },
                 () => {
                  /* if (this.cond==true){
                   this.RenderUserInfo();
                   this.titleWindow="¡tarjeta borrada exitosamente!";
                   this.messageWindow="La tarjeta ha sido desvinculada a tu cuenta";
                   this.showResult();
                 }*/
                 }
               );

       }
     });
     //this.RenderUserInfo();
     alert.present();
     console.log(this.listpayToUpdate);
   }


/*
   TransferFromCard() {

     let prompt = this.alertCtrl.create({
       title: 'Cargar dinero a tu cuenta',
       message: "Ingresa el numero de tarjeta y el monto a transferir",
       cssClass: "alert-warning",
       inputs: [
         {
           name: 'NoCard',
           placeholder: 'No. tarjeta'
         },
         {
           name: 'money',
           placeholder: 'monto'
         },
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

             this.cond= false;
             for (var i = 0; i < this.CreditCardsUser.length; i++) {
               //console.log(this.CreditCardsUser[i].number);
               //console.log(data.Nocard);

               if(0==(this.CreditCardsUser[i].number.localeCompare(String(data.NoCard)))){
                 this.creditCardToTransfer.cardId=parseInt(this.CreditCardsUser[i].id);
                 this.creditCardToTransfer.money=parseInt(data.money);
                 //console.log(NaN+1);
                 this.cond= true;
                 if (isNaN(this.creditCardToTransfer.money) || this.creditCardToTransfer.money<=0){
                   this.titleWindow="Error";
                   this.messageWindow="El monto especificado es invalido";
                   this.showResult();

                 }else{
                   this.VerifyPass();
                 }


               }
             }
             if (this.cond==false){
               //console.log("la tarjeta especificada esta fuera de su dominio");
               //hacer que lo imprima en la aplicacion
               this.titleWindow="Error";
               this.messageWindow="la tarjeta especificada esta fuera de su dominio";
                 this.showResult();
             }
             //console.log(data);

           }

         }
       ]
     });
     prompt.present();
   }
/*
   VerifyPass() {
       let prompt = this.alertCtrl.create({
         title: 'Login',
         message: "Ingrese su contraseña",
         cssClass: 'alert-warning',
         inputs: [
           {
             name: 'contraseña',
             placeholder: 'Contraseña',
             type: "password"
           },
         ],
         buttons: [
           {
             text: 'Cancelar'
           },
           {
             text: 'Enviar',
             handler: data => {
               this.restTrans.verifyPass(data.contraseña)
                 .subscribe(
                   res => this.res = res,
                   error => {this.errorMessage = <any>error;
                   },
                   () => {
                     this.rest.TransferFromCardCard(this.creditCardToTransfer)
                         .subscribe(
                             CreditCard => this.creditCardToTransfer,
                             error => {this.errorMessage = <any>error
                             this.handleError(error);
                             },
                             () => {
                               if (this.cond==true){
                               this.titleWindow="Transferencia exitosa";
                               this.messageWindow="El monto ha sido transferido de tu tarjeta a tu cuenta";
                               this.showResult();
                             }
                             }
                             );

                   }
                 )
             }
           }
         ]
       });
       prompt.present();

   }

   showResult() {
   let alert = this.alertCtrl.create({
     title: this.titleWindow,
     message: this.messageWindow,
     cssClass: "alert-success",
     buttons: [
       {
       text: 'OK',
       handler: data => {
         this.RenderUserInfo();
         }
       }
     ]
   });
   alert.present();
   }
*/






   private handleError (error: Response | any) {
       var temp=String(error);
       //console.log(String(error));
     if(error.status==403){
       this.cond=false;
       this.titleWindow="Error";
       this.messageWindow="La tarjeta no esta registrada en tu cuenta";
         this.showResult();
     }
     if(error.status==400){
       this.cond=false;
       this.titleWindow="Error";
       this.messageWindow="No tienes suficiente dinero en tu tarjeta para la transferencia";
       this.showResult();
     }
     if(temp.startsWith("422")){
       this.cond=false;
       this.titleWindow="Error";
       if (temp.includes("[")){
         var beg=temp.indexOf("[");
         var end=temp.indexOf("]");
         this.messageWindow= temp.substring(beg+2,end-1);
       }
       //console.log("hola");

       //this.messageWindow="Valores incorrectos";
       this.showResult();
     }
   }
}
