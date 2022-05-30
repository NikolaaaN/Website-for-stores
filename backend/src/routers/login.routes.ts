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

export default loginRouter