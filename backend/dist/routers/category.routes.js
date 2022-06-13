"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("../controllers/category.controller");
const categoryRouter = express_1.default.Router();
categoryRouter.route('/addcategory').post((req, res) => new category_controller_1.CategoryController().addCategory(req, res));
categoryRouter.route('/getcategories').get((req, res) => new category_controller_1.CategoryController().getCategories(req, res));
categoryRouter.route('/addsubcategory').post((req, res) => new category_controller_1.CategoryController().addSubCategory(req, res));
exports.default = categoryRouter;
//# sourceMappingURL=category.routes.js.map