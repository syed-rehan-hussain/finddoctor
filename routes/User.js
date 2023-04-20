const { User, validate } = require('../models/User');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkauth = require('../middleware/check-auth');

//register
router.post('/signup', async (req, res) => {
    // First Validate The Request
    
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    // Check if this user already exisits
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('That user already exisits!');
    } else {
        // Insert the new user if they do not exist yet
        bcrypt.hash(req.body.password,10,(err,hash)=>{
            if(err)
            {
                return res.status(500).json({
                    error: err
                })
            }
            else{
                user = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                    userType: req.body.userType,
                });
                
                user.save();
                res.send(user);
            }
        })
        
    }
});

//login api
router.post('/login',(req,res,next)=>{
    User.find({name:req.body.username})
    .exec()
    .then(user=>{
        if(user.length < 1)
        {
            return res.status(401).json({
                msg: 'user not exist'
            })
        }
        bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
            if(!result)
            {
                return res.status(401).json({
                    msg: 'Password Matching Fail'
                })
            }
            if(result)
            {
                const token = jwt.sign({
                    username:user[0].username,
                    userType: user[0].userType,
                    email: user[0].email,
                },
                'Secret key',
                {
                    expiresIn:"24h"
                }
                );
                res.status(200).json({
                    username:user[0].username,
                    userType: user[0].userType,
                    email: user[0].email,
                    token: token
                })
            }
        })
    })
    .catch(err=>{
        res.status(500).json({
            err:err
        })
    })
})

module.exports = router;