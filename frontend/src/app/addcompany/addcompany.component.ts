import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
   
  }
  addCompany(){
    this.router.navigate(['/admin/addcompany'])
  }

}
