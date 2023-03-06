const express = require('express')

const router = express.Router()
const {getAllUsers} = require('../controllers/auth.controller.js')
router.post('/create',getAllUsers)


module.exports = router