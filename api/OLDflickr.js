var http = require( 'http' )
  , opts = {
        	host: 'api.flickr.com',
    			path: '/services/rest/?method=flickr.photos.search&api_key=ec383b7063771823a84baa700118da87&sort=date-taken-asc+&tags=nanyc2011&format=json&nojsoncallback=1&extras=date_taken%2C+url_l',
			method: 'GET'
            }
  , tags;
  

        

exports.getData = function ( callback ) { 
    var request = http.request(opts, function(res) {
    var data = '';
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
	    data += chunk;
	});
    res.on('end', function () {
        console.log('data in ' , data)
        try {
            json = JSON.parse(data);
        } catch (SyntaxError) {
            console.log('Invalid JSON:');
            console.log(data);
            return false;
        }
        callback( json.photos );
	});
});
request.end();
    
}