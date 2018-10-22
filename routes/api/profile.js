const router = require('express').Router();
const profileController = require('../../controller/profileController')

module.exports = router;

router.route('/').get(profileController.findAllProfile);