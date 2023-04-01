const Thought = require('../models/Thought');

module.exports = {
    getThoughts(req, res) {console.log('get thought')},
    getSingleThought(req, res) {console.log('get single thought')},
    createThought(req, res) {console.log('create thought')},
    updateThought(req, res) {console.log('update thought')},
    deleteThought(req, res) {console.log('delete thought')}
}