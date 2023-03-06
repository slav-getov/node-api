const User = require('../models/user.model.js')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt')

const login = async (req,res)=>{
    try {
        const {id} = req.params
        const {password} = req.body
        const user = await User.findByPk(id);
        if(!password || !user) return res.status(400).json({message: "id and pass required!"})
        const match = await bcrypt.compare(password, user.password)
        console.log('matched!!!')
        //res.send(JSON.stringify(user, null, '<pre>'));
    } catch (err) {
        console.log(err);
    }
}

module.exports = {login}