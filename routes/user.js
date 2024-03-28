const express=require('express')
const router=express.Router()
const multer=require('multer')
const conUser=require('../controller/user')
const path=require('path')

//user schema
const userSchema=require('../model/form')
router.use(express.static('upload'))



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
  let _id=req.params.id
  console.log(_id)
  let value= await userSchema.findById({_id})
  res.render('form',{value})
})
router.post('/formData/:id',async(req,res)=>{

  let _id=req.params.id

 let update=await userSchema.findByIdAndUpdate({_id},req.body,{new:true,useFindAndModify:false})
  res.redirect('/')
})






module.exports=router;