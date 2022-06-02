import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/customer';
import { User } from '../models/user';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-add-buyer',
  templateUrl: './add-buyer.component.html',
  styleUrls: ['./add-buyer.component.css']
})
export class AddBuyerComponent implements OnInit {

  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  username: string
  password: string
  name: string
  phone: string
  idCard: string

  submitCustomer(){
    this.registerService.addCustomer(this.username, this.password, this.name, this.phone, this.idCard).subscribe((customer: Customer) => {
      if(customer)
        this.registerService.addUser(customer.username, customer.password, 2).subscribe((user: User) => {
        if (!user) console.log("Error adding the user")
      })
    })
  }

  addCompany(){
    this.router.navigate(['/admin/addcompany'])
  }
  addCustomer(){
    this.router.navigate(['/admin/addBuyer'])
  }

}
