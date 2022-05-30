"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const user_1 = __importDefault(require("../models/user"));
const company_1 = __importDefault(require("../models/company"));
class LoginController {
    login(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        user_1.default.findOne({ 'username': username, 'password': password }, (err, user) => {
            if (err)
                console.log("Error");
            else
                res.json(user);
        });
    }
    register(req, res) {
        let fullName = req.body.fullName;
        let username = req.body.username;
        let password = req.body.password;
        let phone = req.body.phone;
        let email = req.body.email;
        let companyName = req.body.companyName;
        let address = req.body.address;
        let taxID = req.body.taxID;
        let companyID = req.body.companyID;
        let file = req.body.file;
        let company = new company_1.default({
            fullName: fullName,
            username: username,
            password: password,
            phone: phone,
            email: email,
            companyName: companyName,
            address: address,
            taxID: taxID,
            companyID: companyID,
            status: "neaktivan",
            image: file
        });
        company_1.default.countDocuments({ 'username': username }, (err, count) => {
            if (count > 0) {
                res.json();
            }
            else {
                company_1.default.create(company);
                res.json(company);
            }
        });
    }
    adminLogin(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        user_1.default.findOne({ 'username': username, 'password': password, 'type': 3 }, (err, user) => {
            if (err)
                console.log("Error");
            res.json(user);
        });
    }
}
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map