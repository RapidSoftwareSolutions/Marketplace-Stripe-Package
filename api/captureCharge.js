'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');

module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey, 
        chargeId,
        amount,
        capture,
        applicationFee,
        receiptEmail,
        statementDescriptor,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !chargeId) {
        _.echoBadEnd(r, to, res, 'apiKey, chargeId');
        return;
    }

    let stripe = initStripe(apiKey);

    let options = {
        amount: amount,
        application_fee: applicationFee,
        receipt_email: receiptEmail,
        statement_descriptor: statementDescriptor,
        capture: capture
    }

    stripe.charges.capture(chargeId, options, function(err, result) {
        if(!err) {
            r.contextWrites[to] = result;
            r.callback = 'success'; 
        } else {
            console.log(err);
            r.contextWrites[to] = err.raw.message;
            r.callback = 'error';
        }

        res.status(200).send(r);
    });    
}