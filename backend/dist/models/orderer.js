"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Orderer = new Schema({
    parentCompany: {
        type: String
    },
    fullName: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    companyName: {
        type: String
    },
    address: {
        type: String
    },
    taxID: {
        type: String
    },
    companyID: {
        type: String
    },
    status: {
        type: String
    },
    category: {
        type: String
    },
    noOfDays: {
        type: Number
    },
    percent: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('OrdererModel', Orderer, 'orderers');
//# sourceMappingURL=orderer.js.map