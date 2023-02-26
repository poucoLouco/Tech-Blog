const router = require('express').Router();

const apiRoutes = require('./api');
const mainRoutes = require('./mainRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/dashboard', dashboardRoutes);
router.use('/', mainRoutes);
router.use('/api', apiRoutes);


module.exports = router;