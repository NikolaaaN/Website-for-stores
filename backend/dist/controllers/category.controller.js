"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const category_1 = __importDefault(require("../models/category"));
class CategoryController {
    addCategory(req, res) {
        let category = req.body.category;
        category_1.default.create({ 'category': category }, (err, resp) => {
            if (err)
                console.log(err);
            else
                res.json(resp);
        });
    }
    getCategories(req, res) {
        category_1.default.find({}, (err, categories) => {
            res.json(categories);
        });
    }
    addSubCategory(req, res) {
        let category = req.body.category;
        let subCategory = req.body.subCategory;
        category_1.default.updateOne({ 'category': category }, { $push: { 'subCategories': subCategory } }, (err, resp) => {
            if (err)
                console.log(err);
            else
                res.json(resp);
        });
    }
}
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map