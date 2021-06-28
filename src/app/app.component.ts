import { Component, OnInit  } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'PicoYPlaca';
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  };

  model: any = { jsdate: new Date() };
  plate: any;
  time: any;
  constructor() { }

  ngOnInit() {
    var time = new Date();
    var timenow = {
        h: time.getHours(),
        m: time.getMinutes()
    }
    if(timenow.m < 10) {
      this.time = timenow.h +":0"+ timenow.m ;
    }
    else {
      this.time = timenow.h +":"+ timenow.m ;
    }
  }

 /* Checks first if vehicle can be in the stress on a specific day according to plate number */
  checkPicoPlaca(model, plate, time) {
    document.getElementById("message").innerText = "";
    if( plate != null && plate.length==7 && model != null){

        var splitPlate = plate.split("");
        var num = splitPlate.length;
        var numPlate  = splitPlate[num-1];

        var date = model.jsdate;
        var splitDate = date.toDateString().split(" ");
        var day = splitDate[0];

        var splitTime = time.split(":");
        var hours = splitTime[0];
        var minutes = splitTime[1];

        switch (day) {
          case "Mon":{
            if (numPlate == 1 || numPlate == 2){
              this.checkTime(hours, minutes);
            }
            else {
              document.getElementById("message").innerText = "Your vehicle can be all day in the streets!";
            }
            break;
          }
          case "Tue":{
            if (numPlate == 3 || numPlate == 4){
              this.checkTime(hours, minutes);
            }
            else {
              document.getElementById("message").innerText = "Your vehicle can be all day in the streets!";
            }
            break;
          }
          case "Wed":{
            if (numPlate == 5 || numPlate == 6){
              this.checkTime(hours, minutes);
            }
            else {
              document.getElementById("message").innerText = "Your vehicle can be all day in the streets!";
            }
            break;
          }
          case "Thu":{
            if (numPlate == 7 || numPlate == 8){
              this.checkTime(hours, minutes);
            }
            else {
              document.getElementById("message").innerText = "Your vehicle can be all day in the streets!";
            }
            break;
          }
          case "Fri":{
            if (numPlate == 9 || numPlate == 0){
              this.checkTime(hours, minutes);
            }
            else {
              document.getElementById("message").innerText = "Your vehicle can be all day in the streets!";
            }
            break;
          }
          default : {
            document.getElementById("message").innerText = "There is no vehicle restriction on this day";
          }
        }
    }else {
      document.getElementById("message").innerText = "Please fill out all fields correctly!";
    }
}

 /* Checks if vehicle on picoyplaca can be in the stress on a specific Time of the day*/
  checkTime (hours, minutes){
    if (hours == "19" && minutes >= "31" || hours == "09" && minutes >= "31") {
      document.getElementById("message").innerText = "Your vehicle can be in the streets at this time!";    
    } else if (hours >= "07" && hours <= "09"  || hours >= "16" && hours <= "19" ) {
          document.getElementById("message").innerText = "Your vehicle can't be in the streets at this time!";
      }
      else {
          document.getElementById("message").innerText = "Your vehicle can be in the streets at this time!";
      }
    }
  }


