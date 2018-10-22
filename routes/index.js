// const router = require('express').Router();
// const path = require('path');
// const profileController = require('../controller/profileController')

// router.route('/api/profile').get(profileController.findAllProfile);

// router.route('/api/create').post(profileController.create);

// //router.route('/:name').get(profileController.findNumber);

// router.route('/api/symptoms').get(profileController.findAllSymptoms);

// router.use('/', function(req, res) {
// 	res.sendFile(path.join(__dirname, '../client/public/index.html'));
// });

// module.exports = router;

const router = require('express').Router();
const path = require('path');

const apiRoutes = require('./api');
router.use('/api', apiRoutes);


router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;