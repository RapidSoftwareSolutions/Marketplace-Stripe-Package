'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        currency,
        coupon,
        customer,
        email,
        items,
        metadata,
        shipping,
         to="to" 
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !currency) {
        _.echoBadEnd(r, to, res, 'apiKey, currency');
        return;
    }

    let stripe = initStripe(apiKey);

    try {
        if(shipping && typeof shipping == 'string') shipping = JSON.parse(shipping);
        if(items && typeof items == 'string') items = JSON.parse(items);
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

    let options = _.clearArgs({
        currency: currency,
        coupon: coupon,
        customer: customer,
        email: email,
        items: items,
        metadata: metadata,
        shipping: shipping
    });

    stripe.orders.create(options, function(err, result) {
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