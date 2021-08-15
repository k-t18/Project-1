const express = require('express');
const router = express.Router();

const { meetingsList, meetingGet } = require('../controllers/meetings-list');
router.route('/meetings-list').post(meetingsList);
router.route('/meetings-list').get(meetingsList);
router.route('/meetings-list-get').get(meetingGet);
// router.route('/meeting/:id').get(meetById);
module.exports = router;