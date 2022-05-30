import express from 'express'
import UserModel from '../models/user'

export class LoginController{


    login(req: express.Request, res: express.Response){
        let username = req.body.username;
        let password = req.body.password;
        
        UserModel.findOne({'username': username, 'password': password}, (err, user) => {
            if (err) console.log("Error")
            else res.json(user);
        })
    }

}