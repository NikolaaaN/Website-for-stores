import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billpayment',
  templateUrl: './billpayment.component.html',
  styleUrls: ['./billpayment.component.css']
})
export class BillpaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(JSON.parse(sessionStorage.getItem('bill')))
    this.cash = true
  }

  cash: boolean
  card: boolean
  check: boolean
  virman: boolean
 

  cashSubmit(){
    this.cash = true
    this.card = false
    this.check = false
    this.virman = false
  }

  checkSubmit(){
    this.cash = false
    this.card = true
    this.check = false
    this.virman = false
  }

  cardSubmit(){
    this.cash = false
    this.card = false
    this.check = true
    this.virman = false
  }

  virmanSubmit(){
    this.cash = false
    this.card = false
    this.check = false
    this.virman = true
  }
}
