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
    addGoods(req, res) {
        let username = req.body.username;
        let goods = {
            code: req.body.code,
            name: req.body.name,
            unit: req.body.unit,
            tax: req.body.tax,
            type: req.body.type,
            country: req.body.country,
            foreignName: req.body.foreignName,
            barcode: req.body.barcode,
            manufacturer: req.body.manufacturer,
            tariff: req.body.tariff,
            taxType: req.body.taxType,
            amount: req.body.amount,
            description: req.body.description,
            declaration: req.body.declaration,
            storage: req.body.storage,
            purchasePrice: req.body.purchasePrice,
            sellingPrice: req.body.sellingPrice,
            stock: req.body.stock,
            minimalAmoung: req.body.minimalAmount,
            maximalAmount: req.body.maximalAmount
        };
        company_1.default.findOne({ 'username': username }, (err, company) => {
            company.goods.forEach((good) => {
                if (good.code == goods.code)
                    res.json("good already exists");
            });
            company_1.default.updateOne({ 'username': username }, { $push: { 'goods': goods } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json("added");
            });
        });
    }
    getGoods(req, res) {
        let username = req.body.username;
        company_1.default.findOne({ 'username': username }, (err, company) => {
            if (err)
                console.log(err);
            else
                res.json(company.goods);
        });
    }
    deleteGood(req, res) {
        let username = req.body.username;
        let code = req.body.code;
        company_1.default.findOne({ 'username': username }, (err, company) => {
            let index = 0;
            for (; index < company.goods.length; index++) {
                if (company.goods[index].code == code)
                    break;
            }
            console.log(index);
            company.goods.splice(index, 1);
            if (err)
                console.log(err);
            else {
                company_1.default.updateOne({ 'username': username }, { 'goods': company.goods }, (err, resp) => {
                    if (err)
                        console.log(err);
                    else
                        res.json("deleted");
                });
            }
        });
    }
    getGood(req, res) {
        let username = req.body.username;
        let code = req.body.code;
        company_1.default.findOne({ 'username': username }, (err, company) => {
            let index = 0;
            for (; index < company.goods.length; index++) {
                if (company.goods[index].code == code)
                    break;
            }
            if (index != -1)
                res.json(company.goods[index]);
            else
                res.json("");
        });
    }
    updateGood(req, res) {
        let username = req.body.username;
        let code = req.body.code;
        let name = req.body.name;
        let unit = req.body.unit;
        let tax = req.body.tax;
        let type = req.body.type;
        let country = req.body.country;
        let foreignName = req.body.foreignName;
        let barcode = req.body.barcode;
        let manufacturer = req.body.manufacturer;
        let tariff = req.body.tariff;
        let taxType = req.body.taxType;
        let amount = req.body.amount;
        let description = req.body.description;
        let declaration = req.body.declaration;
        let storage = req.body.storage;
        let purchasePrice = req.body.purchasePrice;
        let sellingPrice = req.body.sellingPrice;
        let stock = req.body.stock;
        let minimalAmount = req.body.minimalAmount;
        let maximalAmount = req.body.maximalAmount;
        let goods = {
            code: req.body.code,
            name: req.body.name,
            unit: req.body.unit,
            tax: req.body.tax,
            type: req.body.type,
            country: req.body.country,
            foreignName: req.body.foreignName,
            barcode: req.body.barcode,
            manufacturer: req.body.manufacturer,
            tariff: req.body.tariff,
            taxType: req.body.taxType,
            amount: req.body.amount,
            description: req.body.description,
            declaration: req.body.declaration,
            storage: req.body.storage,
            purchasePrice: req.body.purchasePrice,
            sellingPrice: req.body.sellingPrice,
            stock: req.body.stock,
            minimalAmoung: req.body.minimalAmount,
            maximalAmount: req.body.maximalAmount
        };
        company_1.default.findOne({ 'username': username }, (err, company) => {
            let index = 0;
            for (; index < company.goods.length; index++) {
                if (company.goods[index].code == code)
                    break;
            }
            company.goods[index] = goods;
            // console.log(company)
            company_1.default.updateOne({ 'username': username }, { 'goods': company.goods }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json("updated");
            });
        });
    }
}
exports.CompanyController = CompanyController;
//# sourceMappingURL=company.controller.js.map