let express = require('express')
let mongoose = require('mongoose')

let app = express()

app.listen(4000,()=>{
    console.log('server is listening on port 4k')
})

mongoose.connect('mongodb://localhost/test',(err)=>{
    console.log( err ? err : 'Connected to test dbs')
})