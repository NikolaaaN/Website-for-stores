import mongoose from "mongoose"

const Schema = mongoose.Schema

let Category = new Schema({
    category: {
        type: String
    },
    subCategories: {
        type: Array
    }
    
})

export default mongoose.model('CategoryModel', Category , 'categories')
