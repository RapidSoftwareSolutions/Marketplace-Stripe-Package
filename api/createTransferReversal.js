'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');

module.exports = (req, res) => {

	req.body.args = _.clearArgs(req.body.args);

	let { 
		apiKey, 
		amount,
		metadata,
		refundApplicationFee,
		to="to",
	} = req.body.args;

	let r  = {
        callback     : "",
        contextWrites: {}
    };

	if(!apiKey) {
		_.echoBadEnd(r, to, res);
		return;
	}

	if(metadata)
	try {
		metadata = JSON.parse(metadata)
	} catch(e) {
		r.contextWrites[to] = 'Invalid JSON value.';
        r.callback = 'error';

        res.status(200).send(r);
        return;
	}

	let options = _.clearArgs({
		amount: amount,
		metadata: metadata,
		refund_application_fee: refundApplicationFee
	});

	let stripe = initStripe(apiKey);

	stripe.transfers.list(options, function(err, result) {
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