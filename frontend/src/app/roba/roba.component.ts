import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Goods } from '../models/goods';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-roba',
  templateUrl: './roba.component.html',
  styleUrls: ['./roba.component.css']
})
export class RobaComponent implements OnInit {

  constructor(private companyService: CompanyService) {
    this.selected = ''
   }

  ngOnInit(): void {
    this.companyService.getAllGoods().subscribe((data : Goods[]) => {
      this.goods = data
      if (data.length<10)
       this.selectedGoods = data
      else{
        for (let i=0; i<10; i++){
          this.selectedGoods[i]=this.goods[i]
        }
        this.curRow = 1
      }
      this.rowNum = data.length
    })
  }

  select: string[] = ['opsti podaci', 'dopunski podaci', 'cene i stanje robe']
  selected: string

  rowNum: number
  curRow: number

  code: string
  name: string
  unit: string
  tax: number
  type: string

  country: string
  foreignName: string
  barcode: string
  manufacturer: string
  tariff: string
  taxType: string
  amount: number
  description: string
  declaration: string

  storage: string
  purchasePrice: number
  sellingPrice: number
  stock: string
  minimalAmount: number
  maximalAmount: number

  goods: Goods[] = []
  selectedGoods: Goods[] = []

  form: boolean = false;

  add(){
    let username = sessionStorage.getItem('username')
    const data = {
      username: username,
      code: this.code,
      name: this.name,
      unit: this.unit,
      tax: this.tax,
      type: this.type,
      country: this.country,
      foreignName: this.foreignName,
      barcode: this.barcode,
      manufacturer: this.manufacturer,
      tariff: this.tariff,
      taxType: this.taxType,
      amount: this.amount,
      description: this.description,
      declaration: this.declaration,
      storage: this.storage,
      purchasePrice: this.purchasePrice,
      sellingPrice: this.sellingPrice,
      stock: this.stock,
      minimalAmoung: this.minimalAmount,
      maximalAmount: this.maximalAmount
    }
    this.companyService.addGoods(data).subscribe((message: string) => {
      console.log(message)
    })

  }

  setSelectedItem(item){
    this.selected = item;
    this.form = true;
  }

  formAppear(){
    this.form = true;
    this.selected = 'opsti podaci'
  }

  next(){
    this.selectedGoods.splice(0)
    let max;
    if ((this.curRow+1) * 10 < this.rowNum){
      this.curRow++
      if (this.curRow * 10 < this.rowNum)
        max = 10
    }
    else{
      max = this.rowNum % 10
    }
    for (let i = 0; i < max; i++){
      this.selectedGoods[i] = this.goods[this.curRow * 10 + i]
    }
  }

  prev(){

  }

  delete(code){
    this.companyService.deleteGood(code).subscribe((message: string) => {
      console.log(message)
    })
  }

}
