let postFormData=(req,res)=>{
    let na=req.body
    console.log(na)
    res.render('index')
}



let getFormRequest=(req,res)=>{
    res.render('form')
}



module.exports={
    postFormData,
    getFormRequest
}