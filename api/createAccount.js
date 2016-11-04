'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        country,
        email,
        managed,
         to="to" 
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !email) {
        _.echoBadEnd(r, to, res, 'apiKey, email');
        return;
    }

    let stripe = initStripe(apiKey);

    let options = _.clearArgs({
        country,
        email,
        managed: _.bool(managed)
    });

    stripe.accounts.create(options, function(err, result) {
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