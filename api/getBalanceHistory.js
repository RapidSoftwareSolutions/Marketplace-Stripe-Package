'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');

module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        currency,
        limit,
        startingAfter,
        type,
         to="to" 
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey) {
        _.echoBadEnd(r, to, res, 'apiKey');
        return;
    }

    let stripe = initStripe(apiKey);

    let options = {
        currency: currency,
        limit: limit,
        starting_after: startingAfter,
        type: type
    };

    options = _.clearArgs(options);

    stripe.balance.listTransactions(options, function(err, result) {
        if(!err) {
            r.contextWrites[to] = JSON.stringify(result);
            r.callback = 'success'; 
        } else {
            console.log(err);
            r.contextWrites[to] = err.raw.message;
            r.callback = 'error';
        }

        res.status(200).send(r);
    });    
}