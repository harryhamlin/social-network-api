const User = require('../models/User');

module.exports = {
    addFriend(req, res) {res.json(console.log('add friend'))},
    deleteFriend(req, res) {res.json(console.log('delete friend'))}
}