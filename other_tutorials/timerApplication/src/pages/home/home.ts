import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public myTimer = 60;

  public myTimerVariable;

  constructor(public navCtrl: NavController) {

  }

  public timerController()
  {

  }

  public customTimer = function()
    { 
      this.myTimer--;
      if (this.myTimer == 0)
      setTimeout.ca
      alert("Hello");
    };

  public startTimer()
  {
    setTimeout( this.customTimer, 3000);
  }

  public stopTimer()
  {

  }


  maxTime: any=3;
  timerStarted: any = false;
  timerValue: any = 0;
  timer: any = 0;
  hidevalue = false;

  StartTimer(){
    if (this.timerStarted == false)
    {
      this.timerValue = this.maxTime;
      this.timerStarted = true;  
    }
    this.timer = setTimeout(x => 
      {
          if(this.timerValue <= 0) { }
           this.timerValue -= 1;

          if(this.timerValue > 0){
            //this.hidevalue = false;
            this.StartTimer();
          }
          
          else{
              //this.hidevalue = true;
              this.timerStarted = false;
              // this.timerValue = 0;
              alert("Hello");
              this.timerValue = this.maxTime;
          }

      }, 1000);
 

  }  
}
