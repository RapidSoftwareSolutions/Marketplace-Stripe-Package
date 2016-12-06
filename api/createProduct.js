'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        id,
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

    if(!apiKey) {
        _.echoBadEnd(r, to, res, 'apiKey');
        return;
    }

    try {
        if(deactivateOn && typeof deactivateOn == 'string') deactivateOn = JSON.parse(deactivateOn);
        if(attributes && typeof attributes == 'string') attributes = JSON.parse(attributes);
        if(images && typeof images == 'string') images = JSON.parse(images);
        if(metadata && typeof metadata == 'string') metadata = JSON.parse(metadata);
    } catch(e) {
        console.log(e);
        r.contextWrites[to] = 'Invalid JSON value.';
        r.callback = 'error';

        res.status(200).send(r);
        return;
    }    

    let stripe = initStripe(apiKey);

    let options = _.clearArgs({
        id,
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

    stripe.products.create(options, function(err, result) {
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