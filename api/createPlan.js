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
        _.echoBadEnd(r, to, res, 'apiKey, planId, amount, currency, interval, name');
        return;
    }

    let stripe = initStripe(apiKey);

    if(metadata && typeof metadata == 'string') {
        try {
            metadata = JSON.parse(metadata)
        } catch(e) {
            r.contextWrites[to] = 'Invalid JSON value.';
            r.callback = 'error';

            res.status(200).send(r);
            return;
        }
    } else if(metadata && typeof metadata == 'object'){
        let metadataArr = {};
        for (var i in metadata) {
            metadataArr[metadata[i]['keyName']] = metadata[i]['value'];
        }
        metadata = metadataArr;
    }

    let options = _.clearArgs({
        id: planId,
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
            r.contextWrites[to] = result;
            r.callback = 'success'; 
        } else {
            r.contextWrites[to] = err.raw.message;
            r.callback = 'error';
        }

        res.status(200).send(r);
    });    
}
