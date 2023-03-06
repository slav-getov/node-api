const express = require('express')

const router = express.Router()

const { clientValidationRules, validate } = require('../field-validators/client.validator.js')
const {getAllClients, createClient, getClientById, updateClientBasedOn, deleteClientById} = require('../controllers/client.controller.js')
const verifyAuth = require('../helpers/verifyAuth.js')


router.get('/all',getAllClients)
router.get('/:clientd', getClientById)

router.put('/update-:id', updateClientBasedOn)
router.post('/',clientValidationRules(), validate, createClient)
router.delete('/delete-:id', verifyAuth, deleteClientById)

module.exports = router