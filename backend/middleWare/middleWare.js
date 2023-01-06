const validate = (userSchema) => async (req, res, next) => {
    const resource = req.body;
    try {
      // throws an error if not valid
      await userSchema.validate(resource);
      next();
    } catch (e) {
      console.error(e);
       res.status(400).json({ error:e.errors});
    }
  };
  
module.exports=validate      