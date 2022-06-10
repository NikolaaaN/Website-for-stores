import mongoose from 'mongoose'

const Schema = mongoose.Schema

let Orderer = new Schema({
    parentCompany: {
        type: String
    },
    fullName: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    companyName: {
        type: String
    },
    address: {
        type: String
    },
    taxID: {
        type: String
    },
    companyID: {
        type: String
    },
    status: {
        type: String
    },
    category: {
        type: String
    },
    noOfDays: {
        type: Number
    },
    percent: {
        type: Number
    }

})

export default mongoose.model('OrdererModel', Orderer, 'orderers')