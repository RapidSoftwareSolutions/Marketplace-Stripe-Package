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
        accountBalance,
        businessVatId,
        coupon,
        description,
        email,
        metadata,
        plan,
        taxPercent,
        trialEnd,
        to="to" 
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !customerId) {
        _.echoBadEnd(r, to, res, 'apiKey, customerId');
        return;
    }

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

    let stripe = initStripe(apiKey);

    let options = {
        source: source,
        account_balance: accountBalance,
        business_vat_id: businessVatId,
        coupon,
        description,
        email,
        metadata,
        plan,
        taxPercent,
        trialEnd
    };    

    options = _.clearArgs(options);

    stripe.customers.update(customerId, options, function(err, result) {
        if(!err) {
            r.contextWrites[to] = result;
            r.callback = 'success'; 
        } else {
            r.contextWrites[to] = err.raw.message
            r.callback = 'error';
        }

        res.status(200).send(r);
    });    
}