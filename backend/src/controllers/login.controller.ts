import express from 'express'


export class LoginController{


    login(req: express.Request, res: express.Response){
        let username = req.body.username;
        let password = req.body.password;
        res.json(username)
    }

}