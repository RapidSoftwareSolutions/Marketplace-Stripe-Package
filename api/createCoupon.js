'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        couponId,
        duration,
        amountOff,
        currency,
        durationInMonths,
        maxRedemptions,
        metadata,
        percentOff,
        redeemBy,
         to="to" 
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey) {
        _.echoBadEnd(r, to, res);
        return;
    }

    if(metadata)
    try {
        metadata = JSON.parse(metadata)
    } catch(e) {
        r.contextWrites[to] = 'Invalid JSON value.';
        r.callback = 'error';

        res.status(200).send(r);
        return;
    }

    let stripe = initStripe(apiKey);

    let options = {
        id: couponId,
        duration: duration,
        amount_off: amountOff,
        currency: currency,
        duration_in_months: durationInMonths,
        max_redemptions: maxRedemptions,
        metadata: metadata,
        percent_off: percentOff,
        redeem_by: redeemBy    
    };

    options = _.clearArgs(options);

    stripe.coupons.create(options, function(err, result) {
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
