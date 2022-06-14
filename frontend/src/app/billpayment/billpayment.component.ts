import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from '../models/bill';
import { Company } from '../models/company';
import { Orderer } from '../models/orderer';
import { CompanyService } from '../services/company.service';
import { CustomerserviceService } from '../services/customerservice.service';

@Component({
  selector: 'app-billpayment',
  templateUrl: './billpayment.component.html',
  styleUrls: ['./billpayment.component.css']
})
export class BillpaymentComponent implements OnInit {

  constructor(private companyService: CompanyService, private router: Router, private customerService: CustomerserviceService) { }

  ngOnInit(): void {
    console.log(JSON.parse(sessionStorage.getItem('bill')))
    this.bill = JSON.parse(sessionStorage.getItem('bill'))
    this.cash = true
    this.companyService.getOrderers().subscribe((orderers: Array<Orderer>) => {
      this.orderers = orderers
    })
    
  }

  bill: Array<Bill> = []
  cash: boolean
  card: boolean
  check: boolean
  virman: boolean
  orderers: Array<Orderer> = []
  brLK: string
  finalPrice: number = 0
  fullName: string
  slip: string
  orderer: string
  type: string

  cashSubmit(){
    this.cash = true
    this.card = false
    this.check = false
    this.virman = false
  }

  checkSubmit(){
    this.cash = false
    this.check = true
    this.card = false
    this.virman = false
  }

  cardSubmit(){
    this.cash = false
    this.check = false
    this.card = true
    this.virman = false
  }

  virmanSubmit(){
    this.cash = false
    this.card = false
    this.check = false
    this.virman = true
  }

  cashPayout(){

    this.type = "cash"
    this.bill.forEach(element => {
      console.log(element.amount + " " + element.price)
      
      this.finalPrice += element.amount * element.price
    });
    
    
    this.companyService.pushBill(this.bill, this.finalPrice, null, null, this.brLK, null, this.type).subscribe((message: string) => {
      if(this.brLK != null){
        this.customerService.pushBill(this.brLK, this.bill).subscribe(() => {

        })
      }
      this.router.navigate(['bills']) 
      
    })
  }

  checkPayout(){

    this.type = "check"
    this.bill.forEach(element => {
      console.log(element.amount + " " + element.price)
      
      this.finalPrice += element.amount * element.price
    });
    
    this.companyService.pushBill(this.bill, this.finalPrice, this.fullName, null, this.brLK, null, this.type).subscribe((message: string) => {
      if(this.brLK != null){
        this.customerService.pushBill(this.brLK, this.bill).subscribe(() => {

        })
      }
      this.router.navigate(['bills'])  
    })

  }

  cardPayout(){

    this.type = "card"
    this.bill.forEach(element => {
      console.log(element.amount + " " + element.price)
      
      this.finalPrice += element.amount * element.price
    });
    
    this.companyService.pushBill(this.bill, this.finalPrice,null, this.slip, this.brLK, null, this.type).subscribe((message: string) => {
      if(this.brLK != null){
        this.customerService.pushBill(this.brLK, this.bill).subscribe(() => {

        })
      }
      this.router.navigate(['bills'])  
    })
  }

 
  virmanPayout(){

    this.type = "virman"
    this.bill.forEach(element => {
      console.log(element.amount + " " + element.price)
      
      this.finalPrice += element.amount * element.price
    });
    
    this.companyService.pushBill(this.bill, this.finalPrice,null, this.slip, this.brLK, this.orderer, this.type).subscribe((message: string) => {
      if(this.brLK != null){
        this.customerService.pushBill(this.brLK, this.bill).subscribe(() => {

        })
      }
      this.router.navigate(['bills'])  
    })

  }
}
