const express = require('express');
const router = express.Router();

const {meetingsList,meetingGet} = require('../controllers/meetings-list');
router.route('/meetings-list').post(meetingsList);
router.route('/meetings-list-get').get(meetingGet);

module.exports=router;