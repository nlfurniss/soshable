var soshApi = require('../sosh_api'),
    Sosh = new soshApi;

exports.root = function(req, res) {
    res.render('index', { title: 'Soshable' });
    // Sosh.test(function(err, resp, events) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(resp.statusCode);
    //         console.log(events);
    //     }
    // });
};

exports.getActivities = function(req, res) {
	Sosh.getActivities(req.params.cat, function(err, resp, events) {
		if (err) {
			res.send(err);
		} else {
			res.send(events);
		}
	});
};