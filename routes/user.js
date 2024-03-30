const express=require('express')
const router=express.Router()
const multer=require('multer')
const conUser=require('../controller/user')
const bodyParser=require('body-parser')
const path=require('path')

//user schema
const userSchema=require('../model/form')
router.use(express.static('upload'))



router.use(express.urlencoded({extended:true}))
router.use(express.json())




// img upload
const Storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, "upload")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      return cb(null,Date.now() + path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage:Storage })








router.get('/',async(req,res)=>{
    let Data=await userSchema.find()
    res.render('index',{Data})
})



router.get('/form',conUser.getFormRequest)



router.post('/formData',upload.single('img'),conUser.postFormData)


router.get('/detail/:id',async(req,res)=>{
  let _id=req.params.id
 
  let Data= await userSchema.findById({_id})
  res.render('userDetail',{Data})
})



router.get('/delete/:id',async(req,res)=>{
  let _id=req.params.id
  console.log(_id)
  let Data= await userSchema.findOneAndDelete({_id})
  res.redirect('/')
})



router.get('/edit/:id',async(req,res)=>{
 try{
  let _id=req.params.id

  let value= await userSchema.findOne({_id})
  

  res.render('form',{value})

 }
 catch(err){
  res.status(400).send(err)
 }
})









router.post('/formData/:id',upload.single('img'),async(req,res)=>{

try{
  let _id=req.params.id
  // console.log('try')
  console.log(req.body.comment)
 console.log(req.body)
  let update=await userSchema.updateOne({_id},req.body,{new:true})
  // userSchema.save()
   res.redirect('/')
}
catch(err){
  res.status(400).send(err)
}
})






module.exports=router;