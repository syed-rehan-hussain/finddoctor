
const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        const verify = jwt.verify(token,'Secret key');
        console.log(req.headers.authorization);
        next();
    }catch(error)
    {
        console.log(error);
        return res.status(401).json({
            msg:'invalid token'
        })
    }
}