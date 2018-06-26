import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  value = 0;
  value1 = 0;


  constructor(public navCtrl: NavController) {

  }

  
  click3() {

  this.value +=3;
}

click2(){

  this.value +=2;
  
}

click1(){

  this.value +=1;
}


 
click33(){

  this.value1 +=3;
}

click22(){

  this.value1 +=2;
}

click11(){

  this.value1 +=1;
}


Resert()
{
  this.value = 0;
  this.value1 = 0;
}

}

