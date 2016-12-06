'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        orderId,
        currency,
        coupon,
        metadata,
        shipping,
        status,
         to="to" 
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !orderId) {
        _.echoBadEnd(r, to, res, 'apiKey, orderId');
        return;
    }

    let stripe = initStripe(apiKey);

    try {
        if(metadata && typeof metadata == 'string') metadata = JSON.parse(metadata);
        if(shipping && typeof shipping == 'string') shipping = JSON.parse(shipping);
    } catch(e) {
        r.contextWrites[to] = 'Invalid JSON value.';
        r.callback = 'error';

        res.status(200).send(r);
        return;
    }    

    let options = _.clearArgs({
        coupon: coupon,
        status: status,
        metadata: metadata,
        shipping: shipping
    });

    stripe.orders.update(orderId, function(err, result) {
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