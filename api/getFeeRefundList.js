'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        appId,
        endingBefore,
        limit,
        startingAfter,
        to="to" 
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !appId) {
        _.echoBadEnd(r, to, res, 'apiKey, appId');
        return;
    }

    let stripe = initStripe(apiKey);

    let options = _.clearArgs({
        ending_before: endingBefore,
        limit: limit,
        starting_after: startingAfter
    })

    stripe.applicationFees.listRefunds(appId, options, function(err, result) {
        console.log(err);
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