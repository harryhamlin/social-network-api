const User = require('../models/User');

module.exports = {
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err))
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) => !user
                ? res.status(404).json({ message: 'No User Found' })
                : res.json(user))
            .catch((err) => res.status(500).json(err))
    },
    createUser(req, res) {
        User.create(req.body)
            .then((userData) => res.json(userData))
            .catch((err) => res.status(500).json(err))
    },
    editUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { new: true }
        )
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No User Found' })
                    : res.json(user))
            .catch((err) => res.status(500).json(err))
    },
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) => {
                !user ?
                    res.status(404).json({ message: 'no user found' })
                    : res.status(200).json({ message: 'user deleted' })
            })
            .catch((err) => res.status(500).json(err))
    }
}
