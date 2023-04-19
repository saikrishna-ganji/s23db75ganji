var earphones = require('../models/earphones');
// List of all earphones
exports.earphones_list = function(req, res) {
res.send('NOT IMPLEMENTED: earphones list');
};

// for a specific earphones. 
exports.earphones_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await earphones.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};


// Handle earphones create on POST.
exports.earphones_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: earphones create POST');
};
// Handle earphones delete form on DELETE.
exports.earphones_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await earphones.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle earphones update form on PUT.
exports.earphones_update_put = async function(req, res) {
    
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await earphones.findById( req.params.id)
    // Do updates of properties
    if(req.body.earphone_name)
    toUpdate.earphone_name = req.body.earphone_name;
    if(req.body.earphone_shape) toUpdate.earphone_shape = req.body.earphone_shape;
    if(req.body.earphone_radius) toUpdate.earphone_radius = req.body.earphone_radius;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
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

    // Handle a show one view with id specified by query
exports.earphones_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await earphones.findById( req.query.id)
    res.render('earphonesdetail',
   { title: 'earphones Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   
   // Handle building the view for creating a earphones.
// No body, no in path parameter, no query.
// Does not need to be async
exports.earphones_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('earphonescreate', { title: 'earphones Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for updating a earphones.
// query provides the id
exports.earphones_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await earphones.findById(req.query.id)
    res.render('earphonesupdate', { title: 'earphones Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle a delete one view with id from query
exports.earphones_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await earphones.findById(req.query.id)
    res.render('earphonesdelete', { title: 'earphones Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };