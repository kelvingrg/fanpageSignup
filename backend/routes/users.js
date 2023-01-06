var express = require('express');
var router = express.Router();
const validate=require('../middleWare/middleWare')
const userSchema =require('../validation/schemaValidation')
const USER=require('../models/userModel')
const TALENTUSER=require('../models/talentUserModel')




router.post('/fanSignUp',validate(userSchema),(req,res)=>{ 
  console.log(req.body,"req.body");
  try{
console.log("hai 2");
const user={
  firstName:req.body.firstName       ,
  lastName:req.body. lastName      ,
  userName:req.body.userName       ,
  email:req.body.email       ,
  timeZone:req.body.timeZone       ,
  password:req.body. password      ,
  check:req.body.check       

}
USER(user).save().then((response)=>{
  console.log(response,"**************");
  res.status(200).json({signUp:true, message:'signup successfully completed'})
})
.catch((err)=>{
  console.log(err);
  res.status(503).json({signUp:false, message:'signup failed'+err})
})
  }
  catch(err){
    res.status(503).json({signUp:false, message:'signup failed'})

  }

})



router.post('/talentSignup',validate(userSchema),(req,res)=>{ 
  console.log(req.body,"req.body");
  try{
console.log("hai 2");
const user={
  firstName:req.body.firstName       ,
  lastName:req.body. lastName      ,
  userName:req.body.userName       ,
  email:req.body.email       ,
  timeZone:req.body.timeZone       ,
  password:req.body. password      ,
  check:req.body.check       

}
TALENTUSER(user).save().then((response)=>{
  res.status(200).json({signUp:true, message:'signup successfully completed'})
})
  }
  catch(err){
    res.status(503).json({signUp:fasle, message:'signup failed'})

  }

})

module.exports = router;
