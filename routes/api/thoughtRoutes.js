const router = require('express').Router();
const { getThoughts, getSingleThought, createThought, updateThought, deleteThought } = require('../../controllers/thoughtControllers');
const { createReaction, deleteReaction } = require('../../controllers/reactionControllers');

router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction);

module.exports = router