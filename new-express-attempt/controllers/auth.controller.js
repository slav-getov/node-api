const User = require('../models/user.model.js')
//validators
const { body, validationResult } = require('express-validator');

//outside libs
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
//actual implementation 
const login = async (req,res)=>{
    try {
        console.log(req.body)
        const {id} = req.params
        const {password} = req.body
        //generate salt for the comparison 
        const salt = await bcrypt.genSalt(15);
        const user = await User.findByPk(id);
        if(!password || !user) return res.status(400).json({message: "id and pass required!"})
        
        //is password not hashed bcrypt will always return false no matter what even with literal string comparison

        //has first with the salt and then compare
        let hashed = await bcrypt.hash(user.password, salt);
        const match = await bcrypt.compare(password, hashed)
        
        if(match){
            const accessT = jwt.sign(
                {"id": user.id, "email": user.email, "role": user.role},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: '10m'}
            )
            console.log('in match')
            res.json({accessToken: accessT})
        }else{
            //obv not auth-ed
            res.sendStatus(401)
        }
        
        //res.send(JSON.stringify(user, null, '<pre>'));
    } catch (err) {
        console.log(err);
    }
}

module.exports = {login}