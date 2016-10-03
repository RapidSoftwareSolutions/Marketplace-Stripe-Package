'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        accountId,
        source,
        externalAccount,
        defaultForCurrency,
        metadata,
         to="to" 
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !(source || externalAccount)) {
        _.echoBadEnd(r, to, res);
        return;
    }

    let stripe = initStripe(apiKey);

    let options = {};

    if(metadata)
    try {
        metadata = JSON.parse(metadata);
        options.metadata = metadata;
    } catch(e) {
        r.contextWrites[to] = 'Invalid JSON value.';
        r.callback = 'error';

        res.status(200).send(r);
        return;
    }

    if(externalAccount) options.external_account = externalAccount;
    else                options.source           = source;


    stripe.accounts.createExternalAccount(accountId, options, function(err, result) {
        if(!err) {
            r.contextWrites[to] = JSON.stringify(result);
            r.callback = 'success'; 
        } else {
            r.contextWrites[to] = JSON.stringify(err);
            r.callback = 'error';
        }

        res.status(200).send(r);
    });    
}