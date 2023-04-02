const Thought = require('../models/Thought');
const User = require('../models/User')

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err))
    },
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) => !thought
                ? res.status(404).json({ message: 'No Thought Found' })
                : res.json(thought))
            .catch((err) => res.status(500).json(err))
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.user },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true }
                );
            })
            .then((user) =>
                !user
                    ? res.status(404).json({
                        message: 'thought created, but no user found',
                    })
                    : res.status(200).json({
                        message: 'thought created'
                    })
            )
            .catch((err) => res.status(500).json(err))
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { new: true }
        )
            .select('-__v')
            .then((thought) => !thought
                ? res.status(404).json({ message: 'No Thought Found' })
                : res.json(thought))
            .catch((err) => res.status(500).json(err))
    },
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) => !thought
                ? res.status(404).json({ message: 'No Thought Found' })
                : res.json(thought))
            .catch((err) => res.status(500).json(err))
    }
}