'use strict';

const _           = require('../lib/functions')
const request     = require('request');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        clientSecret,
        code,
        to="to" 
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !clientSecret || !code) {
        _.echoBadEnd(r, to, res, 'apiKey, clientSecret, code');
        return;
    }

    let options = _.clearArgs({
        client_secret: clientSecret,
        code: code,
        grant_type: 'authorization_code'
    });

    request.post({
        url: 'https://connect.stripe.com/oauth/token',
        formData: options
    }, (err, response, body) => {
        if(!err && response.statusCode == 200) {
            r.contextWrites[to] = JSON.parse(result);
            r.callback = 'success'; 
        } else {
            r.contextWrites[to] = JSON.parse(err || result);
            r.callback = 'error';
        }

        res.status(200).send(r);
    })
}