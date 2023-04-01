const router = require('express').Router();
const { getUsers, getSingleUser, createUser, editUser, deleteUser } = require('../../controllers/userControllers');
const { addFriend, deleteFriend } = require('../../controllers/friendControllers');

router.route('/').get(getUsers).post(createUser).put(editUser).delete(deleteUser);
router.route('/:userId').get(getSingleUser);
router.route('/:userId/friends/:friendId');

module.exports = router