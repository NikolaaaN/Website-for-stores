import mongoose from 'mongoose'
import Company from '../models/company'
import express from 'express'

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

}