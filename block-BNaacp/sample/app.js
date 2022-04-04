let express = require('express')
let mongoose = require('mongoose')
let User = require('./models/user')


mongoose.connect('mongodb://localhost/sample',(err)=>{
    console.log( err ? err : 'conneted to dbs')
})

let app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Welcome')
})


//post route
app.post('/users',(req,res,next)=>{
    // save the database
    User.create( req.body , (err,userField)=>{
        if (err) return next(err)
 // send the response
res.send(userField)
    })
   
})


app.get('/users/:id',(req,res,next)=>{
    User.findById({_id : `${req.params.id}`},(err,data)=>{
        if (err) return next(err)
 // send the response
res.send(data)
    })
})

app.put('/users/:id',(req,res,next)=>{
    let id = req.params.id
    User.findByIdAndUpdate(id, req.body, { new: true}, (err,updatedUser)=>{
        if (err) return next(err)
 // send the response
res.json(updatedUser)
    })
})

app.delete('/users/:id',(req,res,next)=>{
    let id = req.params.id
    User.findByIdAndDelete(id, (err,updatedUser)=>{
        if (err) return next(err)
 // send the response
res.send(`${updatedUser.name} is deleted`)
    })
})

// error handler middleware
app.use((err,req,res,next)=>{
    res.send(err)
})

app.listen(4000,()=>{
    console.log('server is listening on port 4k')
})