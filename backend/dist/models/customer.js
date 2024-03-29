"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Customer = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    name: {
        type: String
    },
    phone: {
        type: String
    },
    idCard: {
        type: String
    },
    bills: {
        type: Array
    }
});
exports.default = mongoose_1.default.model('CustomerModel', Customer, 'customers');
//# sourceMappingURL=customer.js.map