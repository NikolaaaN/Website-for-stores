import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  password: string
  newPassword1: string
  newPassword2: string
  message: string

  changePassword(){
    
    let oldPassword
    let username= sessionStorage.getItem('username')
    this.registerService.getUser(username).subscribe((user: User) => {
      if (!user) console.log("User not found")
      else oldPassword = user.password
      if(this.validatePassword(this.newPassword1) && this.validatePassword(this.newPassword2) && this.newPassword1 == this.newPassword2 && this.password == oldPassword){
        console.log("proslo")
        let username= sessionStorage.getItem('username')
        let type = sessionStorage.getItem('type')
        this.registerService.changePassword(username, this.newPassword1, type).subscribe(() => {
          sessionStorage.clear()
          this.router.navigate([''])
        })
  
      }
    })
  }

  validatePassword(password){
    return /[A-Z]/.test(password) && /[1-9]/.test(password) && /[!@#$%^&*(){"~`?<>:"|\][';/.,}]/.test(password) && password
  }


}
