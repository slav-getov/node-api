const Client = require('../models/client.model.js')
const { body, validationResult } = require('express-validator');

const getAllClients = async (req,res)=>{
    try {
        
        const clients = await Client.findAll();
        res.send(JSON.stringify(clients, null, '<pre>'));
    } catch (err) {
        console.log(err);
    }
}
const getClientById = async (req,res)=>{
   
    try {
        const clientsBasedOnId = await Client.findAll({
            where: {
              id: req.params.clientId
            }
          })
        
        const result = clientsBasedOnId[0] && clientsBasedOnId.length ? JSON.stringify(clientsBasedOnId[0], null, '<pre>') : '<p>empty</p>'
        res.send(result)
    } catch (error) {
        res.send('<p>No client with such id</p>')
    }
}
const createClient = async (req,res)=>{
    console.log('in create')
    const {firstName, secondName, email, phone, address} = req.body
    try {
        await Client.create({
            firstName: firstName,
            secondName: secondName,
            email: email,
            phone: phone,
            address: address
        });
        res.json({
            "message": "Client Created"
        });
    } catch (err) {
        res.send('<p>Client could not be created</p>')
    }
}

const updateClientBasedOn = async (req,res) =>{
    const{id} = req.params
    
    try {
        const result = await Client.update(req.body, {
            where: {
                id: id
            }
        })
        console.log('end')
        res.send(result)
    } catch (error) {
        res.send('<p>Error during update</p>')
    }

}

const deleteClientById = async (req,res) =>{
    const {id} = req.params
    try {
        const deleted = await Client.destroy({where:{id:id}})
        .then(result=>res.send(`Item with id ${result.id} was deleted from the db!`))
    } catch (error) {
        res.send('<p>Error during deletion</p>')
    }
}
module.exports = {getAllClients, createClient, getClientById, updateClientBasedOn, deleteClientById}