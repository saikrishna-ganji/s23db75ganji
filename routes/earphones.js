var express = require('express');
const earphones_controlers= require('../controllers/earphones');
var router = express.Router();

/* GET earphones */
router.get('/', earphones_controlers.earphones_view_all_Page);
module.exports = router;