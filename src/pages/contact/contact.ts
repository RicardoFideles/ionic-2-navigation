import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log(this.navParams);
    console.log(this.navParams.get('type'));
    this.navParams.data.message();
    this.navParams.data['message']();

    console.log(this.navParams.data.year);

  }


  pushPage():void{
    this.navCtrl.push(ContactPage)
  }

  popPage():void{
    this.navCtrl.pop();
  }

  setRoot():void{
    this.navCtrl.setRoot(HomePage)
  }



}
