const User = require('../models/user.model.js')
const { body, validationResult } = require('express-validator');

const getAllUsers = async (req,res)=>{
    try {
        
        const users = await User.findAll();
        res.send(JSON.stringify(users, null, '<pre>'));
    } catch (err) {
        console.log(err);
    }
}

module.exports = {getAllUsers}