"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Category = new Schema({
    category: {
        type: String
    },
    subCategories: {
        type: Array
    }
});
exports.default = mongoose_1.default.model('CategoryModel', Category, 'categories');
//# sourceMappingURL=category.js.map