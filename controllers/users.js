const User = require('../models').user

module.exports = {
    index: getAll,
    create,
    show: getOne,
}

async function getAll(req, res) {
    try {
        const users = await User.findAll()
        res.status(200).send(users)
    } catch (err) {
        res.status(400).send(err)
    }
}

async function create(req, res) {
    try {
        const newUser = await User.create(req.body)
        res.status(200).send(newUser)
    } catch(err) {
        res.status(400).send(err)
    }
}

async function getOne(req, res) {
    try {
        const foundUser = await User.findAll({where: {id: req.params.id}})
        res.status(200).send(foundUser)
    } catch(err) {
        res.status(400).send(err)
    }
}