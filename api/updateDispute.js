'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        disputeId,
        metadata,
        evidence,
         to="to" 
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !disputeId) {
        _.echoBadEnd(r, to, res, 'apiKey, disputeId');
        return;
    }

    try {
        if(metadata && typeof metadata == 'string') metadata = JSON.parse(metadata);
        if(evidence && typeof evidence == 'string') evidence = JSON.parse(evidence);
    } catch(e) {
        r.contextWrites[to] = 'Invalid JSON value.';
        r.callback = 'error';

        res.status(200).send(r);
        return;
    }

    let stripe = initStripe(apiKey);

    let options = _.clearArgs({ metadata, evidence });

    stripe.disputes.update(disputeId, options, function(err, result) {
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