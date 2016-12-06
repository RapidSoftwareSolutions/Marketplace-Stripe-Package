'use strict';

const _           = require('../lib/functions')
const initStripe  = require('stripe');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        subscriptionId,
        atPeriodEnd,
        to="to" 
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !subscriptionId) {
        _.echoBadEnd(r, to, res, 'apiKey, subscriptionId');
        return;
    }

    let stripe = initStripe(apiKey);

    let options = _.clearArgs({
        at_period_end: atPeriodEnd
    })

    stripe.subscriptions.del(subscriptionId, options, function(err, result) {
        if(!err) {
            r.contextWrites[to] = result;
            r.callback = 'success'; 
        } else {
            r.contextWrites[to] = err.raw.message
            r.callback = 'error';
        }

        res.status(200).send(r);
    });    
}