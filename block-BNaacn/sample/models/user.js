let mongoose = require('mongoose')

let Schema = mongoose.Schema

let userSchema = new Schema({
    name : String,
    email : { type : String , lowercase : true},
    age : { type : Number , default : 0 },
    password : { type : String, min : 5},
    createdAt : { type : Date , default : new Date},
    favorites : [String]
},{timestamps :true})

module.exports(mongoose.Model('User', userSchema)) 