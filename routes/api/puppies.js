const router = require('express').Router();
const puppiesCtrl = require('../../controllers/api/puppies');

router.use(require('../../config/auth'));
router.get('/', puppiesCtrl.index);
router.post('/', puppiesCtrl.create);
router.get('/:id', puppiesCtrl.show);
router.put('/:id', puppiesCtrl.update);
router.delete('/:id', puppiesCtrl.delete);

/*---------- Protected Routes ----------*/

module.exports = router;