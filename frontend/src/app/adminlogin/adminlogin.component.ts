import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AdminloginService } from '../services/adminlogin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private router : Router, private adminLoginService: AdminloginService ) { }

  ngOnInit(): void {
  }

  username: string
  password: string

  message: string

  login(){
    this.adminLoginService.login(this.username, this.password).subscribe((user: User) => {
      if (!user) this.message = "Failed to login"
      else this.router.navigate(['admin'])
    })
  }

}
