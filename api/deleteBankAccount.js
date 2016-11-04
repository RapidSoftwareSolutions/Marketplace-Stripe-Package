'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        accountId,
        bankAccountId,
         to="to" 
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || ! accountId || !bankAccountId) {
        _.echoBadEnd(r, to, res, 'apiKey, accountId, bankAccountId');
        return;
    }

    let stripe = initStripe(apiKey);

    stripe.accounts.deleteExternalAccount(accountId, bankAccountId, function(err, result) {
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