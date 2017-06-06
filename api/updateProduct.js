'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        productId,
        name,
        active,
        attributes, 
        caption, 
        deactivateOn, 
        description, 
        images, 
        metadata, 
        packageDimensions,
        shippable,
        url,
         to="to" 
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !productId) {
        _.echoBadEnd(r, to, res, 'apiKey, productId');
        return;
    }

    try {
        if(deactivateOn && typeof deactivateOn == 'string') deactivateOn = JSON.parse(deactivateOn);
        if(attributes && typeof attributes == 'string') attributes = JSON.parse(attributes);
        if(images && typeof images == 'string') images = JSON.parse(images);
    } catch(e) {
        console.log(e);
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

    let options = _.clearArgs({
        name,
        active,
        attributes, 
        caption, 
        deactivate_on:deactivateOn, 
        description, 
        images, 
        metadata, 
        packageDimensions,
        shippable,
        url
    });

    stripe.products.update(productId, options, function(err, result) {
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