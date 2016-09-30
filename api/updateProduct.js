'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');


module.exports = (req, res) => {

	req.body.args = _.clearArgs(req.body.args);

	let { 
		apiKey,
		productId,
		name,
		active,
		attributes, 
		caption, 
		deactivateOn, 
		description, 
		images, 
		metadata, 
		packageDimensions,
		shippable,
		url,
	 	to="to" 
	 } = req.body.args;

	let r  = {
        callback     : "",
        contextWrites: {}
    };

	if(!apiKey || !productId) {
		_.echoBadEnd(r, to, res);
		return;
	}

	try {
		if(deactivateOn) deactivateOn = JSON.parse(deactivateOn);
		if(attributes) attributes = JSON.parse(attributes);
		if(images) images = JSON.parse(images);
		if(metadata) metadata = JSON.parse(metadata);
	} catch(e) {
		console.log(e);
		r.contextWrites[to] = 'Invalid JSON value.';
        r.callback = 'error';

        res.status(200).send(r);
        return;
	}	

	let stripe = initStripe(apiKey);

	let options = _.clearArgs({
		name,
		active,
		attributes, 
		caption, 
		deactivate_on:deactivateOn, 
		description, 
		images, 
		metadata, 
		packageDimensions,
		shippable,
		url
	});

	stripe.products.update(productId, options, function(err, result) {
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