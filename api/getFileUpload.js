'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');

module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey, 
        fileId,
        to="to",
    } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !fileId) {
        _.echoBadEnd(r, to, res, 'apiKey, fileId');
        return;
    }

    let stripe = initStripe(apiKey);

    stripe.fileUploads.retrieve(fileId, function(err, result) {
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