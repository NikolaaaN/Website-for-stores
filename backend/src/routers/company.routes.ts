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

export default companyRouter