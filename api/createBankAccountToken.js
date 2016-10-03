'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');

module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey, 
        bankAccountCountry,
        bankAccountCurrency, 
        bankAccountAccountHolderName, 
        bankAccountAccountHolderType,
        bankAccountRoutingNumber,
        bankAccountNumber,
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
        bank_account: {
            country: bankAccountCountry,
            currency: bankAccountCurrency,
            account_holder_name: bankAccountAccountHolderName,
            account_holder_type: bankAccountAccountHolderType,
            routing_number: bankAccountRoutingNumber,
            account_number: bankAccountNumber
        }
    });

    stripe.tokens.create(options, function(err, result) {
        if(!err) {
            r.contextWrites[to] = JSON.stringify(result);
            r.callback = 'success'; 
        } else {
            console.log(err);
            r.contextWrites[to] = JSON.stringify(err);
            r.callback = 'error';
        }

        res.status(200).send(r);
    });    
}