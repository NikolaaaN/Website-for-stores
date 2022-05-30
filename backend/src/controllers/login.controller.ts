import express from 'express'
import UserModel from '../models/user'
import CompanyModel from '../models/company'

export class LoginController{

    login(req: express.Request, res: express.Response){
        let username = req.body.username;
        let password = req.body.password;
        
        UserModel.findOne({'username': username, 'password': password}, (err, user) => {
            if (err) console.log("Error")
            else res.json(user);
        })
    }
    register (req: express.Request, res: express.Response){
        let fullName= req.body.fullName;
        let username = req.body.username;
        let password = req.body.password;
        let phone = req.body.phone;
        let email = req.body.email;
        let companyName = req.body.companyName;
        let address = req.body.address;
        let taxID = req.body.taxID;
        let companyID = req.body.companyID
        let file = req.body.file

        let company = new CompanyModel({
            fullName: fullName,
            username: username,
            password: password,
            phone: phone,
            email: email,
            companyName: companyName,
            address: address,
            taxID: taxID,
            companyID: companyID,
            status: "neaktivan",
            image: file

        })

        CompanyModel.countDocuments({'username': username}, (err, count) => {
            if (count > 0){
                res.json();
            }else{
                CompanyModel.create(company)
                res.json(company)
            }
        })  
    }

    adminLogin(req: express.Request, res: express.Response){
        let username = req.body.username;
        let password = req.body.password;

        UserModel.findOne({'username': username, 'password': password, 'type': 3}, (err, user) => {
            if (err) console.log("Error")
            res.json(user);
        })

    }
}