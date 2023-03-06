const User = require('../models/user.model.js')
const { body, validationResult } = require('express-validator');

const login = async (req,res)=>{
    try {
        const {id} = req.params
        const user = await User.findByPk(id);
        console.log(user.password)
        res.send(JSON.stringify(user, null, '<pre>'));
    } catch (err) {
        console.log(err);
    }
}

module.exports = {login}