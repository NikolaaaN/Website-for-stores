import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor(private router: Router, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompanyByUsername().subscribe((company: Company) => {
      this.category = company.category
    })
  }

  category: string

  companyDetails(){
    this.router.navigate(['company'])
  }
  orderers(){
    this.router.navigate(['company/orderers'])
  }
  changePassword(){
    this.router.navigate(['changepasswords'])
  }
  goods(){
    this.router.navigate(['roba'])
  }
  groups(){
    this.router.navigate(['groups'])
  }
  bills(){
    this.router.navigate(['bills'])
  }
  review(){
    this.router.navigate(['review'])
  }
  tables(){
    this.router.navigate(['tables'])
  }

}
