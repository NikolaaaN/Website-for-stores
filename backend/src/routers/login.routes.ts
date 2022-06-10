import express from 'express'
import { LoginController } from '../controllers/login.controller'

const loginRouter = express.Router()

loginRouter.route('/login').post(
    (req, res) => new LoginController().login(req,res)
)

loginRouter.route('/register').post(
    (req, res) => new LoginController().register(req, res)
)

loginRouter.route('/adminlogin').post(
    (req, res) => new LoginController().adminLogin(req, res)
)

loginRouter.route('/create').post(
    (req, res) => new LoginController().createUser(req, res)
)

loginRouter.route('/addcustomer').post(
    (req, res) => new LoginController().createCustomer(req, res)
)

loginRouter.route('/addorderer').post(
    (req, res) => new LoginController().createOrderer(req, res)
)

loginRouter.route('/changepassword').post(
    (req, res) => new LoginController().changePassword(req, res)
)

loginRouter.route('/getuser').post(
    (req, res) => new LoginController().getUser(req, res)
)

export default loginRouter