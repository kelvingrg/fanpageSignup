const mongoose = require('mongoose');



const talentUserSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    userName:String,
    email:String,
    timeZone:String,
    password:String,
    check:Boolean,
})

const talentUser=mongoose.model("talentUser", talentUserSchema)
module.exports=talentUser