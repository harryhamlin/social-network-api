const User = require('../models/User');

module.exports = {
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        )
            .then((user) => {
                !user
                    ? res.status(404).json({
                        message: 'no user found'
                    })
                    : res.status(200).json({
                        message: 'friend added'
                    })
            })
            .catch((err) => res.status(500).json(err))
    },
    deleteFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }
        )
            .then((user) => {
                !user
                    ? res.status(404).json({
                        message: 'no user found'
                    })
                    : res.status(200).json({
                        message: 'friend removed'
                    })
            })
            .catch((err) => res.status(500).json(err))
    }
}
