'use strict';

const _           = require('../lib/functions')
const request     = require('request');
const initStripe  = require('stripe');


module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        accountId,
        businessLogo, 
        businessName, 
        businessPrimaryColor, 
        businessUrl, 
        debitNegativeBalances, 
        declineChargeOn, 
        defaultCurrency, 
        email, 
        externalAccount, 
        legalEntity, 
        metadata, 
        productDescription, 
        statementDescriptor, 
        supportEmail, 
        supportPhone, 
        supportUrl, 
        tosAcceptance, 
        transferSchedule, 
         to="to" 
     } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !accountId) {
        _.echoBadEnd(r, to, res);
        return;
    }

    try {
        if(metadata) metadata = JSON.parse(metadata)
        if(tosAcceptance) tosAcceptance = JSON.parse(tosAcceptance)
    } catch(e) {
        r.contextWrites[to] = 'Invalid JSON value.';
        r.callback = 'error';

        res.status(200).send(r);
        return;
    }

    let options = _.clearArgs({
        business_logo: businessLogo, 
        business_name: businessName, 
        business_primary_color: businessPrimaryColor, 
        business_url: businessUrl, 
        debit_negative_balances: debitNegativeBalances, 
        decline_charge_on: declineChargeOn, 
        default_currency: defaultCurrency, 
        email: email, 
        external_account: externalAccount, 
        legal_entity: legalEntity, 
        metadata: metadata, 
        product_description: productDescription, 
        statement_descriptor: statementDescriptor, 
        support_email: supportEmail, 
        support_phone: supportPhone, 
        support_url: supportUrl, 
        tos_acceptance: tosAcceptance, 
        transfer_schedule: transferSchedule
    });

    let stripe = initStripe(apiKey);

    stripe.accounts.update(accountId, options, function(err, result) {
        if(!err) {
            r.contextWrites[to] = JSON.stringify(result);
            r.callback = 'success'; 
        } else {
            r.contextWrites[to] = JSON.stringify(err);
            r.callback = 'error';
        }

        res.status(200).send(r);
    });    
}