import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from '../models/bill';
import { Goods } from '../models/goods';
import { Stores } from '../models/stores';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    this.companyService.getStores().subscribe((stores: Array<Stores>) => {
      this.stores = stores
    })
  }

  stores: Array<Stores>
  selectedStore: string
  goods: Array<Goods>
  selectedGoods: Array<Goods> = []
  amount: boolean = false
  chosenAmount: number = 0 //chosen je za izabranu robu 
  chosenGood: string = ""

  price: number

  bill: Bill = new Bill()
  bills: Array<Bill> = []



  loadGoods(){
    
    this.companyService.getAllGoods().subscribe((goods: Array<Goods>) => {
      this.goods = goods
      goods.forEach(element => {
        if (element.storage == this.selectedStore)
        this.selectedGoods.push(element)
        
      });
    })
    
  }

  goodChosen(name, purchasePrice){
    this.price=purchasePrice
    this.amount =true;
    this.chosenGood = name;
  }

  submitGood(){
    this.bill.name= this.chosenGood
    this.bill.amount = this.chosenAmount
    this.bill.price = this.price
    let date= new Date()
    this.bill.date = date
    this.bills.push(this.bill)
    this.amount = false;

  }

  submit(){
    sessionStorage.setItem('bill', JSON.stringify(this.bill))
    this.router.navigate(['billpayment'])
     
  }

}
