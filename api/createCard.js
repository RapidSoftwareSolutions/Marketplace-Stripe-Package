'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        customerId,
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

    if(!apiKey || !(source || externalAccount) || !customerId) {
        _.echoBadEnd(r, to, res, 'apiKey, (source or externalAccount), customerId');
        return;
    }

    let stripe = initStripe(apiKey);

    let options = {};

    if(metadata!=undefined){

        if(typeof metadata !== 'object'){
            try {
                metadata = JSON.parse(metadata)
            } catch(e) {
                r.contextWrites[to] = 'Invalid JSON value.';
                r.callback = 'error';

                res.status(200).send(r);
                return;
            }
        }

        let metadataArr = {};
        for (var i in metadata) {
            metadataArr[metadata[i]['keyName']] = metadata[i]['value'];
        }
        metadata = metadataArr;
        if(metadata) options.metadata = metadata;
    }

    if(externalAccount) options.external_account = externalAccount;
    else                options.source           = source;
    
    options.defaultForCurrency;
    
    stripe.customers.createSource(customerId, options, function(err, result) {
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
