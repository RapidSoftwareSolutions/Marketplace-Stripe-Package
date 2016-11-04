'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');

module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey, 
        amount,
        currency,
        destination,
        description,
        sourceTransaction,
        statementDescriptor,
        sourceType, 
        to="to" 
    } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !amount || !currency || !destination) {
        _.echoBadEnd(r, to, res, 'apiKey, amount, currency, destination');
        return;
    }

    let stripe = initStripe(apiKey);

    let options = _.clearArgs({
        amount: amount,
        currency: currency,
        destination: destination,
        description: description,
        source_transaction: sourceTransaction,
        statement_descriptor: statementDescriptor,
        source_type: sourceType
    });

    stripe.transfers.create(options, function(err, result) {
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