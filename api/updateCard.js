'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');

module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        customerId,
        cardId,
        addressCity,
        addressCountry,
        addressLine1,
        addressLine2,
        addressState,
        addressZip,
        defaultForCurrency,
        expMonth,
        expYear,
        metadata,
        name,
        to="to" 
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !customerId || !cardId) {
        _.echoBadEnd(r, to, res, 'apiKey, customerId, cardId');
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

    let options = _.clearArgs({
        address_city: addressCity,
        address_country: addressCountry,
        address_line1: addressLine1,
        address_line2: addressLine2,
        address_state: addressState,
        address_zip: addressZip,
        default_for_currency: defaultForCurrency,
        exp_month: expMonth,
        exp_year: expYear,
        name: name
    });

    stripe.customers.updateCard(customerId, cardId, options, function(err, result) {
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
