import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CompanyComponent } from './company/company.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "company", component: CompanyComponent},
  {path: "register", component: RegisterComponent},
  {path: "admin/login", component: AdminloginComponent},
  {path: "admin", component: AdminComponent},
  {path: "company/details", component: CompanydetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
