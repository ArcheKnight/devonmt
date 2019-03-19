const router = require('express').Router();
const controllers = require('../controllers/main');

// GET landing page
router.get('/', controllers.landing);

// GET aboutme page
router.get('/aboutme', controllers.aboutme);

// GET login page
router.get('/login', (req, res) => {
    controllers.getLogin(req, res);
})

// POST login page
router.post('/login', (req, res) => {
    controllers.postLogin(req, res);
})

// GET sign up page
router.get('/login', (req, res) => {
    controllers.getSignUp(req, res);
})

// POST sign up page
router.post('/login', (req, res) => {
    controllers.postSignUp(req, res);
})

// GET 404 page
router.get('/404', (req, res) => {
    res.render('templates/layout', { pageVars: req.pageVars });
})

// GET error page
router.use((req, res) => {
	res.status(404).redirect('/404');
});

module.exports = router;
