'use strict';

const _           = require('../lib/functions')
const initStripe  = require('stripe');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        amount,
        currency,
        customer,
        description,
        discountable,
        invoice,
        metadata,
        subscription,
         to="to" 
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !currency || !customer) {
        _.echoBadEnd(r, to, res, 'apiKey, currency, customer');
        return;
    }

    if(metadata && typeof metadata == 'string') {
        try {
            metadata = JSON.parse(metadata)
        } catch(e) {
            r.contextWrites[to] = 'Invalid JSON value.';
            r.callback = 'error';

            res.status(200).send(r);
            return;
        }
    } else if(metadata && typeof metadata == 'object'){
        let metadataArr = {};
        for (var i in metadata) {
            metadataArr[metadata[i]['keyName']] = metadata[i]['value'];
        }
        metadata = metadataArr;
    }

    let stripe = initStripe(apiKey);

    let options = {
        amount,
        currency,
        customer,
        description,
        discountable,
        invoice,
        metadata,
        subscription
    };

    options = _.clearArgs(options);

    stripe.invoiceItems.create(options, function(err, result) {
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