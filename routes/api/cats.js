const router = require('express').Router();
const catsCtrl = require('../../controllers/api/cats');

router.use(require('../../config/auth'));
router.get('/', catsCtrl.index);
router.post('/', catsCtrl.create);
router.put('/:idx', catsCtrl.update);
router.delete('/:idx', catsCtrl.delete);

/*---------- Protected Routes ----------*/

module.exports = router;