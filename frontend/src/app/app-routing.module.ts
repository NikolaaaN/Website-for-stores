import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBuyerComponent } from './add-buyer/add-buyer.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminreviewComponent } from './adminreview/adminreview.component';
import { ArticlegroupComponent } from './articlegroup/articlegroup.component';
import { BillComponent } from './bill/bill.component';
import { BillpaymentComponent } from './billpayment/billpayment.component';
import { BuyerComponent } from './buyer/buyer.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CompanyComponent } from './company/company.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { IzvestajComponent } from './izvestaj/izvestaj.component';
import { LoginComponent } from './login/login.component';
import { OrderersComponent } from './orderers/orderers.component';
import { RegisterComponent } from './register/register.component';
import { RobaComponent } from './roba/roba.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "company", component: CompanyComponent},
  {path: "register", component: RegisterComponent},
  {path: "admin/login", component: AdminloginComponent},
  {path: "admin", component: AdminComponent},
  {path: "company/details", component: CompanydetailsComponent},
  {path: "admin/addcompany", component: AddcompanyComponent},
  {path: "admin/addbuyer", component: AddBuyerComponent},
  {path: "company/orderers", component: OrderersComponent},
  {path: "changepasswords", component: ChangepasswordComponent},
  {path: "roba", component: RobaComponent},
  {path: "groups", component: ArticlegroupComponent},
  {path: "bills", component: BillComponent},
  {path: "billpayment", component: BillpaymentComponent},
  {path: "review", component: IzvestajComponent},
  {path: "admin/review", component: AdminreviewComponent},
  {path: "buyer", component: BuyerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
