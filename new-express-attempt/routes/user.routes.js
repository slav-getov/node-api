const express = require('express')

const router = express.Router()
const {createUser} = require('../controllers/user.controller.js')
const {login} = require('../controllers/auth.controller.js')
const { userValidationRules, validate } = require('../field-validators/user.validator.js')

router.post('/login-:id', login)
router.post('/create',userValidationRules(), validate, createUser)

module.exports = router