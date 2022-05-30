import { FILE } from 'dns'
import mongoose from 'mongoose'

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
    }
})

export default mongoose.model('CompanyModel', Company, 'companies')