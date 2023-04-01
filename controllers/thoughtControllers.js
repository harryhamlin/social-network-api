const Thought = require('../models/Thought');

module.exports = {
    getThoughts(req, res) {res.json(console.log('get thought'))},
    getSingleThought(req, res) {res.json(console.log('get single thought'))},
    createThought(req, res) {res.json(console.log('create thought'))},
    updateThought(req, res) {console.log('update thought')},
    deleteThought(req, res) {console.log('delete thought')}
}