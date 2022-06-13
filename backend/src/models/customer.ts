import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Customer = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    name: {
        type: String
    },
    phone: {
        type: String
    },
    idCard: {
        type: String
    },
    bills: {
        type: Array
    }
})
export default mongoose.model('CustomerModel', Customer, 'customers')