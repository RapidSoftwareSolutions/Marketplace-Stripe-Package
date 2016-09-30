'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');


module.exports = (req, res) => {

	req.body.args = _.clearArgs(req.body.args);

	let { 
		apiKey,
		planId,
		amount,
		currency,
		interval,
		name,
		intervalCount,
		metadata,
		statementDescriptor,
		trialPeriodDays,
	 	to="to" 
	 } = req.body.args;

	let r  = {
        callback     : "",
        contextWrites: {}
    };

	if(!apiKey || !planId || !amount || !currency || !interval || !name) {
		_.echoBadEnd(r, to, res);
		return;
	}

	let stripe = initStripe(apiKey);

	if(metadata)
	try {
		metadata = JSON.parse(metadata);
	} catch(e) {
		r.contextWrites[to] = 'Invalid JSON value.';
        r.callback = 'error';

        res.status(200).send(r);
        return;
	}

	let options = _.clearArgs({
		plan_id: planId,
		amount,
		currency,
		interval,
		name,
		interval_count: intervalCount,
		metadata,
		statement_descriptor: statementDescriptor,
		trial_period_days: trialPeriodDays,
	});

	stripe.plans.create(options, function(err, result) {
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