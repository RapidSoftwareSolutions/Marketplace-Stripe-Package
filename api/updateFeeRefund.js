'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        feeId,
        refundId,
        metadata,
         to="to" 
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !feeId || !refundId) {
        _.echoBadEnd(r, to, res);
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

    stripe.applicationFees.updateRefund(feeId, refundId, {metadata}, function(err, result) {
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