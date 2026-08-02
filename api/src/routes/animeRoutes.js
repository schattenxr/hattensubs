const router = require('express').Router();
const requireAdmin = require('../middleware/requireAdmin');
const { list, getOne, create, remove } = require('../controllers/animeController');

router.get('/', list);
router.get('/:id', getOne);
router.post('/', requireAdmin, create); 
router.delete('/:id', requireAdmin, remove);

module.exports = router;