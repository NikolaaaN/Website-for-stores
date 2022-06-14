"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const customer_1 = __importDefault(require("../models/customer"));
class CustomerController {
    pushBill(req, res) {
        let lk = req.body.brLK;
        let bill = req.body.bill;
        customer_1.default.updateOne({ 'idCard': lk }, { $push: { 'bills': bill } }, (err, resp) => {
            if (err)
                console.log(err);
            else
                res.json("updated");
        });
    }
}
exports.CustomerController = CustomerController;
//# sourceMappingURL=customer.controller.js.map