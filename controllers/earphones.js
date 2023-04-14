var earphones = require('../models/earphones');
// List of all earphones
exports.earphones_list = function(req, res) {
res.send('NOT IMPLEMENTED: earphones list');
};
// for a specific earphones.
exports.earphones_detail = function(req, res) {
res.send('NOT IMPLEMENTED: earphones detail: ' + req.params.id);
};
// Handle earphones create on POST.
exports.earphones_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: earphones create POST');
};
// Handle earphones delete form on DELETE.
exports.earphones_delete = function(req, res) {
res.send('NOT IMPLEMENTED: earphones delete DELETE ' + req.params.id);
};
// Handle earphones update form on PUT.
exports.earphones_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: earphones update PUT' + req.params.id);
};

// List of all earphones
exports.earphones_list = async function(req, res) {
    try{
    theEarphones = await earphones.find();
    res.send(theEarphones);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // VIEWS
// Handle a show all view
exports.earphones_view_all_Page = async function(req, res) {
    try{
        theEarphones = await earphones.find();
    res.render('earphones', { title: 'earphones Search Results', results: theEarphones });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle earphones create on POST.
exports.earphones_create_post = async function(req, res) {
    console.log(req.body)
    let document = new earphones();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.earphone_name = req.body.earphone_name;
    document.earphone_shape = req.body.earphone_shape;
    document.earphone_radius = req.body.earphone_radius;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };