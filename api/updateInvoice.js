'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        invoiceId,
        applicationFee,
        description,
        metadata,
        statementDescriptor,
        subscription,
        forgiven,
        closed,
        taxPercent,
        to="to"
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !invoiceId) {
        _.echoBadEnd(r, to, res, 'apiKey, invoiceId');
        return;
    }

    let stripe = initStripe(apiKey);

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
    }

    let options = _.clearArgs({
        application_fee: applicationFee,
        description,
        metadata,
        statement_descriptor: statementDescriptor,
        subscription,
        forgiven,
        closed,
        tax_percent: taxPercent,
    });

    stripe.invoices.update(invoiceId, options, function(err, result) {
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