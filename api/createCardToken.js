'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');

module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey, 
        cardNumber,
        cardExpirationMonth,
        cardExpirationYear,
        cardCvc,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey) {
        _.echoBadEnd(r, to, res);
        return;
    }

    let stripe = initStripe(apiKey);

    let options = _.clearArgs({
        card: {
            "number": cardNumber,
            "exp_month": cardExpirationMonth,
            "exp_year": cardExpirationYear,
            "cvc": cardCvc
        }
    });

    stripe.tokens.create(options, function(err, result) {
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