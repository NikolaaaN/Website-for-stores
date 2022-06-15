"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("../controllers/customer.controller");
const customerRouter = express_1.default.Router();
customerRouter.route('/pushbill').post((req, res) => new customer_controller_1.CustomerController().pushBill(req, res));
customerRouter.route('/getbills').post((req, res) => new customer_controller_1.CustomerController().getAllBills(req, res));
exports.default = customerRouter;
//# sourceMappingURL=customer.routes.js.map