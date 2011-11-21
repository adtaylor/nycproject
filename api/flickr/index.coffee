http = require 'http' 
apiCall =
	host: 'api.flickr.com'
	path: '/services/rest/?method=flickr.photos.search&api_key=ec383b7063771823a84baa700118da87&sort=date-taken-asc+&tags=nanyc2011&format=json&nojsoncallback=1&extras=date_taken%2C+url_l',
	method: 'GET'


module.exports.getData = ( callback ) ->
	request = http.request apiCall , (res) ->
		data = ''
		res.setEncoding('utf8')
		res.on 'data', (chunk) ->
			data += chunk

		res.on 'end', ->
			console.log 'data in ' , data
			try
				json = JSON.parse data
			catch SyntaxError 
				console.log 'Invalid JSON:'
				console.log data 
				console.log SyntaxError
				return false
			callback json.photos
	request.end()
