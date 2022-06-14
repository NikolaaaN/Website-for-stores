import express from 'express'
import { CustomerController } from '../controllers/customer.controller'

const customerRouter= express.Router()

customerRouter.route('/pushbill').post(
    (req, res) => new CustomerController().pushBill(req, res)
)


export default customerRouter