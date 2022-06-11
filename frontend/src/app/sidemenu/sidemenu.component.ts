import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

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

}
