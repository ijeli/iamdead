const router = require('express').Router();
const profileRoutes = require('./profile');
const symptomRoutes = require('./symptom');


router.use('/profile', profileRoutes);
router.use('/symptom', symptomRoutes);


module.exports = router;