"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const user_1 = __importDefault(require("../models/user"));
const company_1 = __importDefault(require("../models/company"));
const customer_1 = __importDefault(require("../models/customer"));
const orderer_1 = __importDefault(require("../models/orderer"));
class LoginController {
    login(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        let status = "";
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
            status: "novo",
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
    createUser(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        let type = req.body.type;
        user_1.default.countDocuments({ 'username': username }, (err, count) => {
            if (count > 0) {
                res.json();
            }
            else {
                user_1.default.create({ 'username': username, 'password': password, 'type': type }, (err, user) => {
                    if (err)
                        console.log("Error");
                    res.json(user);
                });
            }
        });
    }
    createCustomer(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        let name = req.body.name;
        let phone = req.body.phone;
        let idCard = req.body.idCard;
        customer_1.default.countDocuments({ 'username': username }, (err, count) => {
            if (count > 0) {
                res.json();
            }
            else {
                customer_1.default.create({ 'username': username, 'password': password, 'name': name, 'phone': phone, 'idCard': idCard }, (err, customer) => {
                    if (err)
                        console.log("Error adding customer to db");
                    else
                        res.json(customer);
                });
            }
        });
    }
    createOrderer(req, res) {
        let parentCompany = req.body.parentCompany;
        let fullName = req.body.fullName;
        let username = req.body.username;
        let password = req.body.password;
        let phone = req.body.phone;
        let email = req.body.email;
        let companyName = req.body.companyName;
        let address = req.body.address;
        let taxID = req.body.taxID;
        let companyID = req.body.companyID;
        let noOfDays = req.body.noOfDays;
        let percent = req.body.percent;
        orderer_1.default.create({ 'parentCompany': parentCompany, 'fullName': fullName, 'username': username, 'password': password, 'phone': phone, 'email': email, 'companyName': companyName, 'address': address, 'taxID': taxID, 'companyID': companyID, 'noOfDays': noOfDays, 'percent': percent }, (err, orderer) => {
            if (err)
                console.log(err);
            else
                res.json("Dodato");
        });
    }
    changePassword(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        let type = req.body.type;
        user_1.default.updateOne({ 'username': username }, { 'password': password }, (err, resp) => {
            if (type == "1") {
                company_1.default.updateOne({ 'username': username }, { 'password': password }, (err) => {
                    if (err)
                        console.log(err);
                });
            }
            if (type == "2") {
                customer_1.default.updateOne({ 'username': username }, { 'password': password }, (err) => {
                    if (err)
                        console.log(err);
                });
            }
            if (err)
                console.log(err);
            else
                res.json();
        });
    }
    getUser(req, res) {
        let username = req.body.username;
        user_1.default.findOne({ 'username': username }, (err, user) => {
            if (err)
                console.log(err);
            else
                res.json(user);
        });
    }
}
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map