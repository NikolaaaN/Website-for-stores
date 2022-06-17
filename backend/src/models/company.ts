import mongoose from 'mongoose'
import { Store } from './store'

const Schema = mongoose.Schema

let Company = new Schema({
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
    image: {
        type: String
    },
    category: {
        type: String
    },
    code: {
        type: String
    },
    tax: {
        type: Boolean
    },
    bankAccount: {
        type : Array
    },
    storageNumber: {
        type : Number
    },
    cashRegisterNumber: {
        type: Number
    },
    goods: {
        type: Array
    },
    objects: {
        type: Array
    },
    bills: {
        type: Array
    }
})

export default mongoose.model('CompanyModel', Company, 'companies')