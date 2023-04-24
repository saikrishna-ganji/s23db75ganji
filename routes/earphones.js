var express = require('express');
const earphones_controlers = require('../controllers/earphones');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET earphones */
router.get('/', earphones_controlers.earphones_view_all_Page);

/* GET detail earphones page */
router.get('/detail', earphones_controlers.earphones_view_one_Page);

/* GET create earphones page */
router.get('/create', earphones_controlers.earphones_create_Page);

/* GET create update page */
router.get('/update', secured, earphones_controlers.earphones_update_Page);

/* GET delete earphones page */
router.get('/delete', earphones_controlers.earphones_delete_Page);

module.exports = router;

