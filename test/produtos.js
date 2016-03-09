var http = require('http');

describe('#LivrosController', function() {
	it('#listagem json', function(done) {
		var configuracoes = {
			hostname: 'localhost',
			port: 3000,
			path: '/produtos',
			headers: {
				'Accept': 'application/json'
			}
		};
		http.get(configuracoes, function(res) {
			done();
		});
	});
});