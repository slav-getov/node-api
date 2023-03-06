const express = require('express')

const router = express.Router()
const {createUser} = require('../controllers/user.controller.js')
const {login} = require('../controllers/auth.controller.js')

router.get('/login-:id-:pswd' , login)
router.post('/create',createUser)

module.exports = router