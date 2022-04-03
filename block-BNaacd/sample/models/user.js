let mongoose = require('mongoose')

let Schema = mongoose.Schema

let userScema =  new Schema ({
    name: String,
    email: { type : String , lowercase : true },
    age : {type : Number ,default: 0}
})