import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-buyer',
  templateUrl: './add-buyer.component.html',
  styleUrls: ['./add-buyer.component.css']
})
export class AddBuyerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  username: string
  password: string
  name: string
  phone: string
  idCard: string

  submitCustomer(){

  }

  addCompany(){
    this.router.navigate(['/admin/addcompany'])
  }
  addBuyer(){
    this.router.navigate(['/admin/addBuyer'])
  }

}
