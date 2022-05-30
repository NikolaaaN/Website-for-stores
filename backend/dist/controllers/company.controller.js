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
            console.log("ovde sam ");
            if (err)
                console.log(err);
            else
                res.json(companies);
        });
    }
}
exports.CompanyController = CompanyController;
//# sourceMappingURL=company.controller.js.map