let mongoose = require('mongoose')

let Schema = mongoose.Schema;

let userSchema = new Schema({
    title: String,
    auther: String,
    isAdmin: Boolean,
})

