import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CompanyComponent } from './company/company.component';
import { RegisterComponent } from './register/register.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { AddBuyerComponent } from './add-buyer/add-buyer.component';
import { OrderersComponent } from './orderers/orderers.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { RobaComponent } from './roba/roba.component';
import { ArticlegroupComponent } from './articlegroup/articlegroup.component';
import { BillComponent } from './bill/bill.component';
import { BillpaymentComponent } from './billpayment/billpayment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompanyComponent,
    RegisterComponent,
    AdminloginComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    CompanydetailsComponent,
    AddcompanyComponent,
    AddBuyerComponent,
    OrderersComponent,
    SidemenuComponent,
    ChangepasswordComponent,
    RobaComponent,
    ArticlegroupComponent,
    BillComponent,
    BillpaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
