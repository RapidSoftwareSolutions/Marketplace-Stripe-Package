'use strict';

const _           = require('../lib/functions')
const initStripe  = require('stripe');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
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

    if(!apiKey || !customer || !plan) {
        _.echoBadEnd(r, to, res, 'apiKey, customer, plan');
        return;
    }

    try {
        if(source && typeof source == 'string') source = JSON.parse(source);
    } catch(e) {
        r.contextWrites[to] = 'Invalid JSON value.';
        r.callback = 'error';

        res.status(200).send(r);
        return;
    }

    if(metadata!=undefined){

        if(typeof metadata !== 'object'){
            try {
                metadata = JSON.parse(metadata)
            } catch(e) {
                r.contextWrites[to] = 'Invalid JSON value.';
                r.callback = 'error';

                res.status(200).send(r);
                return;
            }
        }

        let metadataArr = {};
        for (var i in metadata) {
            metadataArr[metadata[i]['keyName']] = metadata[i]['value'];
        }
        metadata = metadataArr;
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

    stripe.subscriptions.create(options, function(err, result) {
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
