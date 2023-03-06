const User = require('../models/user.model.js')
const { body, validationResult } = require('express-validator');


const createUser = async (req,res)=>{
    console.log('in create user')
    const {fullName, email, role} = req.body
    try {
        await User.create({
            fullName: fullName,
            email: email,
            role: role
        });
        res.json({
            "message": "User Created"
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {createUser}