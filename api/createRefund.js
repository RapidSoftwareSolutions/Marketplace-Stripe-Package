'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');

module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey, 
        chargeId,
        amount,
        metadata,
        reason,
        refundApplicationFee,
        reverseTransfer,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !chargeId) {
        _.echoBadEnd(r, to, res, 'apiKey, chargeId');
        return;
    }

    let stripe = initStripe(apiKey);

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
        charge: chargeId,
        amount: amount,
        metadata: metadata,
        reason: reason,
        refund_application_fee: refundApplicationFee,
        reverse_transfer: reverseTransfer
    });

    stripe.refunds.create(options, function(err, result) {
        if(!err) {
            r.contextWrites[to] = JSON.stringify(result);
            r.callback = 'success'; 
        } else {
            console.log(err);
            r.contextWrites[to] = err.raw.message;
            r.callback = 'error';
        }

        res.status(200).send(r);
    });    
}