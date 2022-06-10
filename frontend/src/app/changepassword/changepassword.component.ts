import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  password: string
  newPassword1: string
  newPassword2: string
  message: string

  changePassword(){
    if(this.validatePassword(this.newPassword1) && this.validatePassword(this.newPassword2) && this.newPassword1 == this.newPassword2){
      let username= sessionStorage.getItem('username')
    }
  }

  validatePassword(password){
    return /[A-Z]/.test(password) && /[1-9]/.test(password) && /[!@#$%^&*(){"~`?<>:"|\][';/.,}]/.test(password) && password
  }

}
