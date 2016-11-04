'use strict';

const _           = require('../lib/functions')
const initStripe  = require('stripe');

module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { apiKey, invoiceId, to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !invoiceId) {
        _.echoBadEnd(r, to, res, 'apiKey, invoiceId');
        return;
    }

    let stripe = initStripe(apiKey);

    stripe.invoices.pay(invoiceId, function(err, result) {
        if(!err) {
            r.contextWrites[to] = JSON.stringify(result);
            r.callback = 'success'; 
        } else {
            console.log(err);
            r.contextWrites[to] = err.raw.message;
            r.callback = 'error';
        }

        res.status(200).send(r);
    });    
}