'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');


module.exports = (req, res) => {
	let { 
		apiKey,
		orderId,
	 	to="to" 
	 } = req.body.args;

	let r  = {
        callback     : "",
        contextWrites: {}
    };

	if(!apiKey || !orderId) {
		_.echoBadEnd(r, to, res);
		return;
	}

	let stripe = initStripe(apiKey);

	stripe.orderReturns.retrieve(orderId, function(err, result) {
		if(!err) {
    		r.contextWrites[to] = JSON.stringify(result);
            r.callback = 'success'; 
        } else {
            r.contextWrites[to] = JSON.stringify(err);
            r.callback = 'error';
        }

        res.status(200).send(r);
	});	
}