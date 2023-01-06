const validate = (userSchema) => async (req, res, next) => {
    const resource = req.body;
    console.log("hai 1");
    try {
      // throws an error if not valid
      await userSchema.validate(resource);
      next();
      return next()
    } catch (e) {
      console.error(e);
      res.status(400).json({ error:e.errors});
    }
  };
  
module.exports=validate      