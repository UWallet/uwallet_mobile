import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfileServiceProvider } from '../../providers/profile-service/profile-service';
//import { CreditCardsServiceProvider } from '../../providers/profile-service/creditCardsService';
import { UserConId } from '../../models/User';
import { AlertController } from 'ionic-angular';
import { CreditCard } from '../../models/CreditCard';
import { CardToTransfer } from '../../models/CreditCard';

@Component({
  selector: 'page-mi-perfil',
  templateUrl: 'mi-perfil.html'
})
export class MiPerfilPage {

  CreditCardsUser;
  user = new UserConId(0, '', '', '',0);
  creditCardToCreate = new CreditCard('0', 0, 0,0);
  creditCardToTransfer = new CardToTransfer (0, 0);

  cond: boolean;
  errorMessage: string;
  //testRadioOpen: boolean;
  testRadioResult;
  constructor( public navCtrl: NavController, public rest: ProfileServiceProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.RenderUserInfo();
  }
  RenderUserInfo(){
    this.rest.GetUserInfo().subscribe(
      obj => {
        //console.log(obj);
        this.user.id=obj.id;
        this.user.firstName=obj.firstName;
        this.user.lastName=obj.lastName;
        this.user.email=obj.email;
        this.user.money=obj.money;

      }
    );
    this.rest.AllCreditCardsByUser().subscribe(
      arr => {
        //console.log(arr);
        this.CreditCardsUser=arr;
      }
    );
  }



  addCard() {
    let prompt = this.alertCtrl.create({
      title: 'Vincular Tarjeta de credito',
      message: "Ingresa un numero de tarjeta",
      inputs: [
        {
          name: 'number',
          placeholder: 'No. tarjeta'
        },
        {
          name: 'expiration_month',
          placeholder: 'mes de expiracion'
        },
        {
          name: 'expiration_year',
          placeholder: 'año de expiracion'
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
            //console.log(data);
            this.creditCardToCreate.number=String(data.number)
            this.creditCardToCreate.expiration_month =parseInt( data.expiration_month)
            this.creditCardToCreate.expiration_year=parseInt(data.expiration_year)
            this.creditCardToCreate.amount=Math.floor(Math.random() * 5000000) + 100
            this.rest.CreateCard(this.creditCardToCreate)
  				      .subscribe(
            				CreditCard => this.creditCardToCreate,
            				error => this.errorMessage = <any>error);
            this.RenderUserInfo();
          }

        }
      ]
    });
    prompt.present();
  }


  deletecard() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Desvincular tarjeta de credito');
    for (var i = 0; i < this.CreditCardsUser.length; i++) {
      alert.addInput({
        type: 'radio',
        label: this.CreditCardsUser[i].number,
        value:  this.CreditCardsUser[i].id,
        checked: false
      });
    }

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        //this.testRadioOpen = false;
        //console.log(data);
        this.rest.DeleteCard(data)
            .subscribe(
                error => this.errorMessage = <any>error);
        this.RenderUserInfo();
      }
    });
    this.RenderUserInfo();
    alert.present();
  }


  TransferFromCard() {

    let prompt = this.alertCtrl.create({
      title: 'Cargar dinero a tu cuenta',
      message: "Ingresa el numero de tarjeta y el monto a transferir",
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
                this.cond= true;
                //this.VerifyPass();
                this.rest.TransferFromCardCard(this.creditCardToTransfer)
                    .subscribe(
                        CreditCard => this.creditCardToTransfer,
                        error => this.errorMessage = <any>error);
                this.RenderUserInfo();

              }
            }
            if (this.cond==false){
              console.log("la tarjeta especificada esta fuera de su dominio");
              //hacer que lo imprima en la aplicacion
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
              this.rest.verifyPass(data.contraseña)
                .subscribe(
                  res => this.res = res,
                  error => {this.errorMessage = <any>error;
                   this.handleError(error);
                  },
                  () => {
                    this.makeTransaction();
                  }
                )
            }
          }
        ]
      });
      prompt.present();

  }*/


}
