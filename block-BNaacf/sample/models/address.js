let mongoose = require('mongoose')
let Schema = mongoose.Schema

let addressSchema = new Schema({
    village : String,
    city : String,
    state : String,
    pin : Number,
    author : Schema.Types.ObjectId
})