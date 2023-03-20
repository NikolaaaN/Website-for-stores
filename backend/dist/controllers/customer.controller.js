"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const bills_1 = require("../models/bills");
const customer_1 = __importDefault(require("../models/customer"));
class CustomerController {
    pushBill(req, res) {
        let lk = req.body.brLK;
        let bill = req.body.bill;
        let bills = new bills_1.Bills();
        let company = req.body.company;
        let store = req.body.store;
        let finalPrice = req.body.finalPrice;
        let taxPrice = req.body.taxPrice;
        let type = req.body.type;
        bills.bills = bill;
        bills.companyName = company;
        bills.storeName = store;
        bills.finalPrice = finalPrice;
        bills.taxPrice = taxPrice;
        bills.type = type;
        console.log(bills.companyName);
        customer_1.default.updateOne({ idCard: lk }, { $push: { bills: bills } }, (err, resp) => {
            if (err)
                console.log(err);
            else
                res.json('updated');
        });
    }
    getAllBills(req, res) {
        let searchParam = req.body.searchParam;
        customer_1.default.findOne({ idCard: searchParam }, (err, customer) => {
            if (err)
                console.log(err);
            else
                res.json(customer.bills);
        });
    }
    getCustomer(req, res) {
        let username = req.body.username;
        customer_1.default.findOne({ username: username }, (err, customer) => {
            if (err)
                console.log(err);
            else
                res.json(customer);
        });
    }
}
exports.CustomerController = CustomerController;
//# sourceMappingURL=customer.controller.js.map