const mongoose = require('mongoose');



const userSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    userName:String,
    email:String,
    timeZone:String,
    password:String,
    check:Boolean,
})

const user=mongoose.model("user",userSchema)
module.exports=user