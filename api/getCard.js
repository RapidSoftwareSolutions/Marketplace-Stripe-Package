'use strict';

const _           = require('../lib/functions')
const request     = require('request');

module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        customerId,
        cardId,
         to="to" 
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !customerId || !cardId) {
        _.echoBadEnd(r, to, res, 'apiKey, customerId, cardId');
        return;
    }

    return request(
        {
              url: `https://api.stripe.com/v1/customers/${customerId}/sources/${cardId}`,
              headers: {
                'Authorization': 'Bearer ' + apiKey
              }
          }, (err, response, body) => {
              if (!err && response.statusCode == 200) {
                  r.contextWrites[to] = JSON.stringify(body);
                r.callback = 'success';
            } else {
                r.contextWrites[to] = JSON.stringify(err || body);
                r.callback = 'error';
            }

            res.status(200).send(r);
          }
    );
}