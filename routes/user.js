const express=require('express')
const router=express.Router()
const conUser=require('../controller/user')



router.get('/',(req,res)=>{
    res.render('index')
})
router.get('/form',conUser.getFormRequest)

router.post('/formData',conUser.postFormData)






module.exports=router;