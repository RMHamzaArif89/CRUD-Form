const mongoose=require('mongoose')
const validator=require('validator')

const formSchema= new mongoose.Schema({
    //these are the names of input...name='name'
    name:{
        type:String,
        // required:true

    },
    type:{
        type:String
    },
    img:{
        type:String,
        // unique:true
    }

})


// mongoose collection name specfied//created the new collection|table
const userForm= new mongoose.model("customerReview",formSchema)

//export the schema that will be import in the main.js file
module.exports=userForm;

