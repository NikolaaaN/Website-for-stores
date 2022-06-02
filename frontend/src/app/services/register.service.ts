import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(fullName, username, password, phone, email ,companyName, address, taxID, companyID, image){

    const data={
      fullName: fullName,
      username: username,
      password: password,
      phone: phone,
      email: email,
      companyName: companyName,
      address: address,
      taxID: taxID,
      companyID: companyID,
      file: image
    }

    return this.http.post('http://localhost:4000/users/register',data)
  }

  addUser(username, password, type){
    const data = {
      username: username,
      password: password,
      type: type
    }
    return this.http.post("http://localhost:4000/users/create", data)
  }

  addCustomer(username, password, name, phone, idCard){
    const data = {
      username: username,
      password: password,
      name: name,
      phone: phone,
      idCard: idCard
    }

    return this.http.post("http://localhost:4000/users/addcustomer", data)
  }
}
