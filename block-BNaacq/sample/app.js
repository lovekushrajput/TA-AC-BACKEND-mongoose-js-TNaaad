let express = require('express')
let mongoose = require('mongoose')
let Article = require('./models/article')
let Comment = require('./models/comment')
let User = require('./models/user')


mongoose.connect('mongodb://localhost/test',(err)=>{
    console.log( err ? err : 'connected to dbs')
})


let app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Welcome')
})

app.post('/',(req,res)=>{
    User.create(req.body,(err,userField)=>{
        console.log(err)
        res.json(userField)
    })
})

app.post('/article',(req,res)=>{
    Article.create(req.body,(err,articleField)=>{
        console.log(err)
        res.json(articleField)
    })
})


app.listen(4000,()=>{
    console.log('server is listening on port 4k')
})