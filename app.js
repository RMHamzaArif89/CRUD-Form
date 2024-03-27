const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const path=require('path')
const multer=require('multer')


//middleware


app.use(express.urlencoded({extended:true}))
app.use(express.json())

//set the view engine
app.set('view engine','ejs')
app.set('views','views')

//set the static folder
app.use(express.static('static'))
app.use(express.static('upload'))
//require the mongodbConnection
require('./db/conn')
//user schema

const userForm=require('./model/form')


//us the middle ware router user
const user=require('./routes/user')

app.use(user)



app.listen(3000,()=>{
    console.log('port is listening')
})