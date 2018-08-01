const router = require('express').Router();
const controller = require('./controller.js');

router.route('/ProductDescription')
  .get(controller.getPD);

router.route('/RelatedProducts')
  .get(controller.getRP);

router.route('/product')
  .get(controller.getProducts);

router.route('/related')
  .get(controller.getRelated);

module.exports = router;