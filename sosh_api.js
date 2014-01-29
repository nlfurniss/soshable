var _ = require('underscore'),
    request = require('request'),
    zlib = require('zlib'),
    apiSettings = require('./config/settings').sosh_api;

function Sosh() {
    this.baseUrl = 'https://secure.sosh.com/api/1';
    this.oauthBase = {
        oauth_version: '1.0',
        oauth_signature_method: 'PLAINTEXT'
    };
    this.baseOptions = function() {
        return {
            headers: {
                'Authorization': this.createOAuthHeader(),
                'Accept-Encoding': 'gzip',
                'User-Agent': 'Turtle/283 (iPhone; iOS 7.0.4; Scale/2.00)'
            },
        };
    };

    this.getEvents = function(pcat, callback) {
        var self = this;
            options = _.extend(this.baseOptions(), {
                uri: this.baseUrl + '/popular.jsonz',
                qs: {
                    num_results: -1,
                    pcat_filter: pcat,
                    session_geo_id: 1,
                    time_filter: all
                }
            });

        request(options, function(err, resp, body) {
            if (err) {
                callback(err, null, null);
            } else {
                callback(null, resp, body);
            }
        });
    };

    this.test = function(callback) {
        var self = this,
            options = _.extend(this.baseOptions(), {
                uri: this.baseUrl + '/initial_values.jsonz'
            });

        request(options, function(err, resp, body) {
            if (err) {
                callback(err, null, null);
            } else {
                callback(null, resp, body);
            }
        });
    }

    this.createOAuthHeader = function() {
        var options = _.extend(this.oauthBase, apiSettings);
        options.oauth_timestamp = Math.floor(Date.now() / 1000).toString();

        var authHeader = 'OAuth ' + Object.keys(options).map(function(key) {
            return key + '="' + options[key] + '"';
        }).join(', ');

        return authHeader;
    }
}

module.exports = Sosh;