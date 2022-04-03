let express = require('express')
let mongoose = require('mongoose')

let app = express()

mongoose.connect('mongodb://localhost/sample',(err)=>{
    console.log(err ? err : 'Connected to mongoDb databse')
})


app.listen(4000,()=>{
    console.log('server is listening on port 4k')
})