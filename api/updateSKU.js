'use strict';
const _           = require('../lib/functions')
const initStripe  = require('stripe');

module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        skuId,
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

    if(!apiKey || !skuId) {
        _.echoBadEnd(r, to, res);
        return;
    }

    try {
        if(metadata) metadata = JSON.parse(metadata);
        if(attributes) attributes = JSON.parse(attributes);
        if(packageDimensions) packageDimensions = JSON.parse(packageDimensions);
    } catch(e) {
        r.contextWrites[to] = 'Invalid JSON value.';
        r.callback = 'error';

        res.status(200).send(r);
        return;
    }

    let stripe = initStripe(apiKey);

    let options = {
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

    stripe.skus.update(skuId, options, function(err, result) {
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