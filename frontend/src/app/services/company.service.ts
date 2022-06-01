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
}
