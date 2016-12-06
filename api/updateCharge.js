'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');

module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        chargeId,
        description,
        metadata,
        receiptEmail,
        fraudDetails,
        shipping,
         to="to"
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !chargeId) {
        _.echoBadEnd(r, to, res, 'apiKey, chargeId');
        return;
    }

    try {
        if(metadata && typeof metadata == 'string') metadata = JSON.parse(metadata);
        if(fraudDetails && typeof fraudDetails == 'string') fraudDetails = JSON.parse(fraudDetails);
        if(shipping && typeof shipping == 'string') shipping = JSON.parse(shipping);
    } catch(e) {
        r.contextWrites[to] = 'Invalid JSON value.';
        r.callback = 'error';

        res.status(200).send(r);
        return;
    }

    let stripe = initStripe(apiKey);

    let options = {
        description: description,
        fraud_details: fraudDetails,
        metadata: metadata,
        receipt_email: receiptEmail,
        shipping: shipping
    };

    options = _.clearArgs(options);

    stripe.charges.update(chargeId, options, function(err, result) {
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