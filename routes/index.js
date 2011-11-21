
/*
 * GET home page.
 */

exports.index = function(req, res){
    
    console.log(res.app.settings.flickr.photo);    
    
    res.render('index', { title: 'Express', imgs : res.app.settings.flickr.photo })
};