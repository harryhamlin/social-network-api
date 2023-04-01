const User = require('../models/User');

module.exports = {
    getUsers(req, res) {res.json(console.log('get users'))},
    getSingleUser(req, res) {res.json(console.log('get single user'))},
    createUser(req, res) {res.json(console.log('create user'))},
    editUser(req, res) {res.json(console.log('edit user'))},
    deleteUser(req, res) {res.json(console.log('delete user'))}
}