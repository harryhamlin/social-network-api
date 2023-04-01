const router = require('express').Router();
const { getUsers, getSingleUser, createUser, editUser, deleteUser } = require('../../controllers/userControllers');
const { addFriend, deleteFriend } = require('../../controllers/friendControllers');

router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getSingleUser).put(editUser).delete(deleteUser);
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router