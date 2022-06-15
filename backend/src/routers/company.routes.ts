import express from 'express'
import { CompanyController } from '../controllers/company.controller'

const companyRouter= express.Router()

companyRouter.route('/allcompanies').get(
    (req, res) => new CompanyController().getAllCompanies(req, res)
)

companyRouter.route('/status').post(
    (req, res) => new CompanyController().getStatus(req, res)
)

companyRouter.route('/details').post(
    (req, res) => new CompanyController().submitDetails(req, res)
)

companyRouter.route('/getDetails').post(
    (req, res) => new CompanyController().getDetails(req, res)
)

companyRouter.route('/delete').post(
    (req, res) => new CompanyController().delete(req, res)
)

companyRouter.route('/setstatus').post(
    (req, res) => new CompanyController().setStatus(req, res)
)
companyRouter.route('/updategeneraldetails').post(
    (req, res) => new CompanyController().updateGeneralDetails(req, res)
)
companyRouter.route('/taxid').post(
    (req, res) => new CompanyController().getCompanyById(req, res)
)
companyRouter.route('/taxidandname').post(
    (req, res) => new CompanyController().getCompanyByIdAndName(req, res)
)
companyRouter.route('/addgoods').post(
    (req, res) => new CompanyController().addGoods(req, res)
)
companyRouter.route('/getgoods').post(
    (req, res) => new CompanyController().getGoods(req, res)
)
companyRouter.route('/deletegood').post(
    (req, res) => new CompanyController().deleteGood(req, res)
)
companyRouter.route('/getgood').post(
    (req, res) => new CompanyController().getGood(req, res)
)
companyRouter.route('/updategood').post(
    (req, res) => new CompanyController().updateGood(req, res)
)
companyRouter.route('/addcategory').post(
    (req, res) => new CompanyController().addCategory(req, res)
)
companyRouter.route('/getstores').post(
    (req, res) => new CompanyController().getStores(req, res)
)
companyRouter.route('/getorderers').post(
    (req, res) => new CompanyController().getOrderers(req, res)
)
companyRouter.route('/pushbill').post(
    (req, res) => new CompanyController().pushBills(req, res)
)
companyRouter.route('/getcompanybyusername').post(
    (req, res) => new CompanyController().getCompanyByUsername(req, res)
)
companyRouter.route('/getbills').post(
    (req, res) => new CompanyController().getBills(req, res)
)
companyRouter.route('/searchgoods').post(
    (req, res) => new CompanyController().searchGoodsByName(req, res)
)
companyRouter.route('/searchgoodsbymanufacturer').post(
    (req, res) => new CompanyController().searchGoodsByManufacturer(req, res)
)

export default companyRouter