import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from '../models/bill';
import { Company } from '../models/company';
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
    this.companyService.getCompanyByUsername().subscribe((company: Company) => {
      this.company = company
    })
  }

  stores: Array<Stores>
  selectedStore: string
  goods: Array<Goods>
  selectedGoods: Array<Goods> = []
  amount: boolean = false
  chosenAmount: string = ""//chosen je za izabranu robu 
  chosenGood: string = ""
  taxPrice: number = 0

  company: Company

  price: number

  bills: Array<Bill> = []

  loadGoods(){
    this.selectedGoods.splice(0)
    
    this.companyService.getAllGoods().subscribe((goods: Array<Goods>) => {
      this.goods = goods
      goods.forEach(element => {
        if (element.storage == this.selectedStore)
        this.selectedGoods.push(element)
        
      });
    })
    
  }

  goodChosen(name, purchasePrice, tax){
    this.price=purchasePrice
    this.amount =true;
    this.chosenGood = name;
    if (this.company.pdv){
      this.taxPrice += (this.price * tax)/100
      this.price =  this.price + (this.price * tax)/100
    }
    
  }

  submitGood(){
    let bill : Bill = new Bill()
    bill.name= this.chosenGood
    bill.amount = parseInt(this.chosenAmount)
    this.taxPrice *= bill.amount
    bill.price = this.price
    this.bills.push(bill)
    this.amount = false
    
  }

  submit(){
    sessionStorage.setItem('bill', JSON.stringify(this.bills))
    sessionStorage.setItem('tax', this.taxPrice.toString())
    this.router.navigate(['billpayment'])
     
  }

}
