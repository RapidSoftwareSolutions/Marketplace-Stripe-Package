'use strict';

const _           = require('../lib/functions')
const initStripe  = require('stripe');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
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

    stripe.coupons.list({}, function(err, result) {
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