const express = require('express')

const router = express.Router()
const {createUser} = require('../controllers/user.controller.js')
const {login} = require('../controllers/auth.controller.js')

router.post('/login-:id', login)
router.post('/create',createUser)

module.exports = router