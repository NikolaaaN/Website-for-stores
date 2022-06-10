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

  getUser(username){
    const data = {
      username: username
    }

    return this.http.post("http://localhost:4000/users/getuser", data)
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

  registerOrderer(username, password, fullName, phone, email, companyName, address, taxID, companyID, noOfDays, percent){

    let parentCompany = sessionStorage.getItem('username')

    const data = {
      parentCompany: parentCompany,
      username: username,
      password: password,
      fullName: fullName,
      phone: phone,
      email: email,
      companyName: companyName,
      address: address,
      taxID: taxID, 
      companyID: companyID,
      noOfDays: noOfDays,
      percent: percent
    }
    return this.http.post("http://localhost:4000/users/addorderer", data)
  }

  changePassword(username, password, type){
    const data = {
      username: username,
      password: password,
      type: type
    }
    return this.http.post("http://localhost:4000/users/changepassword", data)
  }
}
