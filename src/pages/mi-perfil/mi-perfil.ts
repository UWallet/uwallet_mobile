import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfileServiceProvider } from '../../providers/profile-service/profile-service';
import { UserConId } from '../../models/User';

@Component({
  selector: 'page-mi-perfil',
  templateUrl: 'mi-perfil.html'
})
export class MiPerfilPage {

  user = new UserConId(0, '', '', '',0);
  constructor( public navCtrl: NavController, public rest: ProfileServiceProvider) {
  }

  ionViewDidLoad() {
    this.RenderUserInfo();
  }
  RenderUserInfo(){
    this.rest.GetUserInfo().subscribe(
      obj => {
        console.log(obj);
        this.user.id=obj.id;
        this.user.firstName=obj.firstName;
        this.user.lastName=obj.lastName;
        this.user.email=obj.email;
        this.user.money=obj.money;
        //console.log(this.user.id);
        /*this.user.id=data.id;
        this.user.firstName=data.firstName;
        this.user.lastName=data.lastName;
        this.userCreat.kind=this.user[0].kind;
        this.userCreat.email=this.user[0].email;
        this.userCreat.ubication=this.user[0].ubication;
        console.log(this.user[0].imageusers);
        this.imgen=this.user[0].imageusers;
        this.imagec=this.user[0].imageusers.length;*/
        //console.log(this.userCreat);
      }
    );
  }

}
