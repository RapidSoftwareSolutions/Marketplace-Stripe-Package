'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        couponId,
        metadata, 
        to="to" 
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !couponId) {
        _.echoBadEnd(r, to, res, 'apiKey, couponId');
        return;
    }

    if(metadata && typeof metadata == 'string')
    try {
        metadata = JSON.parse(metadata);
    } catch(e) {
        r.contextWrites[to] = 'Invalid JSON value.';
        r.callback = 'error';

        res.status(200).send(r);
        return;
    }    

    let stripe = initStripe(apiKey);

    stripe.coupons.update(couponId, {metadata: metadata}, function(err, result) {
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