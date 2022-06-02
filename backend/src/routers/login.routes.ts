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

export default loginRouter