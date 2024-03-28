const userSchema=require('../model/form')








let postFormData=async(req,res)=>{
 
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


let getFormRequest=(req,res)=>{
    res.render('form')
}



module.exports={
    postFormData,
    getFormRequest
}