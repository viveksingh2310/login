export function validateUser(req,res,next){
  const {name,email,pass}=req.body;
  if(!name && !email && !pass){
    /* the user is already registered */
   next();
  }else{
   res.redirect('register');
  }
}
export function getIndex(req,res){
    res.render('index',{name:req.body.name});
}
