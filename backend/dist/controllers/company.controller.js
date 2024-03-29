"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyController = void 0;
const company_1 = __importDefault(require("../models/company"));
const orderer_1 = __importDefault(require("../models/orderer"));
const bills_1 = require("../models/bills");
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
        company_1.default.findOne({ username: username }, (err, company) => {
            if (err)
                console.log('Error');
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
        let objects = req.body.objects;
        console.log(pdv);
        company_1.default.updateOne({ username: username }, {
            category: category,
            code: code,
            tax: pdv,
            bankAccount: bankAccount,
            storageNumber: noOfStorages,
            cashRegisterNumber: noOfCashRegisters,
            status: 'aktivan',
            objects: objects,
        }, (err, resp) => {
            if (err)
                console.log(err);
            else {
                res.json({ message: 'ok' });
            }
        });
    }
    getDetails(req, res) {
        let username = req.body.username;
        company_1.default.findOne({ username: username }, (err, resp) => {
            if (err)
                console.log('Error');
            else
                res.json(resp);
        });
    }
    delete(req, res) {
        let username = req.body.username;
        company_1.default.deleteOne({ username: username }, (err, resp) => {
            if (err)
                console.log('Error');
            else
                res.json('deleted');
        });
    }
    setStatus(req, res) {
        let status = req.body.status;
        let username = req.body.username;
        company_1.default.updateOne({ username: username }, { status: status }, (err, resp) => {
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
        company_1.default.updateOne({ username: username }, {
            category: category,
            code: code,
            taxID: pdv,
            bankAccount: bankAccount,
            cashRegisterNumber: noOfCashRegisters,
            storageNumber: noOfStorages,
        }, (err, resp) => {
            if (err)
                console.log('Error');
            else
                res.json('updated');
        });
    }
    getCompanyById(req, res) {
        let id = req.body.taxID;
        company_1.default.find({ taxID: id }, (err, companies) => {
            if (err)
                console.log(err);
            else
                res.json(companies);
        });
    }
    getCompanyByIdAndName(req, res) {
        let id = req.body.taxID;
        let name = req.body.name;
        company_1.default.findOne({ taxID: id, companyName: name }, (err, company) => {
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
            minimalAmount: req.body.minimalAmount,
            maximalAmount: req.body.maximalAmount,
            storages: req.body.allObjects,
        };
        company_1.default.findOne({ username: username }, (err, company) => {
            company.goods.forEach((good) => {
                if (good.code == goods.code)
                    res.json('good already exists');
            });
            company_1.default.updateOne({ username: username }, { $push: { goods: goods } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json('added');
            });
        });
    }
    getGoods(req, res) {
        let username = req.body.username;
        company_1.default.findOne({ username: username }, (err, company) => {
            if (err)
                console.log(err);
            else
                res.json(company.goods);
        });
    }
    deleteGood(req, res) {
        let username = req.body.username;
        let code = req.body.code;
        company_1.default.findOne({ username: username }, (err, company) => {
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
                company_1.default.updateOne({ username: username }, { goods: company.goods }, (err, resp) => {
                    if (err)
                        console.log(err);
                    else
                        res.json('deleted');
                });
            }
        });
    }
    getGood(req, res) {
        let username = req.body.username;
        let code = req.body.code;
        company_1.default.findOne({ username: username }, (err, company) => {
            let index = 0;
            for (; index < company.goods.length; index++) {
                if (company.goods[index].code == code)
                    break;
            }
            if (index != -1)
                res.json(company.goods[index]);
            else
                res.json('');
        });
    }
    updateGood(req, res) {
        let username = req.body.username;
        let code = req.body.code;
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
            maximalAmount: req.body.maximalAmount,
        };
        company_1.default.findOne({ username: username }, (err, company) => {
            let index = 0;
            for (; index < company.goods.length; index++) {
                if (company.goods[index].code == code)
                    break;
            }
            company.goods[index] = goods;
            // console.log(company)
            company_1.default.updateOne({ username: username }, { goods: company.goods }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json('updated');
            });
        });
    }
    addCategory(req, res) {
        let username = req.body.username;
        let code = req.body.code;
        company_1.default.findOne({ username: username }, (err, company) => {
            let index = 0;
            for (; index < company.goods.length; index++) {
                if (company.goods[index].code == code)
                    break;
            }
            if (company.goods[index].category != null)
                res.json('category already added');
            else {
                company.goods[index].category = req.body.subCategory;
                company_1.default.updateOne({ username: username }, { goods: company.goods }, (err, resp) => {
                    if (err)
                        console.log(err);
                    else
                        res.json('updated');
                });
            }
        });
    }
    getStores(req, res) {
        let username = req.body.username;
        company_1.default.findOne({ username: username }, (err, company) => {
            if (err)
                console.log(err);
            else
                res.json(company.objects);
        });
    }
    getOrderers(req, res) {
        let username = req.body.username;
        orderer_1.default.find({ parentCompany: username }, (err, orderers) => {
            if (err)
                console.log(err);
            else
                res.json(orderers);
        });
    }
    pushBills(req, res) {
        let username = req.body.username;
        let bill = req.body.bill;
        let finalPrice = req.body.finalPrice;
        let fullName = req.body.fullName;
        let brLK = req.body.brLK;
        let slip = req.body.slip;
        let orderer = req.body.orderer;
        let type = req.body.type;
        let bills = new bills_1.Bills();
        let taxPrice = req.body.taxPrice;
        let companyName = req.body.company;
        bills.bills = bill;
        bills.finalPrice = finalPrice;
        bills.fullName = fullName;
        bills.brLK = brLK;
        bills.slip = slip;
        bills.date = new Date();
        bills.orderer = orderer;
        bills.type = type;
        bills.taxPrice = taxPrice;
        bills.companyName = companyName;
        company_1.default.updateOne({ username: username }, { $push: { bills: bills } }, (err, resp) => {
            if (err)
                console.log(err);
            else
                res.json('bill added');
        });
    }
    getCompanyByUsername(req, res) {
        let username = req.body.username;
        company_1.default.findOne({ username: username }, (err, company) => {
            if (err)
                console.log(err);
            else
                res.json(company);
        });
    }
    getBills(req, res) {
        let username = req.body.username;
        company_1.default.findOne({ username: username }, (err, company) => {
            if (err)
                console.log(err);
            else
                res.json(company.bills);
        });
    }
    searchGoodsByName(req, res) {
        let searchParam = req.body.searchParam;
        let goods = [];
        let selectCompany = req.body.selectedCompany;
        console.log(selectCompany);
        company_1.default.findOne({ companyName: selectCompany }, (err, company) => {
            if (err)
                console.log(err);
            else {
                console.log(company);
                company.goods.forEach((good) => {
                    if (good.name.includes(searchParam)) {
                        goods.push(good);
                        console.log('push');
                    }
                });
            }
            res.json(goods);
        });
    }
    searchGoodsByManufacturer(req, res) {
        let searchParam = req.body.searchParam;
        let goods = [];
        let selectCompany = req.body.selectedCompany;
        console.log(selectCompany);
        company_1.default.findOne({ companyName: selectCompany }, (err, company) => {
            if (err)
                console.log(err);
            else {
                company.goods.forEach((good) => {
                    if (good.manufacturer != null)
                        if (good.manufacturer.includes(searchParam))
                            goods.push(good);
                });
            }
            res.json(goods);
        });
    }
    addTable(req, res) {
        let username = req.body.username;
        let name = req.body.name;
        let table = req.body.table;
        company_1.default.findOne({ username: username }, (err, company) => {
            if (err)
                console.log(err);
            else {
                company.objects.forEach((object) => {
                    if (object.name == name) {
                        object.tables.push(table);
                        console.log(object.tables);
                    }
                });
            }
            company_1.default.updateOne({ username: username }, { objects: company.objects }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json('message');
            });
        });
    }
    getTables(req, res) {
        let username = req.body.username;
        let restaurant = req.body.restaurant;
        company_1.default.findOne({ username: username }, (err, company) => {
            if (err)
                console.log(err);
            else {
                company.objects.forEach((object) => {
                    if (object.name == restaurant) {
                        res.json(object.tables);
                    }
                });
            }
        });
    }
}
exports.CompanyController = CompanyController;
//# sourceMappingURL=company.controller.js.map