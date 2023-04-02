const Thought = require('../models/Thought')

module.exports = {
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { new: true }
        )
            .then((thought) => {
                !thought
                    ? res.status(404).json({
                        message: 'no thought found'
                    })
                    : res.status(200).json({
                        message: 'reaction added'
                    })
            })
            .catch((err) => res.status(500).json(err))
    },
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.body.reactionId } } },
            { new: true }
        )
            .then((thought) => {
                !thought
                    ? res.status(404).json({
                        message: 'no thought found'
                    })
                    : res.status(200).json({
                        message: 'reaction removed'
                    })
            })
            .catch((err) => res.status(500).json(err))
    }
}