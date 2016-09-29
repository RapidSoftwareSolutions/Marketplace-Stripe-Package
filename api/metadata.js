module.exports.do = function(req, res){
    res.status(200).send({
        'package': 'Stripe',
        "tagline": "Stripe API Package",
        "description": "This blocks allows you to translates a sting of text from one language to another",
        'image': 'http://seeklogo.com/images/S/stripe-logo-4039DEE4FE-seeklogo.com.png',
        'repo': 'https://github.com/RapidSoftwareSolutions/marketplace-stripe-package',
        'accounts': {
            'domain': 'stripe.com',
            'credentials': [
                'secretKey',
                'pubKey'
            ]
        },
        'blocks': [{
            "name":"getAccountBalance",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "currency",
                    type: "String",
                    info: "3-letter ISO code for currency.",
                },
                {
                    name: "startingAfter",
                    type: "String",
                    info: "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.",
                },
                {
                    name: "limit",
                    type: "Number",
                    info: "A limit on the number of objects to be returned. Limit can range between 1 and 100 items.",
                },
                {
                    name: "type",
                    type: "String",
                    info: "Only returns transactions of the given type. One of: `charge`, `refund`, `adjustment`, `application_fee`, `application_fee_refund`, `transfer`, or `transfer_failure`",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "amount",
                    type: "String",
                    info: "A positive integer in the smallest currency unit (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a 0-decimal currency) representing how much to charge the card. The minimum amount is $0.50 US or equivalent in charge currency.",
                },
                {
                    name: "currency",
                    type: "String",
                    info: "3-letter ISO code for currency.",
                },
                {
                    name: "capture",
                    type: "String", // Boolean
                    info: "Whether or not to immediately capture the charge. When false, the charge issues an authorization (or pre-authorization), and will need to be captured later. Uncaptured charges expire in 7 days. For more information, see authorizing charges and settling later.",
                },
                {
                    name: "description",
                    type: "String",
                    info: "An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the description of the charge(s) that they are describing.",
                },
                {
                    name: "receiptEmail",
                    type: "String",
                    info: "The email address to send this charge's receipt to. The receipt will not be sent until the charge is paid. If this charge is for a customer, the email address specified here will override the customer's email address. Receipts will not be sent for test mode charges. If `receipt_email` is specified for a charge in live mode, a receipt will be sent regardless of your email settings.",
                },
                {
                    name: "customer",
                    type: "String",
                    info: "The ID of an existing customer that will be charged in this request.",
                },
                {
                    name: "source",
                    type: "String",
                    info: "A payment source to be charged, such as a credit card. If you also pass a customer ID, the source must be the ID of a source belonging to the customer. Otherwise, if you do not pass a customer ID, the source you provide must either be a token, like the ones returned by Stripe.js, or a object containing a user's credit card details, with the options described below. Although not all information is required, the extra info helps prevent fraud.child attributes",
                },
                {
                    name: "statementDescriptor",
                    type: "String",
                    info: 'An arbitrary string to be displayed on your customer`s credit card statement. This may be up to 22 characters. As an example, if your website is RunClub and the item you`re charging for is a race ticket, you may want to specify a statement_descriptor of RunClub 5K race ticket. The statement description may not include <> characters, and will appear on your customer`s statement in capital letters. Non-ASCII characters are automatically stripped. While most banks display this information consistently, some may display it incorrectly or not at all.'
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "source",
                    type: "String",
                    info: "The source can either be a token, like the ones returned by our Stripe.js, or a dictionary containing a user’s credit card details (with the options shown below).child arguments",
                },
                {
                    name: "accountBalance",
                    type: "String",
                    info: "An integer amount in cents that is the starting account balance for your customer. A negative amount represents a credit that will be used before attempting any charges to the customer’s card; a positive amount will be added to the next invoice.",
                },
                {
                    name: "businessVatId",
                    type: "String",
                    info: "The customer’s VAT identification number. If you are using Relay, this field gets passed to tax provider you are using for your orders. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                },
                {
                    name: "coupon",
                    type: "String",
                    info: "If you provide a coupon code, the customer will have a discount applied on all recurring charges. Charges you create through the API will not have the discount.",
                },
                {
                    name: "description",
                    type: "String",
                    info: "An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                },
                {
                    name: "email",
                    type: "String",
                    info: "Customer’s email address. It’s displayed alongside the customer in your dashboard and can be useful for searching and tracking. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to a customer object. It can be useful for storing additional information about the customer in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                },
                {
                    name: "plan",
                    type: "String",
                    info: "The identifier of the plan to subscribe the customer to. If provided, the returned customer object will have a list of subscriptions that the customer is currently subscribed to. If you subscribe a customer to a plan without a free trial, the customer must have a valid card as well.",
                },
                {
                    name: "taxPercent",
                    type: "String",
                    info: "A positive decimal (with at most four decimal places) between 1 and 100. This represents the percentage of the subscription invoice subtotal that will be calculated and added as tax to the final amount each billing period. For example, a plan which charges $10/month with a tax_percent of 20.0 will charge $12 per invoice. Can only be used if a plan is provided.",
                },
                {
                    name: "trialEnd",
                    type: "String",
                    info: "Unix timestamp representing the end of the trial period the customer will get before being charged. If set, trial_end will override the default trial period of the plan the customer is being subscribed to. The special value now can be provided to end the customer’s trial immediately. Only applies when the plan parameter is also provided.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "id",
                    type: "credentials",
                    info: "The ID of the desired balance transaction (as found on any API object that affects the balance, e.g. a charge or transfer).",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "chargeId",
                    type: "String",
                    info: "The identifier of the charge to be retrieved.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "chargeId",
                    type: "String",
                    info: "Id of a charge.",
                },
                {
                    name: "description",
                    type: "String",
                    info: "An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the description of the charge(s) that they are describing.",
                },
                {
                    name: "receiptEmail",
                    type: "String",
                    info: "The email address to send this charge's receipt to. The receipt will not be sent until the charge is paid. If this charge is for a customer, the email address specified here will override the customer's email address. Receipts will not be sent for test mode charges. If `receipt_email` is specified for a charge in live mode, a receipt will be sent regardless of your email settings.",
                },
                {
                    name: "fraudDetails",
                    type: "JSON",
                    info: "A set of key/value pairs you can attach to a charge giving information about its riskiness. If you believe a charge is fraudulent, include a user_report key with a value of fraudulent. If you believe a charge is safe, include a user_report key with a value of safe. Note that you must refund a charge before setting the user_report to fraudulent. Stripe will use the information you send to improve our fraud detection algorithms."
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to a charge object. It can be useful for storing additional information about the charge in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save."
                },
                {
                    name: "shipping",
                    type: "String",
                    info: "Shipping information for the charge. Helps prevent fraud on charges for physical goods."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "chargeId",
                    type: "String",
                    info: "Id of a charge.",
                },
                {
                    name: "amount",
                    type: "String",
                    info: "The amount to capture, which must be less than or equal to the original amount. Any additional amount will be automatically refunded.",
                },
                {
                    name: "applicationFee",
                    type: "String",
                    info: "An application fee to add on to this charge. Can only be used with Stripe Connect.",
                },
                {
                    name: "receiptEmail",
                    type: "credentials",
                    info: "The email address to send this charge’s receipt to. This will override the previously-specified email address for this charge, if one was set. Receipts will not be sent in test mode.",
                },
                {
                    name: "statementDescriptor",
                    type: "credentials",
                    info: "An arbitrary string to be displayed on your customer’s credit card statement. This may be up to 22 characters. As an example, if your website is RunClub and the item you’re charging for is a race ticket, you may want to specify a statement_descriptor of RunClub 5K race ticket. The statement description may not include <> characters, and will appear on your customer’s statement in capital letters. Non-ASCII characters are automatically stripped. Updating this value will overwrite the previous statement descriptor of this charge. While most banks display this information consistently, some may display it incorrectly or not at all",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "created",
                    type: "String",
                    info: "A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options: child arguments",
                },
                {
                    name: "customer",
                    type: "String",
                    info: "Only return charges for the customer specified by this customer ID.",
                },
                {
                    name: "endingBefore",
                    type: "String",
                    info: "A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.",
                },
                {
                    name: "limit",
                    type: "String",
                    info: "A limit on the number of objects to be returned. Limit can range between 1 and 100 items.",
                },
                {
                    name: "source",
                    type: "String",
                    info: "A filter on the list based on the source of the charge. The value can be a dictionary with the following options:",
                },
                {
                    name: "startingAfter",
                    type: "String",
                    info: "A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "customerId",
                    type: "String",
                    info: "The identifier of the customer to be retrieved.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "customerId",
                    type: "String",
                    info: "If of customer to update.",
                },
                {
                    name: "source",
                    type: "String",
                    info: "The source can either be a token, like the ones returned by our Stripe.js, or a dictionary containing a user’s credit card details (with the options shown below).child arguments",
                },
                {
                    name: "accountBalance",
                    type: "String",
                    info: "An integer amount in cents that is the starting account balance for your customer. A negative amount represents a credit that will be used before attempting any charges to the customer’s card; a positive amount will be added to the next invoice.",
                },
                {
                    name: "businessVatId",
                    type: "String",
                    info: "The customer’s VAT identification number. If you are using Relay, this field gets passed to tax provider you are using for your orders. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                },
                {
                    name: "coupon",
                    type: "String",
                    info: "If you provide a coupon code, the customer will have a discount applied on all recurring charges. Charges you create through the API will not have the discount.",
                },
                {
                    name: "description",
                    type: "String",
                    info: "An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                },
                {
                    name: "email",
                    type: "String",
                    info: "Customer’s email address. It’s displayed alongside the customer in your dashboard and can be useful for searching and tracking. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to a customer object. It can be useful for storing additional information about the customer in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                },
                {
                    name: "plan",
                    type: "String",
                    info: "The identifier of the plan to subscribe the customer to. If provided, the returned customer object will have a list of subscriptions that the customer is currently subscribed to. If you subscribe a customer to a plan without a free trial, the customer must have a valid card as well.",
                },
                {
                    name: "taxPercent",
                    type: "String",
                    info: "A positive decimal (with at most four decimal places) between 1 and 100. This represents the percentage of the subscription invoice subtotal that will be calculated and added as tax to the final amount each billing period. For example, a plan which charges $10/month with a tax_percent of 20.0 will charge $12 per invoice. Can only be used if a plan is provided.",
                },
                {
                    name: "trialEnd",
                    type: "String",
                    info: "Unix timestamp representing the end of the trial period the customer will get before being charged. If set, trial_end will override the default trial period of the plan the customer is being subscribed to. The special value now can be provided to end the customer’s trial immediately. Only applies when the plan parameter is also provided.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "id",
                    type: "credentials",
                    info: "The ID of the desired balance transaction (as found on any API object that affects the balance, e.g. a charge or transfer).",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "customerId",
                    type: "String",
                    info: "If of customer to update.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "disputeId",
                    type: "String",
                    info: "ID of dispute to retrieve.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "disputeId",
                    type: "String",
                    info: "ID of dispute to retrieve.",
                },
                {
                    name: "evidence",
                    type: "JSON",
                    info: "Evidence to upload to respond to a dispute. Updating any field in the hash will submit all fields in the hash for review.",
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to a dispute object. It can be useful for storing additional information about the dispute in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "disputeId",
                    type: "String",
                    info: "ID of dispute to retrieve.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "eventId",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "type",
                    type: "String",
                    info: "A string containing a specific event name, or group of events using * as a wildcard. The list will be filtered to include only events with a matching event property.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "file",
                    type: "String",
                    info: "A file to upload.",
                },
                {
                    name: "purpose",
                    type: "String",
                    info: "The purpoe of the uploaded file. Possible values are `business_logo`, `dispute_evidence`, `identity_document`, `incorporation_article`, `incorporation_document`, `payment_provider_transfer`, `product_feed`.",
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
            "name":"createRefund",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "chargeId",
                    type: "String",
                    info: "The identifier of the charge to refund.",
                },
                {
                    name: "amount",
                    type: "String",
                    info: "A positive integer in cents representing how much of this charge to refund. Can only refund up to the unrefunded amount remaining of the charge.",
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to a refund object. It can be useful for storing additional information about the refund in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.",
                },
                {
                    name: "reason",
                    type: "String",
                    info: "String indicating the reason for the refund. If set, possible values are duplicate, fraudulent, and requested_by_customer. Specifying fraudulent as the reason when you believe the charge to be fraudulent will help us improve our fraud detection algorithms.",
                },
                {
                    name: "refundApplicationFee",
                    type: "String",
                    info: "Boolean indicating whether the application fee should be refunded when refunding this charge. If a full charge refund is given, the full application fee will be refunded. Else, the application fee will be refunded with an amount proportional to the amount of the charge refunded. An application fee can only be refunded by the application that created the charge.",
                },
                {
                    name: "reverseTransfer",
                    type: "String",
                    info: "Boolean indicating whether the transfer should be reversed when refunding this charge. The transfer will be reversed for the same amount being refunded (either the entire or partial amount). A transfer can only be reversed by the application that created the charge.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "refundId",
                    type: "String",
                    info: "ID of refund to retrieve.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "refundId",
                    type: "String",
                    info: "ID of refund to retrieve.",
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to a refund object. It can be useful for storing additional information about the refund in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "cardNumber",
                    type: "String",
                    info: "Number of card",
                },
                {
                    name: "cardExpirationMonth",
                    type: "Number",
                    info: "Expiration month of card",
                },
                {
                    name: "cardExpirationYear",
                    type: "Number",
                    info: "Expiration year of card",
                },
                {
                    name: "cardCvc",
                    type: "String",
                    info: "CVC code of card",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "bankAccountCountry",
                    type: "String",
                    info: "The bank account country",
                },
                {
                    name: "bankAccountCurrency",
                    type: "String",
                    info: "The bank account currency",
                },
                {
                    name: "bankAccountAccountHolderName",
                    type: "String",
                    info: "The bank account holder name",
                },
                {
                    name: "bankAccountAccountHolderType",
                    type: "String",
                    info: "The bank account holder type",
                },
                {
                    name: "bankAccountRoutingNumber",
                    type: "String",
                    info: "The bank account routing number",
                },
                {
                    name: "bankAccountNumber",
                    type: "String",
                    info: "The bank account number",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "personalIdNumber",
                    type: "String",
                    info: "The bank account country",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "tokenId",
                    type: "String",
                    info: "The ID of the desired token.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "amount",
                    type: "Number",
                    info: "A positive integer in cents representing how much to transfer.",
                },
                {
                    name: "currency",
                    type: "String",
                    info: "3-letter ISO code for currency",
                },
                {
                    name: "destination",
                    type: "String",
                    info: "The id of a bank account or a card to send the transfer to, or the string `default_for_currency` to use the default external account for the specified currency. ",
                },
                {
                    name: "description",
                    type: "String",
                    info: "An arbitrary string which you can attach to a transfer object. It is displayed when in the web interface alongside the transfer.",
                },
                {
                    name: "sourceTransaction",
                    type: "String",
                    info: "You can use this parameter to transfer funds from a charge (or other transaction) before they are added to your available balance. A pending balance will transfer immediately but the funds will not become available until the original charge becomes available.",
                },
                {
                    name: "statementDescriptor",
                    type: "String",
                    info: "A string to be displayed on the recipient's bank or card statement. This may be at most 22 characters. Attempting to use a statement_descriptor longer than 22 characters will return an error. Note: Most banks will truncate this information and/or display it inconsistently. Some may not display it at all.",
                },
                {
                    name: "sourceType",
                    type: "String",
                    info: "Valid options are: alipay_account, bank_account, bitcoin_receiver, and card.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "transferId",
                    type: "String",
                    info: "The identifier of the transfer to be retrieved.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "transferId",
                    type: "String",
                    info: "Id of transfer to update.",
                },
                {
                    name: "description",
                    type: "String",
                    info: "An arbitrary string which you can attach to a transfer object. It is displayed when in the web interface alongside the transfer. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to a transfer object. It can be useful for storing additional information about the transfer in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "destination",
                    type: "String",
                    info: "Only return transfers for the destination specified by this account ID.",
                },
                {
                    name: "recipientstatus",
                    type: "String",
                    info: "Only return transfers for the recipient specified by this recipient ID.",
                },
                {
                    name: "status",
                    type: "String",
                    info: "Only return transfers that have the given status: `pending`, `paid`, `failed`, `in_transit`, or `canceled`.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "description",
                    type: "String",
                    info: "An arbitrary string which you can attach to a reversal object. It is displayed alongside the reversal in the dashboard. This will be unset if you POST an empty value.",
                },
                {
                    name: "metadata",
                    type: "String",
                    info: "A set of key/value pairs that you can attach to a reversal object. It can be useful for storing additional information about the reversal in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.",
                },
                {
                    name: "refundApplicationFee",
                    type: "String",
                    info: "Boolean indicating whether the application fee should be refunded when reversing this transfer. If a full transfer reversal is given, the full application fee will be refunded. Otherwise, the application fee will be refunded with an amount proportional to the amount of the transfer reversed.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "id",
                    type: "String",
                    info: "ID of reversal to retrieve.",
                },
                {
                    name: "transferId",
                    type: "String",
                    info: "ID of the transfer reversed.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "id",
                    type: "String",
                    info: "ID of reversal to retrieve.",
                },
                {
                    name: "transferId",
                    type: "String",
                    info: "ID of the transfer reversed.",
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to a reversal object. It can be useful for storing additional information about the reversal in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.",
                },
                {
                    name: "description",
                    type: "String",
                    info: "An arbitrary string which you can attach to a reversal object. It is displayed when in the web interface alongside the reversal. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "transferId",
                    type: "String",
                    info: "The ID of the transfer whose reversals will be retrieved.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "country",
                    type: "String",
                    info: "The country the account holder resides in or that the business is legally established in. For example, if you are in the United States and the business you’re creating an account for is legally represented in Canada, you would use “CA” as the country for the account being created.",
                },
                {
                    name: "email",
                    type: "String",
                    info: "The email address of the account holder. For standalone accounts, Stripe will email your user with instructions for how to set up their account. For managed accounts, this is only to make the account easier to identify to you: Stripe will never directly reach out to your users.",
                },
                {
                    name: "managed",
                    type: "String",
                    info: "Whether you'd like to create a managed or standalone account. Managed accounts have extra parameters available to them, and require that you, the platform, handle all communication with the account holder. Standalone accounts are normal Stripe accounts: Stripe will email the account holder to setup a username and password, and handle all account management directly with them.",
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
            "name":"getAccount",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "accountId",
                    type: "String",
                    info: "Id of account to retrive"
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "accountId",
                    type: "String",
                    info: "Id of account to update"
                },
                {
                    name: "businessLogo",
                    type: "String",
                    info: "Bussines logo"
                },
                {
                    name: "businessName",
                    type: "String",
                    info: "The publicly sharable name for this account."
                },
                {
                    name: "businessPrimaryColor",
                    type: "String",
                    info: "A CSS hex color value representing the primary branding color for this account"
                },
                {
                    name: "businessUrl",
                    type: "String",
                    info: "The URL that best shows the service or product provided for this account"
                },
                {
                    name: "debitNegativeBalances",
                    type: "String", // Boolean
                    info: "A boolean for whether or not Stripe should try to reclaim negative balances from the account holder’s bank account."
                },
                {
                    name: "declineChargeOn",
                    type: "String",
                    info: "Account-level settings to automatically decline certain types of charges regardless of the bank’s decision."
                },
                {
                    name: "defaultCurrency",
                    type: "String",
                    info: "Three-letter ISO currency code representing the default currency for the account."
                },
                {
                    name: "email",
                    type: "String",
                    info: "Email address of the account holder. For standalone accounts, this is used to email them asking them to claim their Stripe account. For managed accounts, this is only to make the account easier to identify to you: Stripe will not email the account holder."
                },
                {
                    name: "externalAccount",
                    type: "String",
                    info: "A card or bank account to attach to the account. You can provide either a token, like the ones returned by Stripe.js, or a dictionary as documented in the external_account parameter for either card or bank account creation. "
                },
                {
                    name: "legalEntity",
                    type: "String",
                    info: "Information about the account holder; varies by account country and account status."
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to an account object. It can be useful for storing additional information about the account in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving."
                },
                {
                    name: "productDescription",
                    type: "String",
                    info: "Internal-only description of the product being sold or service being provided by this account. It’s used by Stripe for risk and underwriting purposes."
                },
                {
                    name: "statementDescriptor",
                    type: "String",
                    info: "The text that will appear on credit card statements by default if a charge is being made directly on the account."
                },
                {
                    name: "supportEmail",
                    type: "String",
                    info: "A publicly shareable email address that can be reached for support for this account"
                },
                {
                    name: "supportPhone",
                    type: "String",
                    info: "A publicly shareable phone number that can be reached for support for this account"
                },
                {
                    name: "supportUrl",
                    type: "String",
                    info: "A publicly shareable URL that can be reached for support for this account"
                },
                {
                    name: "tosAcceptance",
                    type: "JSON",
                    info: "Details on who accepted the Stripe terms of service, and when they accepted it"
                },
                {
                    name: "transferSchedule",
                    type: "JSON",
                    info: "Details on when this account will make funds from charges available, and when they will be paid out to the account holder’s bank account."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "accountId",
                    type: "String",
                    info: "Id of account to delete"
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "accountId",
                    type: "String",
                    info: "Id of account to reject"
                },
                {
                    name: "reason",
                    type: "String",
                    info: "The reason for rejecting the account. May be one of `fraud`, `terms_of_service`, or `other`."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "endingBefore",
                    type: "String",
                    info: "A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list."
                },
                {
                    name: "limit",
                    type: "Number",
                    info: "A limit on the number of objects to be returned. Limit can range between 1 and 100 items."
                },
                {
                    name: "startingAfter",
                    type: "String",
                    info: "A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "appId",
                    type: "String",
                    info: "The identifier of the application fee to be refunded.",
                },
                {
                    name: "amount",
                    type: "Number",
                    info: "A positive integer in cents representing how much of this fee to refund. Can only refund up to the unrefunded amount remaining of the fee."
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to a refund object. It can be useful for storing additional information about the refund in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "feeId",
                    type: "String",
                    info: "ID of the application fee refunded.",
                },
                 {
                    name: "refundId",
                    type: "String",
                    info: "ID of refund to retrieve.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "feeId",
                    type: "String",
                    info: "ID of the application fee refunded.",
                },
                {
                    name: "refundId",
                    type: "String",
                    info: "ID of refund to retrieve.",
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to an application fee refund object. It can be useful for storing additional information about the refund in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "appId",
                    type: "String",
                    info: "The ID of the application fee whose refunds will be retrieved.",
                },
                {
                    name: "endingBefore",
                    type: "String",
                    info: "A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list."
                },
                {
                    name: "limit",
                    type: "Number",
                    info: "A limit on the number of objects to be returned. Limit can range between 1 and 100 items."
                },
                {
                    name: "startingAfter",
                    type: "String",
                    info: "A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "feeId",
                    type: "String",
                    info: "The identifier of the fee to be retrieved.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained  from Stripe.",
                },
                {
                    name: "chargeId",
                    type: "String",
                    info: "Only return application fees for the charge specified by this charge ID.",
                },
                {
                    name: "endingBefore",
                    type: "String",
                    info: "A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.",
                },
                {
                    name: "limit",
                    type: "String",
                    info: "A limit on the number of objects to be returned. Limit can range between 1 and 100 items.",
                },
                {
                    name: "startingAfter",
                    type: "String",
                    info: "A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "endingBefore",
                    type: "String",
                    info: "A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.",
                },
                {
                    name: "limit",
                    type: "String",
                    info: "A limit on the number of objects to be returned. Limit can range between 1 and 100 items.",
                },
                {
                    name: "startingAfter",
                    type: "String",
                    info: "A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "country",
                    type: "String",
                    info: "An ISO country code. Available country codes can be listed with the List Country Specs endpoint.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "accountId",
                    type: "String",
                    info: "The account ID obtained from Stripe.",
                },
                {
                    name: "source",
                    type: "String",
                    info: "When adding a bank account to a customer, the parameter name is source. When adding to an account, the parameter name is external_account. The value can either be a token, like the ones returned by Stripe.js, or a dictionary containing a user’s bank account details (with the options shown below).",
                },
                {
                    name: "externalAccount",
                    type: "String",
                    info: "When adding a bank account to a customer, the parameter name is source. When adding to an account, the parameter name is external_account. The value can either be a token, like the ones returned by Stripe.js, or a dictionary containing a user’s bank account details (with the options shown below).",
                },
                {
                    name: "defaultForCurrency",
                    type: "String",
                    info: "If you set this to true (or if this is the first bank account being added in this currency) this bank account will become the default bank account for its currency.",
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to an external account object. It can be useful for storing additional information about the external account in a structured format.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "accountId",
                    type: "String",
                    info: "The account ID obtained from Stripe.",
                },
                {
                    name: "bankAccountId",
                    type: "String",
                    info: "The bank account ID obtained from Stripe.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "accountId",
                    type: "String",
                    info: "The account ID obtained from Stripe.",
                },
                {
                    name: "bankAccountId",
                    type: "String",
                    info: "The ID of the bank account to be updated.",
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to an external account object. It can be useful for storing additional information about the external account in a structured format.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "accountId",
                    type: "String",
                    info: "The account ID obtained from Stripe.",
                },
                {
                    name: "bankAccountId",
                    type: "String",
                    info: "The bank account ID obtained from Stripe.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "accountId",
                    type: "String",
                    info: "The account ID obtained from Stripe.",
                },
                {
                    name: "endingBefore",
                    type: "String",
                    info: "A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.",
                },
                {
                    name: "limit",
                    type: "String",
                    info: "A limit on the number of objects to be returned. Limit can range between 1 and 100 items.",
                },
                {
                    name: "startingAfter",
                    type: "String",
                    info: "A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list."
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
        },]
     })
};
