'use strict';

const _           = require('../lib/functions')
const initStripe  = require('stripe');

module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey, 
        attributes,
        ids,
        productId,
        to="to",
    } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey) {
        _.echoBadEnd(r, to, res, 'apiKey');
        return;
    }

    let stripe = initStripe(apiKey);

    let options = _.clearArgs({
        attributes,
        ids,
        product: productId
    });

    stripe.skus.list(options, function(err, result) {
        if(!err) {
            r.contextWrites[to] = result;
            r.callback = 'success'; 
        } else {
            console.log(err);
            r.contextWrites[to] = err.raw.message;
            r.callback = 'error';
        }

        res.status(200).send(r);
    });    
}