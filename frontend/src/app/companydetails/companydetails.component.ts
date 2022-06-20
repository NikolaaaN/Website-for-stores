import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanydetailsComponent implements OnInit {

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    
  }

  message: string

  username: string
  category: string
  code: string
  pdv: boolean
  bankAccount: string
  noOfStorages: number = 0
  noOfCashRegisters: number = 0
  objectId: number
  objectName: string
  addedObjects: number = 0

  object: any = new Object()

  objects: any = []


  submit(){
    this.username = sessionStorage.getItem('username')
    console.log(this.pdv)
    this.companyService.submitDetails(this.username, this.category, this.code, this.pdv, this.bankAccount, this.noOfStorages, this.noOfCashRegisters, this.objects).subscribe((mess: string) => {
      this.router.navigate(['company'])
    })
  }

  addObject(){
    if (!(this.addedObjects >= this.noOfStorages)){
      this.message = "object added"
      this.object.name = this.objectName
      this.object.id = this.objectId

      this.objects.push(this.object)
      this.object = new Object() // pazi ovde mozda ne radi od drugog objekta

      this.addedObjects++;
    }
    else this.message = "increase number of objects"
  }


}
