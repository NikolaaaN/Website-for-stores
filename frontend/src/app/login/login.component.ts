import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  username: string
  password: string
  message: string

  login(){
    this.loginService.login(this.username, this.password).subscribe((user: User) =>{
      if (user != null){
        if (user.type == 1) this.router.navigate(['company'])
        if (user.type == 2) console.log("afsa")
        if (user.type == 3) console.log("afsa")

      }
      else{
        this.message = "Wrong username or password"
      }
    })
    
  }

}
