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

export default companyRouter