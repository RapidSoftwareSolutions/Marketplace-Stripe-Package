'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');

module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey, 
        id,
        transferId,
        to="to",
    } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !id || !transferId) {
        _.echoBadEnd(r, to, res, 'apiKey, transferId');
        return;
    }
    
    let stripe = initStripe(apiKey);

    stripe.transfers.retrieveReversal(transferId, id, function(err, result) {
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