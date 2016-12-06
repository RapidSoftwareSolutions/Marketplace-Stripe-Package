'use strict';

const _           = require('../lib/functions')
const initStripe  = require('stripe');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        subscriptionId,
        applicationFeePercent,
        coupon,
        customer,
        plan,
        source,
        quantity,
        metadata,
        taxPercent,
        trialEnd,
         to="to" 
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !subscriptionId) {
        _.echoBadEnd(r, to, res, 'apiKey, subscriptionId');
        return;
    }

    try {
        if(metadata && typeof metadata == 'string') metadata = JSON.parse(metadata);
        if(source && typeof source == 'string') source = JSON.parse(source);
    } catch(e) {
        r.contextWrites[to] = 'Invalid JSON value.';
        r.callback = 'error';

        res.status(200).send(r);
        return;
    }

    let stripe = initStripe(apiKey);

    let options = {
        coupon,
        customer,
        plan,
        source,
        quantity,
        metadata,
        tax_percent: taxPercent,
        trial_end: trialEnd,
        application_fee_percent: applicationFeePercent
    };

    options = _.clearArgs(options);

    stripe.subscriptions.update(subscriptionId, options, function(err, result) {
        if(!err) {
            r.contextWrites[to] = JSON.stringify(result);
            r.callback = 'success'; 
        } else {
            r.contextWrites[to] = err.raw.message;
            r.callback = 'error';
        }

        res.status(200).send(r);
    });    
}
