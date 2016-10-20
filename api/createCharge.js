'use strict';

const _           = require('../lib/functions')
const initStripe  = require('stripe');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        amount,
        currency,
        applicationFee,
        capture,
        description,
        metadata,
        receiptEmail,
        customer,
        source,
        statementDescriptor,
        to="to" 
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !amount || !currency) {
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
        amount: amount,
        currency: currency,
        capture: capture == 'false' ? false : true,
        description: description,
        metadata: metadata,
        receipt_email: receiptEmail,
        customer: customer,
        source: source,
        statement_descriptor: statementDescriptor,
        application_fee: applicationFee
    };

    options = _.clearArgs(options);

    stripe.charges.create(options, function(err, result) {
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
