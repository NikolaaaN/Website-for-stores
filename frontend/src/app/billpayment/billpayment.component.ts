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
   
    this.bill = JSON.parse(sessionStorage.getItem('bill'))
    console.log(this.bill)
    this.cash = true
    this.companyService.getOrderers().subscribe((orderers: Array<Orderer>) => {
      this.orderers = orderers
    })
    this.selectedCompany = sessionStorage.getItem('companyName')
    this.selectedStore = sessionStorage.getItem('objectName')
    this.tableID = parseInt(sessionStorage.getItem('tableID'))
    
  }

  company: Company

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
  taxPrice: number = 0
  tableID: number = 0

  selectedCompany: string
  selectedStore: string

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
      this.finalPrice += element.price
      this.taxPrice += element.tax
    });
    
    this.companyService.pushBill(this.bill, this.finalPrice, null, null, this.brLK, null, this.type, this.taxPrice, this.selectedCompany).subscribe((message: string) => {
      if(this.brLK != null){
        this.customerService.pushBill(this.type,this.brLK, this.bill , this.selectedCompany, this.selectedStore, this.finalPrice, this.taxPrice).subscribe(() => {

        })
      }
      this.router.navigate(['bills']) 
      
    })
  }

  checkPayout(){

    this.type = "check"
    this.bill.forEach(element => {
      this.finalPrice += element.amount * element.price
      this.taxPrice += element.tax
    });
    
    this.companyService.pushBill(this.bill, this.finalPrice, this.fullName, null, this.brLK, null, this.type, this.taxPrice, this.selectedCompany).subscribe((message: string) => {
      if(this.brLK != null){
        this.customerService.pushBill(this.type,this.brLK, this.bill, this.selectedCompany, this.selectedStore, this.finalPrice, this.taxPrice).subscribe(() => {

        })
      }
      this.router.navigate(['bills'])  
    })

  }

  cardPayout(){

    this.type = "card"
    this.bill.forEach(element => {
      this.finalPrice += element.amount * element.price
      this.taxPrice += element.tax
    });
    
    this.companyService.pushBill(this.bill, this.finalPrice,null, this.slip, this.brLK, null, this.type, this.taxPrice, this.selectedCompany).subscribe((message: string) => {
      if(this.brLK != null){
        this.customerService.pushBill(this.type,this.brLK, this.bill, this.selectedCompany,this.selectedStore, this.finalPrice, this.taxPrice).subscribe(() => {

        })
      }
      this.router.navigate(['bills'])  
    })
  }

 
  virmanPayout(){

    this.type = "virman"
    this.bill.forEach(element => {
      
      this.finalPrice += element.amount * element.price
      this.taxPrice += element.tax
    });
    
    this.companyService.pushBill(this.bill, this.finalPrice,null, this.slip, this.brLK, this.orderer, this.type, this.taxPrice, this.selectedCompany).subscribe((message: string) => {
      if(this.brLK != null){
        this.customerService.pushBill(this.type,this.brLK, this.bill, this.selectedCompany, this.selectedStore, this.finalPrice, this.taxPrice).subscribe(() => {

        })
      }
      this.router.navigate(['bills'])  
    })

  }
}
