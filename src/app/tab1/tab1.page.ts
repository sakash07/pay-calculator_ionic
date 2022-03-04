import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
hourlyRate = 0;
hoursWorked = 0;;
pay = 0;
tax = 0;
overtimePay = 0;
totalPay = 0;
  // constructor() {}

  btnClicked(){
    if (this.hoursWorked <= 40)
    {
      this.pay = this.hourlyRate * this.hoursWorked;
    }
    else{
      //alert('overtime applies');

    this.overtimePay = (this.hoursWorked - 40) * this.hourlyRate*1.5 ;
    this.pay = this.hourlyRate * 40;
    }
    this.totalPay=this.pay + this.overtimePay;
    this.calcTax();
  }

  calcTax(){
    this.tax = this.totalPay *0.18;
  }

}
