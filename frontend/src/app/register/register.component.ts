import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../models/company';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
    
  }
  
  message: string
  password: string
  username: string
  fullName : string
  phone : string
  email : string //unique
  companyName: string
  address : string
  taxID : string
  companyID : string
  image: File
  imageString: string

  onFileSelected(event){
    console.log(event.target.files[0])
    this.image = event.target.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      console.log(reader.result)
      this.imageString = reader.result.toString();
    }
    if(this.image)
      reader.readAsDataURL(this.image)
    
  }
  
  register(){
    if (!this.validatePassword(this.password) )
      this.message = "vasa sifra mora da bude izmedju 8 i 12 karaktera i da sadrzi veliko slovo, broj i specijalni karakter"
    else if( !this.validateEmail(this.email))
      this.message = "upisite validan email"
    else{
    this.registerService.register(this.fullName, this.username, this.password, this.phone, this.email, this.companyName
      , this.address, this.taxID, this.companyID, this.imageString).subscribe((company: Company) => {
        if (!company)
          this.message = "user already exist"
        else{
          this.registerService.addUser(this.username, this.password, 1).subscribe((user: User) => {
              
          })
          this.router.navigate([''])
        }
      })
    }
  }

  validatePassword(password){

    return /[A-Z]/.test(password) && /[1-9]/.test(password) && /[!@#$%^&*(){"~`?<>:"|\][';/.,}]/.test(password) && password && password.length > 8 && password.length < 12

  }
  validateEmail(email){

    return /"[a-z0-9]+@[a-z0-9]+.[a-z]"/.test(email)
    
  }

}
