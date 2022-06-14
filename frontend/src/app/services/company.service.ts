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

  getCompanyByUsername(){
    let username = sessionStorage.getItem('username')
    const data = {
      username: username
    }
    return this.http.post('http://localhost:4000/companies/getcompanybyusername', data)
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

  getGood(code) {
    let username = sessionStorage.getItem('username')
    const data = {
      username: username,
      code: code
    }
    return this.http.post('http://localhost:4000/companies/getgood', data)
  }

  updateGood(code, name, unit, tax, type, country, foreignName, barcode, manufacturer, tariff, taxType, amount, description, declaration, storage, purchasePrice, sellingPrice, stock, minimalAmount, maximalAmount){
    let username = sessionStorage.getItem('username')
    const data = {
      username: username,
      code: code,
      name: name,
      unit: unit,
      tax: tax,
      type: type,
      country: country,
      foreignName: foreignName,
      barcode: barcode,
      manufacturer: manufacturer,
      tariff: tariff,
      taxType: taxType,
      amount: amount,
      description: description,
      declaration: declaration,
      storage: storage,
      purchasePrice: purchasePrice,
      sellingPrice: sellingPrice,
      stock: stock,
      minimalAmount: minimalAmount,
      maximalAmount: maximalAmount
    }

    return this.http.post('http://localhost:4000/companies/updategood', data)
  }

  submitGoodCategory(code, subCategory){
    let username = sessionStorage.getItem('username')
    const data = {
      code: code,
      username: username,
      subCategory: subCategory
    }
    return this.http.post('http://localhost:4000/companies/addcategory', data)
  }

  getStores(){
    let username = sessionStorage.getItem('username')
    const data = {
      'username': username
    }
    return this.http.post('http://localhost:4000/companies/getstores', data)
  }

  getOrderers(){
    let username = sessionStorage.getItem('username')
    const data = {
      'username': username
    } 
    return this.http.post('http://localhost:4000/companies/getorderers', data)
  }

  pushBill(bill, finalPrice, fullName, slip, brLK, orderer, type, taxPrice){
    let username = sessionStorage.getItem('username')
    const data = {
      username: username,
      bill: bill,
      finalPrice: finalPrice,
      fullName: fullName,
      slip: slip,
      brLK: brLK,
      orderer: orderer,
      type: type,
      taxPrice: taxPrice
    }
    return this.http.post('http://localhost:4000/companies/pushbill', data)
  }

  getAllBills(){
    let username = sessionStorage.getItem('username')
    const data = {
      username: username
    }

    return this.http.post('http://localhost:4000/companies/getbills', data)
  }

  // getAllGoodsByCode(code){
  //   let username = sessionStorage.getItem('username')

  //   const data = {
  //     'username': username,
  //     'code': code
  //   }

  //   return this.http.post('http://localhost:4000/companies/getgoodsbycode', data)
  // }
}
