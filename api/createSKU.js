'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        id,
        currency,
        inventory,
        price,
        product,
        active,
        attributes,
        image,
        metadata,
        packageDimensions,
         to="to" 
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !currency || !inventory || !price || !product) {
        _.echoBadEnd(r, to, res, 'apiKey, currency, inventory, price, product');
        return;
    }

    try {
        if(typeof inventory == 'string') inventory = JSON.parse(inventory);
        if(attributes && typeof attributes == 'string') attributes = JSON.parse(attributes);
        if(packageDimensions && typeof packageDimensions == 'string') packageDimensions = JSON.parse(packageDimensions);
    } catch(e) {
        r.contextWrites[to] = 'Invalid JSON value.';
        r.callback = 'error';

        res.status(200).send(r);
        return;
    }

    if(metadata && typeof metadata == 'string') {
        try {
            metadata = JSON.parse(metadata)
        } catch(e) {
            r.contextWrites[to] = 'Invalid JSON value.';
            r.callback = 'error';

            res.status(200).send(r);
            return;
        }
    } else if(metadata && typeof metadata == 'object'){
        let metadataArr = {};
        for (var i in metadata) {
            metadataArr[metadata[i]['keyName']] = metadata[i]['value'];
        }
        metadata = metadataArr;
    }

    let stripe = initStripe(apiKey);

    let options = {
        id,
        currency,
        inventory,
        price,
        product,
        active,
        attributes,
        image,
        metadata,
        package_dimensions: packageDimensions,
    };

    options = _.clearArgs(options);

    stripe.skus.create(options, function(err, result) {
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
