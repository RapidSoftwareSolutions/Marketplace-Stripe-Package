'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        invoice,
        coupon,
        customer,
        subscription,
        subscriptionPlan,
        subscriptionProrate,
        subscriptionTrialEnd,
        subscriptionQuantity,
        subscriptionProrationDate,
         to="to" 
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !invoice) {
        _.echoBadEnd(r, to, res, 'apiKey, invoice');
        return;
    }

    if(subscriptionTrialEnd!=undefined)
    {
        var newTime = new Date(subscriptionTrialEnd).getTime() / 1000;
        if(!isNaN(newTime))
        {
            subscriptionTrialEnd = newTime;
        }
    }

    let stripe = initStripe(apiKey);

    let options = _.clearArgs({
        coupon,
        customer,
        subscription,
        subscription_plan: subscriptionPlan,
        subscription_prorate: subscriptionProrate,
        subscription_trial_end: subscriptionTrialEnd,
        subscription_quantity: subscriptionQuantity,
        subscription_proration_date: subscriptionProrationDate,
    });

    stripe.invoices.retrieveLines(invoice, options, function(err, result) {
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