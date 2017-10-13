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

    if(!accountId || !apiKey || !(source || externalAccount)) {
        _.echoBadEnd(r, to, res, 'apiKey, (source or externalAccount), accountId');
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

    if(defaultForCurrency) options.default_for_currency = defaultForCurrency;

    stripe.accounts.createExternalAccount(accountId, options, function(err, result) {
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