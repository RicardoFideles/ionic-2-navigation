import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { LifecycleEventsPage } from '../lifecycle-events/lifecycle-events';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pushPage():void{
    this.navCtrl.push(ContactPage, {
      type : 'push',
      course : 'ionic2',
      year : 2017,
      message : () => {
        console.log('welcome to ionic 2 course!')
      }

    })
  }

  setRoot():void{
    this.navCtrl.setRoot(ContactPage, {
      type : 'setRoot'
    })
  }

  lifecycle():void {
    this.navCtrl.push(LifecycleEventsPage)
      .then(() => {
        console.log('Page pushed');
      }).catch(error => {
        console.log('acesso nao autorizado', error);
      });
  }

}
