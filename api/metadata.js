module.exports.do = function(req, res){
    res.status(200).send({
        'package': 'Stripe',
        "tagline": "Stripe API Package",
        "description": "This blocks allows you to translates a sting of text from one language to another",
        'image': 'http://seeklogo.com/images/S/stripe-logo-4039DEE4FE-seeklogo.com.png',
        'repo': 'https://github.com/RapidSoftwareSolutions/marketplace-stripe-package',
        "keywords": ["API", "buy", "buying", "ecommerce", "finance", "pay", "payment", "payments", "shop", "shopping", "smb"],
        'accounts': {
            'domain': 'stripe.com',
            'credentials': [
                'apiKey'
            ]
        },
        "events": [
   {
     "name": "webhookEvent",
     "description": "This method is called every time a Stripe webhook event happens",
     "payload": {
  "created": 1326853478,
  "livemode": false,
  "id": "evt_00000000000000",
  "type": "account.updated",
  "object": "event",
  "request": null,
  "pending_webhooks": 1,
  "api_version": "2017-06-05",
  "data": {
    "object": {
      "id": "acct_00000000000000",
      "object": "account",
      "business_logo": null,
      "business_name": null,
      "business_url": null,
      "charges_enabled": false,
      "country": "US",
      "debit_negative_balances": true,
      "decline_charge_on": {
        "avs_failure": false,
        "cvc_failure": true
      },
      "default_currency": "usd",
      "details_submitted": true,
      "display_name": null,
      "email": "test@stripe.com",
      "external_accounts": {
        "object": "list",
        "data": [
        ],
        "has_more": false,
        "total_count": 0,
        "url": "/v1/accounts/acct_1AXoJfAU0Q09Fhn4/external_accounts"
      },
      "legal_entity": {
        "address": {
          "city": null,
          "country": "US",
          "line1": null,
          "line2": null,
          "postal_code": null,
          "state": null
        },
        "business_name": null,
        "business_tax_id_provided": false,
        "dob": {
          "day": null,
          "month": null,
          "year": null
        },
        "first_name": null,
        "last_name": null,
        "personal_address": {
          "city": null,
          "country": "US",
          "line1": null,
          "line2": null,
          "postal_code": null,
          "state": null
        },
        "personal_id_number_provided": false,
        "ssn_last_4_provided": false,
        "type": null,
        "verification": {
          "details": null,
          "details_code": null,
          "document": null,
          "status": "unverified"
        }
      },
      "metadata": {
      },
      "payout_schedule": {
        "delay_days": 2,
        "interval": "daily"
      },
      "payout_statement_descriptor": null,
      "payouts_enabled": false,
      "product_description": null,
      "statement_descriptor": "TEST",
      "support_email": null,
      "support_phone": null,
      "timezone": "Etc/UTC",
      "tos_acceptance": {
        "date": null,
        "ip": null,
        "user_agent": null
      },
      "type": "standard",
      "verification": {
        "disabled_reason": "fields_needed",
        "due_by": 1498471551,
        "fields_needed": [
          "legal_entity.verification.document"
        ]
      }
    },
    "previous_attributes": {
      "verification": {
        "fields_needed": [
        ],
        "due_by": null
      }
    }
  }
},
     "steps": [
       "Navigate to https://dashboard.stripe.com/account/webhooks",
       "Click 'Add endpoint'",
       "For 'URL to be called' input the following URL: __WEBHOOK_URL__"
     ],
     "args": [
       {
         "name": "token",
         "type": "string",
         "info": "Token sent on each message",
         "required": true
       }
     ]
   }
 ],
        'blocks': [{
            "name":"getAccountBalance",
            "description": "Retrieves the current account balance, based on the authentication that was used to make the request.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getBalanceHistory",
            "description": "Returns a list of transactions that have contributed to the Stripe account balance (e.g., charges, transfers, and so forth). The transactions are returned in sorted order, with the most recent transactions appearing first.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "currency",
                    type: "String",
                    info: "3-letter ISO code for currency.",
                    required: false
                },
                {
                    name: "startingAfter",
                    type: "String",
                    info: "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.",
                    required: false
                },
                {
                    name: "limit",
                    type: "Number",
                    info: "A limit on the number of objects to be returned. Limit can range between 1 and 100 items.",
                    required: false
                },
                {
                    name: "type",
                    type: "Select",
                    options:["charge","refund","adjustment","application_fee","application_fee_refund","transfer","transfer_failure"],
                    info: "Only returns transactions of the given type. One of: `charge`, `refund`, `adjustment`, `application_fee`, `application_fee_refund`, `transfer`, or `transfer_failure`",
                    required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createCharge",
            "description": "To charge a credit card, you create a charge object. If your API key is in test mode, the supplied payment source (e.g., card or Bitcoin receiver) won't actually be charged, though everything else will occur as if in live mode. (Stripe assumes that the charge would have completed successfully).",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "amount",
                    type: "String",
                    info: "A positive integer in the smallest currency unit (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a 0-decimal currency) representing how much to charge the card. The minimum amount is $0.50 US or equivalent in charge currency.",
                    required: true
                },
                {
                    name: "applicationFee",
                    type: "String",
                    info: "A fee in cents that will be applied to the charge and transferred to the application owner's Stripe account. To use an application fee, the request must be made on behalf of another account, using the Stripe-Account header, an OAuth key, or the destination parameter. For more information, see the application fees documentation.",
                    required: false
                },
                {
                    name: "currency",
                    type: "String",
                    info: "3-letter ISO code for currency.",
                    required: true
                },
                {
                    name: "capture",
                    type: "String", // Boolean
                    info: "Boolean. Whether or not to immediately capture the charge. When false, the charge issues an authorization (or pre-authorization), and will need to be captured later. Uncaptured charges expire in 7 days. For more information, see authorizing charges and settling later.",
                    required: false
                },
                {
                    name: "description",
                    type: "String",
                    info: "An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the description of the charge(s) that they are describing.",
                    required: false
                },
                {
                    name: "receiptEmail",
                    type: "String",
                    info: "The email address to send this charge's receipt to. The receipt will not be sent until the charge is paid. If this charge is for a customer, the email address specified here will override the customer's email address. Receipts will not be sent for test mode charges. If `receipt_email` is specified for a charge in live mode, a receipt will be sent regardless of your email settings.",
                    required: false
                },
                {
                    name: "customer",
                    type: "String",
                    info: "The ID of an existing customer that will be charged in this request.",
                    required: false
                },
                {
                    name: "source",
                    type: "String",
                    info: "A payment source to be charged, such as a credit card. If you also pass a customer ID, the source must be the ID of a source belonging to the customer. Otherwise, if you do not pass a customer ID, the source you provide must either be a token, like the ones returned by Stripe.js, or a object containing a user's credit card details, with the options described below. Although not all information is required, the extra info helps prevent fraud.child attributes",
                    required: false
                },
                {
                    name: "statementDescriptor",
                    type: "String",
                    info: "An arbitrary string to be displayed on your customer`s credit card statement. This may be up to 22 characters. As an example, if your website is RunClub and the item you`re charging for is a race ticket, you may want to specify a statement_descriptor of RunClub 5K race ticket. The statement description may not include <> characters, and will appear on your customer`s statement in capital letters. Non-ASCII characters are automatically stripped. While most banks display this information consistently, some may display it incorrectly or not at all.",
                    required: false
                },

            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createCustomer",
            "description": "Creates a new customer object.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "source",
                    type: "String",
                    info: "The source can either be a token, like the ones returned by our Stripe.js, or a dictionary containing a user’s credit card details (with the options shown below).child arguments",
                    required: true
                },
                {
                    name: "accountBalance",
                    type: "String",
                    info: "An integer amount in cents that is the starting account balance for your customer. A negative amount represents a credit that will be used before attempting any charges to the customer’s card; a positive amount will be added to the next invoice.",
                    required: false
                },
                {
                    name: "businessVatId",
                    type: "String",
                    info: "The customer’s VAT identification number. If you are using Relay, this field gets passed to tax provider you are using for your orders. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                    required: false
                },
                {
                    name: "coupon",
                    type: "String",
                    info: "If you provide a coupon code, the customer will have a discount applied on all recurring charges. Charges you create through the API will not have the discount.",
                    required: false
                },
                {
                    name: "description",
                    type: "String",
                    info: "An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                    required: false
                },
                {
                    name: "email",
                    type: "String",
                    info: "Customer’s email address. It’s displayed alongside the customer in your dashboard and can be useful for searching and tracking. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                    required: false
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to a customer object. It can be useful for storing additional information about the customer in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
                {
                    name: "plan",
                    type: "String",
                    info: "The identifier of the plan to subscribe the customer to. If provided, the returned customer object will have a list of subscriptions that the customer is currently subscribed to. If you subscribe a customer to a plan without a free trial, the customer must have a valid card as well.",
                    required: false
                },
                {
                    name: "taxPercent",
                    type: "String",
                    info: "A positive decimal (with at most four decimal places) between 1 and 100. This represents the percentage of the subscription invoice subtotal that will be calculated and added as tax to the final amount each billing period. For example, a plan which charges $10/month with a tax_percent of 20.0 will charge $12 per invoice. Can only be used if a plan is provided.",
                    required: false
                },
                {
                    name: "trialEnd",
                    type: "String",
                    info: "Unix timestamp representing the end of the trial period the customer will get before being charged. If set, trial_end will override the default trial period of the plan the customer is being subscribed to. The special value now can be provided to end the customer’s trial immediately. Only applies when the plan parameter is also provided.",
                    required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getBalanceTransaction",
            "description": "Retrieves the balance transaction with the given ID.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "id",
                    type: "credentials",
                    info: "The ID of the desired balance transaction (as found on any API object that affects the balance, e.g. a charge or transfer).",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getCharge",
            "description": "To charge a credit card, you create a charge object. If your API key is in test mode, the supplied payment source (e.g., card or Bitcoin receiver) won't actually be charged, though everything else will occur as if in live mode. (Stripe assumes that the charge would have completed successfully).",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "chargeId",
                    type: "String",
                    info: "The identifier of the charge to be retrieved.",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updateCharge",
            "description": "Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "chargeId",
                    type: "String",
                    info: "Id of a charge.",
                    required: true
                },
                {
                    name: "description",
                    type: "String",
                    info: "An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the description of the charge(s) that they are describing.",
                    required: false
                },
                {
                    name: "receiptEmail",
                    type: "String",
                    info: "The email address to send this charge's receipt to. The receipt will not be sent until the charge is paid. If this charge is for a customer, the email address specified here will override the customer's email address. Receipts will not be sent for test mode charges. If `receipt_email` is specified for a charge in live mode, a receipt will be sent regardless of your email settings.",
                    required: false
                },
                {
                    name: "fraudDetails",
                    type: "JSON",
                    info: "A set of key/value pairs you can attach to a charge giving information about its riskiness. If you believe a charge is fraudulent, include a user_report key with a value of fraudulent. If you believe a charge is safe, include a user_report key with a value of safe. Note that you must refund a charge before setting the user_report to fraudulent. Stripe will use the information you send to improve our fraud detection algorithms.",
					required: false
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to a charge object. It can be useful for storing additional information about the charge in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.",
					required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
                {
                    name: "shipping",
                    type: "String",
                    info: "Shipping information for the charge. Helps prevent fraud on charges for physical goods.",
					required: false
                },

            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"captureCharge",
            "description": "Capture the payment of an existing, uncaptured, charge. This is the second half of the two-step payment flow, where first you created a charge with the capture option set to false.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "chargeId",
                    type: "String",
                    info: "Id of a charge.",
                    required: true
                },
                {
                    name: "amount",
                    type: "String",
                    info: "The amount to capture, which must be less than or equal to the original amount. Any additional amount will be automatically refunded.",
                    required: false
                },
                {
                    name: "applicationFee",
                    type: "String",
                    info: "An application fee to add on to this charge. Can only be used with Stripe Connect.",
                    required: false
                },
                {
                    name: "receiptEmail",
                    type: "credentials",
                    info: "The email address to send this charge’s receipt to. This will override the previously-specified email address for this charge, if one was set. Receipts will not be sent in test mode.",
                    required: false
                },
                {
                    name: "statementDescriptor",
                    type: "credentials",
                    info: "An arbitrary string to be displayed on your customer’s credit card statement. This may be up to 22 characters. As an example, if your website is RunClub and the item you’re charging for is a race ticket, you may want to specify a statement_descriptor of RunClub 5K race ticket. The statement description may not include <> characters, and will appear on your customer’s statement in capital letters. Non-ASCII characters are automatically stripped. Updating this value will overwrite the previous statement descriptor of this charge. While most banks display this information consistently, some may display it incorrectly or not at all",
                    required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getChargesList",
            "description": "Returns a list of charges you’ve previously created. The charges are returned in sorted order, with the most recent charges appearing first.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "created",
                    type: "String",
                    info: "A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options: child arguments",
                    required: false
                },
                {
                    name: "customer",
                    type: "String",
                    info: "Only return charges for the customer specified by this customer ID.",
                    required: false
                },
                {
                    name: "endingBefore",
                    type: "String",
                    info: "A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.",
                    required: false
                },
                {
                    name: "limit",
                    type: "String",
                    info: "A limit on the number of objects to be returned. Limit can range between 1 and 100 items.",
                    required: false
                },
                {
                    name: "source",
                    type: "String",
                    info: "A filter on the list based on the source of the charge. The value can be a dictionary with the following options:",
                    required: false
                },
                {
                    name: "startingAfter",
                    type: "String",
                    info: "A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.",
					required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getCustomer",
            "description": "Retrieves the details of an existing customer. You need only supply the unique customer identifier that was returned upon customer creation.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "customerId",
                    type: "String",
                    info: "The identifier of the customer to be retrieved.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updateCustomer",
            "description": "Updates the specified customer by setting the values of the parameters passed.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "customerId",
                    type: "String",
                    info: "If of customer to update.",
                    required: true
                },
                {
                    name: "source",
                    type: "String",
                    info: "The source can either be a token, like the ones returned by our Stripe.js, or a dictionary containing a user’s credit card details (with the options shown below).child arguments",
                    required: false
                },
                {
                    name: "accountBalance",
                    type: "String",
                    info: "An integer amount in cents that is the starting account balance for your customer. A negative amount represents a credit that will be used before attempting any charges to the customer’s card; a positive amount will be added to the next invoice.",
                    required: false
                },
                {
                    name: "businessVatId",
                    type: "String",
                    info: "The customer’s VAT identification number. If you are using Relay, this field gets passed to tax provider you are using for your orders. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                    required: false
                },
                {
                    name: "coupon",
                    type: "String",
                    info: "If you provide a coupon code, the customer will have a discount applied on all recurring charges. Charges you create through the API will not have the discount.",
                    required: false
                },
                {
                    name: "description",
                    type: "String",
                    info: "An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                    required: false
                },
                {
                    name: "email",
                    type: "String",
                    info: "Customer’s email address. It’s displayed alongside the customer in your dashboard and can be useful for searching and tracking. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                    required: false
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to a customer object. It can be useful for storing additional information about the customer in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
                {
                    name: "plan",
                    type: "String",
                    info: "The identifier of the plan to subscribe the customer to. If provided, the returned customer object will have a list of subscriptions that the customer is currently subscribed to. If you subscribe a customer to a plan without a free trial, the customer must have a valid card as well.",
                    required: false
                },
                {
                    name: "taxPercent",
                    type: "String",
                    info: "A positive decimal (with at most four decimal places) between 1 and 100. This represents the percentage of the subscription invoice subtotal that will be calculated and added as tax to the final amount each billing period. For example, a plan which charges $10/month with a tax_percent of 20.0 will charge $12 per invoice. Can only be used if a plan is provided.",
                    required: false
                },
                {
                    name: "trialEnd",
                    type: "String",
                    info: "Unix timestamp representing the end of the trial period the customer will get before being charged. If set, trial_end will override the default trial period of the plan the customer is being subscribed to. The special value now can be provided to end the customer’s trial immediately. Only applies when the plan parameter is also provided.",
                    required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"deleteCustomer",
            "description": "Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "customerId",
                    type: "String",
                    info: "If of customer to update.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getCustomerList",
            "description": "Returns a list of your customers. The customers are returned sorted by creation date, with the most recent customers appearing first.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "endingBefore",
                    type: "String",
                    info: "A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.",
                    required: false
                },
                {
                    name: "limit",
                    type: "String",
                    info: "A limit on the number of objects to be returned. Limit can range between 1 and 100 items.",
                    required: false
                },
                {
                    name: "startingAfter",
                    type: "String",
                    info: "A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.",
					required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getDispute",
            "description": "Retrieves the dispute with the given ID.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "disputeId",
                    type: "String",
                    info: "ID of dispute to retrieve.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updateDispute",
            "description": "When you get a dispute, contacting your customer is always the best first step. If that doesn’t work, you can submit evidence in order to help us resolve the dispute in your favor.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "disputeId",
                    type: "String",
                    info: "ID of dispute to retrieve.",
                    required: true
                },
                {
                    name: "evidence",
                    type: "JSON",
                    info: "Evidence to upload to respond to a dispute. Updating any field in the hash will submit all fields in the hash for review.",
                    required: false
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to a dispute object. It can be useful for storing additional information about the dispute in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"closeDispute",
            "description": "Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially ‘dismissing’ the dispute, acknowledging it as lost",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "disputeId",
                    type: "String",
                    info: "ID of dispute to retrieve.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getDisputes",
            "description": "Returns a list of your disputes.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "endingBefore",
                    type: "String",
                    info: "A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.",
                    required: false
                },
                {
                    name: "limit",
                    type: "String",
                    info: "A limit on the number of objects to be returned. Limit can range between 1 and 100 items.",
                    required: false
                },
                {
                    name: "startingAfter",
                    type: "String",
                    info: "A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.",
					required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getEvent",
            "description": "Retrieves the details of an event. Supply the unique identifier of the event, which you might have received in a webhook.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "eventId",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getEventList",
            "description": "List events, going back up to 30 days.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "type",
                    type: "String",
                    info: "A string containing a specific event name, or group of events using * as a wildcard. The list will be filtered to include only events with a matching event property.",
                    required: false
                },
                {
                    name: "endingBefore",
                    type: "String",
                    info: "A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.",
                    required: false
                },
                {
                    name: "limit",
                    type: "String",
                    info: "A limit on the number of objects to be returned. Limit can range between 1 and 100 items.",
                    required: false
                },
                {
                    name: "startingAfter",
                    type: "String",
                    info: "A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.",
					required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createFileUpload",
            "description": "Upload a file to Stripe",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "file",
                    type: "File",
                    info: "A file to upload.",
                    required: true
                },
                {
                    name: "purpose",
                    type: "Select",
                    options: ["business_logo","dispute_evidence","identity_document","incorporation_article","incorporation_document","payment_provider_transfer","product_feed"],
                    info: "The purpoe of the uploaded file. Possible values are `business_logo`, `dispute_evidence`, `identity_document`, `incorporation_article`, `incorporation_document`, `payment_provider_transfer`, `product_feed`.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, /*{
            "name":"getFileUpload",
            "description": "",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "id",
                    type: "String",
                    info: "The identifier of the file upload to be retrieved.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getFileUploadsList",
            "description": "",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "file",
                    type: "String",
                    info: "A file to upload.",
                    required: true
                },
                {
                    name: "purpose",
                    type: "String",
                    info: "The file purpose to filter queries by. If none is provided, files will not be filtered by purpose.",
					required: false
                },
                {
                    name: "endingBefore",
                    type: "String",
                    info: "A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.",
                    required: false
                },
                {
                    name: "limit",
                    type: "String",
                    info: "A limit on the number of objects to be returned. Limit can range between 1 and 100 items.",
                    required: false
                },
                {
                    name: "startingAfter",
                    type: "String",
                    info: "A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.",
					required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },*/ {
            "name":"createRefund",
            "description": "Creates a refund.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "chargeId",
                    type: "String",
                    info: "The identifier of the charge to refund.",
                    required: true
                },
                {
                    name: "amount",
                    type: "String",
                    info: "A positive integer in cents representing how much of this charge to refund. Can only refund up to the unrefunded amount remaining of the charge.",
                    required: false
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to a refund object. It can be useful for storing additional information about the refund in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
                {
                    name: "reason",
                    type: "String",
                    info: "String indicating the reason for the refund. If set, possible values are duplicate, fraudulent, and requested_by_customer. Specifying fraudulent as the reason when you believe the charge to be fraudulent will help us improve our fraud detection algorithms.",
                    required: false
                },
                {
                    name: "refundApplicationFee",
                    type: "String",
                    info: "Boolean indicating whether the application fee should be refunded when refunding this charge. If a full charge refund is given, the full application fee will be refunded. Else, the application fee will be refunded with an amount proportional to the amount of the charge refunded. An application fee can only be refunded by the application that created the charge.",
                    required: false
                },
                {
                    name: "reverseTransfer",
                    type: "String",
                    info: "Boolean indicating whether the transfer should be reversed when refunding this charge. The transfer will be reversed for the same amount being refunded (either the entire or partial amount). A transfer can only be reversed by the application that created the charge.",
                    required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getRefund",
            "description": "Retrieves the details of an existing refund.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "refundId",
                    type: "String",
                    info: "ID of refund to retrieve.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updateRefund",
            "description": "Updates the specified refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "refundId",
                    type: "String",
                    info: "ID of refund to retrieve.",
                    required: true
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to a refund object. It can be useful for storing additional information about the refund in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getRefundList",
            "description": "Returns a list of all refunds you’ve previously created. The refunds are returned in sorted order, with the most recent refunds appearing first. For convenience, the 10 most recent refunds are always available by default on the charge object.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "endingBefore",
                    type: "String",
                    info: "A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.",
                    required: false
                },
                {
                    name: "limit",
                    type: "String",
                    info: "A limit on the number of objects to be returned. Limit can range between 1 and 100 items.",
                    required: false
                },
                {
                    name: "startingAfter",
                    type: "String",
                    info: "A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.",
					required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createCardToken",
            "description": "Creates a single use token that wraps the details of a credit card.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "cardNumber",
                    type: "String",
                    info: "Number of card",
                    required: true
                },
                {
                    name: "cardExpirationMonth",
                    type: "Number",
                    info: "Expiration month of card",
                    required: true
                },
                {
                    name: "cardExpirationYear",
                    type: "Number",
                    info: "Expiration year of card",
                    required: true
                },
                {
                    name: "cardCvc",
                    type: "String",
                    info: "CVC code of card",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createBankAccountToken",
            "description": "Creates a single use token that wraps the details of a bank account.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "bankAccountCountry",
                    type: "String",
                    info: "The bank account country",
                    required: true
                },
                {
                    name: "bankAccountCurrency",
                    type: "String",
                    info: "The bank account currency",
                    required: true
                },
                {
                    name: "bankAccountAccountHolderName",
                    type: "String",
                    info: "The bank account holder name",
                    required: true
                },
                {
                    name: "bankAccountAccountHolderType",
                    type: "String",
                    info: "The bank account holder type",
                    required: true
                },
                {
                    name: "bankAccountRoutingNumber",
                    type: "String",
                    info: "The bank account routing number",
                    required: true
                },
                {
                    name: "bankAccountNumber",
                    type: "String",
                    info: "The bank account number",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createPiiToken",
            "description": "Creates a single use token that wraps the details of personally identifiable information (PII).",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "personalIdNumber",
                    type: "String",
                    info: "The bank account country",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getToken",
            "description": "Retrieves the token with the given ID.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "tokenId",
                    type: "String",
                    info: "The ID of the desired token.",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createTransfer",
            "description": "To send funds from your Stripe account to a third-party recipient or to your own bank account, you create a new transfer object.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "amount",
                    type: "Number",
                    info: "A positive integer in cents representing how much to transfer.",
                    required: true
                },
                {
                    name: "currency",
                    type: "String",
                    info: "3-letter ISO code for currency",
                    required: true
                },
                {
                    name: "destination",
                    type: "String",
                    info: "The id of a bank account or a card to send the transfer to, or the string `default_for_currency` to use the default external account for the specified currency. ",
                    required: true
                },
                {
                    name: "sourceTransaction",
                    type: "String",
                    info: "You can use this parameter to transfer funds from a charge (or other transaction) before they are added to your available balance. A pending balance will transfer immediately but the funds will not become available until the original charge becomes available.",
                    required: false
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to a transfer object. It can be useful for storing additional information about the transfer in a structured format.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getTransfer",
            "description": "Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or the transfer list, and Stripe will return the corresponding transfer information.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "transferId",
                    type: "String",
                    info: "The identifier of the transfer to be retrieved.",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updateTransfer",
            "description": "Updates the specified transfer by setting the values of the parameters passed. Any parameters not provided will be left unchanged.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "transferId",
                    type: "String",
                    info: "Id of transfer to update.",
                    required: true
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to a transfer object. It can be useful for storing additional information about the transfer in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getTransferList",
            "description": "Returns a list of existing transfers sent to third-party bank accounts or that Stripe has sent you. The transfers are returned in sorted order, with the most recently created transfers appearing first.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "destination",
                    type: "String",
                    info: "Only return transfers for the destination specified by this account ID.",
                    required: false
                },
                {
                    name: "recipientstatus",
                    type: "String",
                    info: "Only return transfers for the recipient specified by this recipient ID.",
                    required: false
                },
                {
                    name: "status",
                    type: "Select",
                    options: ["pending","paid","failed","in_transit","canceled"],
                    info: "Only return transfers that have the given status: `pending`, `paid`, `failed`, `in_transit`, or `canceled`.",
                    required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createTransferReversal",
            "description": "When you create a new reversal, you must specify a transfer to create it on.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "transferId",
                    type: "credentials",
                    info: "The identifier of the transfer to be reversed.",
                    required: true
                },
                {
                    name: "description",
                    type: "String",
                    info: "An arbitrary string which you can attach to a reversal object. It is displayed alongside the reversal in the dashboard. This will be unset if you POST an empty value.",
                    required: false
                },
                {
                   name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to a reversal object. It can be useful for storing additional information about the reversal in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
                {
                    name: "refundApplicationFee",
                    type: "String",
                    info: "Boolean indicating whether the application fee should be refunded when reversing this transfer. If a full transfer reversal is given, the full application fee will be refunded. Otherwise, the application fee will be refunded with an amount proportional to the amount of the transfer reversed.",
                    required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },  {
            "name":"getTransferReversal",
            "description": "By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a specific reversal stored on the transfer.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "id",
                    type: "String",
                    info: "ID of reversal to retrieve.",
                    required: true
                },
                {
                    name: "transferId",
                    type: "String",
                    info: "ID of the transfer reversed.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },  {
            "name":"updateTransferReversal",
            "description": "Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "id",
                    type: "String",
                    info: "ID of reversal to retrieve.",
                    required: true
                },
                {
                    name: "transferId",
                    type: "String",
                    info: "ID of the transfer reversed.",
                    required: true
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to a reversal object. It can be useful for storing additional information about the reversal in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
                {
                    name: "description",
                    type: "String",
                    info: "An arbitrary string which you can attach to a reversal object. It is displayed when in the web interface alongside the reversal. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                    required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getTransferReversalList",
            "description": "You can see a list of the reversals belonging to a specific transfer.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "transferId",
                    type: "String",
                    info: "The ID of the transfer whose reversals will be retrieved.",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createAccount",
            "description": "With Connect, you can create Stripe accounts for your users. To do this, you'll first need to register your platform.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "country",
                    type: "String",
                    info: "The country the account holder resides in or that the business is legally established in. For example, if you are in the United States and the business you’re creating an account for is legally represented in Canada, you would use “CA” as the country for the account being created.",
                    required: false
                },
                {
                    name: "email",
                    type: "String",
                    info: "The email address of the account holder. For standalone accounts, Stripe will email your user with instructions for how to set up their account. For managed accounts, this is only to make the account easier to identify to you: Stripe will never directly reach out to your users.",
                    required: true
                },
                {
                    name: "type",
                    type: "Select",
                    options: ["Standard","Custom"],
                    info: "Whether you'd like to create a Custom or Standard account. Custom accounts have extra parameters available to them, and require that you, the platform, handle all communication with the account holder. Standard accounts are normal Stripe accounts.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getAccount",
            "description": "Retrieves the details of the account.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "accountId",
                    type: "String",
                    info: "Id of account to retrive",
					required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updateAccount",
            "description": "Updates an account by setting the values of the parameters passed. Any parameters not provided will be left unchanged.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "accountId",
                    type: "String",
                    info: "Id of account to update",
					required: false
                },
                {
                    name: "businessLogo",
                    type: "String",
                    info: "Bussines logo",
					required: false
                },
                {
                    name: "businessName",
                    type: "String",
                    info: "The publicly sharable name for this account.",
					required: false
                },
                {
                    name: "businessPrimaryColor",
                    type: "String",
                    info: "A CSS hex color value representing the primary branding color for this account",
					required: false
                },
                {
                    name: "businessUrl",
                    type: "String",
                    info: "The URL that best shows the service or product provided for this account",
					required: false
                },
                {
                    name: "debitNegativeBalances",
                    type: "String", // Boolean
                    info: "A boolean for whether or not Stripe should try to reclaim negative balances from the account holder’s bank account.",
					required: false
                },
                {
                    name: "declineChargeOn",
                    type: "String",
                    info: "Account-level settings to automatically decline certain types of charges regardless of the bank’s decision.",
					required: false
                },
                {
                    name: "defaultCurrency",
                    type: "String",
                    info: "Three-letter ISO currency code representing the default currency for the account.",
					required: false
                },
                {
                    name: "email",
                    type: "String",
                    info: "Email address of the account holder. For standalone accounts, this is used to email them asking them to claim their Stripe account. For managed accounts, this is only to make the account easier to identify to you: Stripe will not email the account holder.",
					required: false
                },
                {
                    name: "externalAccount",
                    type: "String",
                    info: "A card or bank account to attach to the account. You can provide either a token, like the ones returned by Stripe.js, or a dictionary as documented in the external_account parameter for either card or bank account creation. ",
					required: false
                },
                {
                    name: "legalEntity",
                    type: "String",
                    info: "Information about the account holder; varies by account country and account status.",
					required: false
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to an account object. It can be useful for storing additional information about the account in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
					required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
                {
                    name: "productDescription",
                    type: "String",
                    info: "Internal-only description of the product being sold or service being provided by this account. It’s used by Stripe for risk and underwriting purposes.",
					required: false
                },
                {
                    name: "statementDescriptor",
                    type: "String",
                    info: "The text that will appear on credit card statements by default if a charge is being made directly on the account.",
					required: false
                },
                {
                    name: "supportEmail",
                    type: "String",
                    info: "A publicly shareable email address that can be reached for support for this account",
					required: false
                },
                {
                    name: "supportPhone",
                    type: "String",
                    info: "A publicly shareable phone number that can be reached for support for this account",
					required: false
                },
                {
                    name: "supportUrl",
                    type: "String",
                    info: "A publicly shareable URL that can be reached for support for this account",
					required: false
                },
                {
                    name: "tosAcceptance",
                    type: "JSON",
                    info: "Details on who accepted the Stripe terms of service, and when they accepted it",
					required: false
                },
                {
                    name: "transferSchedule",
                    type: "JSON",
                    info: "Details on when this account will make funds from charges available, and when they will be paid out to the account holder’s bank account.",
					required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"deleteAccount",
            "description": "Managed accounts created using test-mode keys can be deleted at any time. Managed accounts created using live-mode keys may only be deleted once all balances are zero.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "accountId",
                    type: "String",
                    info: "Id of account to delete",
					required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"rejectAccount",
            "description": "Managed accounts created using test-mode keys can be rejected at any time. Managed accounts created using live-mode keys may only be rejected once all balances are zero.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "accountId",
                    type: "String",
                    info: "Id of account to reject",
					required: false
                },
                {
                    name: "reason",
                    type: "Select",
                    options: ["fraud","terms_of_service","other"],
                    info: "The reason for rejecting the account. May be one of `fraud`, `terms_of_service`, or `other`.",
					required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getAccountList",
            "description": "Returns a list of accounts connected to your platform via Connect. If you’re not a platform, the list will be empty.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "endingBefore",
                    type: "String",
                    info: "A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.",
					required: false
                },
                {
                    name: "limit",
                    type: "Number",
                    info: "A limit on the number of objects to be returned. Limit can range between 1 and 100 items.",
					required: false
                },
                {
                    name: "startingAfter",
                    type: "String",
                    info: "A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.",
					required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createFeeRefund",
            "description": "Refunds an application fee that has previously been collected but not yet refunded. Funds will be refunded to the Stripe account that the fee was originally collected from.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "appId",
                    type: "String",
                    info: "The identifier of the application fee to be refunded.",
                    required: true
                },
                {
                    name: "amount",
                    type: "Number",
                    info: "A positive integer in cents representing how much of this fee to refund. Can only refund up to the unrefunded amount remaining of the fee.",
					required: false
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to a refund object. It can be useful for storing additional information about the refund in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.",
					required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getFeeRefund",
            "description": "By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details about a specific refund stored on the application fee.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "feeId",
                    type: "String",
                    info: "ID of the application fee refunded.",
                    required: true
                },
                 {
                    name: "refundId",
                    type: "String",
                    info: "ID of refund to retrieve.",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updateFeeRefund",
            "description": "Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "feeId",
                    type: "String",
                    info: "ID of the application fee refunded.",
                    required: true
                },
                {
                    name: "refundId",
                    type: "String",
                    info: "ID of refund to retrieve.",
                    required: true
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to an application fee refund object. It can be useful for storing additional information about the refund in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getFeeRefundList",
            "description": "You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available by default on the application fee object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional refunds.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "appId",
                    type: "String",
                    info: "The ID of the application fee whose refunds will be retrieved.",
                    required: true
                },
                {
                    name: "endingBefore",
                    type: "String",
                    info: "A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.",
					required: false
                },
                {
                    name: "limit",
                    type: "Number",
                    info: "A limit on the number of objects to be returned. Limit can range between 1 and 100 items.",
					required: false
                },
                {
                    name: "startingAfter",
                    type: "String",
                    info: "A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.",
					required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getApplicationFee",
            "description": "Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the application fee.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "feeId",
                    type: "String",
                    info: "The identifier of the fee to be retrieved.",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getApplicationFeeList",
            "description": "Returns a list of application fees you’ve previously collected. The application fees are returned in sorted order, with the most recent fees appearing first.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained  from Stripe.",
                    required: false
                },
                {
                    name: "chargeId",
                    type: "String",
                    info: "Only return application fees for the charge specified by this charge ID.",
                    required: false
                },
                {
                    name: "endingBefore",
                    type: "String",
                    info: "A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.",
                    required: false
                },
                {
                    name: "limit",
                    type: "String",
                    info: "A limit on the number of objects to be returned. Limit can range between 1 and 100 items.",
                    required: false
                },
                {
                    name: "startingAfter",
                    type: "String",
                    info: "A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.",
					required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getCountrySpecsList",
            "description": "Lists all Country Spec objects available in the API.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "endingBefore",
                    type: "String",
                    info: "A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.",
                    required: false
                },
                {
                    name: "limit",
                    type: "String",
                    info: "A limit on the number of objects to be returned. Limit can range between 1 and 100 items.",
                    required: false
                },
                {
                    name: "startingAfter",
                    type: "String",
                    info: "A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.",
					required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getCountrySpec",
            "description": "Returns a Country Spec for a given Country code.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "country",
                    type: "String",
                    info: "An ISO country code. Available country codes can be listed with the List Country Specs endpoint.",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createBankAccount",
            "description": "When you create a new bank account, you must specify a Customer to create it on.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "accountId",
                    type: "String",
                    info: "The account ID obtained from Stripe.",
                    required: false
                },
                {
                    name: "source",
                    type: "String",
                    info: "When adding a bank account to a customer, the parameter name is source. When adding to an account, the parameter name is external_account. The value can either be a token, like the ones returned by Stripe.js, or a dictionary containing a user’s bank account details (with the options shown below).",
                    required: false
                },
                {
                    name: "externalAccount",
                    type: "String",
                    info: "When adding a bank account to a customer, the parameter name is source. When adding to an account, the parameter name is external_account. The value can either be a token, like the ones returned by Stripe.js, or a dictionary containing a user’s bank account details (with the options shown below).",
                    required: false
                },
                {
                    name: "defaultForCurrency",
                    type: "String",
                    info: "If you set this to true (or if this is the first bank account being added in this currency) this bank account will become the default bank account for its currency.",
                    required: false
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to an external account object. It can be useful for storing additional information about the external account in a structured format.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },

            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getBankAccount",
            "description": "By default, you can see the 10 most recent bank accounts stored on a Customer directly on the object, but you can also retrieve details about a specific bank account stored on the Stripe account.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "accountId",
                    type: "String",
                    info: "The account ID obtained from Stripe.",
                    required: true
                },
                {
                    name: "bankAccountId",
                    type: "String",
                    info: "The bank account ID obtained from Stripe.",
                    required: true
                },

            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updateBankAccount",
            "description": "Updates the metadata, account_holder_name, and account_holder_type of a bank account belonging to a Customer. Other bank account details are not editable by design.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "accountId",
                    type: "String",
                    info: "The account ID obtained from Stripe.",
                    required: true
                },
                {
                    name: "bankAccountId",
                    type: "String",
                    info: "The ID of the bank account to be updated.",
                    required: true
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to an external account object. It can be useful for storing additional information about the external account in a structured format.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"deleteBankAccount",
            "description": "You can delete bank accounts from a Customer.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "accountId",
                    type: "String",
                    info: "The account ID obtained from Stripe.",
                    required: true
                },
                {
                    name: "bankAccountId",
                    type: "String",
                    info: "The bank account ID obtained from Stripe.",
                    required: true
                },

            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getBankAccountList",
            "description": "You can see a list of the bank accounts belonging to a Customer. Note that the 10 most recent external accounts are always available by default on the corresponding Stripe object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional bank accounts.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "accountId",
                    type: "String",
                    info: "The account ID obtained from Stripe.",
                    required: false
                },
                {
                    name: "endingBefore",
                    type: "String",
                    info: "A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.",
                    required: false
                },
                {
                    name: "limit",
                    type: "String",
                    info: "A limit on the number of objects to be returned. Limit can range between 1 and 100 items.",
                    required: false
                },
                {
                    name: "startingAfter",
                    type: "String",
                    info: "A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.",
					required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createCard",
            "description": "When you create a new credit card, you must specify a customer or recipient to create it on.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "customerId",
                    type: "String",
                    info: "The customer ID obtained from Stripe.",
                    required: false
                },
                {
                    name: "source",
                    type: "String",
                    info: "When adding a bank account to a customer, the parameter name is source. When adding to an account, the parameter name is external_account. The value can either be a token, like the ones returned by Stripe.js, or a dictionary containing a user’s bank account details (with the options shown below).",
                    required: false
                },
                {
                    name: "externalAccount",
                    type: "String",
                    info: "When adding a bank account to a customer, the parameter name is source. When adding to an account, the parameter name is external_account. The value can either be a token, like the ones returned by Stripe.js, or a dictionary containing a user’s bank account details (with the options shown below).",
                    required: false
                },
                {
                    name: "defaultForCurrency",
                    type: "String",
                    info: "If you set this to true (or if this is the first bank account being added in this currency) this bank account will become the default bank account for its currency.",
                    required: false
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to an external account object. It can be useful for storing additional information about the external account in a structured format.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getCard",
            "description": "You can always see the 10 most recent cards directly on a customer or recipient; this method lets you retrieve details about a specific card stored on the customer or recipient.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "customerId",
                    type: "String",
                    info: "The customer ID obtained from Stripe.",
                    required: true
                },
                {
                    name: "cardId",
                    type: "String",
                    info: "The card ID obtained from Stripe.",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updateCard",
            "description": "If you need to update only some card details, like the billing address or expiration date, you can do so without having to re-enter the full card details. Stripe also works directly with card networks so that your customers can continue using your service without interruption.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "customerId",
                    type: "String",
                    info: "The customer ID obtained from Stripe.",
                    required: true
                },
                {
                    name: "cardId",
                    type: "String",
                    info: "The card ID obtained from Stripe.",
                    required: true
                },
                {
                    name: "addressCity",
                    type: "String",
                    info: "City.",
                    required: false
                },
                {
                    name: "addressCountry",
                    type: "String",
                    info: "Country.",
                    required: false
                },
                {
                    name: "addressLine1",
                    type: "String",
                    info: "Line 1.",
                    required: false
                },
                {
                    name: "addressLine2",
                    type: "String",
                    info: "Line 2.",
                    required: false
                },
                {
                    name: "addressState",
                    type: "String",
                    info: "State.",
                    required: false
                },
                {
                    name: "addressZip",
                    type: "String",
                    info: "State.",
                    required: false
                },
                {
                    name: "defaultForCurrency",
                    type: "String",
                    info: "Only applicable on accounts (not customers or recipients). If set to true, this card will become the default external account for its currency..",
                    required: false
                },
                {
                    name: "expMonth",
                    type: "String",
                    info: "Month.",
                    required: false
                },
                {
                    name: "expYear",
                    type: "String",
                    info: "Year.",
                    required: false
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to a customer object. It can be useful for storing additional information about the customer in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
                {
                    name: "name",
                    type: "String",
                    info: "Name.",
                    required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"deleteCard",
            "description": "You can delete cards from a customer or recipient.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "customerId",
                    type: "String",
                    info: "The customer ID obtained from Stripe.",
                    required: true
                },
                {
                    name: "cardId",
                    type: "String",
                    info: "The card ID obtained from Stripe.",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getCardList",
            "description": "You can see a list of the cards belonging to a customer or recipient. Note that the 10 most recent sources are always available on the customer object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional cards.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "accountId",
                    type: "String",
                    info: "The account ID obtained from Stripe.",
                    required: true
                },
                {
                    name: "endingBefore",
                    type: "String",
                    info: "A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.",
                    required: false
                },
                {
                    name: "limit",
                    type: "String",
                    info: "A limit on the number of objects to be returned. Limit can range between 1 and 100 items.",
                    required: false
                },
                {
                    name: "startingAfter",
                    type: "String",
                    info: "A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.",
					required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createReceiver",
            "description": "Creates a bitcoin reciver",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "amount",
                    type: "String",
                    info: "The account ID obtained from Stripe.",
                    required: true
                },
                {
                    name: "currency",
                    type: "String",
                    info: "Only USD currently supported",
                    required: true
                },
                {
                    name: "email",
                    type: "String",
                    info: "Email of the customerId",
					required: false
                },
                {
                    name: "description",
                    type: "String",
                    info: "The receiver’s description.",
                    required: false
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to an order object. It can be useful for storing additional information about the order in a structured format.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
                {
                    name: "refundMispayments",
                    type: "String",
                    info: "Refund Mispayments",
                    required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getReceiver",
            "description": "Retrieves a receiver",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "receiverId",
                    type: "String",
                    info: "Id of receiver to retrive.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getReceiverList",
            "description": "List all receivers",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createOrder",
            "description": "Creates a new order object.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "currency",
                    type: "String",
                    info: "3-letter ISO code representing the currency in which the order should be made. Stripe will validate that all entries in items match the currency specified here.",
                    required: true
                },
                {
                    name: "coupon",
                    type: "String",
                    info: "A coupon code that represents a discount to be applied to this order. Must be one-time duration and in same currency as the order.",
                    required: false
                },
                {
                    name: "customer",
                    type: "String",
                    info: "The ID of an existing customer to use for this order. If provided, the customer email and shipping address will be used to create the order. Subsequently, the customer will also be charged to pay the order. If email or shipping are also provided, they will override the values retrieved from the customer object.",
                    required: false
                },
                {
                    name: "email",
                    type: "String",
                    info: "The email address of the customer placing the order.",
                    required: false
                },
                {
                    name: "items",
                    type: "JSON",
                    info: "List of items constituting the order.",
                    required: false
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to an order object. It can be useful for storing additional information about the order in a structured format.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
                {
                    name: "shipping",
                    type: "JSON",
                    info: "Shipping address for the order. Required if any of the SKUs are for products that have shippable set to true.",
                    required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getOrder",
            "description": "Retrieves the details of an existing order. Supply the unique order ID from either an order creation request or the order list, and Stripe will return the corresponding order information.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "orderId",
                    type: "String",
                    info: "Id of receiver to retrive.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updateOrder",
            "description": "Updates the specific order by setting the values of the parameters passed. Any parameters not provided will be left unchanged. This request accepts only the metadata, and status as arguments.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "orderId",
                    type: "String",
                    info: "Id of order to update.",
                    required: true
                },
                {
                    name: "coupon",
                    type: "String",
                    info: "A coupon code that represents a discount to be applied to this order. Must be one-time duration and in same currency as the order.",
                    required: false
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to an order object. It can be useful for storing additional information about the order in a structured format.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
                {
                    name: "shipping",
                    type: "JSON",
                    info: "Shipping address for the order. Required if any of the SKUs are for products that have shippable set to true.",
                    required: false
                },
                {
                    name: "status",
                    type: "Select",
                    options: ["created","paid","canceled","fulfilled","returned"],
                    info: "Current order status. One of `created`, `paid`, `canceled`, `fulfilled`, or `returned`.",
                    required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"payOrder",
            "description": "Pay an order by providing a `source` to create a payment.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "orderId",
                    type: "String",
                    info: "The ID of an order to pay.",
                    required: true
                },
                {
                    name: "customer",
                    type: "String",
                    info: "The ID of an existing customer that will be charged in this request.",
                    required: false
                },
                {
                    name: "source",
                    type: "String",
                    info: "A payment source to be charged, such as a credit card. If you also pass a customer ID, the source must be the ID of a source belonging to the customer. Otherwise, if you do not pass a customer ID, the source you provide must either be a token, like the ones returned by Stripe.js, or a object containing a user's credit card details, with the options described below. Although not all information is required, the extra info helps prevent fraud.",
					required: false
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to an order object. It can be useful for storing additional information about the order in a structured format.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
                {
                    name: "email",
                    type: "String",
                    info: "The email address of the customer placing the order. If a customer is specified, that customer's email address will be used.",
                    required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getOrderList",
            "description": "Returns a list of your orders. The orders are returned sorted by creation date, with the most recently created orders appearing first.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "created",
                    type: "String",
                    info: "A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options:",
                    required: false
                },
                {
                    name: "customer",
                    type: "String",
                    info: "Only return orders for the given customer.",
                    required: false
                },
                {
                    name: "ids",
                    type: "String",
                    info: "Only return orders with the given IDs.",
                    required: false
                },
                {
                    name: "status",
                    type: "Select",
                    options: ["created","paid","fulfilled","refunded"],
                    info: "Only return orders that have the given status. One of `created`, `paid`, `fulfilled`, or `refunded`.",
                    required: false
                },
                {
                    name: "statusTransitions",
                    type: "String",
                    info: "Filter orders based on when they were paid, fulfilled, canceled, or returned.",
                    required: false
                },
                {
                    name: "upstreamIds",
                    type: "String",
                    info: "Only return orders with the given upstream order IDs.",
                    required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"returnOrder",
            "description": "Return all or part of an order. The order must have a status of paid or fulfilled before it can be returned. Once all items have been returned, the order will become canceled or returned depending on which status the order started in.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "orderId",
                    type: "String",
                    info: "Order id.",
					required: false
                },
                {
                    name: "items",
                    type: "JSON",
                    info: "List of items to return.",
					required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getOrderReturn",
            "description": "Retrieves the details of an existing order return. Supply the unique order ID from either an order return creation request or the order return list, and Stripe will return the corresponding order information.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "orderId",
                    type: "String",
                    info: "The identifier of the order return to be retrieved.",
					required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getOrderReturnList",
            "description": "Returns a list of your order returns. The returns are returned sorted by creation date, with the most recently created return appearing first.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "created",
                    type: "String",
                    info: "A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options:",
					required: false
                },
                {
                    name: "order",
                    type: "String",
                    info: "The order to retrieve returns for.",
                    required: false
                },

            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createProduct",
            "description": "Creates a new product object.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "id",
                    type: "String",
                    info: "The identifier for the product. Must be unique. If not provided, an identifier will be randomly generated.",
                    required: false
                },
                {
                    name: "name",
                    type: "String",
                    info: "The product’s name, meant to be displayable to the customer.",
                    required: true
                },
                {
                    name: "active",
                    type: "String",
                    info: "Whether or not the product is currently available for purchase. Defaults to `true`.",
                    required: false
                },
                {
                    name: "attributes",
                    type: "List",
                    info: 'A list of up to 5 alphanumeric attributes that each SKU can provide values for (e.g. `["color", "size"]`).',
                    required: false,
                    "structure": {
                        "name": "attribute",
                        "type": "String",
                        "info": "Attribute"
                    }
                },
                {
                    name: "caption",
                    type: "String",
                    info: "A short one-line description of the product, meant to be displayable to the customer.",
                    required: false
                },
                {
                    name: "deactivateOn",
                    type: "List",
                    info: "An array of Connect application names or identifiers that should not be able to order the SKUs for this product.",
                    required: false,
                    "structure": {
                        "name": "appName",
                        "type": "String",
                        "info": "Application name or identifiers that should not be able to order the SKUs for this product."
                    }
                },
                {
                    name: "description",
                    type: "String",
                    info: "The product’s description, meant to be displayable to the customer.",
                    required: false
                },
                {
                    name: "images",
                    type: "List",
                    info: "A list of up to 8 URLs of images for this product, meant to be displayable to the customer.",
                    required: false,
                    "structure": {
                        "name": "imgUrl",
                        "type": "String",
                        "info": "Image for this product."
                    }
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to a product object. It can be useful for storing additional information about the product in a structured format.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
                {
                    name: "packageDimensions",
                    type: "String",
                    info: "The dimensions of this product for shipping purposes. A SKU associated with this product can override this value by having its own package_dimensions.",
                    required: false
                },
                {
                    name: "shippable",
                    type: "String",
                    info: "Whether this product is shipped (i.e. physical goods). Defaults to true.",
                    required: false
                },
                {
                    name: "url",
                    type: "String",
                    info: "A URL of a publicly-accessible webpage for this product.",
                    required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getProduct",
            "description": "Retrieves the details of an existing product. Supply the unique product ID from either a product creation request or the product list, and Stripe will return the corresponding product information.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "productId",
                    type: "String",
                    info: "The identifier of the product to be retrieved.",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updateProduct",
            "description": "Updates the specific product by setting the values of the parameters passed. Any parameters not provided will be left unchanged.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "productId",
                    type: "String",
                    info: "The id of product to update.",
                    required: true
                },
                {
                    name: "name",
                    type: "String",
                    info: "The product’s name, meant to be displayable to the customer.",
                    required: false
                },
                {
                    name: "active",
                    type: "String",
                    info: "Whether or not the product is currently available for purchase. Defaults to `true`.",
                    required: false
                },
                {
                    name: "attributes",
                    type: "List",
                    info: 'A list of up to 5 alphanumeric attributes that each SKU can provide values for (e.g. `["color", "size"]`).',
                    required: false,
                    "structure": {
                        "name": "attribute",
                        "type": "String",
                        "info": "Attribute"
                    }
                },
                {
                    name: "caption",
                    type: "String",
                    info: "A short one-line description of the product, meant to be displayable to the customer.",
                    required: false
                },
                {
                    name: "deactivateOn",
                    type: "List",
                    info: "An array of Connect application names or identifiers that should not be able to order the SKUs for this product.",
                    required: false,
                    "structure": {
                        "name": "appName",
                        "type": "String",
                        "info": "Application name or identifiers that should not be able to order the SKUs for this product."
                    }
                },
                {
                    name: "description",
                    type: "String",
                    info: "The product’s description, meant to be displayable to the customer.",
                    required: false
                },
                {
                    name: "images",
                    type: "List",
                    info: "A list of up to 8 URLs of images for this product, meant to be displayable to the customer.",
                    required: false,
                    "structure": {
                        "name": "imgUrl",
                        "type": "String",
                        "info": "Image for this product."
                    }
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to a product object. It can be useful for storing additional information about the product in a structured format.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
                {
                    name: "packageDimensions",
                    type: "String",
                    info: "The dimensions of this product for shipping purposes. A SKU associated with this product can override this value by having its own package_dimensions.",
                    required: false
                },
                {
                    name: "shippable",
                    type: "String",
                    info: "Whether this product is shipped (i.e. physical goods). Defaults to true.",
                    required: false
                },
                {
                    name: "url",
                    type: "String",
                    info: "A URL of a publicly-accessible webpage for this product.",
                    required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getProductList",
            "description": "Returns a list of your products. The products are returned sorted by creation date, with the most recently created products appearing first.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "ids",
                    type: "String",
                    info: "Only return products with the given IDs.",
                    required: false
                },
                {
                    name: "shippable",
                    type: "String",
                    info: "Only return products that can be shipped (i.e., physical, not digital products).",
                    required: false
                },
                {
                    name: "url",
                    type: "String",
                    info: "Only return products with the given url.",
                    required: false
                },

            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"deleteProduct",
            "description": "Delete a product. Deleting a product is only possible if it has no SKUs associated with it.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "productId",
                    type: "String",
                    info: "The ID of the product to delete.",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createSKU",
            "description": "Creates a new SKU associated with a product.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "id",
                    type: "String",
                    info: "The identifier for the SKU. Must be unique. If not provided, an identifier will be randomly generated.",
                    required: false
                },
                {
                    name: "currency",
                    type: "String",
                    info: "3-letter ISO code for currency.",
                    required: true
                },
                {
                    name: "inventory",
                    type: "JSON",
                    info: "Description of the SKU’s inventory. Example: {\"type\": \"finite\", \"quantity\": 500, \"value\": \"in_stock\"}",
                    required: true
                },
                {
                    name: "price",
                    type: "Number",
                    info: "The cost of the item as a nonnegative integer in the smallest currency unit (that is, 100 cents to charge $1.00, or 100 to charge ¥100, Japanese Yen being a 0-decimal currency).",
                    required: true
                },
                {
                    name: "product",
                    type: "String",
                    info: "The ID of the product this SKU is associated with.",
                    required: true
                },
                {
                    name: "active",
                    type: "String",
                    info: "Whether or not the SKU is available for purchase. Default to true.",
                    required: false
                },
                {
                    name: "attributes",
                    type: "List",
                    info: 'A dictionary of attributes and values for the attributes defined by the product. If, for example, a product’s attributes are ["size", "gender"], a valid SKU has the following dictionary of attributes: {"size": "Medium", "gender": "Unisex"}.',
                    required: false,
                    "structure": {
                        "name": "attribute",
                        "type": "String",
                        "info": "Attribute"
                    }
                },
                {
                    name: "image",
                    type: "String",
                    info: "The URL of an image for this SKU, meant to be displayable to the customer.",
                    required: false
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to a SKU object. It can be useful for storing additional information about the SKU in a structured format.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
                {
                    name: "packageDimensions",
                    type: "JSON",
                    info: "The dimensions of this SKU for shipping purposes.",
                    required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getSKU",
            "description": "Retrieves the details of an existing SKU. Supply the unique SKU identifier from either a SKU creation request or from the product, and Stripe will return the corresponding SKU information.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "skuId",
                    type: "String",
                    info: "The identifier of the SKU to be retrieved.",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updateSKU",
            "description": "Updates the specific SKU by setting the values of the parameters passed. Any parameters not provided will be left unchanged.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "skuId",
                    type: "String",
                    info: "The identifier of the SKU to be updated.",
                    required: true
                },
                {
                    name: "currency",
                    type: "String",
                    info: "3-letter ISO code for currency.",
                    required: false
                },
                {
                    name: "inventory",
                    type: "String",
                    info: "Description of the SKU’s inventory.",
                    required: false
                },
                {
                    name: "price",
                    type: "String",
                    info: "The cost of the item as a nonnegative integer in the smallest currency unit (that is, 100 cents to charge $1.00, or 100 to charge ¥100, Japanese Yen being a 0-decimal currency).",
                    required: false
                },
                {
                    name: "product",
                    type: "String",
                    info: "The ID of the product this SKU is associated with.",
                    required: false
                },
                {
                    name: "active",
                    type: "String",
                    info: "Whether or not the SKU is available for purchase. Default to true.",
                    required: false
                },
                {
                    name: "attributes",
                    type: "List",
                    info: 'A dictionary of attributes and values for the attributes defined by the product. If, for example, a product’s attributes are ["size", "gender"], a valid SKU has the following dictionary of attributes: {"size": "Medium", "gender": "Unisex"}.',
                    required: false,
                    "structure": {
                        "name": "attribute",
                        "type": "String",
                        "info": "Attribute"
                    }
                },
                {
                    name: "image",
                    type: "String",
                    info: "The URL of an image for this SKU, meant to be displayable to the customer.",
                    required: false
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to a SKU object. It can be useful for storing additional information about the SKU in a structured format.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
                {
                    name: "packageDimensions",
                    type: "JSON",
                    info: "The dimensions of this SKU for shipping purposes.",
                    required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getSKUList",
            "description": "Returns a list of your SKUs. The SKUs are returned sorted by creation date, with the most recently created SKUs appearing first.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "attributes",
                    type: "List",
                    info: "",
                    required: false,
                    "structure": {
                        "name": "attribute",
                        "type": "String",
                        "info": "Attribute"
                    }
                },
                {
                    name: "ids",
                    type: "String",
                    info: "Only return SKUs with the given IDs.",
                    required: false
                },
                {
                    name: "productId",
                    type: "String",
                    info: "The ID of the product whose SKUs will be retrieved.",
                    required: false
                },


            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"deleteSKU",
            "description": "Delete a SKU. Deleting a SKU is only possible until it has been used in an order.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "skuId",
                    type: "String",
                    info: "The identifier of the SKU to be deleted.",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createCoupon",
            "description": "You can create coupons easily via the coupon management page of the Stripe dashboard. Coupon creation is also accessible via the API if you need to create coupons on the fly.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "couponId",
                    type: "String",
                    info: "Unique string of your choice that will be used to identify this coupon when applying it to a customer. This is often a specific code you’ll give to your customer to use when signing up (e.g. FALL25OFF). If you don’t want to specify a particular code, you can leave the ID blank and we’ll generate a random code for you.",
                    required: false
                },
                {
                    name: "duration",
                    type: "String",
                    info: "Specifies how long the discount will be in effect. Can be `forever`, `once`, or `repeating`.",
                    required: true
                },
                {
                    name: "amountOff",
                    type: "String",
                    info: "A positive integer representing the amount to subtract from an invoice total (required if percent_off is not passed)",
                    required: false
                },
                {
                    name: "currency",
                    type: "String",
                    info: "Currency of the amount_off parameter (required if amount_off is passed)",
                    required: false
                },
                {
                    name: "durationInMonths",
                    type: "String",
                    info: "Required only if duration is repeating, in which case it must be a positive integer that specifies the number of months the discount will be in effect.",
                    required: false
                },
                {
                    name: "maxRedemptions",
                    type: "String",
                    info: "A positive integer specifying the number of times the coupon can be redeemed before it’s no longer valid. For example, you might have a 50% off coupon that the first 20 readers of your blog can use.",
                    required: false
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to a coupon object. It can be useful for storing additional information about the coupon in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
                {
                    name: "percentOff",
                    type: "String",
                    info: "A positive integer between 1 and 100 that represents the discount the coupon will apply (required if amount_off is not passed)",
                    required: false
                },
                {
                    name: "redeemBy",
                    type: "String",
                    info: "Unix timestamp specifying the last time at which the coupon can be redeemed. After the redeem_by date, the coupon can no longer be applied to new customers.",
                    required: false
                },

            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getCoupon",
            "description": "Retrieves the coupon with the given ID.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "couponId",
                    type: "String",
                    info: "Unique string of your choice that will be used to identify this coupon when applying it to a customer. This is often a specific code you’ll give to your customer to use when signing up (e.g. FALL25OFF). If you don’t want to specify a particular code, you can leave the ID blank and we’ll generate a random code for you.",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updateCoupon",
            "description": "Updates the metadata of a coupon. Other coupon details (currency, duration, amount_off) are, by design, not editable.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "couponId",
                    type: "String",
                    info: "Unique string of your choice that will be used to identify this coupon when applying it to a customer. This is often a specific code you’ll give to your customer to use when signing up (e.g. FALL25OFF). If you don’t want to specify a particular code, you can leave the ID blank and we’ll generate a random code for you.",
                    required: true
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to a coupon object. It can be useful for storing additional information about the coupon in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"deleteCoupon",
            "description": "You can delete coupons via the coupon management page of the Stripe dashboard. However, deleting a coupon does not affect any customers who have already applied the coupon; it means that new customers can’t redeem the coupon. You can also delete coupons via the API.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "couponId",
                    type: "String",
                    info: "Unique string of your choice that will be used to identify this coupon when applying it to a customer. This is often a specific code you’ll give to your customer to use when signing up (e.g. FALL25OFF). If you don’t want to specify a particular code, you can leave the ID blank and we’ll generate a random code for you.",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getCouponList",
            "description": "Returns a list of your coupons.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"deleteCustomerDiscount",
            "description": "Removes the currently applied discount on a customer.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "customerId",
                    type: "String",
                    info: "Id of customer to delete.",
					required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"deleteSubscriptionDiscount",
            "description": "Removes the currently applied discount on a subscription.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "subscriptionId",
                    type: "String",
                    info: "Id of subscribtion to delete.",
					required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createInvoice",
            "description": "If you need to invoice your customer outside the regular billing cycle, you can create an invoice that pulls in all pending invoice items, including prorations. The customer’s billing cycle and regular subscription won’t be affected.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "customer",
                    type: "String",
                    info: "Customer Id",
					required: false
                },
                {
                    name: "applicationFee",
                    type: "String",
                    info: "A fee in cents that will be applied to the invoice and transferred to the application owner’s Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. ",
					required: false
                },
                {
                    name: "description",
                    type: "String",
                    info: "An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the description of the charge(s) that they are describing.",
                    required: false
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to a customer object. It can be useful for storing additional information about the customer in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
                {
                    name: "statementDescriptor",
                    type: "String",
                    info: "Extra information about a charge for the customer’s credit card statement.",
					required: false
                },
                {
                    name: "subscription",
                    type: "String",
                    info: "The ID of the subscription to invoice. If not set, the created invoice will include all pending invoice items for the customer. If set, the created invoice will exclude pending invoice items that pertain to other subscriptions.",
					required: false
                },
                {
                    name: "taxPercent",
                    type: "String",
                    info: "The percent tax rate applied to the invoice, represented as a decimal number.",
					required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getInvoice",
            "description": "Retrieves the invoice with the given ID.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "invoiceId",
                    type: "String",
                    info: "Invoice id.",
					required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getInvoiceLineItems",
            "description": "When retrieving an invoice, you'll get a lines property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "invoice",
                    type: "String",
                    info: "Invoice id.",
					required: false
                },
                {
                    name: "coupon",
                    type: "String",
                    info: "Counpon id.",
					required: false
                },
                {
                    name: "customer",
                    type: "String",
                    info: "In the case of upcoming invoices, the customer of the upcoming invoice is required. In other cases it is ignored.",
					required: false
                },
                {
                    name: "subscription",
                    type: "String",
                    info: "In the case of upcoming invoices, the subscription of the upcoming invoice is optional. In other cases it is ignored.",
					required: false
                },
                {
                    name: "subscriptionPlan",
                    type: "String",
                    info: "Subscription Plan",
					required: false
                },
                {
                    name: "subscriptionProrate",
                    type: "String",
                    info: "Subscription Prorate",
					required: false
                },
                {
                    name: "subscriptionProrationDate",
                    type: "String",
                    info: "Subscription Proration Date",
					required: false
                },
                {
                    name: "subscriptionQuantity",
                    type: "String",
                    info: "Subscription Quantity",
					required: false
                },
                {
                    name: "subscriptionTrialEnd",
                    type: "String",
                    info: "Subscription Trial End",
					required: false
                },

            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updateInvoice",
            "description": "Until an invoice is paid, it is marked as open (closed=false). If you'd like to stop Stripe from automatically attempting payment on an invoice or would simply like to close the invoice out as no longer owed by the customer, you can update the closed parameter.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "invoiceId",
                    type: "String",
                    info: "Invoice id.",
					required: false
                },
                {
                    name: "applicationFee",
                    type: "String",
                    info: "A fee in cents that will be applied to the invoice and transferred to the application owner’s Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. ",
					required: false
                },
                {
                    name: "description",
                    type: "String",
                    info: "An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the description of the charge(s) that they are describing.",
                    required: false

                },
                {
                   name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to a customer object. It can be useful for storing additional information about the customer in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                    required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
                {
                    name: "statementDescriptor",
                    type: "String",
                    info: "Extra information about a charge for the customer’s credit card statement.",
					required: false
                },
                {
                    name: "subscription",
                    type: "String",
                    info: "The ID of the subscription to invoice. If not set, the created invoice will include all pending invoice items for the customer. If set, the created invoice will exclude pending invoice items that pertain to other subscriptions.",
					required: false
                },
                {
                    name: "forgiven",
                    type: "String",
                    info: "Boolean representing whether an invoice is forgiven or not. To forgive an invoice, pass true. Forgiving an invoice instructs us to update the subscription status as if the invoice were successfully paid. Once an invoice has been forgiven, it cannot be unforgiven or reopened.",
					required: false
                },
                {
                    name: "closed",
                    type: "String",
                    info: "Boolean representing whether an invoice is closed or not. To close an invoice, pass true.",
					required: false
                },
                {
                    name: "taxPercent",
                    type: "String",
                    info: "The percent tax rate applied to the invoice, represented as a decimal number.",
					required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"payInvoice",
            "description": "Stripe automatically creates and then attempts to pay invoices for customers on subscriptions. We’ll also retry unpaid invoices according to your retry settings. However, if you’d like to attempt to collect payment on an invoice out of the normal retry schedule or for some other reason, you can do so.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "invoiceId",
                    type: "String",
                    info: "Invoice id.",
					required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getInvoiceList",
            "description": "You can list all invoices, or list the invoices for a specific customer. The invoices are returned sorted by creation date, with the most recently created invoices appearing first.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "customer",
                    type: "String",
                    info: "The identifier of the customer whose invoices to return. If none is provided, all invoices will be returned.",
					required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createInvoiceItem",
            "description": "Adds an arbitrary charge or credit to the customer’s upcoming invoice.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "amount",
                    type: "Number",
                    info: "The integer amount in cents of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer’s account, pass a negative amount.",
                    required: true
                },
                {
                    name: "currency",
                    type: "String",
                    info: "3-letter ISO code for currency.",
                    required: true
                },
                {
                    name: "customer",
                    type: "String",
                    info: "The ID of the customer who will be billed when this invoice item is billed.",
                    required: true
                },
                {
                    name: "description",
                    type: "String",
                    info: "An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                    required: false
                },
                {
                    name: "discountable",
                    type: "String",
                    info: "Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for all other invoice items.",
                    required: false
                },
                {
                    name: "invoice",
                    type: "String",
                    info: "The ID of an existing invoice to add this invoice item to. When left blank, the invoice item will be added to the next upcoming scheduled invoice. Use this when adding invoice items in response to an invoice.created webhook. You cannot add an invoice item to an invoice that has already been paid, attempted or closed.",
                    required: false
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to an invoice item object. It can be useful for storing additional information about the invoice item in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
					required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
                {
                    name: "subscription",
                    type: "String",
                    info: "The ID of a subscription to add this invoice item to. When left blank, the invoice item will be be added to the next upcoming scheduled invoice. When set, scheduled invoices for subscriptions other than the specified subscription will ignore the invoice item. Use this when you want to express that an invoice item has been accrued within the context of a particular subscription.",
					required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getInvoiceItem",
            "description": "Retrieves the invoice item with the given ID.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "invoiceitem",
                    type: "String",
                    info: "The ID of the desired invoice item.",
					required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updateInvoiceItem",
            "description": "Updates the amount or description of an invoice item on an upcoming invoice. Updating an invoice item is only possible before the invoice it's attached to is closed.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "itemId",
                    type: "String",
                    info: "Item id.",
                    required: true
                },
                {
                    name: "amount",
                    type: "Number",
                    info: "The integer amount in cents of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer's account, pass a negative amount.",
					required: false
                },
                {
                    name: "description",
                    type: "String",
                    info: "An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
					required: false
                },
                {
                    name: "discountable",
                    type: "String",
                    info: "Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for all other invoice items. Cannot be set to true for prorations.",
					required: false
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to an invoice item object. It can be useful for storing additional information about the invoice item in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.",
					required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"deleteInvoiceItem",
            "description": "Removes an invoice item from the upcoming invoice. Removing an invoice item is only possible before the invoice it’s attached to is closed.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "invoiceitem",
                    type: "String",
                    info: "The ID of the desired invoice item.",
					required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getInvoiceItemsList",
            "description": "Returns a list of your invoice items. Invoice items are returned sorted by creation date, with the most recently created invoice items appearing first.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "customer",
                    type: "String",
                    info: "The identifier of the customer whose invoice items to return. If none is provided, all invoice items will be returned.",
					required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createPlan",
            "description": "Returns a list of your invoice items. Invoice items are returned sorted by creation date, with the most recently created invoice items appearing first.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "planId",
                    type: "String",
                    info: "Unique string of your choice that will be used to identify this plan when subscribing a customer. This could be an identifier like “gold” or a primary key from your own database.",
					required: false
                },
                {
                    name: "amount",
                    type: "String",
                    info: "A positive integer in cents (or 0 for a free plan) representing how much to charge (on a recurring basis).",
					required: false
                },
                {
                    name: "currency",
                    type: "String",
                    info: "3-letter ISO code for currency.",
					required: false
                },
                {
                    name: "interval",
                    type: "String",
                    info: "Specifies billing frequency. Either day, week, month or year.",
					required: false
                },
                {
                    name: "name",
                    type: "String",
                    info: "Name of the plan, to be displayed on invoices and in the web interface.",
					required: false
                },
                {
                    name: "intervalCount",
                    type: "String",
                    info: "The number of intervals between each subscription billing. For example, interval=month and interval_count=3 bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).",
					required: false
                },
                {
                   name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to a plan object. It can be useful for storing additional information about the plan in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
					required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
                {
                    name: "statementDescriptor",
                    type: "String",
                    info: `An arbitrary string to be displayed on your customer’s credit card statement. This may be up to 22 characters. As an example, if your website is RunClub and the item you’re charging for is your Silver Plan, you may want to specify a statement_descriptor of RunClub Silver Plan. The statement description may not include <>"' characters, and will appear on your customer’s statement in capital letters. Non-ASCII characters are automatically stripped. While most banks display this information consistently, some may display it incorrectly or not at all.`
                },
                {
                    name: "trialPeriodDays",
                    type: "String",
                    info: "Specifies a trial period in (an integer number of) days. If you include a trial period, the customer won’t be billed for the first time until the trial period ends. If the customer cancels before the trial period is over, she’ll never be billed at all.",
					required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getPlan",
            "description": "Retrieves the plan with the given ID.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "planId",
                    type: "String",
                    info: "The ID of the desired plan.",
					required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updatePlan",
            "description": "Updates the name of a plan. Other plan details (price, interval, etc.) are, by design, not editable.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "planId",
                    type: "String",
                    info: "The identifier of the plan to be updated.",
					required: false
                },
                {
                    name: "name",
                    type: "String",
                    info: "Name of the plan, to be displayed on invoices and in the web interface.",
					required: false
                },
                {
                   name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to a plan object. It can be useful for storing additional information about the plan in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
					required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
                {
                    name: "statementDescriptor",
                    type: "String",
                    info: `An arbitrary string to be displayed on your customer’s credit card statement. This may be up to 22 characters. As an example, if your website is RunClub and the item you’re charging for is your Silver Plan, you may want to specify a statement_descriptor of RunClub Silver Plan. The statement description may not include <>"' characters, and will appear on your customer’s statement in capital letters. Non-ASCII characters are automatically stripped. While most banks display this information consistently, some may display it incorrectly or not at all.`
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"deletePlan",
            "description": "You can delete plans via the plan management page of the Stripe dashboard. However, deleting a plan does not affect any current subscribers to the plan; it merely means that new subscribers can’t be added to that plan. You can also delete plans via the API.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "planId",
                    type: "String",
                    info: "The identifier of the plan to be deleted.",
					required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getPlanList",
            "description": "",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createSubscription",
            "description": "Creates a new subscription on an existing customer.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "applicationFeePercent",
                    type: "String",
                    info: "A positive decimal (with at most four decimal places) between 1 and 100. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner’s Stripe account. The request must be made with an OAuth key in order to set an application fee percentage.",
					required: false
                },
                {
                    name: "coupon",
                    type: "String",
                    info: "The code of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that particular subscription.",
					required: false
                },
                {
                    name: "customer",
                    type: "String",
                    info: "The identifier of the customer to subscribe.",
					required: false
                },
                {
                    name: "plan",
                    type: "String",
                    info: "The identifier of the plan to subscribe the customer to.",
					required: false
                },
                {
                    name: "source",
                    type: "JSON",
                    info: "The source can either be a token, like the ones returned by our Stripe.js, or a object containing a user's credit card details (with the options shown below). You must provide a source if the customer does not already have a valid source attached, and you are subscribing the customer for a plan that is not free. Passing source will create a new source object, make it the customer default source, and delete the old customer default if one exists. If you want to add an additional source to use with subscriptions, instead use the card creation API to add the card and then the customer update API to set it as the default. Whenever you attach a card to a customer, Stripe will automatically validate the card.",
					required: false
                },
                {
                    name: "quantity",
                    type: "Number",
                    info: "The quantity you'd like to apply to the subscription you're creating. For example, if your plan is $10/user/month, and your customer has 5 users, you could pass 5 as the quantity to have the customer charged $50 (5 x $10) monthly. If you update a subscription but don't change the plan ID (e.g. changing only the trial_end), the subscription will inherit the old subscription's quantity attribute unless you pass a new quantity parameter. If you update a subscription and change the plan ID, the new subscription will not inherit the quantity attribute and will default to 1 unless you pass a quantity parameter.",
					required: false
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to a subscription object. It can be useful for storing additional information about the subscription in a structured format.",
					required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
                {
                    name: "taxPercent",
                    type: "String",
                    info: "A positive decimal (with at most four decimal places) between 1 and 100. This represents the percentage of the subscription invoice subtotal that will be calculated and added as tax to the final amount each billing period. For example, a plan which charges $10/month with a tax_percent of 20.0 will charge $12 per invoice.",
					required: false
                },
                {
                    name: "trialEnd",
                    type: "String",
                    info: "Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. If set, trial_end will override the default trial period of the plan the customer is being subscribed to. The special value now can be provided to end the customer's trial immediately.",
					required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getSubscription",
            "description": "Retrieves the subscription with the given ID.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "subscriptionId",
                    type: "String",
                    info: "ID of subscription to retrieve.",
					required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updateSubscription",
            "description": "Updates an existing subscription to match the specified parameters. When changing plans or quantities, we will optionally prorate the price we charge next month to make up for any price changes. To preview how the proration will be calculated, use the upcoming invoice endpoint.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "subscriptionId",
                    type: "String",
                    info: "ID of subscription to updated.",
					required: false
                },
                {
                    name: "applicationFeePercent",
                    type: "String",
                    info: "A positive decimal (with at most four decimal places) between 1 and 100. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner’s Stripe account. The request must be made with an OAuth key in order to set an application fee percentage.",
					required: false
                },
                {
                    name: "coupon",
                    type: "String",
                    info: "The code of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that particular subscription.",
					required: false
                },
                {
                    name: "customer",
                    type: "String",
                    info: "The identifier of the customer to subscribe.",
					required: false
                },
                {
                    name: "plan",
                    type: "String",
                    info: "The identifier of the plan to subscribe the customer to.",
					required: false
                },
                {
                    name: "source",
                    type: "JSON",
                    info: "The source can either be a token, like the ones returned by our Stripe.js, or a object containing a user's credit card details (with the options shown below). You must provide a source if the customer does not already have a valid source attached, and you are subscribing the customer for a plan that is not free. Passing source will create a new source object, make it the customer default source, and delete the old customer default if one exists. If you want to add an additional source to use with subscriptions, instead use the card creation API to add the card and then the customer update API to set it as the default. Whenever you attach a card to a customer, Stripe will automatically validate the card.",
					required: false
                },
                {
                    name: "quantity",
                    type: "Number",
                    info: "The quantity you'd like to apply to the subscription you're creating. For example, if your plan is $10/user/month, and your customer has 5 users, you could pass 5 as the quantity to have the customer charged $50 (5 x $10) monthly. If you update a subscription but don't change the plan ID (e.g. changing only the trial_end), the subscription will inherit the old subscription's quantity attribute unless you pass a new quantity parameter. If you update a subscription and change the plan ID, the new subscription will not inherit the quantity attribute and will default to 1 unless you pass a quantity parameter.",
					required: false
                },
                {
                    name: "metadata",
                    type: "Array",
                    info: "A set of key/value pairs that you can attach to a subscription object. It can be useful for storing additional information about the subscription in a structured format.",
					required: false,
                    "structure": [
                        {
                            "name": "keyName",
                            "type": "String",
                            "info": "Custom key",
                            "required": true
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "info": "Value",
                            "required": true
                        }
                    ]
                },
                {
                    name: "taxPercent",
                    type: "String",
                    info: "A positive decimal (with at most four decimal places) between 1 and 100. This represents the percentage of the subscription invoice subtotal that will be calculated and added as tax to the final amount each billing period. For example, a plan which charges $10/month with a tax_percent of 20.0 will charge $12 per invoice.",
					required: false
                },
                {
                    name: "trialEnd",
                    type: "String",
                    info: "Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. If set, trial_end will override the default trial period of the plan the customer is being subscribed to. The special value now can be provided to end the customer's trial immediately.",
					required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"cancelSubscription",
            "description": "Cancels a customer's subscription. If you set the at_period_end parameter to true, the subscription will remain active until the end of the period, at which point it will be canceled and not renewed.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "subscriptionId",
                    type: "String",
                    info: "ID of subscription to retrieve.",
					required: false
                },
                {
                    name: "atPeriodEnd",
                    type: "String",
                    info: "A flag that if set to true will delay the cancellation of the subscription until the end of the current period.",
					required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getSubscriptionList",
            "description": "By default, returns a list of subscriptions that have not been canceled. In order to list canceled subscriptions, specify `status=canceled`.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                    required: true
                },
                {
                    name: "subscriptionId",
                    type: "String",
                    info: "ID of subscription to retrieve.",
					required: false
                },
                {
                    name: "customer",
                    type: "String",
                    info: "The ID of the customer whose subscriptions will be retrieved",
					required: false
                },
                {
                    name: "plan",
                    type: "String",
                    info: "The ID of the plan whose subscriptions will be retrieved",
					required: false
                },
                {
                    name: "status",
                    type: "Select",
                    options: ["trialing","active","past_due","unpaid","canceled","all"],
                    info: "The status of the subscriptions to retrieve. One of: trialing, active, past_due, unpaid, canceled, or all. Passing in a value of canceled will return all canceled subscriptions, including those belonging to deleted customers. Passing in a value of all will return subscriptions of all statuses.",
					required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }]
     })
};
