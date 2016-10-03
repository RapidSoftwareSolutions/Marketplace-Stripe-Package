'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');

module.exports = (req, res) => {

	req.body.args = _.clearArgs(req.body.args);

	let { apiKey, id, to="to" } = req.body.args;

	let r  = {
        callback     : "",
        contextWrites: {}
    };

	if(!apiKey || !id) {
		_.echoBadEnd(r, to, res);
		return;
	}

	let stripe = initStripe(apiKey);

	stripe.balance.retrieveTransaction(id, function(err, result) {
		if(!err) {
    		r.contextWrites[to] = JSON.stringify(result);
            r.callback = 'success'; 
        } else {
        	console.log(err);
            r.contextWrites[to] = JSON.stringify(err);
            r.callback = 'error';
        }

        res.status(200).send(r);
	});	
}