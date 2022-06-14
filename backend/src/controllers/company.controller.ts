import mongoose from 'mongoose'
import Company from '../models/company'
import express from 'express'
import { rmSync } from 'fs'
import orderer from '../models/orderer'
import { Bills } from '../models/bills'

export class CompanyController{
    
    getAllCompanies(req: express.Request, res: express.Response){
        Company.find( {} , (err, companies)=>{
            if(err) console.log(err)
            else res.json(companies)
        } )
    }

    getStatus(req: express.Request, res: express.Response){
        let username = req.body.username;
        Company.findOne({'username': username}, (err, company) => {
            if (err) console.log("Error")
            else res.json(company.status)
        })
    }

    submitDetails(req: express.Request, res: express.Response){
        let username = req.body.username;
        let category = req.body.category;
        let code = req.body.code;
        let pdv = req.body.pdv;
        let bankAccount = req.body.bankAccount;
        let noOfStorages = req.body.noOfStorages;
        let noOfCashRegisters = req.body.noOfCashRegisters

        Company.updateOne({'username': username}, {'category': category , 'code': code, 'pdv': pdv, 'bankAccount': bankAccount, 'storageNumber': noOfStorages, 'cashRegisterNumber': noOfCashRegisters, 'status': "aktivan"}, (err, resp) => {
            
            if(err) console.log(err)
            else {
                res.json({'message': 'ok'})
            }
        })
    }

    getDetails(req: express.Request, res: express.Response){
        let username = req.body.username

        Company.findOne({'username' : username}, (err, resp) => {
            if (err) console.log("Error")
            else res.json(resp)
        })
    }

    delete(req: express.Request, res: express.Response){
        let username = req.body.username

        Company.deleteOne({'username': username}, (err, resp) =>{
            if (err) console.log("Error")
            else res.json("deleted")
        })
    }

    setStatus(req: express.Request, res: express.Response){
        let status = req.body.status
        let username = req.body.username
        Company.updateOne({'username': username}, {'status': status}, (err, resp) => {
            
            if(err) console.log(err)
            else {
                res.json('updated')
            }
        })
    }

    updateGeneralDetails(req: express.Request, res: express.Response){
        let username = req.body.username
        let category = req.body.category
        let code = req.body.code
        let pdv= req.body.pdv
        let bankAccount = req.body.bankAccount
        let noOfCashRegisters = req.body.noOfCashRegisters
        let noOfStorages = req.body.noOfStorages
        Company.updateOne({'username': username}, {'category': category, 'code': code, 'taxID': pdv, 'bankAccount': bankAccount, 'cashRegisterNumber': noOfCashRegisters, 'storageNumber': noOfStorages}, (err, resp) => {
            if (err) console.log("Error")
            else res.json("updated")
        })

    }
    getCompanyById(req: express.Request, res: express.Response){
        let id = req.body.taxID
        Company.find({'taxID': id}, (err, companies) => {
            if (err) console.log(err)
            else res.json(companies)
        })

    }
    getCompanyByIdAndName(req: express.Request, res: express.Response){
        let id = req.body.taxID
        let name = req.body.name
        Company.findOne({'taxID': id, 'companyName': name}, (err, company) => {
            if (err) console.log(err)
            else  res.json(company)
        })

    }

    addGoods(req: express.Request, res: express.Response){
      let username = req.body.username
      let goods = {
         code: req.body.code,
         name: req.body.name,
         unit: req.body.unit,
         tax: req.body.tax,
         type: req.body.type,
         country: req.body.country,
         foreignName: req.body.foreignName,
         barcode: req.body.barcode,
         manufacturer: req.body.manufacturer,
         tariff: req.body.tariff,
         taxType: req.body.taxType,
         amount: req.body.amount,
         description: req.body.description,
         declaration: req.body.declaration,
         storage: req.body.storage,
         purchasePrice: req.body.purchasePrice,
         sellingPrice: req.body.sellingPrice,
         stock: req.body.stock,
         minimalAmoung: req.body.minimalAmount,
         maximalAmount: req.body.maximalAmount,
         storages: req.body.allObjects
      }

      Company.findOne({'username': username}, (err, company) => {
        company.goods.forEach( (good) => {
            if( good.code == goods.code )
                res.json("good already exists")
            });
            Company.updateOne({'username': username}, {$push: {'goods': goods}}, (err,resp) => {
                if (err) console.log(err)
                else res.json("added")
            })
      })
    }

    getGoods(req: express.Request, res: express.Response){
        let username = req.body.username
        Company.findOne({'username': username}, (err, company) => {
            if (err) console.log(err)
            else res.json(company.goods)
        })
    }

    deleteGood(req: express.Request, res: express.Response){
        let username = req.body.username
        let code = req.body.code
        Company.findOne({'username': username}, (err, company) => {
            let index = 0;
            for(; index < company.goods.length; index++ ){
                if(company.goods[index].code == code)
                    break;
            }
            console.log(index)
            company.goods.splice(index,1)
            if (err) console.log(err)
            else{
                Company.updateOne({'username': username}, {'goods': company.goods}, (err,resp) => {
                    if (err) console.log(err)
                    else res.json("deleted")
                })
            }
        })   
    }

    getGood(req: express.Request, res: express.Response) {
        let username = req.body.username
        let code = req.body.code
        Company.findOne({'username': username}, (err, company) => {
            let index = 0;
            for(; index < company.goods.length; index++ ){
                if(company.goods[index].code == code)
                    break;
            }
            if(index  != -1)
                res.json(company.goods[index])
            else 
                res.json("")
        })
    }

    updateGood(req: express.Request, res: express.Response){
        let username = req.body.username
        let code = req.body.code
        let goods = {
            code: req.body.code,
            name: req.body.name,
            unit: req.body.unit,
            tax: req.body.tax,
            type: req.body.type,
            country: req.body.country,
            foreignName: req.body.foreignName,
            barcode: req.body.barcode,
            manufacturer: req.body.manufacturer,
            tariff: req.body.tariff,
            taxType: req.body.taxType,
            amount: req.body.amount,
            description: req.body.description,
            declaration: req.body.declaration,
            storage: req.body.storage,
            purchasePrice: req.body.purchasePrice,
            sellingPrice: req.body.sellingPrice,
            stock: req.body.stock,
            minimalAmoung: req.body.minimalAmount,
            maximalAmount: req.body.maximalAmount
         }
        Company.findOne({'username': username}, (err, company) => {
            let index = 0;
            for(; index < company.goods.length; index++ ){
                if(company.goods[index].code == code)
                    break;
            }
            company.goods[index]= goods
            // console.log(company)
            Company.updateOne({'username': username}, {'goods': company.goods}, (err,resp) => {
                if (err) console.log(err)
                else res.json("updated")
            }) 
        })
    }

    addCategory(req: express.Request, res: express.Response){
        let username = req.body.username
        let code = req.body.code
        Company.findOne({'username': username}, (err, company) => {
            let index = 0;
            for(; index < company.goods.length; index++ ){
                if(company.goods[index].code == code)
                    break;
            }
            if(company.goods[index].category!= null)
                res.json("category already added")
            else{
                company.goods[index].category= req.body.subCategory
                Company.updateOne({'username': username}, {'goods': company.goods}, (err,resp) => {
                    if (err) console.log(err)
                    else res.json("updated")
                }) 
            }
        })
        
    }

    getStores(req: express.Request, res: express.Response){
        let username = req.body.username
        Company.findOne({'username': username}, (err, company) => {
            if(err) console.log(err)
            else res.json(company.objects)
        })
    }

    getOrderers(req: express.Request, res: express.Response){
        let username = req.body.username
        orderer.find({'parentCompany': username}, (err, orderers) => {
            if (err) console.log(err)
            else res.json(orderers)
        })
    }

    pushBills(req: express.Request, res: express.Response){
        let username = req.body.username
        let bill = req.body.bill
        let finalPrice = req.body.finalPrice
        let fullName = req.body.fullName
        let brLK = req.body.brLK
        let slip = req.body.slip
        let orderer = req.body.orderer
        let type = req.body.type
        let bills : Bills = new Bills()
        let taxPrice = req.body.taxPrice
        bills.bills = bill
        bills.finalPrice = finalPrice
        bills.fullName = fullName
        bills.brLK = brLK
        bills.slip = slip
        bills.date = new Date()
        bills.orderer = orderer
        bills.type = type
        bills.taxPrice = taxPrice
        Company.updateOne({'username': username}, {$push: {'bills': bills}}, (err, resp) => {
            if(err) console.log(err)
            else res.json('bill added')
        })
    }

   getCompanyByUsername(req: express.Request, res: express.Response){
        let username = req.body.username
        Company.findOne({'username': username}, (err, company) => {
            if (err) console.log(err)
            else res.json(company)
        })
   }

   getBills(req: express.Request, res: express.Response){
    let username = req.body.username
    Company.findOne({'username': username}, (err, company) => {
        if (err) console.log(err)
        else res.json(company.bills)
    })
   }

}