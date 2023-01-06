
const yup=require('yup')
const userSchema = yup.object({
    firstName:yup.string().required(),
    lastName:yup.string().required(),
    userName:yup.string().required(),
    email:yup.string().email().required(),
    timeZone:yup.string().required(),
    password:yup.string().min(3).required(),
    check:yup.boolean().required(),

  });
  module.exports=userSchema;