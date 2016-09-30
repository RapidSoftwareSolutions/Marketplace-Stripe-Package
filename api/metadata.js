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
                    name: "transferId",
                    type: "credentials",
                    info: "The identifier of the transfer to be reversed.",
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
        }, {
            "name":"createCard",
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
            "name":"getCard",
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
                    name: "cardId",
                    type: "String",
                    info: "The card ID obtained from Stripe.",
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
                    name: "cardId",
                    type: "String",
                    info: "The card ID obtained from Stripe.",
                },
                {
                    name: "addressCity",
                    type: "String",
                    info: "City.",
                },
                {
                    name: "addressCountry",
                    type: "String",
                    info: "Country.",
                },
                {
                    name: "addressLine1",
                    type: "String",
                    info: "Line 1.",
                },
                {
                    name: "addressLine2",
                    type: "String",
                    info: "Line 2.",
                },
                {
                    name: "addressState",
                    type: "String",
                    info: "State.",
                },
                {
                    name: "addressZip",
                    type: "String",
                    info: "State.",
                },
                {
                    name: "defaultForCurrency",
                    type: "String",
                    info: "Only applicable on accounts (not customers or recipients). If set to true, this card will become the default external account for its currency..",
                },
                {
                    name: "expMonth",
                    type: "String",
                    info: "Month.",
                },
                {
                    name: "expYear",
                    type: "String",
                    info: "Year.",
                },
                {
                    name: "metadata",
                    type: "String",
                    info: "A set of key/value pairs that you can attach to a customer object. It can be useful for storing additional information about the customer in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                },
                {
                    name: "name",
                    type: "String",
                    info: "Name.",
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
                    name: "cardId",
                    type: "String",
                    info: "The card ID obtained from Stripe.",
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
        }, {
            "name":"createReceiver",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "amount",
                    type: "String",
                    info: "The account ID obtained from Stripe.",
                },
                {
                    name: "currency",
                    type: "String",
                    info: "Only USD currently supported",
                },
                {
                    name: "email",
                    type: "String",
                    info: "A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.",
                },
                {
                    name: "description",
                    type: "String",
                    info: "A limit on the number of objects to be returned. Limit can range between 1 and 100 items.",
                },
                {
                    name: "metadata",
                    type: "String",
                    info: "",
                },
                {
                    name: "refundMispayments",
                    type: "String",
                    info: "",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "receiverId",
                    type: "String",
                    info: "Id of receiver to retrive.",
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
            "name":"createOrder",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "currency",
                    type: "String",
                    info: "3-letter ISO code representing the currency in which the order should be made. Stripe will validate that all entries in items match the currency specified here.",
                },
                {
                    name: "coupon",
                    type: "String",
                    info: "A coupon code that represents a discount to be applied to this order. Must be one-time duration and in same currency as the order.",
                },
                {
                    name: "customer",
                    type: "String",
                    info: "The ID of an existing customer to use for this order. If provided, the customer email and shipping address will be used to create the order. Subsequently, the customer will also be charged to pay the order. If email or shipping are also provided, they will override the values retrieved from the customer object.",
                },
                {
                    name: "email",
                    type: "String",
                    info: "The email address of the customer placing the order.",
                },
                {
                    name: "items",
                    type: "JSON",
                    info: "List of items constituting the order.",
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to an order object. It can be useful for storing additional information about the order in a structured format.",
                },
                {
                    name: "shipping",
                    type: "JSON",
                    info: "Shipping address for the order. Required if any of the SKUs are for products that have shippable set to true.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "orderId",
                    type: "String",
                    info: "Id of receiver to retrive.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "orderId",
                    type: "credentials",
                    info: "Id of order to update.",
                },
                {
                    name: "coupon",
                    type: "String",
                    info: "A coupon code that represents a discount to be applied to this order. Must be one-time duration and in same currency as the order.",
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to an order object. It can be useful for storing additional information about the order in a structured format.",
                },
                {
                    name: "shipping",
                    type: "JSON",
                    info: "Shipping address for the order. Required if any of the SKUs are for products that have shippable set to true.",
                },
                {
                    name: "status",
                    type: "credentials",
                    info: "Current order status. One of `created`, `paid`, `canceled`, `fulfilled`, or `returned`.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "orderId",
                    type: "String",
                    info: "The ID of an order to pay.",
                },
                {
                    name: "customer",
                    type: "String",
                    info: "The ID of an existing customer that will be charged in this request.",
                },
                {
                    name: "source",
                    type: "String",
                    info: "A payment source to be charged, such as a credit card. If you also pass a customer ID, the source must be the ID of a source belonging to the customer. Otherwise, if you do not pass a customer ID, the source you provide must either be a token, like the ones returned by Stripe.js, or a object containing a user's credit card details, with the options described below. Although not all information is required, the extra info helps prevent fraud."
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to an order object. It can be useful for storing additional information about the order in a structured format.",
                },
                {
                    name: "email",
                    type: "String",
                    info: "The email address of the customer placing the order. If a customer is specified, that customer's email address will be used.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "created",
                    type: "String",
                    info: "A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options:",
                },
                {
                    name: "customer",
                    type: "String",
                    info: "Only return orders for the given customer.",
                },
                {
                    name: "ids",
                    type: "String",
                    info: "Only return orders with the given IDs.",
                },
                {
                    name: "status",
                    type: "String",
                    info: "Only return orders that have the given status. One of `created`, `paid`, `fulfilled`, or `refunded`.",
                },
                {
                    name: "statusTransitions",
                    type: "String",
                    info: "Filter orders based on when they were paid, fulfilled, canceled, or returned.",
                },
                {
                    name: "upstreamIds",
                    type: "String",
                    info: "Only return orders with the given upstream order IDs.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "orderId",
                    type: "JSON",
                    info: "Order id."
                },
                {
                    name: "items",
                    type: "JSON",
                    info: "List of items to return."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "orderId",
                    type: "JSON",
                    info: "The identifier of the order return to be retrieved."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "created",
                    type: "String",
                    info: "A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options:"
                },
                {
                    name: "order",
                    type: "String",
                    info: "The order to retrieve returns for.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "name",
                    type: "String",
                    info: "The product’s name, meant to be displayable to the customer.",
                },
                {
                    name: "active",
                    type: "String",
                    info: "Whether or not the product is currently available for purchase. Defaults to `true`.",
                },
                {
                    name: "attributes",
                    type: "JSON",
                    info: 'A list of up to 5 alphanumeric attributes that each SKU can provide values for (e.g. `["color", "size"]`).',
                },
                {
                    name: "caption",
                    type: "String",
                    info: "A short one-line description of the product, meant to be displayable to the customer.",
                },
                {
                    name: "deactivateOn",
                    type: "JSON",
                    info: "An array of Connect application names or identifiers that should not be able to order the SKUs for this product.",
                },
                {
                    name: "description",
                    type: "String",
                    info: "The product’s description, meant to be displayable to the customer.",
                },
                {
                    name: "images",
                    type: "JSON",
                    info: "A list of up to 8 URLs of images for this product, meant to be displayable to the customer.",
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to a product object. It can be useful for storing additional information about the product in a structured format.",
                },
                {
                    name: "packageDimensions",
                    type: "String",
                    info: "The dimensions of this product for shipping purposes. A SKU associated with this product can override this value by having its own package_dimensions.",
                },
                {
                    name: "shippable",
                    type: "String",
                    info: "Whether this product is shipped (i.e. physical goods). Defaults to true.",
                },
                {
                    name: "url",
                    type: "String",
                    info: "A URL of a publicly-accessible webpage for this product.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "productId",
                    type: "String",
                    info: "The identifier of the product to be retrieved.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "productId",
                    type: "String",
                    info: "The id of product to update.",
                },
                {
                    name: "name",
                    type: "String",
                    info: "The product’s name, meant to be displayable to the customer.",
                },
                {
                    name: "active",
                    type: "String",
                    info: "Whether or not the product is currently available for purchase. Defaults to `true`.",
                },
                {
                    name: "attributes",
                    type: "JSON",
                    info: 'A list of up to 5 alphanumeric attributes that each SKU can provide values for (e.g. `["color", "size"]`).',
                },
                {
                    name: "caption",
                    type: "String",
                    info: "A short one-line description of the product, meant to be displayable to the customer.",
                },
                {
                    name: "deactivateOn",
                    type: "JSON",
                    info: "An array of Connect application names or identifiers that should not be able to order the SKUs for this product.",
                },
                {
                    name: "description",
                    type: "String",
                    info: "The product’s description, meant to be displayable to the customer.",
                },
                {
                    name: "images",
                    type: "JSON",
                    info: "A list of up to 8 URLs of images for this product, meant to be displayable to the customer.",
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to a product object. It can be useful for storing additional information about the product in a structured format.",
                },
                {
                    name: "packageDimensions",
                    type: "String",
                    info: "The dimensions of this product for shipping purposes. A SKU associated with this product can override this value by having its own package_dimensions.",
                },
                {
                    name: "shippable",
                    type: "String",
                    info: "Whether this product is shipped (i.e. physical goods). Defaults to true.",
                },
                {
                    name: "url",
                    type: "String",
                    info: "A URL of a publicly-accessible webpage for this product.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "ids",
                    type: "String",
                    info: "Only return products with the given IDs.",
                },
                {
                    name: "shippable",
                    type: "String",
                    info: "Only return products that can be shipped (i.e., physical, not digital products).",
                },
                {
                    name: "url",
                    type: "String",
                    info: "Only return products with the given url.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "productId",
                    type: "String",
                    info: "The ID of the product to delete.",
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
                    name: "inventory",
                    type: "String",
                    info: "Description of the SKU’s inventory.",
                },
                {
                    name: "price",
                    type: "Number",
                    info: "The cost of the item as a nonnegative integer in the smallest currency unit (that is, 100 cents to charge $1.00, or 100 to charge ¥100, Japanese Yen being a 0-decimal currency).",
                },
                {
                    name: "product",
                    type: "String",
                    info: "The ID of the product this SKU is associated with.",
                },
                {
                    name: "active",
                    type: "String",
                    info: "Whether or not the SKU is available for purchase. Default to true.",
                },
                {
                    name: "attributes",
                    type: "JSON",
                    info: 'A dictionary of attributes and values for the attributes defined by the product. If, for example, a product’s attributes are ["size", "gender"], a valid SKU has the following dictionary of attributes: {"size": "Medium", "gender": "Unisex"}.',
                },
                {
                    name: "image",
                    type: "String",
                    info: "The URL of an image for this SKU, meant to be displayable to the customer.",
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to a SKU object. It can be useful for storing additional information about the SKU in a structured format.",
                },
                {
                    name: "packageDimensions",
                    type: "JSON",
                    info: "The dimensions of this SKU for shipping purposes.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "skuId",
                    type: "String",
                    info: "The identifier of the SKU to be retrieved.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "skuId",
                    type: "String",
                    info: "The identifier of the SKU to be updated.",
                },
                {
                    name: "currency",
                    type: "String",
                    info: "3-letter ISO code for currency.",
                },
                {
                    name: "inventory",
                    type: "String",
                    info: "Description of the SKU’s inventory.",
                },
                {
                    name: "price",
                    type: "String",
                    info: "The cost of the item as a nonnegative integer in the smallest currency unit (that is, 100 cents to charge $1.00, or 100 to charge ¥100, Japanese Yen being a 0-decimal currency).",
                },
                {
                    name: "product",
                    type: "String",
                    info: "The ID of the product this SKU is associated with.",
                },
                {
                    name: "active",
                    type: "String",
                    info: "Whether or not the SKU is available for purchase. Default to true.",
                },
                {
                    name: "attributes",
                    type: "JSON",
                    info: 'A dictionary of attributes and values for the attributes defined by the product. If, for example, a product’s attributes are ["size", "gender"], a valid SKU has the following dictionary of attributes: {"size": "Medium", "gender": "Unisex"}.',
                },
                {
                    name: "image",
                    type: "String",
                    info: "The URL of an image for this SKU, meant to be displayable to the customer.",
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to a SKU object. It can be useful for storing additional information about the SKU in a structured format.",
                },
                {
                    name: "packageDimensions",
                    type: "JSON",
                    info: "The dimensions of this SKU for shipping purposes.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "attributes",
                    type: "String",
                    info: "",
                },
                {
                    name: "ids",
                    type: "String",
                    info: "Only return SKUs with the given IDs.",
                },
                {
                    name: "productId",
                    type: "String",
                    info: "The ID of the product whose SKUs will be retrieved.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "skuId",
                    type: "String",
                    info: "The identifier of the SKU to be deleted.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "couponId",
                    type: "String",
                    info: "Unique string of your choice that will be used to identify this coupon when applying it to a customer. This is often a specific code you’ll give to your customer to use when signing up (e.g. FALL25OFF). If you don’t want to specify a particular code, you can leave the ID blank and we’ll generate a random code for you.",
                },
                {
                    name: "duration",
                    type: "String",
                    info: "Specifies how long the discount will be in effect. Can be `forever`, `once`, or `repeating`.",
                },
                {
                    name: "amountOff",
                    type: "String",
                    info: "A positive integer representing the amount to subtract from an invoice total (required if percent_off is not passed)",
                },
                {
                    name: "currency",
                    type: "String",
                    info: "Currency of the amount_off parameter (required if amount_off is passed)",
                },
                {
                    name: "durationInMonths",
                    type: "String",
                    info: "Required only if duration is repeating, in which case it must be a positive integer that specifies the number of months the discount will be in effect.",
                },
                {
                    name: "maxRedemptions",
                    type: "String",
                    info: "A positive integer specifying the number of times the coupon can be redeemed before it’s no longer valid. For example, you might have a 50% off coupon that the first 20 readers of your blog can use.",
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to a coupon object. It can be useful for storing additional information about the coupon in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                },
                {
                    name: "percentOff",
                    type: "String",
                    info: "A positive integer between 1 and 100 that represents the discount the coupon will apply (required if amount_off is not passed)",
                },
                {
                    name: "redeemBy",
                    type: "String",
                    info: "Unix timestamp specifying the last time at which the coupon can be redeemed. After the redeem_by date, the coupon can no longer be applied to new customers.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "couponId",
                    type: "String",
                    info: "Unique string of your choice that will be used to identify this coupon when applying it to a customer. This is often a specific code you’ll give to your customer to use when signing up (e.g. FALL25OFF). If you don’t want to specify a particular code, you can leave the ID blank and we’ll generate a random code for you.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "couponId",
                    type: "String",
                    info: "Unique string of your choice that will be used to identify this coupon when applying it to a customer. This is often a specific code you’ll give to your customer to use when signing up (e.g. FALL25OFF). If you don’t want to specify a particular code, you can leave the ID blank and we’ll generate a random code for you.",
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to a coupon object. It can be useful for storing additional information about the coupon in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "couponId",
                    type: "String",
                    info: "Unique string of your choice that will be used to identify this coupon when applying it to a customer. This is often a specific code you’ll give to your customer to use when signing up (e.g. FALL25OFF). If you don’t want to specify a particular code, you can leave the ID blank and we’ll generate a random code for you.",
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
            "name":"deleteCustomerDiscount",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "customerId",
                    type: "String",
                    info: "Id of customer to delete."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "subscriptionId",
                    type: "String",
                    info: "Id of subscribtion to delete."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "customer",
                    type: "String",
                    info: "Customer Id"
                },
                {
                    name: "applicationFee",
                    type: "String",
                    info: "A fee in cents that will be applied to the invoice and transferred to the application owner’s Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. "
                },
                {
                    name: "description",
                    type: "String",
                    info: "An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the description of the charge(s) that they are describing.",

                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to a customer object. It can be useful for storing additional information about the customer in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                },
                {
                    name: "statementDescriptor",
                    type: "String",
                    info: "Extra information about a charge for the customer’s credit card statement."
                },
                {
                    name: "subscription",
                    type: "String",
                    info: "The ID of the subscription to invoice. If not set, the created invoice will include all pending invoice items for the customer. If set, the created invoice will exclude pending invoice items that pertain to other subscriptions."
                },
                {
                    name: "taxPercent",
                    type: "String",
                    info: "The percent tax rate applied to the invoice, represented as a decimal number."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "invoiceId",
                    type: "String",
                    info: "Invoice id."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "invoice",
                    type: "String",
                    info: "Invoice id."
                },
                {
                    name: "coupon",
                    type: "String",
                    info: "Counpon id."
                },
                {
                    name: "customer",
                    type: "String",
                    info: "In the case of upcoming invoices, the customer of the upcoming invoice is required. In other cases it is ignored."
                },
                {
                    name: "subscription",
                    type: "String",
                    info: "In the case of upcoming invoices, the subscription of the upcoming invoice is optional. In other cases it is ignored."
                },
                {
                    name: "subscriptionPlan",
                    type: "String",
                    info: "Subscription Plan"
                },
                {
                    name: "subscriptionProrate",
                    type: "String",
                    info: "Subscription Prorate"
                },
                {
                    name: "subscriptionProrationDate",
                    type: "String",
                    info: "Subscription Proration Date"
                },
                {
                    name: "subscriptionQuantity",
                    type: "String",
                    info: "Subscription Quantity"
                },
                {
                    name: "subscriptionTrialEnd",
                    type: "String",
                    info: "Subscription Trial End"
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "invoiceId",
                    type: "String",
                    info: "Invoice id."
                },
                {
                    name: "applicationFee",
                    type: "String",
                    info: "A fee in cents that will be applied to the invoice and transferred to the application owner’s Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. "
                },
                {
                    name: "description",
                    type: "String",
                    info: "An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the description of the charge(s) that they are describing.",

                },
                {
                    name: "metadata",
                    type: "String",
                    info: "A set of key/value pairs that you can attach to a customer object. It can be useful for storing additional information about the customer in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                },
                {
                    name: "statementDescriptor",
                    type: "String",
                    info: "Extra information about a charge for the customer’s credit card statement."
                },
                {
                    name: "subscription",
                    type: "String",
                    info: "The ID of the subscription to invoice. If not set, the created invoice will include all pending invoice items for the customer. If set, the created invoice will exclude pending invoice items that pertain to other subscriptions."
                },
                {
                    name: "forgiven",
                    type: "String",
                    info: "Boolean representing whether an invoice is forgiven or not. To forgive an invoice, pass true. Forgiving an invoice instructs us to update the subscription status as if the invoice were successfully paid. Once an invoice has been forgiven, it cannot be unforgiven or reopened."
                },
                {
                    name: "closed",
                    type: "String",
                    info: "Boolean representing whether an invoice is closed or not. To close an invoice, pass true."
                },
                {
                    name: "taxPercent",
                    type: "String",
                    info: "The percent tax rate applied to the invoice, represented as a decimal number."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "invoiceId",
                    type: "String",
                    info: "Invoice id."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "customer",
                    type: "String",
                    info: "The identifier of the customer whose invoices to return. If none is provided, all invoices will be returned."
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
            "name":"getInvoiceList",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "customer",
                    type: "String",
                    info: "The identifier of the customer whose invoices to return. If none is provided, all invoices will be returned."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "amount",
                    type: "Number",
                    info: "The integer amount in cents of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer’s account, pass a negative amount.",
                },
                {
                    name: "currency",
                    type: "String",
                    info: "3-letter ISO code for currency.",
                },
                {
                    name: "customer",
                    type: "String",
                    info: "The ID of the customer who will be billed when this invoice item is billed.",
                },
                {
                    name: "description",
                    type: "String",
                    info: "An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.",
                },
                {
                    name: "discountable",
                    type: "String",
                    info: "Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for all other invoice items.",
                },
                {
                    name: "invoice",
                    type: "String",
                    info: "The ID of an existing invoice to add this invoice item to. When left blank, the invoice item will be added to the next upcoming scheduled invoice. Use this when adding invoice items in response to an invoice.created webhook. You cannot add an invoice item to an invoice that has already been paid, attempted or closed.",
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to an invoice item object. It can be useful for storing additional information about the invoice item in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving."
                },
                {
                    name: "subscription",
                    type: "String",
                    info: "The ID of a subscription to add this invoice item to. When left blank, the invoice item will be be added to the next upcoming scheduled invoice. When set, scheduled invoices for subscriptions other than the specified subscription will ignore the invoice item. Use this when you want to express that an invoice item has been accrued within the context of a particular subscription."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "invoiceitem",
                    type: "String",
                    info: "The ID of the desired invoice item."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "itemId",
                    type: "String",
                    info: "Item id.",
                },
                {
                    name: "amount",
                    type: "Number",
                    info: "The integer amount in cents of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer's account, pass a negative amount."
                },
                {
                    name: "description",
                    type: "String",
                    info: "An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving."
                },
                {
                    name: "discountable",
                    type: "String",
                    info: "Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for all other invoice items. Cannot be set to true for prorations."
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to an invoice item object. It can be useful for storing additional information about the invoice item in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "invoiceitem",
                    type: "String",
                    info: "The ID of the desired invoice item."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "customer",
                    type: "String",
                    info: "The identifier of the customer whose invoice items to return. If none is provided, all invoice items will be returned."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "planId",
                    type: "String",
                    info: "Unique string of your choice that will be used to identify this plan when subscribing a customer. This could be an identifier like “gold” or a primary key from your own database."
                },
                {
                    name: "amount",
                    type: "String",
                    info: "A positive integer in cents (or 0 for a free plan) representing how much to charge (on a recurring basis)."
                },
                {
                    name: "currency",
                    type: "String",
                    info: "3-letter ISO code for currency."
                },
                {
                    name: "interval",
                    type: "String",
                    info: "Specifies billing frequency. Either day, week, month or year."
                },
                {
                    name: "name",
                    type: "String",
                    info: "Name of the plan, to be displayed on invoices and in the web interface."
                },
                {
                    name: "intervalCount",
                    type: "String",
                    info: "The number of intervals between each subscription billing. For example, interval=month and interval_count=3 bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks)."
                },
                {
                    name: "metadata",
                    type: "String",
                    info: "A set of key/value pairs that you can attach to a plan object. It can be useful for storing additional information about the plan in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving."
                },
                {
                    name: "statementDescriptor",
                    type: "String",
                    info: `An arbitrary string to be displayed on your customer’s credit card statement. This may be up to 22 characters. As an example, if your website is RunClub and the item you’re charging for is your Silver Plan, you may want to specify a statement_descriptor of RunClub Silver Plan. The statement description may not include <>"' characters, and will appear on your customer’s statement in capital letters. Non-ASCII characters are automatically stripped. While most banks display this information consistently, some may display it incorrectly or not at all.`
                },
                {
                    name: "trialPeriodDays",
                    type: "String",
                    info: "Specifies a trial period in (an integer number of) days. If you include a trial period, the customer won’t be billed for the first time until the trial period ends. If the customer cancels before the trial period is over, she’ll never be billed at all."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "planId",
                    type: "String",
                    info: "The ID of the desired plan."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "planId",
                    type: "String",
                    info: "The identifier of the plan to be updated."
                },
                {
                    name: "name",
                    type: "String",
                    info: "Name of the plan, to be displayed on invoices and in the web interface."
                },
                {
                    name: "metadata",
                    type: "String",
                    info: "A set of key/value pairs that you can attach to a plan object. It can be useful for storing additional information about the plan in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "planId",
                    type: "String",
                    info: "The identifier of the plan to be deleted."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "planId",
                    type: "String",
                    info: "The identifier of the plan to be deleted."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "applicationFeePercent",
                    type: "String",
                    info: "A positive decimal (with at most four decimal places) between 1 and 100. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner’s Stripe account. The request must be made with an OAuth key in order to set an application fee percentage."
                },
                {
                    name: "coupon",
                    type: "String",
                    info: "The code of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that particular subscription."
                },
                {
                    name: "customer",
                    type: "String",
                    info: "The identifier of the customer to subscribe."
                },
                {
                    name: "plan",
                    type: "String",
                    info: "The identifier of the plan to subscribe the customer to."
                },
                {
                    name: "source",
                    type: "JSON",
                    info: "The source can either be a token, like the ones returned by our Stripe.js, or a object containing a user's credit card details (with the options shown below). You must provide a source if the customer does not already have a valid source attached, and you are subscribing the customer for a plan that is not free. Passing source will create a new source object, make it the customer default source, and delete the old customer default if one exists. If you want to add an additional source to use with subscriptions, instead use the card creation API to add the card and then the customer update API to set it as the default. Whenever you attach a card to a customer, Stripe will automatically validate the card."
                },
                {
                    name: "quantity",
                    type: "Number",
                    info: "The quantity you'd like to apply to the subscription you're creating. For example, if your plan is $10/user/month, and your customer has 5 users, you could pass 5 as the quantity to have the customer charged $50 (5 x $10) monthly. If you update a subscription but don't change the plan ID (e.g. changing only the trial_end), the subscription will inherit the old subscription's quantity attribute unless you pass a new quantity parameter. If you update a subscription and change the plan ID, the new subscription will not inherit the quantity attribute and will default to 1 unless you pass a quantity parameter."
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to a subscription object. It can be useful for storing additional information about the subscription in a structured format."
                },
                {
                    name: "taxPercent",
                    type: "String",
                    info: "A positive decimal (with at most four decimal places) between 1 and 100. This represents the percentage of the subscription invoice subtotal that will be calculated and added as tax to the final amount each billing period. For example, a plan which charges $10/month with a tax_percent of 20.0 will charge $12 per invoice."
                },
                {
                    name: "trialEnd",
                    type: "String",
                    info: "Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. If set, trial_end will override the default trial period of the plan the customer is being subscribed to. The special value now can be provided to end the customer's trial immediately."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "subscriptionId",
                    type: "String",
                    info: "ID of subscription to retrieve."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "subscriptionId",
                    type: "String",
                    info: "ID of subscription to updated."
                },
                {
                    name: "applicationFeePercent",
                    type: "String",
                    info: "A positive decimal (with at most four decimal places) between 1 and 100. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner’s Stripe account. The request must be made with an OAuth key in order to set an application fee percentage."
                },
                {
                    name: "coupon",
                    type: "String",
                    info: "The code of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that particular subscription."
                },
                {
                    name: "customer",
                    type: "String",
                    info: "The identifier of the customer to subscribe."
                },
                {
                    name: "plan",
                    type: "String",
                    info: "The identifier of the plan to subscribe the customer to."
                },
                {
                    name: "source",
                    type: "JSON",
                    info: "The source can either be a token, like the ones returned by our Stripe.js, or a object containing a user's credit card details (with the options shown below). You must provide a source if the customer does not already have a valid source attached, and you are subscribing the customer for a plan that is not free. Passing source will create a new source object, make it the customer default source, and delete the old customer default if one exists. If you want to add an additional source to use with subscriptions, instead use the card creation API to add the card and then the customer update API to set it as the default. Whenever you attach a card to a customer, Stripe will automatically validate the card."
                },
                {
                    name: "quantity",
                    type: "Number",
                    info: "The quantity you'd like to apply to the subscription you're creating. For example, if your plan is $10/user/month, and your customer has 5 users, you could pass 5 as the quantity to have the customer charged $50 (5 x $10) monthly. If you update a subscription but don't change the plan ID (e.g. changing only the trial_end), the subscription will inherit the old subscription's quantity attribute unless you pass a new quantity parameter. If you update a subscription and change the plan ID, the new subscription will not inherit the quantity attribute and will default to 1 unless you pass a quantity parameter."
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A set of key/value pairs that you can attach to a subscription object. It can be useful for storing additional information about the subscription in a structured format."
                },
                {
                    name: "taxPercent",
                    type: "String",
                    info: "A positive decimal (with at most four decimal places) between 1 and 100. This represents the percentage of the subscription invoice subtotal that will be calculated and added as tax to the final amount each billing period. For example, a plan which charges $10/month with a tax_percent of 20.0 will charge $12 per invoice."
                },
                {
                    name: "trialEnd",
                    type: "String",
                    info: "Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. If set, trial_end will override the default trial period of the plan the customer is being subscribed to. The special value now can be provided to end the customer's trial immediately."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "subscriptionId",
                    type: "String",
                    info: "ID of subscription to retrieve."
                },
                {
                    name: "atPeriodEnd",
                    type: "String",
                    info: "A flag that if set to true will delay the cancellation of the subscription until the end of the current period."
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
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Stripe.",
                },
                {
                    name: "subscriptionId",
                    type: "String",
                    info: "ID of subscription to retrieve."
                },
                {
                    name: "customer",
                    type: "String",
                    info: "The ID of the customer whose subscriptions will be retrieved"
                },
                {
                    name: "plan",
                    type: "String",
                    info: "The ID of the plan whose subscriptions will be retrieved"
                },
                {
                    name: "status",
                    type: "String",
                    info: "The status of the subscriptions to retrieve. One of: trialing, active, past_due, unpaid, canceled, or all. Passing in a value of canceled will return all canceled subscriptions, including those belonging to deleted customers. Passing in a value of all will return subscriptions of all statuses."
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
