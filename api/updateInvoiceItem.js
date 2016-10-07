'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        itemId,
        amount,
        description,
        discountable,
        metadata,
         to="to"
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !itemId) {
        _.echoBadEnd(r, to, res);
        return;
    }

    let stripe = initStripe(apiKey);

    if(metadata)
    try {
        metadata = JSON.parse(metadata);
    } catch(e) {
        r.contextWrites[to] = 'Invalid JSON value.';
        r.callback = 'error';

        res.status(200).send(r);
        return;
    }

    let options = _.clearArgs({
        amount,
        description,
        discountable,
        metadata
    });

    stripe.invoiceItems.update(itemId, options, function(err, result) {
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