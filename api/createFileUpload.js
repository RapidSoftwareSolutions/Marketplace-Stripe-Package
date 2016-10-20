'use strict';

const _           = require('../lib/functions')
const fs          = require('fs');
const mime        = require('mime');
const initStripe  = require('stripe');
const request     = {
    'http' : require('http'),
    'https': require('https')
}

module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey, 
        file,
        purpose,
        to="to",
    } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !purpose || !file) {
        _.echoBadEnd(r, to, res);
        return;
    }

    let stripe = initStripe(apiKey);

    let dest       = file.substring(file.lastIndexOf('.') + 1),
        name       = Math.random().toString(36).substring(7) + '_rapid.' + dest,
        fileStream = fs.createWriteStream(`/tmp/${name}`);

    let protocol   = file.split('://')[0];
    
    if(!/http|https/.test(protocol)) {
        r.contextWrites[to] = 'Bad file url.';
        r.callback = 'error';

        res.status(200).send(r);
        return;
    }

    request[protocol].get(file, function(response) {
        response.pipe(fileStream);

        response.on('error', function() {
            r.contextWrites[to] = 'Bad file request.';
            r.callback = 'error';

            res.status(200).send(r);
            return;
        });

        response.on('end', function() {
            stripe.fileUploads.create({
                purpose: purpose,
                file: {
                    name: name,
                    data: fs.readFileSync(`/tmp/${name}`),
                    type: 'application/octet-stream'
                }
            }, function(err, result) {
                if(!err) {
                    r.contextWrites[to] = JSON.stringify(result);
                    r.callback = 'success'; 
                } else {
                    r.contextWrites[to] = err.raw.message;
                    r.callback = 'error';
                }

                fs.unlink(name, () => {});

                res.status(200).send(r);
            });    
        });
    });
}
