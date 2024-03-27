const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const path=require('path')
const exp = require('constants')


//middleware
app.use(express.static('static'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

//set the view engine
app.set('view engine','ejs')
app.set('views','views')


//require the mongodbConnection
require('./db/conn')

const userForm=require('./model/form')


app.get('/',(req,res)=>{
    res.render('index')
})


app.listen(3000,()=>{
    console.log('port is listening')
})