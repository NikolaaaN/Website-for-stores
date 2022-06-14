import express from 'express'
import Customer from '../models/customer'

export class CustomerController{


    pushBill(req: express.Request, res: express.Response){
        let lk = req.body.brLK
        let bill = req.body.bill
        Customer.updateOne({'idCard': lk}, {$push: {'bills': bill}}, (err, resp) => {
            if (err) console.log(err)
            else res.json("updated")
        })  
    }
}
