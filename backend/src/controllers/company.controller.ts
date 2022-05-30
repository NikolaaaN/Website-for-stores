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

}