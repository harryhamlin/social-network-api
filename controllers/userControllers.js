const User = require('../models/User');

module.exports = {
    getUsers(req, res) {console.log('get users')},
    getSingleUser(req, res) {console.log('get single user')},
    createUser(req, res) {console.log('create user')},
    editUser(req, res) {console.log('edit user')},
    deleteUser(req, res) {console.log('delete user')}
}