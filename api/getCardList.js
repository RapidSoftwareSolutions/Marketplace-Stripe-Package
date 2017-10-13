'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');

module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        accountId,
        endingBefore,
        limit,
        startingAfter,
         to="to" 
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !customerId) {
        _.echoBadEnd(r, to, res, 'apiKey, accountId');
        return;
    }

    let stripe = initStripe(apiKey);

    let options = _.clearArgs({
        object: 'card',
        ending_before: endingBefore,
        starting_after: startingAfter,
        limit: limit,
    });

    stripe.customers.listCards(accountId, function(err, result) {
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