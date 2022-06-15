import express from 'express'
import { Bills } from '../models/bills'
import Customer from '../models/customer'

export class CustomerController{


    pushBill(req: express.Request, res: express.Response){
        let lk = req.body.brLK
        let bill = req.body.bill
        let bills : Bills = new Bills()
        let company = req.body.company
        let store = req.body.store
        let finalPrice = req.body.finalPrice
        let taxPrice = req.body.taxPrice
        let type = req.body.type
        bills.bills = bill
        bills.companyName = company
        bills.storeName = store
        bills.finalPrice = finalPrice
        bills.taxPrice = taxPrice
        bills.type = type
        console.log(bills.companyName)
        
        Customer.updateOne({'idCard': lk}, {$push: {'bills': bills}}, (err, resp) => {
            if (err) console.log(err)
            else res.json("updated")
        })  
    }

    getAllBills(req: express.Request, res: express.Response){
        let searchParam = req.body.searchParam
        Customer.findOne({'idCard': searchParam}, (err, customer) => {
            if (err) console.log(err)
            else res.json(customer.bills)
        })

    }
}
