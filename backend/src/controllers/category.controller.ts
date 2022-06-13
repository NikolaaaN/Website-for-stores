import Category from "../models/category";
import express from "express";

export class CategoryController{
    
    addCategory(req: express.Request, res: express.Response){
        let category = req.body.category
        Category.create({'category': category}, (err, resp) => {
            if(err) console.log(err)
            else res.json(resp)
        })

    }

    getCategories(req: express.Request, res: express.Response){
        Category.find({}, (err,categories) => {
            res.json(categories)
        })
    }

    addSubCategory(req: express.Request, res: express.Response){
        let category = req.body.category
        let subCategory = req.body.subCategory

        Category.updateOne({'category': category}, {$push:{'subCategories': subCategory}}, (err, resp) => {
            if(err) console.log(err)
            else res.json(resp)
        })

    }

}
