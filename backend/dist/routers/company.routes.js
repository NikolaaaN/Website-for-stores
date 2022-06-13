"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const company_controller_1 = require("../controllers/company.controller");
const companyRouter = express_1.default.Router();
companyRouter.route('/allcompanies').get((req, res) => new company_controller_1.CompanyController().getAllCompanies(req, res));
companyRouter.route('/status').post((req, res) => new company_controller_1.CompanyController().getStatus(req, res));
companyRouter.route('/details').post((req, res) => new company_controller_1.CompanyController().submitDetails(req, res));
companyRouter.route('/getDetails').post((req, res) => new company_controller_1.CompanyController().getDetails(req, res));
companyRouter.route('/delete').post((req, res) => new company_controller_1.CompanyController().delete(req, res));
companyRouter.route('/setstatus').post((req, res) => new company_controller_1.CompanyController().setStatus(req, res));
companyRouter.route('/updategeneraldetails').post((req, res) => new company_controller_1.CompanyController().updateGeneralDetails(req, res));
companyRouter.route('/taxid').post((req, res) => new company_controller_1.CompanyController().getCompanyById(req, res));
companyRouter.route('/taxidandname').post((req, res) => new company_controller_1.CompanyController().getCompanyByIdAndName(req, res));
companyRouter.route('/addgoods').post((req, res) => new company_controller_1.CompanyController().addGoods(req, res));
companyRouter.route('/getgoods').post((req, res) => new company_controller_1.CompanyController().getGoods(req, res));
companyRouter.route('/deletegood').post((req, res) => new company_controller_1.CompanyController().deleteGood(req, res));
companyRouter.route('/getgood').post((req, res) => new company_controller_1.CompanyController().getGood(req, res));
companyRouter.route('/updategood').post((req, res) => new company_controller_1.CompanyController().updateGood(req, res));
companyRouter.route('/addcategory').post((req, res) => new company_controller_1.CompanyController().addCategory(req, res));
companyRouter.route('/getstores').post((req, res) => new company_controller_1.CompanyController().getStores(req, res));
exports.default = companyRouter;
//# sourceMappingURL=company.routes.js.map