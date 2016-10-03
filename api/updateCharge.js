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
        _.echoBadEnd(r, to, res);
        return;
    }

    try {
        if(metadata) metadata = JSON.parse(metadata);
        if(fraudDetails) fraudDetails = JSON.parse(fraudDetails);
        if(shipping) shipping = JSON.parse(shipping);
    } catch(e) {
        r.contextWrites[to] = 'Invalid JSON value.';
        r.callback = 'error';

        res.status(200).send(r);
        return;
    }

    let stripe = initStripe(apiKey);

    let options = {
        description: description,
        fraudDetails: fraudDetails,
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
            r.contextWrites[to] = JSON.stringify(err);
            r.callback = 'error';
        }

        res.status(200).send(r);
    });    
}