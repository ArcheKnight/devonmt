const router = require('express').Router();
const helpers = require('../middleware/helpers');
const controllers = require('../controllers/main');

router.get('/', helpers.getPageVars, (req, res) => {
    controllers.landing(req, res)
});

module.exports = router;