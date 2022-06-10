import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { CompanyService } from '../services/company.service';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private companyService: CompanyService) { }

  ngOnInit(): void {
  }

  username: string
  password: string
  message: string

  login(){
    this.loginService.login(this.username, this.password).subscribe((user: User) =>{
      if (user != null){
        if (user.type == 1) {   
          this.companyService.getCompanyStatus(user.username).subscribe((status: string) => {
            sessionStorage.setItem('username', this.username)
            sessionStorage.setItem('type', user.type+"")
            if (status=="novo") {
              this.router.navigate(['company/details'])
            }
            else if (status == "aktivan") this.router.navigate(['company'])
            else this.message="Your company is inactive"
          })
          
        }
        if (user.type == 2) console.log("afsa")
        if (user.type == 3) this.message = "Login using the admin page"

      }
      else{
        this.message = "Wrong username or password"
      }
    })
  }
    
  register(){
    this.router.navigate(['register']);
  }
    
 

}
