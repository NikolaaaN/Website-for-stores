import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from '../models/bill';
import { Bills } from '../models/bills';
import { Company } from '../models/company';
import { Goods } from '../models/goods';
import { Stores } from '../models/stores';
import { Table } from '../models/table';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
})
export class BillComponent implements OnInit {
  constructor(private companyService: CompanyService, private router: Router) {}

  ngOnInit(): void {
    this.companyService.getCompanyByUsername().subscribe((company: Company) => {
      this.company = company;
      if (this.company.category == 'ugostiteljski') {
        this.isRestaurant = true;
      }
      this.stores = company.objects;
      this.selectedStore = this.stores[0].name;
      this.loadGoods();
    });

    if (JSON.parse(sessionStorage.getItem('tableBills')) != null)
      this.tableBills = JSON.parse(sessionStorage.getItem('tableBills'));
    console.log(this.tableBills);
  }

  stores: Array<Stores>;
  selectedStore: string;
  goods: Array<Goods>;
  selectedGoods: Array<Goods> = [];
  amount: boolean = false;
  chosenAmount: string = ''; //chosen je za izabranu robu
  chosenGood: string = '';
  taxPrice: number = 0;
  tables: Array<Table>;
  tableID: number;
  tableIDs: Array<number>;

  isRestaurant: boolean;

  company: Company;

  price: number;

  bills: Array<Bill> = [];
  tableBills: Array<Bills> = [];

  loadGoods() {
    // this.selectedGoods.splice(0)
    console.log(this.selectedStore);

    if (this.company.category == 'ugostiteljski') {
      this.companyService
        .getTables(this.selectedStore)
        .subscribe((tables: Array<Table>) => {
          this.tables = tables;
          this.tableID = tables[0].id;
        });
    }
    this.companyService.getAllGoods().subscribe((goods: Array<Goods>) => {
      this.goods = goods;
      goods.forEach((element) => {
        if (element.storage == this.selectedStore)
          this.selectedGoods.push(element);
      });
    });
  }

  goodChosen(name, sellingPrice, tax) {
    this.price = sellingPrice;
    this.amount = true;
    this.chosenGood = name;
    if (this.company.tax) {
      this.taxPrice = (this.price * tax) / 100;
      this.price = this.price + (this.price * tax) / 100;
    }
  }

  submitGood() {
    let bill: Bill = new Bill();
    bill.name = this.chosenGood;
    bill.amount = parseInt(this.chosenAmount);
    this.taxPrice *= bill.amount;
    this.price *= bill.amount;
    bill.tax = this.taxPrice;
    bill.price = this.price;
    this.amount = false;
    if (this.company.category == 'ugostiteljski') this.saveToSession(bill);
    else this.bills.push(bill);
  }

  submit() {
    if (this.company.category == 'ugostiteljski')
      sessionStorage.removeItem(this.tableID.toString());
    sessionStorage.setItem('bill', JSON.stringify(this.bills));
    sessionStorage.setItem('tax', this.taxPrice.toString());
    sessionStorage.setItem('companyName', this.company.companyName);
    sessionStorage.setItem('objectName', this.selectedStore);
    if (this.isRestaurant && this.tableID != null) {
      sessionStorage.setItem('tableID', this.tableID.toString());
    }
    this.router.navigate(['billpayment']);
  }

  saveToSession(bill) {
    if (sessionStorage.getItem(this.tableID.toString()) != null)
      this.bills = JSON.parse(sessionStorage.getItem(this.tableID.toString()));
    console.log(this.tableID.toString());
    this.bills.push(bill);
    sessionStorage.setItem(this.tableID.toString(), JSON.stringify(this.bills));
    console.log(this.bills);
    sessionStorage.setItem('tableBills', JSON.stringify(this.tableBills));
  }
}
