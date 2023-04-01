const router = require('express').Router();
const { getThoughts, getSingleThought, createThought, updateThought, deleteThought } = require('../../controllers/thoughtControllers');
const { createReaction, deleteReaction } = require('../../controllers/reactionControllers');

router.route('/').get(getThoughts).post(createThought).put(updateThought).delete(deleteThought);
router.route('/:thoughtId').get(getSingleThought);
router.route('./:thoughtId/reactions').post(createReaction).delete(deleteReaction);

module.exports = router