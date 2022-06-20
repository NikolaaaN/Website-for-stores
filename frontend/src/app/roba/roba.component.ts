import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Goods } from '../models/goods';
import { CompanyService } from '../services/company.service';
import { Storage } from '../models/storage';
import { Company } from '../models/company';

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
    this.companyService.getCompanyByUsername().subscribe((company: Company) => {
      this.company = company
    })
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
  tariff: number
  taxType: string
  amount: number
  description: string
  declaration: string

  storage: string
  purchasePrice: number
  sellingPrice: number
  stock: number
  minimalAmount: number
  maximalAmount: number

  company: Company

  currentObject: Storage = new Storage()
  allObjects: Array<Storage> = []

  goods: Goods[] = []
  selectedGoods: Goods[] = []

  form: boolean = false;
  state: string = "novo"

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
      minimalAmount: this.minimalAmount,
      maximalAmount: this.maximalAmount,
      allObjects: this.allObjects
    }
    this.companyService.addGoods(data).subscribe((message: string) => {
      console.log(message)
    })

  }

  setSelectedItem(item){
    this.selected = item;
    this.form = true;
  }

  formAppear(state){
    if (state == "novo")
      this.state = "novo"
    else
      this.state = "staro"
    this.form = true;
    this.selected = 'opsti podaci'
  }

  next(){
    if (this.curRow*10 > this.rowNum)
      return
    this.selectedGoods.splice(0)
    let max;
    if ((this.curRow+1) * 10 < this.rowNum){
      max = 10
    }
    else{  
      max = this.rowNum % 10
    }
    this.curRow++
    for (let i = 0; i < max; i++){
      this.selectedGoods[i] = this.goods[(this.curRow-1) * 10 + i]
    }
  }

  prev(){
    if(this.curRow == 1)
      return
    this.selectedGoods.splice(0)
    let min;
    if ( (this.curRow-1) < 1)
      this.curRow = 1
    else
      this.curRow--
    for (let i = 0; i < 10; i++){
      this.selectedGoods[i] = this.goods[(this.curRow-1) * 10 + i]
    }
  }

  delete(code){
    this.companyService.deleteGood(code).subscribe((message: string) => {
      console.log(message)
    })
  }

  formAppearUpdate(code){
    this.companyService.getGood(code).subscribe((good: Goods) => {

      this.code = good.code
      this.name = good.name
      this.unit = good.unit
      this.tax = good.tax
      this.type = good.type
      this.country = good.countryOfOrigin
      this.foreignName = good.foreignName
      this.barcode = good.barCode
      this.manufacturer = good.manufacturer
      this.tariff = good.tariff
      this.taxType = good.taxType
      this.amount = good.amount
      this.description = good.description
      this.declaration = good.declaration
      this.storage = good.storage
      this.purchasePrice = good.purchasePrice
      this.sellingPrice = good.sellingPrice
      this.stock = good.onStock 
      this.minimalAmount = good.minWanted
      this.maximalAmount = good.maxWanted
      this.formAppear("staro")

    })
  }

  update(){
    this.companyService.updateGood(this.code, this.name, this.unit, this.tax, this.type, this.country, this.foreignName, this.barcode, this.manufacturer, this.tariff, this.taxType, this.amount, this.description, this.declaration, this.storage, this.purchasePrice, this.sellingPrice, this.stock, this.minimalAmount, this.maximalAmount).subscribe((message: string) => {
      console.log(message)
    })

  }

  addObject(){

    this.currentObject.name = this.storage
    this.currentObject.purchasePrice = this.purchasePrice
    this.currentObject.sellingPrice = this.sellingPrice
    this.currentObject.stock = this.stock
    this.currentObject.minAmount = this.minimalAmount
    this.currentObject.maxAmount = this.maximalAmount

    this.allObjects.push(this.currentObject)

    this.currentObject = new Storage()

  }
}
