"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const user_1 = __importDefault(require("../models/user"));
class LoginController {
    login(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        user_1.default.findOne({ 'username': username, 'password': password }, (err, user) => {
            if (err)
                console.log("Error");
            else
                res.json(user);
        });
    }
}
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map