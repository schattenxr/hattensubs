const router = require('express').Router();
const { giris } = require('../controllers/authController');
const requireAdmin = require('../middleware/requireAdmin');

router.get('/me', requireAdmin, (req, res) => res.json({ admin: req.admin }));

router.post('/login', giris);

module.exports = router;