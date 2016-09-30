'use strict';

const _           = require('../lib/functions')
const initStripe  = require('stripe');


module.exports = (req, res) => {

	req.body.args = _.clearArgs(req.body.args);

	let { 
		apiKey,
		amount,
		currency,
		customer,
		description,
		discountable,
		invoice,
		metadata,
		subscription,
	 	to="to" 
	 } = req.body.args;

	let r  = {
        callback     : "",
        contextWrites: {}
    };

	if(!apiKey || !currency || !customer) {
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

	let stripe = initStripe(apiKey);

	let options = {
		amount,
		currency,
		customer,
		description,
		discountable,
		invoice,
		metadata,
		subscription
	};

	options = _.clearArgs(options);

	stripe.invoiceItems.create(options, function(err, result) {
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