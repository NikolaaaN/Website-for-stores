"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const login_controller_1 = require("../controllers/login.controller");
const loginRouter = express_1.default.Router();
loginRouter.route('/login').post((req, res) => new login_controller_1.LoginController().login(req, res));
loginRouter.route('/register').post((req, res) => new login_controller_1.LoginController().register(req, res));
loginRouter.route('/adminlogin').post((req, res) => new login_controller_1.LoginController().adminLogin(req, res));
loginRouter.route('/create').post((req, res) => new login_controller_1.LoginController().createUser(req, res));
loginRouter.route('/addcustomer').post((req, res) => new login_controller_1.LoginController().createCustomer(req, res));
exports.default = loginRouter;
//# sourceMappingURL=login.routes.js.map