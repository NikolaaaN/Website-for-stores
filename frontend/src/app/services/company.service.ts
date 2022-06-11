import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getAllCompanies(){
    return this.http.get('http://localhost:4000/companies/allcompanies')
  }

  getCompanyStatus(username){
    const data={
      username: username
    }
    return this.http.post('http://localhost:4000/companies/status', data)
  }

  submitDetails(username, category, code, pdv, bankAccount, noOfStorages, noOfCashRegisters){
    const data = {
      username: username,
      category: category,
      code: code,
      pdv: pdv,
      bankAccount: bankAccount,
      noOfStorages: noOfStorages,
      noOfCashRegisters: noOfCashRegisters
    }
    return this.http.post('http://localhost:4000/companies/details', data)
  }

  getCompanyDetails(username){
    const data={
      username: username
    }
    return this.http.post('http://localhost:4000/companies/getDetails', data)
  }

  deleteCompany(username){
    const data = {
      username: username
    }
    return this.http.post('http://localhost:4000/companies/delete', data)
  }

  setStatus(status, username){
    const data = {
      status: status,
      username: username
    }
    return this.http.post('http://localhost:4000/companies/setstatus', data)
  }

  updateGeneralDetails(category, code, pdv, bankAccount, noOfCashRegisters, noOfStorages, username){
    const data = {
      username: username,
      category: category,
      code: code,
      pdv: pdv,
      bankAccount: bankAccount,
      noOfCashRegisters: noOfCashRegisters,
      noOfStorages: noOfStorages
    }
    console.log(username);
    return this.http.post('http://localhost:4000/companies/updategeneraldetails', data)
  }

  getCompanyByID(taxID){
    const data = {
      taxID: taxID
    }
    return this.http.post('http://localhost:4000/companies/taxid', data)
  }

  getCompanyByIdAndName(taxID, name){
    const data = {
      taxID: taxID,
      name: name
    }
    return this.http.post('http://localhost:4000/companies/taxidandname', data)
  }

  addGoods(data){
    return this.http.post('http://localhost:4000/companies/addgoods', data)
  }

  getAllGoods(){
    let username = sessionStorage.getItem('username')
    const data = {
      username: username
    }
    return this.http.post('http://localhost:4000/companies/getgoods', data)
  }

  deleteGood(code){
    let username = sessionStorage.getItem('username')
    const data = {
      username: username,
      code: code
    }

    return this.http.post('http://localhost:4000/companies/deletegood', data)
  }
}
