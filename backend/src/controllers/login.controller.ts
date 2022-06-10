import express from 'express'
import UserModel from '../models/user'
import CompanyModel from '../models/company'
import CustomerModel from '../models/customer'
import OrdererModel from '../models/orderer';

export class LoginController{

    login(req: express.Request, res: express.Response){
        let username = req.body.username;
        let password = req.body.password;
        let status = ""
        
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
            status: "novo",
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

    createUser(req: express.Request, res: express.Response){
        let username = req.body.username;
        let password = req.body.password;
        let type = req.body.type;
        UserModel.countDocuments({'username': username}, (err, count) => {
            if (count > 0){
                res.json();
            }else{
                UserModel.create({'username': username, 'password':password, 'type': type}, (err, user) =>{
                    if (err) console.log("Error")
                    res.json(user);
                })
            }
        })  

        
    }

    createCustomer(req: express.Request, res: express.Response){
        let username = req.body.username;
        let password = req.body.password;
        let name = req.body.name;
        let phone = req.body.phone
        let idCard = req.body.idCard
        CustomerModel.countDocuments({'username': username}, (err, count) => {
            if (count > 0){
                res.json();
            }else{
                CustomerModel.create({'username': username, 'password': password, 'name': name, 'phone': phone, 'idCard': idCard}, (err,customer) => {
                    if(err) console.log("Error adding customer to db")
                    else res.json(customer)
                })
            }
        })
    }

    createOrderer(req: express.Request, res: express.Response){
        let parentCompany = req.body.parentCompany
        let fullName= req.body.fullName;
        let username = req.body.username;
        let password = req.body.password;
        let phone = req.body.phone;
        let email = req.body.email;
        let companyName = req.body.companyName;
        let address = req.body.address;
        let taxID = req.body.taxID;
        let companyID = req.body.companyID
        let noOfDays = req.body.noOfDays
        let percent = req.body.percent
        OrdererModel.create({'parentCompany': parentCompany, 'fullName': fullName, 'username': username, 'password': password, 'phone': phone, 'email': email, 'companyName': companyName, 'address': address, 'taxID': taxID, 'companyID': companyID, 'noOfDays': noOfDays, 'percent': percent}, (err, orderer) => {
            if(err) console.log(err)
            else res.json("Dodato")
        })
    }

    changePassword(req: express.Request, res: express.Response){
        let username = req.body.username
        let password = req.body.password
        let type = req.body.type

        UserModel.updateOne({'username': username}, {'password': password}, (err, resp) => {
            if (type=="1"){
                CompanyModel.updateOne({'username': username}, {'password': password}, (err) => {
                    if (err) console.log(err)
                })
            }
            if (err) console.log(err)
            else res.json()
        })
    }

    getUser(req: express.Request, res: express.Response){
        let username = req.body.username
         
        UserModel.findOne({'username': username} , (err, user) => {
            if (err) console.log(err)
            else res.json(user)
        })
    }
}