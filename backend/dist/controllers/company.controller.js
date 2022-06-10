"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyController = void 0;
const company_1 = __importDefault(require("../models/company"));
class CompanyController {
    getAllCompanies(req, res) {
        company_1.default.find({}, (err, companies) => {
            if (err)
                console.log(err);
            else
                res.json(companies);
        });
    }
    getStatus(req, res) {
        let username = req.body.username;
        company_1.default.findOne({ 'username': username }, (err, company) => {
            if (err)
                console.log("Error");
            else
                res.json(company.status);
        });
    }
    submitDetails(req, res) {
        let username = req.body.username;
        let category = req.body.category;
        let code = req.body.code;
        let pdv = req.body.pdv;
        let bankAccount = req.body.bankAccount;
        let noOfStorages = req.body.noOfStorages;
        let noOfCashRegisters = req.body.noOfCashRegisters;
        company_1.default.updateOne({ 'username': username }, { 'category': category, 'code': code, 'pdv': pdv, 'bankAccount': bankAccount, 'storageNumber': noOfStorages, 'cashRegisterNumber': noOfCashRegisters, 'status': "aktivan" }, (err, resp) => {
            if (err)
                console.log(err);
            else {
                res.json({ 'message': 'ok' });
            }
        });
    }
    getDetails(req, res) {
        let username = req.body.username;
        company_1.default.findOne({ 'username': username }, (err, resp) => {
            if (err)
                console.log("Error");
            else
                res.json(resp);
        });
    }
    delete(req, res) {
        let username = req.body.username;
        company_1.default.deleteOne({ 'username': username }, (err, resp) => {
            if (err)
                console.log("Error");
            else
                res.json("deleted");
        });
    }
    setStatus(req, res) {
        let status = req.body.status;
        let username = req.body.username;
        company_1.default.updateOne({ 'username': username }, { 'status': status }, (err, resp) => {
            if (err)
                console.log(err);
            else {
                res.json('updated');
            }
        });
    }
    updateGeneralDetails(req, res) {
        let username = req.body.username;
        let category = req.body.category;
        let code = req.body.code;
        let pdv = req.body.pdv;
        let bankAccount = req.body.bankAccount;
        let noOfCashRegisters = req.body.noOfCashRegisters;
        let noOfStorages = req.body.noOfStorages;
        company_1.default.updateOne({ 'username': username }, { 'category': category, 'code': code, 'taxID': pdv, 'bankAccount': bankAccount, 'cashRegisterNumber': noOfCashRegisters, 'storageNumber': noOfStorages }, (err, resp) => {
            if (err)
                console.log("Error");
            else
                res.json("updated");
        });
    }
    getCompanyById(req, res) {
        let id = req.body.taxID;
        company_1.default.find({ 'taxID': id }, (err, companies) => {
            if (err)
                console.log(err);
            else
                res.json(companies);
        });
    }
    getCompanyByIdAndName(req, res) {
        let id = req.body.taxID;
        let name = req.body.name;
        company_1.default.findOne({ 'taxID': id, 'companyName': name }, (err, company) => {
            if (err)
                console.log(err);
            else
                res.json(company);
        });
    }
}
exports.CompanyController = CompanyController;
//# sourceMappingURL=company.controller.js.map