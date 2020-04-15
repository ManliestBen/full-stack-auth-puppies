const router = require('express').Router();
const puppiesCtrl = require('../../controllers/api/puppies');

router.get('/', puppiesCtrl.index);
router.post('/', puppiesCtrl.create);
router.get('/:id', puppiesCtrl.show);
router.put('/:id', puppiesCtrl.update);
router.delete('/:id', puppiesCtrl.delete);

/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'));

module.exports = router;