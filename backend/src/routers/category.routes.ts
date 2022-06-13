import express from 'express'
import { CategoryController } from '../controllers/category.controller'

const categoryRouter= express.Router()

categoryRouter.route('/addcategory').post(
    (req, res) => new CategoryController().addCategory(req, res)
)
categoryRouter.route('/getcategories').get(
    (req, res) => new CategoryController().getCategories(req, res)
)
categoryRouter.route('/addsubcategory').post(
    (req, res) => new CategoryController().addSubCategory(req, res)
)

export default categoryRouter