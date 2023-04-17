
const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        const verify = jwt.verify(token,'secret key');
        next();
    }catch(error)
    {
        return res.status(401).json({
            msg:'invalid token'
        })
    }
}