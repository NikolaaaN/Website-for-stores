import express from 'express';
import { CustomerController } from '../controllers/customer.controller';

const customerRouter = express.Router();

customerRouter
  .route('/pushbill')
  .post((req, res) => new CustomerController().pushBill(req, res));
customerRouter
  .route('/getbills')
  .post((req, res) => new CustomerController().getAllBills(req, res));
customerRouter
  .route('/getcustomer')
  .post((req, res) => new CustomerController().getCustomer(req, res));

export default customerRouter;
