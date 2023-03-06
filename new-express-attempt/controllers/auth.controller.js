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
        const salt = await bcrypt.genSalt(15);
        const user = await User.findByPk(id);
        if(!password || !user) return res.status(400).json({message: "id and pass required!"})
        console.log(password == user.password)
        let hashed = await bcrypt.hash(user.password, salt);
        const match = await bcrypt.compare(password, hashed)
        console.log(`"${password}" and ours is "${String(user.password).trim()}"`)
        console.log(match)
        console.log(process.env.ACCESS_TOKEN_SECRET)
        if(match){
            const accessT = jwt.sign(
                {"email": user.email},
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