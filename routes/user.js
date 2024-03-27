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



router.post('/formData',upload.single('img'),async(req,res)=>{
 
    const userData=new userSchema({
        name:req.body.name,
        comment:req.body.comment,
        review:req.body.review,
        ratings:req.body.ratings,
        img:req.file.filename
    })
    try{
        
        await userSchema.create(userData)
        res.redirect('/')
    }
   
    catch(err){
     res.send(err)
    }
}
)






module.exports=router;