# Stripe Package
This blocks allows you to translates a sting of text from one language to another
* Domain: stripe.com
* Credentials: apiKey.

## How to get credentials: 
0. Sign in [stripe dashboard](https://dashboard.stripe.com/dashboard). 
1. Go to [your account settings](https://dashboard.stripe.com/account).
2. Choose [*API Keys* folder](https://dashboard.stripe.com/account/apikeys).
3. Copy and save your *Secret Key*.

## TOC: 
* [getAccountBalance](#getAccountBalance)
* [getBalanceHistory](#getBalanceHistory)
* [createCharge](#createCharge)
* [createCustomer](#createCustomer)
* [getBalanceTransaction](#getBalanceTransaction)
* [getCharge](#getCharge)
* [updateCharge](#updateCharge)
* [captureCharge](#captureCharge)
* [getChargesList](#getChargesList)
* [getCustomer](#getCustomer)
* [updateCustomer](#updateCustomer)
* [getBalanceTransaction](#getBalanceTransaction)
* [deleteCustomer](#deleteCustomer)
* [getCustomerList](#getCustomerList)
* [getDispute](#getDispute)
* [updateDispute](#updateDispute)
* [closeDispute](#closeDispute)
* [getDisputes](#getDisputes)
* [getEvent](#getEvent)
* [getEventList](#getEventList)
* [createFileUpload](#createFileUpload)
* [createRefund](#createRefund)
* [getRefund](#getRefund)
* [updateRefund](#updateRefund)
* [getRefundList](#getRefundList)
* [createCardToken](#createCardToken)
* [createBankAccountToken](#createBankAccountToken)
* [createPiiToken](#createPiiToken)
* [getToken](#getToken)
* [createTransfer](#createTransfer)
* [getTransfer](#getTransfer)
* [updateTransfer](#updateTransfer)
* [getTransferList](#getTransferList)
* [createTransferReversal](#createTransferReversal)
* [getTransferReversal](#getTransferReversal)
* [updateTransferReversal](#updateTransferReversal)
* [getTransferReversalList](#getTransferReversalList)
* [createAccount](#createAccount)
* [getAccount](#getAccount)
* [updateAccount](#updateAccount)
* [deleteAccount](#deleteAccount)
* [rejectAccount](#rejectAccount)
* [getAccountList](#getAccountList)
* [createFeeRefund](#createFeeRefund)
* [getFeeRefund](#getFeeRefund)
* [updateFeeRefund](#updateFeeRefund)
* [getFeeRefundList](#getFeeRefundList)
* [getApplicationFee](#getApplicationFee)
* [getApplicationFeeList](#getApplicationFeeList)
* [getCountrySpecsList](#getCountrySpecsList)
* [getCountrySpec](#getCountrySpec)
* [createBankAccount](#createBankAccount)
* [getBankAccount](#getBankAccount)
* [updateBankAccount](#updateBankAccount)
* [deleteBankAccount](#deleteBankAccount)
* [getBankAccountList](#getBankAccountList)
* [createCard](#createCard)
* [getCard](#getCard)
* [updateCard](#updateCard)
* [deleteCard](#deleteCard)
* [getCardList](#getCardList)
* [createReceiver](#createReceiver)
* [getReceiver](#getReceiver)
* [getReceiverList](#getReceiverList)
* [createOrder](#createOrder)
* [getOrder](#getOrder)
* [updateOrder](#updateOrder)
* [payOrder](#payOrder)
* [getOrderList](#getOrderList)
* [returnOrder](#returnOrder)
* [getOrderReturn](#getOrderReturn)
* [getOrderReturnList](#getOrderReturnList)
* [createProduct](#createProduct)
* [getProduct](#getProduct)
* [updateProduct](#updateProduct)
* [getProductList](#getProductList)
* [deleteProduct](#deleteProduct)
* [createSKU](#createSKU)
* [getSKU](#getSKU)
* [updateSKU](#updateSKU)
* [getSKUList](#getSKUList)
* [deleteSKU](#deleteSKU)
* [createCoupon](#createCoupon)
* [getCoupon](#getCoupon)
* [updateCoupon](#updateCoupon)
* [deleteCoupon](#deleteCoupon)
* [getCouponList](#getCouponList)
* [deleteCustomerDiscount](#deleteCustomerDiscount)
* [deleteSubscriptionDiscount](#deleteSubscriptionDiscount)
* [createInvoice](#createInvoice)
* [getInvoice](#getInvoice)
* [getInvoiceLineItems](#getInvoiceLineItems)
* [updateInvoice](#updateInvoice)
* [payInvoice](#payInvoice)
* [getInvoiceList](#getInvoiceList)
* [getInvoiceList](#getInvoiceList)
* [createInvoiceItem](#createInvoiceItem)
* [getInvoiceItem](#getInvoiceItem)
* [updateInvoiceItem](#updateInvoiceItem)
* [deleteInvoiceItem](#deleteInvoiceItem)
* [getInvoiceItemsList](#getInvoiceItemsList)
* [createPlan](#createPlan)
* [getPlan](#getPlan)
* [updatePlan](#updatePlan)
* [deletePlan](#deletePlan)
* [getPlanList](#getPlanList)
* [createSubscription](#createSubscription)
* [getSubscription](#getSubscription)
* [updateSubscription](#updateSubscription)
* [cancelSubscription](#cancelSubscription)
* [getSubscriptionList](#getSubscriptionList)
 
<a name="getAccountBalance"/>
## Stripe.getAccountBalance
Retrieves the current account balance, based on the authentication that was used to make the request.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| The api key obtained from Stripe.

#### Request example
```json
{	
	"apiKey": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "object": "balance",
			  "available": [
			    {
			      "currency": "aud",
			      "amount": -88,
			      "source_types": {
			        "card": -88
			      }
			    },
			    {
			      "currency": "jpy",
			      "amount": -40320,
			      "source_types": {
			        "card": -40320
			      }
			    },
			    {
			      "currency": "usd",
			      "amount": 13702549683,
			      "source_types": {
			        "card": 13598002733,
			        "bank_account": 103002760,
			        "bitcoin_receiver": 1544190
			      }
			    }
			  ],
			  "livemode": false,
			  "pending": [
			    {
			      "currency": "aud",
			      "amount": 0,
			      "source_types": {
			        "card": 0
			      }
			    },
			    {
			      "currency": "jpy",
			      "amount": 0,
			      "source_types": {
			        "card": 0
			      }
			    },
			    {
			      "currency": "usd",
			      "amount": 396093624,
			      "source_types": {
			        "card": 396093624,
			        "bank_account": 0,
			        "bitcoin_receiver": 0
			      }
			    }
			  ]
			}
		}
	}
}
```

<a name="getBalanceHistory"/>
## Stripe.getBalanceHistory
Returns a list of transactions that have contributed to the Stripe account balance (e.g., charges, transfers, and so forth). The transactions are returned in sorted order, with the most recent transactions appearing first.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| The api key obtained from Stripe.
| currency     | String     | 3-letter ISO code for currency.
| startingAfter| String     | A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
| limit        | Number     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| type         | String     | Only returns transactions of the given type. One of: `charge`, `refund`, `adjustment`, `application_fee`, `application_fee_refund`, `transfer`, or `transfer_failure`

#### Request example
```json
{	
	"apiKey": "...",
	"currency": "usd",
	"startingAfter": "...",
	"limit": 3,
	"type": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "object": "list",
			  "url": "/v1/balance/history",
			  "has_more": false,
			  "data": [
			    {
			      "id": "txn_18tiU12eZvKYlo2CetxoRTDG",
			      "object": "balance_transaction",
			      "amount": 5001,
			      "available_on": 1474416000,
			      "created": 1473879105,
			      "currency": "usd",
			      "description": "User: 813. Events: 1267. Total Tickets: 1.",
			      "fee": 175,
			      "fee_details": [
			        {
			          "amount": 175,
			          "application": null,
			          "currency": "usd",
			          "description": "Stripe processing fees",
			          "type": "stripe_fee"
			        }
			      ],
			      "net": 4826,
			      "source": "ch_18tiU12eZvKYlo2CliINmYLR",
			      "sourced_transfers": {
			        "object": "list",
			        "data": [],
			        "has_more": false,
			        "total_count": 0,
			        "url": "/v1/transfers?source_transaction=ch_18tiU12eZvKYlo2CliINmYLR"
			      },
			      "status": "pending",
			      "type": "charge"
			    },
			    {...},
			    {...}
			  ]
			}
		}
	}
}
```

<a name="createCharge"/>
## Stripe.createCharge
To charge a credit card, you create a charge object. If your API key is in test mode, the supplied payment source (e.g., card or Bitcoin receiver) won't actually be charged, though everything else will occur as if in live mode. (Stripe assumes that the charge would have completed successfully).

| Field              | Type       | Description
|--------------------|------------|----------
| apiKey             | credentials| The api key obtained from Stripe.
| amount             | String     | A positive integer in the smallest currency unit (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a 0-decimal currency) representing how much to charge the card. The minimum amount is $0.50 US or equivalent in charge currency.
| currency           | String     | 3-letter ISO code for currency.
| capture            | String     | Whether or not to immediately capture the charge. When false, the charge issues an authorization (or pre-authorization), and will need to be captured later. Uncaptured charges expire in 7 days. For more information, see authorizing charges and settling later.
| description        | String     | An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the description of the charge(s) that they are describing.
| receiptEmail       | String     | The email address to send this charge's receipt to. The receipt will not be sent until the charge is paid. If this charge is for a customer, the email address specified here will override the customer's email address. Receipts will not be sent for test mode charges. If `receipt_email` is specified for a charge in live mode, a receipt will be sent regardless of your email settings.
| customer           | String     | The ID of an existing customer that will be charged in this request.
| source             | String     | A payment source to be charged, such as a credit card. If you also pass a customer ID, the source must be the ID of a source belonging to the customer. Otherwise, if you do not pass a customer ID, the source you provide must either be a token, like the ones returned by Stripe.js, or a object containing a user's credit card details, with the options described below. Although not all information is required, the extra info helps prevent fraud.child attributes
| statementDescriptor| String     | An arbitrary string to be displayed on your customer`s credit card statement. This may be up to 22 characters. As an example, if your website is RunClub and the item you`re charging for is a race ticket, you may want to specify a statement_descriptor of RunClub 5K race ticket. The statement description may not include <> characters, and will appear on your customer`s statement in capital letters. Non-ASCII characters are automatically stripped. While most banks display this information consistently, some may display it incorrectly or not at all.

#### Request example
```json
{	
	"apiKey": "...",
	"amount": 2000,
	"currency": "usd",
	"source": "tok_189fTS2eZvKYlo2CcYJIOGkr",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "ch_18zQ402eZvKYlo2CvQYLBOJ4",
			  "object": "charge",
			  "amount": 999,
			  "amount_refunded": 0,
			  "application_fee": null,
			  "balance_transaction": "txn_18tiU12eZvKYlo2CetxoRTDG",
			  "captured": true,
			  "created": 1475238268,
			  "currency": "usd",
			  "customer": "cus_96kH68CmcC5XcM",
			  "description": null,
			  "destination": null,
			  "dispute": null,
			  "failure_code": null,
			  "failure_message": null,
			  "fraud_details": {
			  },
			  "invoice": "in_18zP7g2eZvKYlo2CUqGHFAlX",
			  "livemode": false,
			  "metadata": {
			  },
			  "order": null,
			  "paid": true,
			  "receipt_email": null,
			  "receipt_number": null,
			  "refunded": false,
			  "refunds": {
			    "object": "list",
			    "data": [

			    ],
			    "has_more": false,
			    "total_count": 0,
			    "url": "/v1/charges/ch_18zQ402eZvKYlo2CvQYLBOJ4/refunds"
			  },
			  "shipping": null,
			  "source": {
			    "id": "card_18oWmJ2eZvKYlo2CApIJRrtd",
			    "object": "card",
			    "address_city": null,
			    "address_country": null,
			    "address_line1": null,
			    "address_line1_check": null,
			    "address_line2": null,
			    "address_state": null,
			    "address_zip": null,
			    "address_zip_check": null,
			    "brand": "Visa",
			    "country": "US",
			    "customer": "cus_96kH68CmcC5XcM",
			    "cvc_check": null,
			    "dynamic_last4": null,
			    "exp_month": 12,
			    "exp_year": 2017,
			    "funding": "credit",
			    "last4": "4242",
			    "metadata": {
			    },
			    "name": null,
			    "tokenization_method": null
			  },
			  "source_transfer": null,
			  "statement_descriptor": null,
			  "status": "succeeded"
			}
		}
	}
}
```

<a name="createCustomer"/>
## Stripe.createCustomer
Creates a new customer object.

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| The api key obtained from Stripe.
| source        | String     | The source can either be a token, like the ones returned by our Stripe.js, or a dictionary containing a user’s credit card details (with the options shown below).child arguments
| accountBalance| String     | An integer amount in cents that is the starting account balance for your customer. A negative amount represents a credit that will be used before attempting any charges to the customer’s card; a positive amount will be added to the next invoice.
| businessVatId | String     | The customer’s VAT identification number. If you are using Relay, this field gets passed to tax provider you are using for your orders. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| coupon        | String     | If you provide a coupon code, the customer will have a discount applied on all recurring charges. Charges you create through the API will not have the discount.
| description   | String     | An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| email         | String     | Customer’s email address. It’s displayed alongside the customer in your dashboard and can be useful for searching and tracking. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| metadata      | JSON       | A set of key/value pairs that you can attach to a customer object. It can be useful for storing additional information about the customer in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| plan          | String     | The identifier of the plan to subscribe the customer to. If provided, the returned customer object will have a list of subscriptions that the customer is currently subscribed to. If you subscribe a customer to a plan without a free trial, the customer must have a valid card as well.
| taxPercent    | String     | A positive decimal (with at most four decimal places) between 1 and 100. This represents the percentage of the subscription invoice subtotal that will be calculated and added as tax to the final amount each billing period. For example, a plan which charges $10/month with a tax_percent of 20.0 will charge $12 per invoice. Can only be used if a plan is provided.
| trialEnd      | String     | Unix timestamp representing the end of the trial period the customer will get before being charged. If set, trial_end will override the default trial period of the plan the customer is being subscribed to. The special value now can be provided to end the customer’s trial immediately. Only applies when the plan parameter is also provided.

#### Request example
```json
{	
	"apiKey": "...",
	"source": "tok_189fTS2eZvKYlo2CcYJIOGkr",
	"description": "Customer for andrew.martinez@example.com",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "cus_9I04eaA61hXf5W",
			  "object": "customer",
			  "account_balance": 0,
			  "created": 1475238307,
			  "currency": "usd",
			  "default_source": "card_18zQ422eZvKYlo2CIznAqoaV",
			  "delinquent": false,
			  "description": "Emily Martin",
			  "discount": null,
			  "email": "emily.martin.57@example.com",
			  "livemode": false,
			  "metadata": {
			  },
			  "shipping": null,
			  "sources": {
			    "object": "list",
			    "data": [
			      {
			        "id": "card_18zQ422eZvKYlo2CIznAqoaV",
			        "object": "card",
			        "address_city": null,
			        "address_country": null,
			        "address_line1": null,
			        "address_line1_check": null,
			        "address_line2": null,
			        "address_state": null,
			        "address_zip": null,
			        "address_zip_check": null,
			        "brand": "Visa",
			        "country": "US",
			        "customer": "cus_9I04eaA61hXf5W",
			        "cvc_check": "pass",
			        "dynamic_last4": null,
			        "exp_month": 12,
			        "exp_year": 2017,
			        "funding": "credit",
			        "last4": "4242",
			        "metadata": {
			        },
			        "name": null,
			        "tokenization_method": null
			      }
			    ],
			    "has_more": false,
			    "total_count": 1,
			    "url": "/v1/customers/cus_9I04eaA61hXf5W/sources"
			  },
			  "subscriptions": {
			    "object": "list",
			    "data": [

			    ],
			    "has_more": false,
			    "total_count": 0,
			    "url": "/v1/customers/cus_9I04eaA61hXf5W/subscriptions"
			  }
			}
		}
	}
}
```

<a name="getBalanceTransaction"/>
## Stripe.getBalanceTransaction
Retrieves the balance transaction with the given ID.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| The api key obtained from Stripe.
| id    | credentials| The ID of the desired balance transaction (as found on any API object that affects the balance, e.g. a charge or transfer).

#### Request example
```json
{	
	"apiKey": "...",
	"id": "txn_18tiU12eZvKYlo2CetxoRTDG"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "txn_18tiU12eZvKYlo2CetxoRTDG",
			  "object": "balance_transaction",
			  "amount": 5001,
			  "available_on": 1474416000,
			  "created": 1473879105,
			  "currency": "usd",
			  "description": "User: 813. Events: 1267. Total Tickets: 1.",
			  "fee": 175,
			  "fee_details": [
			    {
			      "amount": 175,
			      "application": null,
			      "currency": "usd",
			      "description": "Stripe processing fees",
			      "type": "stripe_fee"
			    }
			  ],
			  "net": 4826,
			  "source": "ch_18tiU12eZvKYlo2CliINmYLR",
			  "sourced_transfers": {
			    "object": "list",
			    "data": [

			    ],
			    "has_more": false,
			    "total_count": 0,
			    "url": "/v1/transfers?source_transaction=ch_18tiU12eZvKYlo2CliINmYLR"
			  },
			  "status": "pending",
			  "type": "charge"
			}
		}
	}
}
```

<a name="getCharge"/>
## Stripe.getCharge
Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Stripe will return the corresponding charge information. The same information is returned when creating or refunding the charge.

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| chargeId| String     | The identifier of the charge to be retrieved.

#### Request example
```json
{	
	"apiKey": "...",
	"chargeId": "ch_18zQ402eZvKYlo2CvQYLBOJ4"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "ch_18zQ402eZvKYlo2CvQYLBOJ4",
			  "object": "charge",
			  "amount": 999,
			  "amount_refunded": 0,
			  "application_fee": null,
			  "balance_transaction": "txn_18tiU12eZvKYlo2CetxoRTDG",
			  "captured": true,
			  "created": 1475238268,
			  "currency": "usd",
			  "customer": "cus_96kH68CmcC5XcM",
			  "description": null,
			  "destination": null,
			  "dispute": null,
			  "failure_code": null,
			  "failure_message": null,
			  "fraud_details": {
			  },
			  "invoice": "in_18zP7g2eZvKYlo2CUqGHFAlX",
			  "livemode": false,
			  "metadata": {
			  },
			  "order": null,
			  "paid": true,
			  "receipt_email": null,
			  "receipt_number": null,
			  "refunded": false,
			  "refunds": {
			    "object": "list",
			    "data": [],
			    "has_more": false,
			    "total_count": 0,
			    "url": "/v1/charges/ch_18zQ402eZvKYlo2CvQYLBOJ4/refunds"
			  },
			  "shipping": null,
			  "source": {
			    "id": "card_18oWmJ2eZvKYlo2CApIJRrtd",
			    "object": "card",
			    "address_city": null,
			    "address_country": null,
			    "address_line1": null,
			    "address_line1_check": null,
			    "address_line2": null,
			    "address_state": null,
			    "address_zip": null,
			    "address_zip_check": null,
			    "brand": "Visa",
			    "country": "US",
			    "customer": "cus_96kH68CmcC5XcM",
			    "cvc_check": null,
			    "dynamic_last4": null,
			    "exp_month": 12,
			    "exp_year": 2017,
			    "funding": "credit",
			    "last4": "4242",
			    "metadata": {
			    },
			    "name": null,
			    "tokenization_method": null
			  },
			  "source_transfer": null,
			  "statement_descriptor": null,
			  "status": "succeeded"
			}
		}
	}
}
```

<a name="updateCharge"/>
## Stripe.updateCharge
Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
This request accepts only the `description`, `metadata`, `receipt_email`, `fraud_details`, and `shipping` as arguments.

| Field       | Type       | Description
|-------------|------------|----------
| apiKey      | credentials| The api key obtained from Stripe.
| chargeId    | String     | Id of a charge.
| description | String     | An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the description of the charge(s) that they are describing.
| receiptEmail| String     | The email address to send this charge's receipt to. The receipt will not be sent until the charge is paid. If this charge is for a customer, the email address specified here will override the customer's email address. Receipts will not be sent for test mode charges. If `receipt_email` is specified for a charge in live mode, a receipt will be sent regardless of your email settings.
| fraudDetails| JSON       | A set of key/value pairs you can attach to a charge giving information about its riskiness. If you believe a charge is fraudulent, include a user_report key with a value of fraudulent. If you believe a charge is safe, include a user_report key with a value of safe. Note that you must refund a charge before setting the user_report to fraudulent. Stripe will use the information you send to improve our fraud detection algorithms.
| metadata    | JSON       | A set of key/value pairs that you can attach to a charge object. It can be useful for storing additional information about the charge in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.
| shipping    | String     | Shipping information for the charge. Helps prevent fraud on charges for physical goods.

#### Request example
```json
{	
	"apiKey": "...",
	"description": "Charge for andrew.martinez@example.com",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "id": "ch_18zQ402eZvKYlo2CvQYLBOJ4",
			  "object": "charge",
			  "amount": 999,
			  "amount_refunded": 0,
			  "application_fee": null,
			  "balance_transaction": "txn_18tiU12eZvKYlo2CetxoRTDG",
			  "captured": true,
			  "created": 1475238268,
			  "currency": "usd",
			  "customer": "cus_96kH68CmcC5XcM",
			  "description": "Charge for andrew.martinez@example.com",
			  "destination": null,
			  "dispute": null,
			  "failure_code": null,
			  "failure_message": null,
			  "fraud_details": {
			  },
			  "invoice": "in_18zP7g2eZvKYlo2CUqGHFAlX",
			  "livemode": false,
			  "metadata": {
			  },
			  "order": null,
			  "paid": true,
			  "receipt_email": null,
			  "receipt_number": null,
			  "refunded": false,
			  "refunds": {
			    "object": "list",
			    "data": [],
			    "has_more": false,
			    "total_count": 0,
			    "url": "/v1/charges/ch_18zQ402eZvKYlo2CvQYLBOJ4/refunds"
			  },
			  "shipping": null,
			  "source": {
			    "id": "card_18oWmJ2eZvKYlo2CApIJRrtd",
			    "object": "card",
			    "address_city": null,
			    "address_country": null,
			    "address_line1": null,
			    "address_line1_check": null,
			    "address_line2": null,
			    "address_state": null,
			    "address_zip": null,
			    "address_zip_check": null,
			    "brand": "Visa",
			    "country": "US",
			    "customer": "cus_96kH68CmcC5XcM",
			    "cvc_check": null,
			    "dynamic_last4": null,
			    "exp_month": 12,
			    "exp_year": 2017,
			    "funding": "credit",
			    "last4": "4242",
			    "metadata": {
			    },
			    "name": null,
			    "tokenization_method": null
			  },
			  "source_transfer": null,
			  "statement_descriptor": null,
			  "status": "succeeded"
			}
		}
	}
}
```

<a name="captureCharge"/>
## Stripe.captureCharge
Capture the payment of an existing, uncaptured, charge. This is the second half of the two-step payment flow, where first you created a charge with the capture option set to false.
Uncaptured payments expire exactly seven days after they are created. If they are not captured by that point in time, they will be marked as refunded and will no longer be capturable.

| Field              | Type       | Description
|--------------------|------------|----------
| apiKey             | credentials| The api key obtained from Stripe.
| chargeId           | String     | Id of a charge.
| amount             | String     | The amount to capture, which must be less than or equal to the original amount. Any additional amount will be automatically refunded.
| applicationFee     | String     | An application fee to add on to this charge. Can only be used with Stripe Connect.
| receiptEmail       | credentials| The email address to send this charge’s receipt to. This will override the previously-specified email address for this charge, if one was set. Receipts will not be sent in test mode.
| statementDescriptor| credentials| An arbitrary string to be displayed on your customer’s credit card statement. This may be up to 22 characters. As an example, if your website is RunClub and the item you’re charging for is a race ticket, you may want to specify a statement_descriptor of RunClub 5K race ticket. The statement description may not include <> characters, and will appear on your customer’s statement in capital letters. Non-ASCII characters are automatically stripped. Updating this value will overwrite the previous statement descriptor of this charge. While most banks display this information consistently, some may display it incorrectly or not at all

#### Request example
```json
{	
	"apiKey": "...",
	"chargeId": "sk_test_BQokikJOvBiI2HlWgH4olfQ2",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "ch_18zQ402eZvKYlo2CvQYLBOJ4",
			  "object": "charge",
			  "amount": 999,
			  "amount_refunded": 0,
			  "application_fee": null,
			  "balance_transaction": "txn_18tiU12eZvKYlo2CetxoRTDG",
			  "captured": "true",
			  "created": 1475238268,
			  "currency": "usd",
			  "customer": "cus_96kH68CmcC5XcM",
			  "description": null,
			  "destination": null,
			  "dispute": null,
			  "failure_code": null,
			  "failure_message": null,
			  "fraud_details": {
			  },
			  "invoice": "in_18zP7g2eZvKYlo2CUqGHFAlX",
			  "livemode": false,
			  "metadata": {
			  },
			  "order": null,
			  "paid": true,
			  "receipt_email": null,
			  "receipt_number": null,
			  "refunded": false,
			  "refunds": {
			    "object": "list",
			    "data": [ ],
			    "has_more": false,
			    "total_count": 0,
			    "url": "/v1/charges/ch_18zQ402eZvKYlo2CvQYLBOJ4/refunds"
			  },
			  "shipping": null,
			  "source": {
			    "id": "card_18oWmJ2eZvKYlo2CApIJRrtd",
			    "object": "card",
			    "address_city": null,
			    "address_country": null,
			    "address_line1": null,
			    "address_line1_check": null,
			    "address_line2": null,
			    "address_state": null,
			    "address_zip": null,
			    "address_zip_check": null,
			    "brand": "Visa",
			    "country": "US",
			    "customer": "cus_96kH68CmcC5XcM",
			    "cvc_check": null,
			    "dynamic_last4": null,
			    "exp_month": 12,
			    "exp_year": 2017,
			    "funding": "credit",
			    "last4": "4242",
			    "metadata": {
			    },
			    "name": null,
			    "tokenization_method": null
			  },
			  "source_transfer": null,
			  "statement_descriptor": null,
			  "status": "succeeded"
			}
		}
	}
}
```

<a name="getChargesList"/>
## Stripe.getChargesList
Returns a list of charges you’ve previously created. The charges are returned in sorted order, with the most recent charges appearing first.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| The api key obtained from Stripe.
| created      | String     | A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options: child arguments
| customer     | String     | Only return charges for the customer specified by this customer ID.
| endingBefore | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| limit        | String     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| source       | String     | A filter on the list based on the source of the charge. The value can be a dictionary with the following options:
| startingAfter| String     | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

#### Request example
```json
{	
	"apiKey": "...",
	"limit": 3,
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "object": "list",
			  "url": "/v1/charges",
			  "has_more": false,
			  "data": [
			    {
			      "id": "ch_1904tu2eZvKYlo2C6CJe9Ina",
			      "object": "charge",
			      "amount": 999,
			      "amount_refunded": 0,
			      "application_fee": null,
			      "balance_transaction": "txn_18tiU12eZvKYlo2CetxoRTDG",
			      "captured": true,
			      "created": 1475395246,
			      "currency": "usd",
			      "customer": "cus_97QRFcUnI0a31P",
			      "description": null,
			      "destination": null,
			      "dispute": null,
			      "failure_code": null,
			      "failure_message": null,
			      "fraud_details": {
			      },
			      "invoice": "in_1903xi2eZvKYlo2CpcZ4ix6n",
			      "livemode": false,
			      "metadata": {
			      },
			      "order": null,
			      "paid": true,
			      "receipt_email": null,
			      "receipt_number": null,
			      "refunded": false,
			      "refunds": {
			        "object": "list",
			        "data": [ ],
			        "has_more": false,
			        "total_count": 0,
			        "url": "/v1/charges/ch_1904tu2eZvKYlo2C6CJe9Ina/refunds"
			      },
			      "shipping": null,
			      "source": {
			        "id": "card_18pBYv2eZvKYlo2CbcTNGZN4",
			        "object": "card",
			        "address_city": null,
			        "address_country": null,
			        "address_line1": null,
			        "address_line1_check": null,
			        "address_line2": null,
			        "address_state": null,
			        "address_zip": null,
			        "address_zip_check": null,
			        "brand": "Visa",
			        "country": "US",
			        "customer": "cus_97QRFcUnI0a31P",
			        "cvc_check": null,
			        "dynamic_last4": null,
			        "exp_month": 12,
			        "exp_year": 2017,
			        "funding": "credit",
			        "last4": "4242",
			        "metadata": {
			        },
			        "name": null,
			        "tokenization_method": null
			      },
			      "source_transfer": null,
			      "statement_descriptor": null,
			      "status": "succeeded"
			    },
			    {...},
			    {...}
			  ]
			}
		}
	}
}
```

<a name="getCustomer"/>
## Stripe.getCustomer
Retrieves the details of an existing customer. You need only supply the unique customer identifier that was returned upon customer creation.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| The api key obtained from Stripe.
| customerId| String     | The identifier of the customer to be retrieved.

#### Request example
```json
{	
	"apiKey": "...",
	"customerId": "sk_test_BQokikJOvBiI2HlWgH4olfQ2"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "cus_9I04eaA61hXf5W",
			  "object": "customer",
			  "account_balance": 0,
			  "created": 1475238307,
			  "currency": "usd",
			  "default_source": "card_18zQ422eZvKYlo2CIznAqoaV",
			  "delinquent": false,
			  "description": "Emily Martin",
			  "discount": null,
			  "email": "emily.martin.57@example.com",
			  "livemode": false,
			  "metadata": {
			  },
			  "shipping": null,
			  "sources": {
			    "object": "list",
			    "data": [
			      {
			        "id": "card_18zQ422eZvKYlo2CIznAqoaV",
			        "object": "card",
			        "address_city": null,
			        "address_country": null,
			        "address_line1": null,
			        "address_line1_check": null,
			        "address_line2": null,
			        "address_state": null,
			        "address_zip": null,
			        "address_zip_check": null,
			        "brand": "Visa",
			        "country": "US",
			        "customer": "cus_9I04eaA61hXf5W",
			        "cvc_check": "pass",
			        "dynamic_last4": null,
			        "exp_month": 12,
			        "exp_year": 2017,
			        "funding": "credit",
			        "last4": "4242",
			        "metadata": {
			        },
			        "name": null,
			        "tokenization_method": null
			      }
			    ],
			    "has_more": false,
			    "total_count": 1,
			    "url": "/v1/customers/cus_9I04eaA61hXf5W/sources"
			  },
			  "subscriptions": {
			    "object": "list",
			    "data": [ ],
			    "has_more": false,
			    "total_count": 0,
			    "url": "/v1/customers/cus_9I04eaA61hXf5W/subscriptions"
			  }
			}
		}
	}
}
```

<a name="updateCustomer"/>
## Stripe.updateCustomer
Updates the specified customer by setting the values of the parameters passed. Any parameters not provided will be left unchanged. For example, if you pass the source parameter, that becomes the customer's active source (e.g., a card) to be used for all charges in the future. When you update a customer to a new valid source: for each of the customer's current subscriptions, if the subscription is in the past_due state, then the latest unpaid, unclosed invoice for the subscription will be retried (note that this retry will not count as an automatic retry, and will not affect the next regularly scheduled payment for the invoice). (Note also that no invoices pertaining to subscriptions in the unpaid state, or invoices pertaining to canceled subscriptions, will be retried as a result of updating the customer's source.)
This request accepts mostly the same arguments as the customer creation call.

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| The api key obtained from Stripe.
| customerId    | String     | If of customer to update.
| source        | String     | The source can either be a token, like the ones returned by our Stripe.js, or a dictionary containing a user’s credit card details (with the options shown below).child arguments
| accountBalance| String     | An integer amount in cents that is the starting account balance for your customer. A negative amount represents a credit that will be used before attempting any charges to the customer’s card; a positive amount will be added to the next invoice.
| businessVatId | String     | The customer’s VAT identification number. If you are using Relay, this field gets passed to tax provider you are using for your orders. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| coupon        | String     | If you provide a coupon code, the customer will have a discount applied on all recurring charges. Charges you create through the API will not have the discount.
| description   | String     | An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| email         | String     | Customer’s email address. It’s displayed alongside the customer in your dashboard and can be useful for searching and tracking. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| metadata      | JSON       | A set of key/value pairs that you can attach to a customer object. It can be useful for storing additional information about the customer in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| plan          | String     | The identifier of the plan to subscribe the customer to. If provided, the returned customer object will have a list of subscriptions that the customer is currently subscribed to. If you subscribe a customer to a plan without a free trial, the customer must have a valid card as well.
| taxPercent    | String     | A positive decimal (with at most four decimal places) between 1 and 100. This represents the percentage of the subscription invoice subtotal that will be calculated and added as tax to the final amount each billing period. For example, a plan which charges $10/month with a tax_percent of 20.0 will charge $12 per invoice. Can only be used if a plan is provided.
| trialEnd      | String     | Unix timestamp representing the end of the trial period the customer will get before being charged. If set, trial_end will override the default trial period of the plan the customer is being subscribed to. The special value now can be provided to end the customer’s trial immediately. Only applies when the plan parameter is also provided.

#### Request example
```json
{	
	"apiKey": "...",
	"customerId": "cus_9I04eaA61hXf5W",
	"description": "Test",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "cus_9I04eaA61hXf5W",
			  "object": "customer",
			  "account_balance": 0,
			  "created": 1475238307,
			  "currency": "usd",
			  "default_source": "card_18zQ422eZvKYlo2CIznAqoaV",
			  "delinquent": false,
			  "description": "Customer for andrew.martinez@example.com",
			  "discount": null,
			  "email": "emily.martin.57@example.com",
			  "livemode": false,
			  "metadata": {
			  },
			  "shipping": null,
			  "sources": {
			    "object": "list",
			    "data": [
			      {
			        "id": "card_18zQ422eZvKYlo2CIznAqoaV",
			        "object": "card",
			        "address_city": null,
			        "address_country": null,
			        "address_line1": null,
			        "address_line1_check": null,
			        "address_line2": null,
			        "address_state": null,
			        "address_zip": null,
			        "address_zip_check": null,
			        "brand": "Visa",
			        "country": "US",
			        "customer": "cus_9I04eaA61hXf5W",
			        "cvc_check": "pass",
			        "dynamic_last4": null,
			        "exp_month": 12,
			        "exp_year": 2017,
			        "funding": "credit",
			        "last4": "4242",
			        "metadata": {
			        },
			        "name": null,
			        "tokenization_method": null
			      }
			    ],
			    "has_more": false,
			    "total_count": 1,
			    "url": "/v1/customers/cus_9I04eaA61hXf5W/sources"
			  },
			  "subscriptions": {
			    "object": "list",
			    "data": [],
			    "has_more": false,
			    "total_count": 0,
			    "url": "/v1/customers/cus_9I04eaA61hXf5W/subscriptions"
			  }
			}
		}
	}
}
```

<a name="deleteCustomer"/>
## Stripe.deleteCustomer
Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| The api key obtained from Stripe.
| customerId| String     | If of customer to update.

#### Request example
```json
{	
	"apiKey": "...",
	"customerId": "cus_9I04eaA61hXf5W"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "deleted": true,
			  "id": "cus_9I04eaA61hXf5W"
			}
		}
	}
}
```

<a name="getCustomerList"/>
## Stripe.getCustomerList
Returns a list of your customers. The customers are returned sorted by creation date, with the most recent customers appearing first.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| The api key obtained from Stripe.

#### Request example
```json
{	
	"apiKey": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "object": "list",
			  "url": "/v1/customers",
			  "has_more": false,
			  "data": [
			    {
			      "id": "cus_9I04eaA61hXf5W",
			      "object": "customer",
			      "account_balance": 0,
			      "created": 1475238307,
			      "currency": "usd",
			      "default_source": "card_18zQ422eZvKYlo2CIznAqoaV",
			      "delinquent": false,
			      "description": "Emily Martin",
			      "discount": null,
			      "email": "emily.martin.57@example.com",
			      "livemode": false,
			      "metadata": {
			      },
			      "shipping": null,
			      "sources": {
			        "object": "list",
			        "data": [
			          {
			            "id": "card_18zQ422eZvKYlo2CIznAqoaV",
			            "object": "card",
			            "address_city": null,
			            "address_country": null,
			            "address_line1": null,
			            "address_line1_check": null,
			            "address_line2": null,
			            "address_state": null,
			            "address_zip": null,
			            "address_zip_check": null,
			            "brand": "Visa",
			            "country": "US",
			            "customer": "cus_9I04eaA61hXf5W",
			            "cvc_check": "pass",
			            "dynamic_last4": null,
			            "exp_month": 12,
			            "exp_year": 2017,
			            "funding": "credit",
			            "last4": "4242",
			            "metadata": {
			            },
			            "name": null,
			            "tokenization_method": null
			          }
			        ],
			        "has_more": false,
			        "total_count": 1,
			        "url": "/v1/customers/cus_9I04eaA61hXf5W/sources"
			      },
			      "subscriptions": {
			        "object": "list",
			        "data": [],
			        "has_more": false,
			        "total_count": 0,
			        "url": "/v1/customers/cus_9I04eaA61hXf5W/subscriptions"
			      }
			    },
			    {...},
			    {...}
			  ]
			}
		}
	}
}
```

<a name="getDispute"/>
## Stripe.getDispute
Retrieves the dispute with the given ID.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| disputeId| String     | ID of dispute to retrieve.

#### Request example
```json
{	
	"apiKey": "...",
	"disputeId": "dp_17Vv962eZvKYlo2CU7XhGGzB"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "id": "dp_17Vv962eZvKYlo2CU7XhGGzB",
			  "object": "dispute",
			  "amount": 100,
			  "balance_transactions": [
			    {
			      "id": "txn_17Vv962eZvKYlo2ChC4UKwX7",
			      "object": "balance_transaction",
			      "amount": -100,
			      "available_on": 1454025600,
			      "created": 1453431572,
			      "currency": "usd",
			      "description": "Chargeback withdrawal for ch_17Vv952eZvKYlo2ChNXOPPWS",
			      "fee": 1500,
			      "fee_details": [
			        {
			          "amount": 1500,
			          "application": null,
			          "currency": "usd",
			          "description": "Dispute fee",
			          "type": "stripe_fee"
			        }
			      ],
			      "net": -1600,
			      "source": "dp_17Vv962eZvKYlo2CU7XhGGzB",
			      "sourced_transfers": {
			        "object": "list",
			        "data": [],
			        "has_more": false,
			        "total_count": 0,
			        "url": "/v1/transfers?source_transaction=ad_17Vv962eZvKYlo2CHxgHaG1p"
			      },
			      "status": "available",
			      "type": "adjustment"
			    }
			  ],
			  "charge": "ch_17Vv952eZvKYlo2ChNXOPPWS",
			  "created": 1453431572,
			  "currency": "usd",
			  "evidence": {
			    "access_activity_log": null,
			    "billing_address": null,
			    "cancellation_policy": null,
			    "cancellation_policy_disclosure": null,
			    "cancellation_rebuttal": null,
			    "customer_communication": null,
			    "customer_email_address": null,
			    "customer_name": null,
			    "customer_purchase_ip": null,
			    "customer_signature": null,
			    "duplicate_charge_documentation": null,
			    "duplicate_charge_explanation": null,
			    "duplicate_charge_id": null,
			    "product_description": null,
			    "receipt": null,
			    "refund_policy": null,
			    "refund_policy_disclosure": null,
			    "refund_refusal_explanation": null,
			    "service_date": null,
			    "service_documentation": null,
			    "shipping_address": null,
			    "shipping_carrier": null,
			    "shipping_date": null,
			    "shipping_documentation": null,
			    "shipping_tracking_number": null,
			    "uncategorized_file": null,
			    "uncategorized_text": null
			  },
			  "evidence_details": {
			    "due_by": 1454889599,
			    "has_evidence": false,
			    "past_due": false,
			    "submission_count": 0
			  },
			  "is_charge_refundable": false,
			  "livemode": false,
			  "metadata": {
			  },
			  "reason": "general",
			  "status": "lost"
			}
		}
	}
}
```

<a name="updateDispute"/>
## Stripe.updateDispute
When you get a dispute, contacting your customer is always the best first step. If that doesn’t work, you can submit evidence in order to help us resolve the dispute in your favor. You can do this in your dashboard, but if you prefer, you can use the API to submit evidence programmatically.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| disputeId| String     | ID of dispute to retrieve.
| evidence | JSON       | Evidence to upload to respond to a dispute. Updating any field in the hash will submit all fields in the hash for review.
| metadata | JSON       | A set of key/value pairs that you can attach to a dispute object. It can be useful for storing additional information about the dispute in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.

#### Request example
```json
{	
	"apiKey": "...",
	"disputeId": "dp_17Vv962eZvKYlo2CU7XhGGzB",
	"evidence": "{
      \"customer_name\": "Sophia Moore",
      \"product_description\": \"Comfortable cotton t-shirt\",
      \"shipping_documentation\": \"file_18wzPK2eZvKYlo2CKdXyu53D\"
    }",
	"metadata": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "id": "dp_17Vv962eZvKYlo2CU7XhGGzB",
			  "object": "dispute",
			  "amount": 100,
			  "balance_transactions": [
			    {
			      "id": "txn_17Vv962eZvKYlo2ChC4UKwX7",
			      "object": "balance_transaction",
			      "amount": -100,
			      "available_on": 1454025600,
			      "created": 1453431572,
			      "currency": "usd",
			      "description": "Chargeback withdrawal for ch_17Vv952eZvKYlo2ChNXOPPWS",
			      "fee": 1500,
			      "fee_details": [
			        {
			          "amount": 1500,
			          "application": null,
			          "currency": "usd",
			          "description": "Dispute fee",
			          "type": "stripe_fee"
			        }
			      ],
			      "net": -1600,
			      "source": "dp_17Vv962eZvKYlo2CU7XhGGzB",
			      "sourced_transfers": {
			        "object": "list",
			        "data": [],
			        "has_more": false,
			        "total_count": 0,
			        "url": "/v1/transfers?source_transaction=ad_17Vv962eZvKYlo2CHxgHaG1p"
			      },
			      "status": "available",
			      "type": "adjustment"
			    }
			  ],
			  "charge": "ch_17Vv952eZvKYlo2ChNXOPPWS",
			  "created": 1453431572,
			  "currency": "usd",
			  "evidence": {
			    "product_description": "Comfortable cotton t-shirt",
			    "customer_name": "Sophia Moore",
			    "customer_email_address": null,
			    "billing_address": null,
			    "customer_purchase_ip": null,
			    "shipping_address": null,
			    "shipping_date": null,
			    "shipping_carrier": null,
			    "shipping_tracking_number": null,
			    "service_date": null,
			    "access_activity_log": null,
			    "duplicate_charge_id": null,
			    "duplicate_charge_explanation": null,
			    "refund_policy_disclosure": null,
			    "refund_refusal_explanation": null,
			    "cancellation_policy_disclosure": null,
			    "cancellation_rebuttal": null,
			    "uncategorized_text": null,
			    "customer_signature": null,
			    "receipt": null,
			    "shipping_documentation": "file_18wzPK2eZvKYlo2CKdXyu53D",
			    "service_documentation": null,
			    "duplicate_charge_documentation": null,
			    "refund_policy": null,
			    "cancellation_policy": null,
			    "customer_communication": null,
			    "uncategorized_file": null
			  },
			  "evidence_details": {
			    "due_by": 1454889599,
			    "has_evidence": false,
			    "past_due": false,
			    "submission_count": 0
			  },
			  "is_charge_refundable": false,
			  "livemode": false,
			  "metadata": {
			  },
			  "reason": "general",
			  "status": "lost"
			}
		}
	}
}
```

<a name="closeDispute"/>
## Stripe.closeDispute
Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially ‘dismissing’ the dispute, acknowledging it as lost
The status of the dispute will change from needs_response to lost. Closing a dispute is irreversible.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| disputeId| String     | ID of dispute to retrieve.

#### Request example
```json
{	
	"apiKey": "...",
	"disputeId": "dp_17Vv962eZvKYlo2CU7XhGGzB"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "dp_17Vv962eZvKYlo2CU7XhGGzB",
			  "object": "dispute",
			  "amount": 100,
			  "balance_transactions": [
			    {
			      "id": "txn_17Vv962eZvKYlo2ChC4UKwX7",
			      "object": "balance_transaction",
			      "amount": -100,
			      "available_on": 1454025600,
			      "created": 1453431572,
			      "currency": "usd",
			      "description": "Chargeback withdrawal for ch_17Vv952eZvKYlo2ChNXOPPWS",
			      "fee": 1500,
			      "fee_details": [
			        {
			          "amount": 1500,
			          "application": null,
			          "currency": "usd",
			          "description": "Dispute fee",
			          "type": "stripe_fee"
			        }
			      ],
			      "net": -1600,
			      "source": "dp_17Vv962eZvKYlo2CU7XhGGzB",
			      "sourced_transfers": {
			        "object": "list",
			        "data": [ ],
			        "has_more": false,
			        "total_count": 0,
			        "url": "/v1/transfers?source_transaction=ad_17Vv962eZvKYlo2CHxgHaG1p"
			      },
			      "status": "available",
			      "type": "adjustment"
			    }
			  ],
			  "charge": "ch_17Vv952eZvKYlo2ChNXOPPWS",
			  "created": 1453431572,
			  "currency": "usd",
			  "evidence": {
			    "access_activity_log": null,
			    "billing_address": null,
			    "cancellation_policy": null,
			    "cancellation_policy_disclosure": null,
			    "cancellation_rebuttal": null,
			    "customer_communication": null,
			    "customer_email_address": null,
			    "customer_name": null,
			    "customer_purchase_ip": null,
			    "customer_signature": null,
			    "duplicate_charge_documentation": null,
			    "duplicate_charge_explanation": null,
			    "duplicate_charge_id": null,
			    "product_description": null,
			    "receipt": null,
			    "refund_policy": null,
			    "refund_policy_disclosure": null,
			    "refund_refusal_explanation": null,
			    "service_date": null,
			    "service_documentation": null,
			    "shipping_address": null,
			    "shipping_carrier": null,
			    "shipping_date": null,
			    "shipping_documentation": null,
			    "shipping_tracking_number": null,
			    "uncategorized_file": null,
			    "uncategorized_text": null
			  },
			  "evidence_details": {
			    "due_by": 1454889599,
			    "has_evidence": false,
			    "past_due": false,
			    "submission_count": 0
			  },
			  "is_charge_refundable": false,
			  "livemode": false,
			  "metadata": {
			  },
			  "reason": "general",
			  "status": "lost"
			}
		}
	}
}
```

<a name="getDisputes"/>
## Stripe.getDisputes
Returns a list of your disputes.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| The api key obtained from Stripe.

#### Request example
```json
{	"apiKey": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "object": "list",
			  "url": "/v1/disputes",
			  "has_more": false,
			  "data": [
			    {
			      "id": "dp_17Vv962eZvKYlo2CU7XhGGzB",
			      "object": "dispute",
			      "amount": 100,
			      "balance_transactions": [
			        {
			          "id": "txn_17Vv962eZvKYlo2ChC4UKwX7",
			          "object": "balance_transaction",
			          "amount": -100,
			          "available_on": 1454025600,
			          "created": 1453431572,
			          "currency": "usd",
			          "description": "Chargeback withdrawal for ch_17Vv952eZvKYlo2ChNXOPPWS",
			          "fee": 1500,
			          "fee_details": [
			            {
			              "amount": 1500,
			              "application": null,
			              "currency": "usd",
			              "description": "Dispute fee",
			              "type": "stripe_fee"
			            }
			          ],
			          "net": -1600,
			          "source": "dp_17Vv962eZvKYlo2CU7XhGGzB",
			          "sourced_transfers": {
			            "object": "list",
			            "data": [],
			            "has_more": false,
			            "total_count": 0,
			            "url": "/v1/transfers?source_transaction=ad_17Vv962eZvKYlo2CHxgHaG1p"
			          },
			          "status": "available",
			          "type": "adjustment"
			        }
			      ],
			      "charge": "ch_17Vv952eZvKYlo2ChNXOPPWS",
			      "created": 1453431572,
			      "currency": "usd",
			      "evidence": {
			        "access_activity_log": null,
			        "billing_address": null,
			        "cancellation_policy": null,
			        "cancellation_policy_disclosure": null,
			        "cancellation_rebuttal": null,
			        "customer_communication": null,
			        "customer_email_address": null,
			        "customer_name": null,
			        "customer_purchase_ip": null,
			        "customer_signature": null,
			        "duplicate_charge_documentation": null,
			        "duplicate_charge_explanation": null,
			        "duplicate_charge_id": null,
			        "product_description": null,
			        "receipt": null,
			        "refund_policy": null,
			        "refund_policy_disclosure": null,
			        "refund_refusal_explanation": null,
			        "service_date": null,
			        "service_documentation": null,
			        "shipping_address": null,
			        "shipping_carrier": null,
			        "shipping_date": null,
			        "shipping_documentation": null,
			        "shipping_tracking_number": null,
			        "uncategorized_file": null,
			        "uncategorized_text": null
			      },
			      "evidence_details": {
			        "due_by": 1454889599,
			        "has_evidence": false,
			        "past_due": false,
			        "submission_count": 0
			      },
			      "is_charge_refundable": false,
			      "livemode": false,
			      "metadata": {
			      },
			      "reason": "general",
			      "status": "lost"
			    },
			    {...},
			    {...}
			  ]
			}
		}
	}
}
```

<a name="getEvent"/>
## Stripe.getEvent
Retrieves the details of an event. Supply the unique identifier of the event, which you might have received in a webhook.

| Field  | Type       | Description
|--------|------------|----------
| apiKey | credentials| The api key obtained from Stripe.
| eventId| credentials| The api key obtained from Stripe.

#### Request example
```json
{	
	"apiKey": "...",
	"eventId": "evt_18zQ4e2eZvKYlo2Cd9eGkwal"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "evt_18zQ4e2eZvKYlo2Cd9eGkwal",
			  "object": "event",
			  "api_version": "2016-07-06",
			  "created": 1475238308,
			  "data": {
			    "object": {
			      "id": "card_18zQ422eZvKYlo2CIznAqoaV",
			      "object": "card",
			      "address_city": null,
			      "address_country": null,
			      "address_line1": null,
			      "address_line1_check": null,
			      "address_line2": null,
			      "address_state": null,
			      "address_zip": null,
			      "address_zip_check": null,
			      "brand": "Visa",
			      "country": "US",
			      "customer": "cus_9I04eaA61hXf5W",
			      "cvc_check": "pass",
			      "dynamic_last4": null,
			      "exp_month": 12,
			      "exp_year": 2017,
			      "fingerprint": "Xt5EWLLDS7FJjR1c",
			      "funding": "credit",
			      "last4": "4242",
			      "metadata": {
			      },
			      "name": null,
			      "tokenization_method": null
			    }
			  },
			  "livemode": false,
			  "pending_webhooks": 0,
			  "request": "req_9I04Pra7tfXffn",
			  "type": "customer.source.created"
			}
		}
	}
}
```

<a name="getEventList"/>
## Stripe.getEventList
List events, going back up to 30 days.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| The api key obtained from Stripe.
| type  | String     | A string containing a specific event name, or group of events using * as a wildcard. The list will be filtered to include only events with a matching event property.

#### Request example
```json
{	
	"apiKey": "...",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "object": "list",
			  "url": "/v1/events",
			  "has_more": false,
			  "data": [
			    {
			      "id": "evt_18zQ4e2eZvKYlo2Cd9eGkwal",
			      "object": "event",
			      "api_version": "2016-07-06",
			      "created": 1475238308,
			      "data": {
			        "object": {
			          "id": "card_18zQ422eZvKYlo2CIznAqoaV",
			          "object": "card",
			          "address_city": null,
			          "address_country": null,
			          "address_line1": null,
			          "address_line1_check": null,
			          "address_line2": null,
			          "address_state": null,
			          "address_zip": null,
			          "address_zip_check": null,
			          "brand": "Visa",
			          "country": "US",
			          "customer": "cus_9I04eaA61hXf5W",
			          "cvc_check": "pass",
			          "dynamic_last4": null,
			          "exp_month": 12,
			          "exp_year": 2017,
			          "fingerprint": "Xt5EWLLDS7FJjR1c",
			          "funding": "credit",
			          "last4": "4242",
			          "metadata": {
			          },
			          "name": null,
			          "tokenization_method": null
			        }
			      },
			      "livemode": false,
			      "pending_webhooks": 0,
			      "request": "req_9I04Pra7tfXffn",
			      "type": "customer.source.created"
			    },
			    {...},
			    {...}
			  ]
			}
		}
	}
}
```

<a name="createFileUpload"/>
## Stripe.createFileUpload
To upload a file to Stripe, you’ll need to send a request of type multipart/form-data. The request should contain the file you would like to upload, as well as the parameters for creating a file.

| Field  | Type       | Description
|--------|------------|----------
| apiKey | credentials| The api key obtained from Stripe.
| file   | String     | A file to upload.
| purpose| String     | The purpoe of the uploaded file. Possible values are `business_logo`, `dispute_evidence`, `identity_document`, `incorporation_article`, `incorporation_document`, `payment_provider_transfer`, `product_feed`.

#### Request example
```json
{	
	"apiKey": "...",
	"file": "...",
	"purpose": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "file_18wzPK2eZvKYlo2CKdXyu53D",
			  "object": "file_upload",
			  "created": 1474659146,
			  "purpose": "identity_document",
			  "size": 76545,
			  "type": "jpg"
			}
		}
	}
}
```

<a name="createRefund"/>
## Stripe.createRefund
When you create a new refund, you must specify a charge to create it on.
Creating a new refund will refund a charge that has previously been created but not yet refunded. Funds will be refunded to the credit or debit card that was originally charged. The fees you were originally charged are also refunded.
You can optionally refund only part of a charge. You can do so as many times as you wish until the entire charge has been refunded.
Once entirely refunded, a charge can't be refunded again. This method will throw an error when called on an already-refunded charge, or when trying to refund more money than is left on a charge.

| Field               | Type       | Description
|---------------------|------------|----------
| apiKey              | credentials| The api key obtained from Stripe.
| chargeId            | String     | The identifier of the charge to refund.
| amount              | String     | A positive integer in cents representing how much of this charge to refund. Can only refund up to the unrefunded amount remaining of the charge.
| metadata            | JSON       | A set of key/value pairs that you can attach to a refund object. It can be useful for storing additional information about the refund in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.
| reason              | String     | String indicating the reason for the refund. If set, possible values are duplicate, fraudulent, and requested_by_customer. Specifying fraudulent as the reason when you believe the charge to be fraudulent will help us improve our fraud detection algorithms.
| refundApplicationFee| String     | Boolean indicating whether the application fee should be refunded when refunding this charge. If a full charge refund is given, the full application fee will be refunded. Else, the application fee will be refunded with an amount proportional to the amount of the charge refunded. An application fee can only be refunded by the application that created the charge.
| reverseTransfer     | String     | Boolean indicating whether the transfer should be reversed when refunding this charge. The transfer will be reversed for the same amount being refunded (either the entire or partial amount). A transfer can only be reversed by the application that created the charge.

#### Request example
```json
{	
	"apiKey": "...",
	"chargeId": "ch_18zQ402eZvKYlo2CvQYLBOJ4",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "re_18zP2v2eZvKYlo2Ct9PUKMPw",
			  "object": "refund",
			  "amount": 300,
			  "balance_transaction": "txn_18zP2v2eZvKYlo2C5HkvErZJ",
			  "charge": "ch_18zNpY2eZvKYlo2Cm37H95Sz",
			  "created": 1475234357,
			  "currency": "usd",
			  "metadata": {
			  },
			  "reason": null,
			  "receipt_number": null,
			  "status": "succeeded"
			}
		}
	}
}
```

<a name="getRefund"/>
## Stripe.getRefund
Retrieves the details of an existing refund.

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| refundId| String     | ID of refund to retrieve.

#### Request example
```json
{	
	"apiKey": "...",
	"refundId": "re_18zP2v2eZvKYlo2Ct9PUKMPw"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "re_18zP2v2eZvKYlo2Ct9PUKMPw",
			  "object": "refund",
			  "amount": 300,
			  "balance_transaction": "txn_18zP2v2eZvKYlo2C5HkvErZJ",
			  "charge": "ch_18zNpY2eZvKYlo2Cm37H95Sz",
			  "created": 1475234357,
			  "currency": "usd",
			  "metadata": {
			  },
			  "reason": null,
			  "receipt_number": null,
			  "status": "succeeded"
			}
		}
	}
}
```

<a name="updateRefund"/>
## Stripe.updateRefund
Updates the specified refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
This request only accepts metadata as an argument.

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| refundId| String     | ID of refund to retrieve.
| metadata| JSON       | A set of key/value pairs that you can attach to a refund object. It can be useful for storing additional information about the refund in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.

#### Request example
```json
{	
	"apiKey": "...",
	"refundId": "re_18zP2v2eZvKYlo2Ct9PUKMPw",
	"metadata": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "re_18zP2v2eZvKYlo2Ct9PUKMPw",
			  "object": "refund",
			  "amount": 300,
			  "balance_transaction": "txn_18tiU12eZvKYlo2CetxoRTDG",
			  "charge": "ch_18zNpY2eZvKYlo2Cm37H95Sz",
			  "created": 1475234357,
			  "currency": "usd",
			  "metadata": {
			    "key": "value"
			  },
			  "reason": null,
			  "receipt_number": null,
			  "status": "succeeded"
			}
		}
	}
}
```

<a name="getRefundList"/>
## Stripe.getRefundList
Returns a list of all refunds you’ve previously created. The refunds are returned in sorted order, with the most recent refunds appearing first. For convenience, the 10 most recent refunds are always available by default on the charge object.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| The api key obtained from Stripe.

#### Request example
```json
{	"apiKey": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "object": "list",
			  "url": "/v1/refunds",
			  "has_more": false,
			  "data": [
			    {
			      "id": "re_18zP2v2eZvKYlo2Ct9PUKMPw",
			      "object": "refund",
			      "amount": 300,
			      "balance_transaction": "txn_18zP2v2eZvKYlo2C5HkvErZJ",
			      "charge": "ch_18zNpY2eZvKYlo2Cm37H95Sz",
			      "created": 1475234357,
			      "currency": "usd",
			      "metadata": {
			      },
			      "reason": null,
			      "receipt_number": null,
			      "status": "succeeded"
			    },
			    {...},
			    {...}
			  ]
			}
		}
	}
}
```

<a name="createCardToken"/>
## Stripe.createCardToken
Creates a single use token that wraps the details of a credit card. This token can be used in place of a credit card object with any API method. These tokens can only be used once: by creating a new charge object, or attaching them to a customer.

| Field              | Type       | Description
|--------------------|------------|----------
| apiKey             | credentials| The api key obtained from Stripe.
| cardNumber         | String     | Number of card
| cardExpirationMonth| Number     | Expiration month of card
| cardExpirationYear | Number     | Expiration year of card
| cardCvc            | String     | CVC code of card

#### Request example
```json
{	
	"apiKey": "...",
	"cardNumber": "4242424242424242",
	"cardExpirationMonth": 12,
	"cardExpirationYear": 2017,
	"cardCvc": "123"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "tok_189fTS2eZvKYlo2CcYJIOGkr",
			  "object": "token",
			  "card": {
			    "id": "card_189fTR2eZvKYlo2CnJ7asfrs",
			    "object": "card",
			    "address_city": null,
			    "address_country": null,
			    "address_line1": null,
			    "address_line1_check": null,
			    "address_line2": null,
			    "address_state": null,
			    "address_zip": null,
			    "address_zip_check": null,
			    "brand": "Visa",
			    "country": "US",
			    "cvc_check": null,
			    "dynamic_last4": null,
			    "exp_month": 8,
			    "exp_year": 2017,
			    "funding": "credit",
			    "last4": "4242",
			    "metadata": {
			    },
			    "name": null,
			    "tokenization_method": null
			  },
			  "client_ip": null,
			  "created": 1462904450,
			  "livemode": false,
			  "type": "card",
			  "used": false
			}
					}
	}
}
```

<a name="createBankAccountToken"/>
## Stripe.createBankAccountToken
Creates a single use token that wraps the details of a bank account. This token can be used in place of a bank account object with any API method. These tokens can only be used once: by attaching them to a recipient or managed account.

| Field                       | Type       | Description
|-----------------------------|------------|----------
| apiKey                      | credentials| The api key obtained from Stripe.
| bankAccountCountry          | String     | The bank account country
| bankAccountCurrency         | String     | The bank account currency
| bankAccountAccountHolderName| String     | The bank account holder name
| bankAccountAccountHolderType| String     | The bank account holder type
| bankAccountRoutingNumber    | String     | The bank account routing number
| bankAccountNumber           | String     | The bank account number

#### Request example
```json
{	
	"apiKey": "...",
	"bankAccountCountry": "US",
	"bankAccountCurrency": "usd",
	"bankAccountAccountHolderName": "Anthony Anderson",
	"bankAccountAccountHolderType": "individual",
	"bankAccountRoutingNumber": "110000000",
	"bankAccountNumber": "000123456789"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "id": "btok_9I05hAdQf5iXZ8",
			  "object": "token",
			  "bank_account": {
			    "id": "ba_18zQ5k2eZvKYlo2C5dxFlaCC",
			    "object": "bank_account",
			    "account_holder_name": "Jane Austen",
			    "account_holder_type": "individual",
			    "bank_name": "STRIPE TEST BANK",
			    "country": "US",
			    "currency": "usd",
			    "fingerprint": "1JWtPxqbdX5Gamtc",
			    "last4": "6789",
			    "routing_number": "110000000",
			    "status": "new"
			  },
			  "client_ip": null,
			  "created": 1475238376,
			  "livemode": false,
			  "type": "bank_account",
			  "used": false
			}
		}
	}
}
```

<a name="createPiiToken"/>
## Stripe.createPiiToken
Creates a single use token that wraps the details of personally identifiable information (PII). This token can be used in place of a personal_id_number in the Account Update API method. These tokens can only be used once.

| Field           | Type       | Description
|-----------------|------------|----------
| apiKey          | credentials| The api key obtained from Stripe.
| personalIdNumber| String     | The bank account country

#### Request example
```json
{	
	"apiKey": "...",
	"personalIdNumber": "000000000"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "pii_17RAJV2eZvKYlo2CDyqjNWJ4",
			  "object": "token",
			  "client_ip": "8.21.168.72",
			  "created": 1452298237,
			  "livemode": false,
			  "type": "pii",
			  "used": false
			}
		}
	}
}
```

<a name="getToken"/>
## Stripe.getToken
Retrieves the token with the given ID.

| Field  | Type       | Description
|--------|------------|----------
| apiKey | credentials| The api key obtained from Stripe.
| tokenId| String     | The ID of the desired token.

#### Request example
```json
{	
	"apiKey": "...",
	"tokenId": "tok_189fTS2eZvKYlo2CcYJIOGkr"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "tok_189fTS2eZvKYlo2CcYJIOGkr",
			  "object": "token",
			  "card": {
			    "id": "card_189fTR2eZvKYlo2CnJ7asfrs",
			    "object": "card",
			    "address_city": null,
			    "address_country": null,
			    "address_line1": null,
			    "address_line1_check": null,
			    "address_line2": null,
			    "address_state": null,
			    "address_zip": null,
			    "address_zip_check": null,
			    "brand": "Visa",
			    "country": "US",
			    "cvc_check": null,
			    "dynamic_last4": null,
			    "exp_month": 8,
			    "exp_year": 2017,
			    "funding": "credit",
			    "last4": "4242",
			    "metadata": {
			    },
			    "name": null,
			    "tokenization_method": null
			  },
			  "client_ip": null,
			  "created": 1462904450,
			  "livemode": false,
			  "type": "card",
			  "used": false
			}
		}
	}
}
```

<a name="createTransfer"/>
## Stripe.createTransfer
To send funds from your Stripe account to a third-party recipient or to your own bank account, you create a new transfer object. Your Stripe balance must be able to cover the transfer amount, or you'll receive an "Insufficient Funds" error.
If your API key is in test mode, money won't actually be sent, though everything else will occur as if in live mode.
If you are creating a manual transfer or a special case transfer on a Stripe account that uses multiple payment source types, you'll need to specify the source type balance that the transfer should draw from. The balance object details available and pending amounts by source type.

| Field              | Type       | Description
|--------------------|------------|----------
| apiKey             | credentials| The api key obtained from Stripe.
| amount             | Number     | A positive integer in cents representing how much to transfer.
| currency           | String     | 3-letter ISO code for currency
| destination        | String     | The id of a bank account or a card to send the transfer to, or the string `default_for_currency` to use the default external account for the specified currency. 
| description        | String     | An arbitrary string which you can attach to a transfer object. It is displayed when in the web interface alongside the transfer.
| sourceTransaction  | String     | You can use this parameter to transfer funds from a charge (or other transaction) before they are added to your available balance. A pending balance will transfer immediately but the funds will not become available until the original charge becomes available.
| statementDescriptor| String     | A string to be displayed on the recipient's bank or card statement. This may be at most 22 characters. Attempting to use a statement_descriptor longer than 22 characters will return an error. Note: Most banks will truncate this information and/or display it inconsistently. Some may not display it at all.
| sourceType         | String     | Valid options are: alipay_account, bank_account, bitcoin_receiver, and card.

#### Request example
```json
{	
	"apiKey": "...",
	"amount": 400,
	"currency": "usd",
	"destination": "acct_1032D82eZvKYlo2C",
	"description": "Transfer for test@example.com",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "tr_18yKar2eZvKYlo2CoN8TUvb6",
			  "object": "transfer",
			  "amount": 1,
			  "amount_reversed": 0,
			  "application_fee": null,
			  "balance_transaction": "txn_18tiU12eZvKYlo2CetxoRTDG",
			  "bank_account": {
			    "id": "ba_18yKal2eZvKYlo2CeAIrKO9G",
			    "object": "bank_account",
			    "account_holder_name": null,
			    "account_holder_type": null,
			    "bank_name": "STRIPE TEST BANK",
			    "country": "US",
			    "currency": "usd",
			    "fingerprint": "1JWtPxqbdX5Gamtc",
			    "last4": "6789",
			    "routing_number": "110000000",
			    "status": "new"
			  },
			  "created": 1474978913,
			  "currency": "usd",
			  "date": 1474978913,
			  "description": null,
			  "destination": "ba_18yKal2eZvKYlo2CeAIrKO9G",
			  "failure_code": null,
			  "failure_message": null,
			  "livemode": false,
			  "metadata": {
			    "foo": "bar"
			  },
			  "method": "standard",
			  "recipient": "rp_18yKaq2eZvKYlo2CJq5scG7j",
			  "reversals": {
			    "object": "list",
			    "data": [],
			    "has_more": false,
			    "total_count": 0,
			    "url": "/v1/transfers/tr_18yKar2eZvKYlo2CoN8TUvb6/reversals"
			  },
			  "reversed": false,
			  "source_transaction": null,
			  "source_type": "card",
			  "statement_descriptor": null,
			  "status": "paid",
			  "type": "bank_account"
			}
		}
	}
}
```

<a name="getTransfer"/>
## Stripe.getTransfer
Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or the transfer list, and Stripe will return the corresponding transfer information.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| The api key obtained from Stripe.
| transferId| String     | The identifier of the transfer to be retrieved.

#### Request example
```json
{	
	"apiKey": "...",
	"transferId": "tr_18yKar2eZvKYlo2CoN8TUvb6"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "tr_18yKar2eZvKYlo2CoN8TUvb6",
			  "object": "transfer",
			  "amount": 1,
			  "amount_reversed": 0,
			  "application_fee": null,
			  "balance_transaction": "txn_18tiU12eZvKYlo2CetxoRTDG",
			  "bank_account": {
			    "id": "ba_18yKal2eZvKYlo2CeAIrKO9G",
			    "object": "bank_account",
			    "account_holder_name": null,
			    "account_holder_type": null,
			    "bank_name": "STRIPE TEST BANK",
			    "country": "US",
			    "currency": "usd",
			    "fingerprint": "1JWtPxqbdX5Gamtc",
			    "last4": "6789",
			    "routing_number": "110000000",
			    "status": "new"
			  },
			  "created": 1474978913,
			  "currency": "usd",
			  "date": 1474978913,
			  "description": null,
			  "destination": "ba_18yKal2eZvKYlo2CeAIrKO9G",
			  "failure_code": null,
			  "failure_message": null,
			  "livemode": false,
			  "metadata": {
			    "foo": "bar"
			  },
			  "method": "standard",
			  "recipient": "rp_18yKaq2eZvKYlo2CJq5scG7j",
			  "reversals": {
			    "object": "list",
			    "data": [],
			    "has_more": false,
			    "total_count": 0,
			    "url": "/v1/transfers/tr_18yKar2eZvKYlo2CoN8TUvb6/reversals"
			  },
			  "reversed": false,
			  "source_transaction": null,
			  "source_type": "card",
			  "statement_descriptor": null,
			  "status": "paid",
			  "type": "bank_account"
			}
		}
	}
}
```

<a name="updateTransfer"/>
## Stripe.updateTransfer
Updates the specified transfer by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
This request accepts only the description and metadata as arguments.
| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| The api key obtained from Stripe.
| transferId | String     | Id of transfer to update.
| description| String     | An arbitrary string which you can attach to a transfer object. It is displayed when in the web interface alongside the transfer. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| metadata   | JSON       | A set of key/value pairs that you can attach to a transfer object. It can be useful for storing additional information about the transfer in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.

#### Request example
```json
{	
	"apiKey": "...",
	"transferId": "...",
	"description": "...",
	"metadata": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "tr_18yKar2eZvKYlo2CoN8TUvb6",
			  "object": "transfer",
			  "amount": 1,
			  "amount_reversed": 0,
			  "application_fee": null,
			  "balance_transaction": "txn_18tiU12eZvKYlo2CetxoRTDG",
			  "bank_account": {
			    "id": "ba_18yKal2eZvKYlo2CeAIrKO9G",
			    "object": "bank_account",
			    "account_holder_name": null,
			    "account_holder_type": null,
			    "bank_name": "STRIPE TEST BANK",
			    "country": "US",
			    "currency": "usd",
			    "fingerprint": "1JWtPxqbdX5Gamtc",
			    "last4": "6789",
			    "routing_number": "110000000",
			    "status": "new"
			  },
			  "created": 1474978913,
			  "currency": "usd",
			  "date": 1474978913,
			  "description": "Transfer to test@example.com",
			  "destination": "ba_18yKal2eZvKYlo2CeAIrKO9G",
			  "failure_code": null,
			  "failure_message": null,
			  "livemode": false,
			  "metadata": {
			    "foo": "bar"
			  },
			  "method": "standard",
			  "recipient": "rp_18yKaq2eZvKYlo2CJq5scG7j",
			  "reversals": {
			    "object": "list",
			    "data": [

			    ],
			    "has_more": false,
			    "total_count": 0,
			    "url": "/v1/transfers/tr_18yKar2eZvKYlo2CoN8TUvb6/reversals"
			  },
			  "reversed": false,
			  "source_transaction": null,
			  "source_type": "card",
			  "statement_descriptor": null,
			  "status": "paid",
			  "type": "bank_account"
			}
		}
	}
}
```

<a name="getTransferList"/>
## Stripe.getTransferList
Returns a list of existing transfers sent to third-party bank accounts or that Stripe has sent you. The transfers are returned in sorted order, with the most recently created transfers appearing first.

| Field          | Type       | Description
|----------------|------------|----------
| apiKey         | credentials| The api key obtained from Stripe.
| destination    | String     | Only return transfers for the destination specified by this account ID.
| recipientstatus| String     | Only return transfers for the recipient specified by this recipient ID.
| status         | String     | Only return transfers that have the given status: `pending`, `paid`, `failed`, `in_transit`, or `canceled`.

#### Request example
```json
{	
	"apiKey": "...",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "object": "list",
			  "url": "/v1/transfers",
			  "has_more": false,
			  "data": [
			    {
			      "id": "tr_18yKar2eZvKYlo2CoN8TUvb6",
			      "object": "transfer",
			      "amount": 1,
			      "amount_reversed": 0,
			      "application_fee": null,
			      "balance_transaction": "txn_18tiU12eZvKYlo2CetxoRTDG",
			      "bank_account": {
			        "id": "ba_18yKal2eZvKYlo2CeAIrKO9G",
			        "object": "bank_account",
			        "account_holder_name": null,
			        "account_holder_type": null,
			        "bank_name": "STRIPE TEST BANK",
			        "country": "US",
			        "currency": "usd",
			        "fingerprint": "1JWtPxqbdX5Gamtc",
			        "last4": "6789",
			        "routing_number": "110000000",
			        "status": "new"
			      },
			      "created": 1474978913,
			      "currency": "usd",
			      "date": 1474978913,
			      "description": null,
			      "destination": "ba_18yKal2eZvKYlo2CeAIrKO9G",
			      "failure_code": null,
			      "failure_message": null,
			      "livemode": false,
			      "metadata": {
			        "foo": "bar"
			      },
			      "method": "standard",
			      "recipient": "rp_18yKaq2eZvKYlo2CJq5scG7j",
			      "reversals": {
			        "object": "list",
			        "data": [ ],
			        "has_more": false,
			        "total_count": 0,
			        "url": "/v1/transfers/tr_18yKar2eZvKYlo2CoN8TUvb6/reversals"
			      },
			      "reversed": false,
			      "source_transaction": null,
			      "source_type": "card",
			      "statement_descriptor": null,
			      "status": "paid",
			      "type": "bank_account"
			    },
			    {...},
			    {...}
			  ]
			}
		}
	}
}
```

<a name="getTransferReversal"/>
## Stripe.getTransferReversal
Method By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a specific reversal stored on the transfer.


| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| The api key obtained from Stripe.
| id        | String     | ID of reversal to retrieve.
| transferId| String     | ID of the transfer reversed.

#### Request example
```json
{	
	"apiKey": "...",
	"id": "trr_18wHEl2eZvKYlo2CIIzWDBVe",
	"transferId": "tr_18yKar2eZvKYlo2CoN8TUvb6"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "id": "trr_18wHEl2eZvKYlo2CIIzWDBVe",
			  "object": "transfer_reversal",
			  "amount": 5000,
			  "balance_transaction": "txn_18tiU12eZvKYlo2CetxoRTDG",
			  "created": 1474489355,
			  "currency": "usd",
			  "metadata": {
			  },
			  "transfer": "tr_18wHEj2eZvKYlo2CmoWPui9Y"
			}
		}
	}
}
```

<a name="updateTransferReversal"/>
## Stripe.updateTransferReversal
Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| The api key obtained from Stripe.
| id         | String     | ID of reversal to retrieve.
| transferId | String     | ID of the transfer reversed.
| metadata   | JSON       | A set of key/value pairs that you can attach to a reversal object. It can be useful for storing additional information about the reversal in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.
| description| String     | An arbitrary string which you can attach to a reversal object. It is displayed when in the web interface alongside the reversal. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.

#### Request example
```json
{	
	"apiKey": "...",
	"id": "trr_18wHEl2eZvKYlo2CIIzWDBVe",
	"transferId": "tr_18wHEj2eZvKYlo2CmoWPui9Y",
	"metadata": { \"order_id\": \"6735\" },
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "trr_18wHEl2eZvKYlo2CIIzWDBVe",
			  "object": "transfer_reversal",
			  "amount": 5000,
			  "balance_transaction": "txn_18tiU12eZvKYlo2CetxoRTDG",
			  "created": 1474489355,
			  "currency": "usd",
			  "metadata": {
			    "key": "value"
			  },
			  "transfer": "tr_18wHEj2eZvKYlo2CmoWPui9Y"
			}
		}
	}
}
```

<a name="getTransferReversalList"/>
## Stripe.getTransferReversalList
You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by default on the transfer object.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| The api key obtained from Stripe.
| transferId| String     | The ID of the transfer whose reversals will be retrieved.

#### Request example
```json
{	
	"apiKey": "...",
	"transferId": "tr_18yKar2eZvKYlo2CoN8TUvb6"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "object": "list",
			  "url": "/v1/transfers/tr_18yKar2eZvKYlo2CoN8TUvb6/reversals",
			  "has_more": false,
			  "data": [
			    {
			      "id": "trr_18wHEl2eZvKYlo2CIIzWDBVe",
			      "object": "transfer_reversal",
			      "amount": 5000,
			      "balance_transaction": "txn_18tiU12eZvKYlo2CetxoRTDG",
			      "created": 1474489355,
			      "currency": "usd",
			      "metadata": {
			      },
			      "transfer": "tr_18wHEj2eZvKYlo2CmoWPui9Y"
			    },
			    {...},
			    {...}
			  ]
			}
		}
	}
}
```

<a name="createAccount"/>
## Stripe.createAccount
With Connect, you can create Stripe accounts for your users. To do this, you'll first need to register your platform.

| Field  | Type       | Description
|--------|------------|----------
| apiKey | credentials| The api key obtained from Stripe.
| country| String     | The country the account holder resides in or that the business is legally established in. For example, if you are in the United States and the business you’re creating an account for is legally represented in Canada, you would use “CA” as the country for the account being created.
| email  | String     | The email address of the account holder. For standalone accounts, Stripe will email your user with instructions for how to set up their account. For managed accounts, this is only to make the account easier to identify to you: Stripe will never directly reach out to your users.
| managed| String     | Whether you'd like to create a managed or standalone account. Managed accounts have extra parameters available to them, and require that you, the platform, handle all communication with the account holder. Standalone accounts are normal Stripe accounts: Stripe will email the account holder to setup a username and password, and handle all account management directly with them.

#### Request example
```json
{	
	"apiKey": "...",
	"country": "US",
	"email": "bob@example.com'",
	"managed": "true"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "acct_1032D82eZvKYlo2C",
			  "object": "account",
			  "business_logo": null,
			  "business_name": "Stripe.com",
			  "business_url": null,
			  "charges_enabled": false,
			  "country": "US",
			  "debit_negative_balances": true,
			  "decline_charge_on": {
			    "avs_failure": true,
			    "cvc_failure": false
			  },
			  "default_currency": "usd",
			  "details_submitted": false,
			  "display_name": "Stripe.com",
			  "email": "bob@example.com",
			  "external_accounts": {
			    "object": "list",
			    "data": [],
			    "has_more": false,
			    "total_count": 0,
			    "url": "/v1/accounts/acct_1032D82eZvKYlo2C/external_accounts"
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
			      "details_code": "failed_other",
			      "document": null,
			      "status": "unverified"
			    }
			  },
			  "managed": false,
			  "product_description": null,
			  "statement_descriptor": null,
			  "support_email": null,
			  "support_phone": null,
			  "timezone": "US/Pacific",
			  "tos_acceptance": {
			    "date": null,
			    "ip": null,
			    "user_agent": null
			  },
			  "transfer_schedule": {
			    "delay_days": 7,
			    "interval": "daily"
			  },
			  "transfers_enabled": false,
			  "verification": {
			    "disabled_reason": "fields_needed",
			    "due_by": null,
			    "fields_needed": [
			      "business_url",
			      "external_account",
			      "product_description",
			      "support_phone",
			      "tos_acceptance.date",
			      "tos_acceptance.ip"
			    ]
			  },
			  "keys": {
			    "secret": "sk_test_YXPYjAOEIIJOhEszvghLNMFw",
			    "publishable": "pk_test_kGAoWInjeNfXVOuRl84TJFgP"
			  }
			}
		}
	}
}
```

<a name="getAccount"/>
## Stripe.getAccount
Retrieves the details of the account.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| accountId| String     | Id of account to retrive

#### Request example
```json
{	
	"apiKey": "...",
	"accountId": "acct_1032D82eZvKYlo2C"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "acct_1032D82eZvKYlo2C",
			  "object": "account",
			  "business_logo": null,
			  "business_name": "Stripe.com",
			  "business_url": null,
			  "charges_enabled": false,
			  "country": "US",
			  "debit_negative_balances": true,
			  "decline_charge_on": {
			    "avs_failure": true,
			    "cvc_failure": false
			  },
			  "default_currency": "usd",
			  "details_submitted": false,
			  "display_name": "Stripe.com",
			  "email": "site@stripe.com",
			  "external_accounts": {
			    "object": "list",
			    "data": [],
			    "has_more": false,
			    "total_count": 0,
			    "url": "/v1/accounts/acct_1032D82eZvKYlo2C/external_accounts"
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
			      "details_code": "failed_other",
			      "document": null,
			      "status": "unverified"
			    }
			  },
			  "managed": false,
			  "product_description": null,
			  "statement_descriptor": null,
			  "support_email": null,
			  "support_phone": null,
			  "timezone": "US/Pacific",
			  "tos_acceptance": {
			    "date": null,
			    "ip": null,
			    "user_agent": null
			  },
			  "transfer_schedule": {
			    "delay_days": 7,
			    "interval": "daily"
			  },
			  "transfers_enabled": false,
			  "verification": {
			    "disabled_reason": "fields_needed",
			    "due_by": null,
			    "fields_needed": [
			      "business_url",
			      "external_account",
			      "product_description",
			      "support_phone",
			      "tos_acceptance.date",
			      "tos_acceptance.ip"
			    ]
			  }
			}
		}
	}
}
```

<a name="updateAccount"/>
## Stripe.updateAccount
Updates an account by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
You may only update accounts that you manage. 

| Field                | Type       | Description
|----------------------|------------|----------
| apiKey               | credentials| The api key obtained from Stripe.
| accountId            | String     | Id of account to update
| businessLogo         | String     | Bussines logo
| businessName         | String     | The publicly sharable name for this account.
| businessPrimaryColor | String     | A CSS hex color value representing the primary branding color for this account
| businessUrl          | String     | The URL that best shows the service or product provided for this account
| debitNegativeBalances| String     | A boolean for whether or not Stripe should try to reclaim negative balances from the account holder’s bank account.
| declineChargeOn      | String     | Account-level settings to automatically decline certain types of charges regardless of the bank’s decision.
| defaultCurrency      | String     | Three-letter ISO currency code representing the default currency for the account.
| email                | String     | Email address of the account holder. For standalone accounts, this is used to email them asking them to claim their Stripe account. For managed accounts, this is only to make the account easier to identify to you: Stripe will not email the account holder.
| externalAccount      | String     | A card or bank account to attach to the account. You can provide either a token, like the ones returned by Stripe.js, or a dictionary as documented in the external_account parameter for either card or bank account creation. 
| legalEntity          | String     | Information about the account holder; varies by account country and account status.
| metadata             | JSON       | A set of key/value pairs that you can attach to an account object. It can be useful for storing additional information about the account in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| productDescription   | String     | Internal-only description of the product being sold or service being provided by this account. It’s used by Stripe for risk and underwriting purposes.
| statementDescriptor  | String     | The text that will appear on credit card statements by default if a charge is being made directly on the account.
| supportEmail         | String     | A publicly shareable email address that can be reached for support for this account
| supportPhone         | String     | A publicly shareable phone number that can be reached for support for this account
| supportUrl           | String     | A publicly shareable URL that can be reached for support for this account
| tosAcceptance        | JSON       | Details on who accepted the Stripe terms of service, and when they accepted it
| transferSchedule     | JSON       | Details on when this account will make funds from charges available, and when they will be paid out to the account holder’s bank account.

#### Request example
```json
{	
	"apiKey": "...",
	"accountId": "acct_1032D82eZvKYlo2C",
	"supportPhone": "555-867-5309",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "id": "acct_1032D82eZvKYlo2C",
			  "object": "account",
			  "business_logo": null,
			  "business_name": "Stripe.com",
			  "business_url": null,
			  "charges_enabled": false,
			  "country": "US",
			  "debit_negative_balances": true,
			  "decline_charge_on": {
			    "avs_failure": true,
			    "cvc_failure": false
			  },
			  "default_currency": "usd",
			  "details_submitted": false,
			  "display_name": "Stripe.com",
			  "email": "site@stripe.com",
			  "external_accounts": {
			    "object": "list",
			    "data": [],
			    "has_more": false,
			    "total_count": 0,
			    "url": "/v1/accounts/acct_1032D82eZvKYlo2C/external_accounts"
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
			      "details_code": "failed_other",
			      "document": null,
			      "status": "unverified"
			    }
			  },
			  "managed": false,
			  "product_description": null,
			  "statement_descriptor": null,
			  "support_email": null,
			  "support_phone": "555-867-5309",
			  "timezone": "US/Pacific",
			  "tos_acceptance": {
			    "date": null,
			    "ip": null,
			    "user_agent": null
			  },
			  "transfer_schedule": {
			    "delay_days": 7,
			    "interval": "daily"
			  },
			  "transfers_enabled": false,
			  "verification": {
			    "disabled_reason": "fields_needed",
			    "due_by": null,
			    "fields_needed": [
			      "business_url",
			      "external_account",
			      "product_description",
			      "support_phone",
			      "tos_acceptance.date",
			      "tos_acceptance.ip"
			    ]
			  }
			}
		}
	}
}
```

<a name="deleteAccount"/>
## Stripe.deleteAccount
With Connect, you may delete Stripe accounts you manage.
Managed accounts created using test-mode keys can be deleted at any time. Managed accounts created using live-mode keys may only be deleted once all balances are zero.
If you are looking to close your own account, use the data tab in your account settings instead.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| accountId| String     | Id of account to delete

#### Request example
```json
{	
	"apiKey": "...",
	"accountId": "acct_1032D82eZvKYlo2C"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "deleted": true,
			  "id": "acct_1032D82eZvKYlo2C"
			}
		}
	}
}
```

<a name="rejectAccount"/>
## Stripe.rejectAccount
Managed accounts created using test-mode keys can be rejected at any time. Managed accounts created using live-mode keys may only be rejected once all balances are zero.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| accountId| String     | Id of account to reject
| reason   | String     | The reason for rejecting the account. May be one of `fraud`, `terms_of_service`, or `other`.

#### Request example
```json
{	
	"apiKey": "...",
	"accountId": "acct_1032D82eZvKYlo2C",
	"reason": "fraud"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "acct_1032D82eZvKYlo2C",
			  "object": "account",
			  "business_logo": null,
			  "business_name": "Stripe.com",
			  "business_url": null,
			  "charges_enabled": false,
			  "country": "US",
			  "debit_negative_balances": true,
			  "decline_charge_on": {
			    "avs_failure": true,
			    "cvc_failure": false
			  },
			  "default_currency": "usd",
			  "details_submitted": false,
			  "display_name": "Stripe.com",
			  "email": "site@stripe.com",
			  "external_accounts": {
			    "object": "list",
			    "data": [],
			    "has_more": false,
			    "total_count": 0,
			    "url": "/v1/accounts/acct_1032D82eZvKYlo2C/external_accounts"
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
			      "details_code": "failed_other",
			      "document": null,
			      "status": "unverified"
			    }
			  },
			  "managed": false,
			  "product_description": null,
			  "statement_descriptor": null,
			  "support_email": null,
			  "support_phone": null,
			  "timezone": "US/Pacific",
			  "tos_acceptance": {
			    "date": null,
			    "ip": null,
			    "user_agent": null
			  },
			  "transfer_schedule": {
			    "delay_days": 7,
			    "interval": "daily"
			  },
			  "transfers_enabled": false,
			  "verification": {
			    "disabled_reason": "rejected.fraud"
			  }
			}
		}
	}
}
```

<a name="getAccountList"/>
## Stripe.getAccountList
Returns a list of accounts connected to your platform via Connect. If you’re not a platform, the list will be empty.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| The api key obtained from Stripe.
| endingBefore | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| limit        | Number     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| startingAfter| String     | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

#### Request example
```json
{	
	"apiKey": "...",
	"endingBefore": "...",
	"limit": 0,
	"startingAfter": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "object": "list",
			  "url": "/v1/accounts",
			  "has_more": false,
			  "data": [
			    {
			      "id": "acct_1032D82eZvKYlo2C",
			      "object": "account",
			      "business_logo": null,
			      "business_name": "Stripe.com",
			      "business_url": null,
			      "charges_enabled": false,
			      "country": "US",
			      "debit_negative_balances": true,
			      "decline_charge_on": {
			        "avs_failure": true,
			        "cvc_failure": false
			      },
			      "default_currency": "usd",
			      "details_submitted": false,
			      "display_name": "Stripe.com",
			      "email": "site@stripe.com",
			      "external_accounts": {
			        "object": "list",
			        "data": [],
			        "has_more": false,
			        "total_count": 0,
			        "url": "/v1/accounts/acct_1032D82eZvKYlo2C/external_accounts"
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
			          "details_code": "failed_other",
			          "document": null,
			          "status": "unverified"
			        }
			      },
			      "managed": false,
			      "product_description": null,
			      "statement_descriptor": null,
			      "support_email": null,
			      "support_phone": null,
			      "timezone": "US/Pacific",
			      "tos_acceptance": {
			        "date": null,
			        "ip": null,
			        "user_agent": null
			      },
			      "transfer_schedule": {
			        "delay_days": 7,
			        "interval": "daily"
			      },
			      "transfers_enabled": false,
			      "verification": {
			        "disabled_reason": "fields_needed",
			        "due_by": null,
			        "fields_needed": [
			          "business_url",
			          "external_account",
			          "product_description",
			          "support_phone",
			          "tos_acceptance.date",
			          "tos_acceptance.ip"
			        ]
			      }
			    },
			    {...},
			    {...}
			  ]
			}
		}
	}
}
```

<a name="createFeeRefund"/>
## Stripe.createFeeRefund
Refunds an application fee that has previously been collected but not yet refunded. Funds will be refunded to the Stripe account that the fee was originally collected from.
You can optionally refund only part of an application fee. You can do so as many times as you wish until the entire fee has been refunded.
Once entirely refunded, an application fee can't be refunded again. This method will throw an error when called on an already-refunded application fee, or when trying to refund more money than is left on an application fee.

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| appId   | String     | The identifier of the application fee to be refunded.
| amount  | Number     | A positive integer in cents representing how much of this fee to refund. Can only refund up to the unrefunded amount remaining of the fee.
| metadata| JSON       | A set of key/value pairs that you can attach to a refund object. It can be useful for storing additional information about the refund in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.

#### Request example
```json
{	
	"apiKey": "...",
	"appId": "fee_9EkkFV1uz0mEyZ",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "fr_9IgOA4JPFLwylO",
			  "object": "fee_refund",
			  "amount": 100,
			  "balance_transaction": null,
			  "created": 1475395716,
			  "currency": "usd",
			  "fee": "fee_9EkkFV1uz0mEyZ",
			  "metadata": {
			  },
			  "refunded": true
			}
		}
	}
}
```

<a name="getFeeRefund"/>
## Stripe.getFeeRefund
By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details about a specific refund stored on the application fee.

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| feeId   | String     | ID of the application fee refunded.
| refundId| String     | ID of refund to retrieve.

#### Request example
```json
{	
	"apiKey": "...",
	"feeId": "fee_9EkkFV1uz0mEyZ",
	"refundId": "fr_9I0kzxDiLcgFxX"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "id": "fr_9I0kzxDiLcgFxX",
			  "object": "fee_refund",
			  "amount": 100,
			  "balance_transaction": "txn_18tiU12eZvKYlo2CetxoRTDG",
			  "created": 1475240830,
			  "currency": "usd",
			  "fee": "fee_9EkkFV1uz0mEyZ",
			  "metadata": {
			  }
			}
		}
	}
}
```

<a name="updateFeeRefund"/>
## Stripe.updateFeeRefund
Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
This request only accepts metadata as an argument.

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| feeId   | String     | ID of the application fee refunded.
| refundId| String     | ID of refund to retrieve.
| metadata| JSON       | A set of key/value pairs that you can attach to an application fee refund object. It can be useful for storing additional information about the refund in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.

#### Request example
```json
{	
	"apiKey": "...",
	"feeId": "fee_9EkkFV1uz0mEyZ",
	"refundId": "fr_9I0kzxDiLcgFxX",
	"metadata": "{ \"order_id\": \"6735\"}"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "id": "fr_9I0kzxDiLcgFxX",
			  "object": "fee_refund",
			  "amount": 100,
			  "balance_transaction": "txn_18tiU12eZvKYlo2CetxoRTDG",
			  "created": 1475240830,
			  "currency": "usd",
			  "fee": "fee_9EkkFV1uz0mEyZ",
			  "metadata": {
			    "key": "value"
			  }
			}
		}
	}
}
```

<a name="getFeeRefundList"/>
## Stripe.getFeeRefundList
You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available by default on the application fee object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional refunds.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| The api key obtained from Stripe.
| appId        | String     | The ID of the application fee whose refunds will be retrieved.
| endingBefore | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| limit        | Number     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| startingAfter| String     | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

#### Request example
```json
{	
	"apiKey": "...",
	"appId": "fee_9EkkFV1uz0mEyZ",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "object": "list",
			  "url": "/v1/application_fees/fee_9EkkFV1uz0mEyZ/refunds",
			  "has_more": false,
			  "data": [
			    {
			      "id": "fr_9I0kzxDiLcgFxX",
			      "object": "fee_refund",
			      "amount": 100,
			      "balance_transaction": "txn_18tiU12eZvKYlo2CetxoRTDG",
			      "created": 1475240830,
			      "currency": "usd",
			      "fee": "fee_9EkkFV1uz0mEyZ",
			      "metadata": {
			      }
			    },
			    {...},
			    {...}
			  ]
			}
		}
	}
}
```

<a name="getApplicationFee"/>
## Stripe.getApplicationFee
Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the application fee.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| The api key obtained from Stripe.
| feeId | String     | The identifier of the fee to be retrieved.

#### Request example
```json
{	
	"apiKey": "...",
	"feeId": "fee_9EkkFV1uz0mEyZ"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "fee_9EkkFV1uz0mEyZ",
			  "object": "application_fee",
			  "account": "acct_181heUI2xUg5aQMA",
			  "amount": 1000,
			  "amount_refunded": 1000,
			  "application": "ca_32D88BD1qLklliziD7gYQvctJIhWBSQ7",
			  "balance_transaction": "txn_18tiU12eZvKYlo2CetxoRTDG",
			  "charge": "py_18wHEjI2xUg5aQMAsAX1AYPD",
			  "created": 1474489353,
			  "currency": "usd",
			  "livemode": false,
			  "originating_transaction": "tr_18wHEj2eZvKYlo2CmoWPui9Y",
			  "refunded": true,
			  "refunds": {
			    "object": "list",
			    "data": [
			      {
			        "id": "fr_9EkkTaYshcJogQ",
			        "object": "fee_refund",
			        "amount": 1000,
			        "balance_transaction": "txn_18wHEm2eZvKYlo2Ch4blmHzq",
			        "created": 1474489355,
			        "currency": "usd",
			        "fee": "fee_9EkkFV1uz0mEyZ",
			        "metadata": {
			        }
			      }
			    ],
			    "has_more": false,
			    "total_count": 1,
			    "url": "/v1/application_fees/fee_9EkkFV1uz0mEyZ/refunds"
			  }
			}
		}
	}
}
```

<a name="getApplicationFeeList"/>
## Stripe.getApplicationFeeList
Returns a list of application fees you’ve previously collected. The application fees are returned in sorted order, with the most recent fees appearing first.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| The api key obtained  from Stripe.
| chargeId     | String     | Only return application fees for the charge specified by this charge ID.
| endingBefore | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| limit        | String     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| startingAfter| String     | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

#### Request example
```json
{	"apiKey": ,
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "object": "list",
			  "url": "/v1/application_fees",
			  "has_more": false,
			  "data": [
			    {
			      "id": "fee_9EkkFV1uz0mEyZ",
			      "object": "application_fee",
			      "account": "acct_181heUI2xUg5aQMA",
			      "amount": 1000,
			      "amount_refunded": 1000,
			      "application": "ca_32D88BD1qLklliziD7gYQvctJIhWBSQ7",
			      "balance_transaction": "txn_18tiU12eZvKYlo2CetxoRTDG",
			      "charge": "py_18wHEjI2xUg5aQMAsAX1AYPD",
			      "created": 1474489353,
			      "currency": "usd",
			      "livemode": false,
			      "originating_transaction": "tr_18wHEj2eZvKYlo2CmoWPui9Y",
			      "refunded": true,
			      "refunds": {
			        "object": "list",
			        "data": [
			          {
			            "id": "fr_9EkkTaYshcJogQ",
			            "object": "fee_refund",
			            "amount": 1000,
			            "balance_transaction": "txn_18wHEm2eZvKYlo2Ch4blmHzq",
			            "created": 1474489355,
			            "currency": "usd",
			            "fee": "fee_9EkkFV1uz0mEyZ",
			            "metadata": {
			            }
			          }
			        ],
			        "has_more": false,
			        "total_count": 1,
			        "url": "/v1/application_fees/fee_9EkkFV1uz0mEyZ/refunds"
			      }
			    },
			    {...},
			    {...}
			  ]
			}
		}
	}
}
```

<a name="getCountrySpecsList"/>
## Stripe.getCountrySpecsList
Lists all Country Spec objects available in the API.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| The api key obtained from Stripe.
| endingBefore | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| limit        | String     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| startingAfter| String     | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

#### Request example
```json
{	
	"apiKey": "...",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "object": "list",
			  "url": "/v1/country_specs",
			  "has_more": false,
			  "data": [
			    {
			      "id": "US",
			      "object": "country_spec",
			      "default_currency": "usd",
			      "supported_bank_account_currencies": {
			        "usd": [
			          "US"
			        ]
			      },
			      "supported_payment_currencies": [
			        "usd",
			        "aed",
			        "afn",
			        "..."
			      ],
			      "supported_payment_methods": [
			        "alipay",
			        "card",
			        "stripe"
			      ],
			      "verification_fields": {
			        "individual": {
			          "minimum": [
			            "external_account",
			            "legal_entity.address.city",
			            "legal_entity.address.line1",
			            "legal_entity.address.postal_code",
			            "legal_entity.address.state",
			            "legal_entity.dob.day",
			            "legal_entity.dob.month",
			            "legal_entity.dob.year",
			            "legal_entity.first_name",
			            "legal_entity.last_name",
			            "legal_entity.ssn_last_4",
			            "legal_entity.type",
			            "tos_acceptance.date",
			            "tos_acceptance.ip"
			          ],
			          "additional": [
			            "legal_entity.personal_id_number",
			            "legal_entity.verification.document"
			          ]
			        },
			        "company": {
			          "minimum": [
			            "external_account",
			            "legal_entity.address.city",
			            "legal_entity.address.line1",
			            "legal_entity.address.postal_code",
			            "legal_entity.address.state",
			            "legal_entity.business_name",
			            "legal_entity.business_tax_id",
			            "legal_entity.dob.day",
			            "legal_entity.dob.month",
			            "legal_entity.dob.year",
			            "legal_entity.first_name",
			            "legal_entity.last_name",
			            "legal_entity.ssn_last_4",
			            "legal_entity.type",
			            "tos_acceptance.date",
			            "tos_acceptance.ip"
			          ],
			          "additional": [
			            "legal_entity.personal_id_number",
			            "legal_entity.verification.document"
			          ]
			        }
			      }
			    },
			    {...},
			    {...}
			  ]
			}
		}
	}
}
```

<a name="getCountrySpec"/>
## Stripe.getCountrySpec
Returns a Country Spec for a given Country code.

| Field  | Type       | Description
|--------|------------|----------
| apiKey | credentials| The api key obtained from Stripe.
| country| String     | An ISO country code. Available country codes can be listed with the List Country Specs endpoint.

#### Request example
```json
{	
	"apiKey": "...",
	"country": "US"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "id": "US",
			  "object": "country_spec",
			  "default_currency": "usd",
			  "supported_bank_account_currencies": {
			    "usd": [
			      "US"
			    ]
			  },
			  "supported_payment_currencies": [
			    "usd",
			    "aed",
			    "afn",
			    "..."
			  ],
			  "supported_payment_methods": [
			    "alipay",
			    "card",
			    "stripe"
			  ],
			  "verification_fields": {
			    "individual": {
			      "minimum": [
			        "external_account",
			        "legal_entity.address.city",
			        "legal_entity.address.line1",
			        "legal_entity.address.postal_code",
			        "legal_entity.address.state",
			        "legal_entity.dob.day",
			        "legal_entity.dob.month",
			        "legal_entity.dob.year",
			        "legal_entity.first_name",
			        "legal_entity.last_name",
			        "legal_entity.ssn_last_4",
			        "legal_entity.type",
			        "tos_acceptance.date",
			        "tos_acceptance.ip"
			      ],
			      "additional": [
			        "legal_entity.personal_id_number",
			        "legal_entity.verification.document"
			      ]
			    },
			    "company": {
			      "minimum": [
			        "external_account",
			        "legal_entity.address.city",
			        "legal_entity.address.line1",
			        "legal_entity.address.postal_code",
			        "legal_entity.address.state",
			        "legal_entity.business_name",
			        "legal_entity.business_tax_id",
			        "legal_entity.dob.day",
			        "legal_entity.dob.month",
			        "legal_entity.dob.year",
			        "legal_entity.first_name",
			        "legal_entity.last_name",
			        "legal_entity.ssn_last_4",
			        "legal_entity.type",
			        "tos_acceptance.date",
			        "tos_acceptance.ip"
			      ],
			      "additional": [
			        "legal_entity.personal_id_number",
			        "legal_entity.verification.document"
			      ]
			    }
			  }
			}
		}
	}
}
```

<a name="createBankAccount"/>
## Stripe.createBankAccount
When you create a new bank account, you must specify a managed account to create it on.
If the bank account's owner has no other external account in the bank account's currency, the new bank account will become the default for that currency. However, if the owner already has a bank account for that currency, the new account will only become the default if the default_for_currency parameter is set to true.

| Field             | Type       | Description
|-------------------|------------|----------
| apiKey            | credentials| The api key obtained from Stripe.
| accountId         | String     | The account ID obtained from Stripe.
| source            | String     | When adding a bank account to a customer, the parameter name is source. When adding to an account, the parameter name is external_account. The value can either be a token, like the ones returned by Stripe.js, or a dictionary containing a user’s bank account details (with the options shown below).
| externalAccount   | String     | When adding a bank account to a customer, the parameter name is source. When adding to an account, the parameter name is external_account. The value can either be a token, like the ones returned by Stripe.js, or a dictionary containing a user’s bank account details (with the options shown below).
| defaultForCurrency| String     | If you set this to true (or if this is the first bank account being added in this currency) this bank account will become the default bank account for its currency.
| metadata          | JSON       | A set of key/value pairs that you can attach to an external account object. It can be useful for storing additional information about the external account in a structured format.

#### Request example
```json
{	
	"apiKey": "...",
	"accountId": "acct_1032D82eZvKYlo2C",
	"externalAccount": "btok_9I15a1JTOQZSQf",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "id": "ba_18zR3H2eZvKYlo2CzLiGrogK",
			  "object": "bank_account",
			  "account": "acct_1032D82eZvKYlo2C",
			  "account_holder_name": "Jane Austen",
			  "account_holder_type": "individual",
			  "bank_name": "STRIPE TEST BANK",
			  "country": "US",
			  "currency": "usd",
			  "default_for_currency": false,
			  "fingerprint": "1JWtPxqbdX5Gamtc",
			  "last4": "6789",
			  "metadata": {
			  },
			  "routing_number": "110000000",
			  "status": "new"
			}
		}
	}
}
```

<a name="getBankAccount"/>
## Stripe.getBankAccount
By default, you can see the 10 most recent bank accounts stored on a managed account directly on the object, but you can also retrieve details about a specific bank account stored on the Stripe account.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| The api key obtained from Stripe.
| accountId    | String     | The account ID obtained from Stripe.
| bankAccountId| String     | The bank account ID obtained from Stripe.

#### Request example
```json
{	
	"apiKey": "...",
	"accountId": "acct_1032D82eZvKYlo2C",
	"bankAccountId": "ba_18zR3H2eZvKYlo2CzLiGrogK"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "id": "ba_18zR3H2eZvKYlo2CzLiGrogK",
			  "object": "bank_account",
			  "account": "acct_1032D82eZvKYlo2C",
			  "account_holder_name": "Jane Austen",
			  "account_holder_type": "individual",
			  "bank_name": "STRIPE TEST BANK",
			  "country": "US",
			  "currency": "usd",
			  "default_for_currency": false,
			  "fingerprint": "1JWtPxqbdX5Gamtc",
			  "last4": "6789",
			  "metadata": {
			  },
			  "routing_number": "110000000",
			  "status": "new"
			}
		}
	}
}
```

<a name="updateBankAccount"/>
## Stripe.updateBankAccount
Updates the metadata of a bank account belonging to a managed account, and optionally sets it as the default for its currency. Other bank account details are not editable by design.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| The api key obtained from Stripe.
| accountId    | String     | The account ID obtained from Stripe.
| bankAccountId| String     | The ID of the bank account to be updated.
| metadata     | JSON       | A set of key/value pairs that you can attach to an external account object. It can be useful for storing additional information about the external account in a structured format.

#### Request example
```json
{	
	"apiKey": "...",
	"accountId": "acct_1032D82eZvKYlo2C",
	"bankAccountId": "ba_18zR3H2eZvKYlo2CzLiGrogK"
	"metadata": "{\"order_id\": \"6735\"}"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "ba_18zR3H2eZvKYlo2CzLiGrogK",
			  "object": "bank_account",
			  "account": "acct_1032D82eZvKYlo2C",
			  "account_holder_name": "Jane Austen",
			  "account_holder_type": "individual",
			  "bank_name": "STRIPE TEST BANK",
			  "country": "US",
			  "currency": "usd",
			  "default_for_currency": false,
			  "fingerprint": "1JWtPxqbdX5Gamtc",
			  "last4": "6789",
			  "metadata": {
			    "order_id": "6735"
			  },
			  "routing_number": "110000000",
			  "status": "new"
			}
		}
	}
}
```

<a name="deleteBankAccount"/>
## Stripe.deleteBankAccount
You can delete destination bank accounts from a managed account. If a bank account is the default external account for its currency, it can only be deleted if it is the only external account for that currency, and the currency is not the Stripe account's default currency. Otherwise, you must set another external account to be the default for the currency before deleting it.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| The api key obtained from Stripe.
| accountId    | String     | The account ID obtained from Stripe.
| bankAccountId| String     | The bank account ID obtained from Stripe.

#### Request example
```json
{	
	"apiKey": "...",
	"accountId": "acct_1032D82eZvKYlo2C",
	"bankAccountId": "ba_18zR3I2eZvKYlo2CsZ5WyBcI"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "deleted": true,
			  "id": "ba_18zR3I2eZvKYlo2CsZ5WyBcI"
			}
		}
	}
}
```

<a name="getBankAccountList"/>
## Stripe.getBankAccountList
You can see a list of the bank accounts belonging to a managed account. Note that the 10 most recent external accounts are always available by default on the corresponding Stripe object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional bank accounts.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| The api key obtained from Stripe.
| accountId    | String     | The account ID obtained from Stripe.
| endingBefore | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| limit        | String     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| startingAfter| String     | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

#### Request example
```json
{	
	"apiKey": "...",
	"accountId": "sk_test_BQokikJOvBiI2HlWgH4olfQ2",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "object": "list",
			  "url": "/v1/accounts/acct_1032D82eZvKYlo2C/external_accounts",
			  "has_more": false,
			  "data": [
			    {
			      "id": "ba_18zR3I2eZvKYlo2CsZ5WyBcI",
			      "object": "bank_account",
			      "account": "acct_1032D82eZvKYlo2C",
			      "account_holder_name": "Jane Austen",
			      "account_holder_type": "individual",
			      "bank_name": "STRIPE TEST BANK",
			      "country": "US",
			      "currency": "usd",
			      "default_for_currency": false,
			      "fingerprint": "1JWtPxqbdX5Gamtc",
			      "last4": "6789",
			      "metadata": {
			      },
			      "routing_number": "110000000",
			      "status": "new"
			    },
			    {...},
			    {...}
			  ]
			}
		}
	}
}
```

<a name="createCard"/>
## Stripe.createCard
If the account has no default destination card, then the new card will become the default. However, if the owner already has a default then it will not change. To change the default, you should set default_for_currency to true when creating a card for a managed account.

| Field             | Type       | Description
|-------------------|------------|----------
| apiKey            | credentials| The api key obtained from Stripe.
| customerId         | String     | The customer ID obtained from Stripe.
| source            | String     | When adding a bank account to a customer, the parameter name is source. When adding to an account, the parameter name is external_account. The value can either be a token, like the ones returned by Stripe.js, or a dictionary containing a user’s bank account details (with the options shown below).
| externalAccount   | String     | When adding a bank account to a customer, the parameter name is source. When adding to an account, the parameter name is external_account. The value can either be a token, like the ones returned by Stripe.js, or a dictionary containing a user’s bank account details (with the options shown below).
| defaultForCurrency| String     | If you set this to true (or if this is the first bank account being added in this currency) this bank account will become the default bank account for its currency.
| metadata          | JSON       | A set of key/value pairs that you can attach to an external account object. It can be useful for storing additional information about the external account in a structured format.

#### Request example
```json
{	
	"apiKey": "...",
	"customerId": "...",
	"externalAccount": "tok_189fTS2eZvKYlo2CcYJIOGkr",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "id": "card_18zR2T2eZvKYlo2Cn58EZoyn",
			  "object": "card",
			  "address_city": null,
			  "address_country": null,
			  "address_line1": null,
			  "address_line1_check": null,
			  "address_line2": null,
			  "address_state": null,
			  "address_zip": "226001",
			  "address_zip_check": "unchecked",
			  "brand": "Visa",
			  "country": "US",
			  "cvc_check": "unchecked",
			  "dynamic_last4": null,
			  "exp_month": 12,
			  "exp_year": 2019,
			  "funding": "credit",
			  "last4": "4242",
			  "metadata": {
			  },
			  "name": null,
			  "tokenization_method": null,
			  "account": "acct_1032D82eZvKYlo2C"
			}
		}
	}
}
```

<a name="getCard"/>
## Stripe.getCard
You can always see the 10 most recent cards directly on a customer or recipient; this method lets you retrieve details about a specific card stored on the customer or recipient.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| customerId| String     | The account ID obtained from Stripe.
| cardId   | String     | The card ID obtained from Stripe.

#### Request example
```json
{	
	"apiKey": "...",
	"customerId": "...",
	"cardId": "card_18zR2T2eZvKYlo2Cn58EZoyn"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "card_18zR2T2eZvKYlo2Cn58EZoyn",
			  "object": "card",
			  "address_city": null,
			  "address_country": null,
			  "address_line1": null,
			  "address_line1_check": null,
			  "address_line2": null,
			  "address_state": null,
			  "address_zip": "226001",
			  "address_zip_check": "unchecked",
			  "brand": "Visa",
			  "country": "US",
			  "cvc_check": "unchecked",
			  "dynamic_last4": null,
			  "exp_month": 12,
			  "exp_year": 2019,
			  "funding": "credit",
			  "last4": "4242",
			  "metadata": {
			  },
			  "name": null,
			  "tokenization_method": null,
			  "account": "acct_1032D82eZvKYlo2C"
			}
		}
	}
}
```

<a name="updateCard"/>
## Stripe.updateCard
If you need to update only some card details, like the billing address or expiration date, you can do so without having to re-enter the full card details. Stripe also works directly with card networks so that your customers can continue using your service without interruption.
When you update a card, Stripe will automatically validate the card.

| Field             | Type       | Description
|-------------------|------------|----------
| apiKey            | credentials| The api key obtained from Stripe.
| customerId        | String     | The customer ID obtained from Stripe.
| cardId            | String     | The card ID obtained from Stripe.
| addressCity       | String     | City.
| addressCountry    | String     | Country.
| addressLine1      | String     | Line 1.
| addressLine2      | String     | Line 2.
| addressState      | String     | State.
| addressZip        | String     | State.
| defaultForCurrency| String     | Only applicable on accounts (not customers or recipients). If set to true, this card will become the default external account for its currency..
| expMonth          | String     | Month.
| expYear           | String     | Year.
| metadata          | String     | A set of key/value pairs that you can attach to a customer object. It can be useful for storing additional information about the customer in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| name              | String     | Name.

#### Request example
```json
{	
	"apiKey": "...",
	"accountId": "acct_1032D82eZvKYlo2C",
	"cardId": "card_18zR2T2eZvKYlo2Cn58EZoyn",
	"name": "Sophia Moore"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "card_18zR2T2eZvKYlo2Cn58EZoyn",
			  "object": "card",
			  "address_city": null,
			  "address_country": null,
			  "address_line1": null,
			  "address_line1_check": null,
			  "address_line2": null,
			  "address_state": null,
			  "address_zip": "226001",
			  "address_zip_check": "unchecked",
			  "brand": "Visa",
			  "country": "US",
			  "cvc_check": "unchecked",
			  "dynamic_last4": null,
			  "exp_month": 12,
			  "exp_year": 2019,
			  "funding": "credit",
			  "last4": "4242",
			  "metadata": {
			  },
			  "name": "Sophia Moore",
			  "tokenization_method": null,
			  "account": "acct_1032D82eZvKYlo2C"
			}
		}
	}
}
```

<a name="deleteCard"/>
## Stripe.deleteCard
If a card's default_for_currency property is true, it can only be deleted if it is the only external account for its currency, and the currency is not the Stripe account's default currency. Otherwise, before deleting the card, you must set another external account to be the default for the currency.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| customerId| String     | The customer ID obtained from Stripe.
| cardId   | String     | The card ID obtained from Stripe.

#### Request example
```json
{	
	"apiKey": "...",
	"customerId": "...",
	"cardId": "card_18zR2T2eZvKYlo2Cn58EZoyn"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "deleted": true,
			  "id": "card_18zR2T2eZvKYlo2Cn58EZoyn"
			}
		}
	}
}
```

<a name="getCardList"/>
## Stripe.getCardList
You can see a list of the cards belonging to a managed account. Note that the 10 most recent external accounts are available on the account object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional cards.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| The api key obtained from Stripe.
| customerId    | String     | The customer ID obtained from Stripe.
| endingBefore | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| limit        | String     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| startingAfter| String     | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

#### Request example
```json
{	
	"apiKey": "...",
	"customerId": "...",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "object": "list",
			  "url": "/v1/accounts/acct_1032D82eZvKYlo2C/external_accounts",
			  "has_more": false,
			  "data": [
			    {
			      "id": "card_18zR2T2eZvKYlo2Cn58EZoyn",
			      "object": "card",
			      "address_city": null,
			      "address_country": null,
			      "address_line1": null,
			      "address_line1_check": null,
			      "address_line2": null,
			      "address_state": null,
			      "address_zip": "226001",
			      "address_zip_check": "unchecked",
			      "brand": "Visa",
			      "country": "US",
			      "cvc_check": "unchecked",
			      "dynamic_last4": null,
			      "exp_month": 12,
			      "exp_year": 2019,
			      "funding": "credit",
			      "last4": "4242",
			      "metadata": {
			      },
			      "name": null,
			      "tokenization_method": null,
			      "account": "acct_1032D82eZvKYlo2C"
			    },
			    {...},
			    {...}
			  ]
			}
		}
	}
}
```

<a name="createReceiver"/>
## Stripe.createReceiver
Method description

| Field            | Type       | Description
|------------------|------------|----------
| apiKey           | credentials| The api key obtained from Stripe.
| amount           | String     | The account ID obtained from Stripe.
| currency         | String     | Only USD currently supported
| email            | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| description      | String     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| metadata         | String     | 
| refundMispayments| String     | 

#### Request example
```json
{	
	"apiKey": "...",
	"amount": "...",
	"currency": "usd",
	"email": "...",
	"description": "...",
	"metadata": "...",
	"refundMispayments": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getReceiver"/>
## Stripe.getReceiver
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| The api key obtained from Stripe.
| receiverId| String     | Id of receiver to retrive.

#### Request example
```json
{	
	"apiKey": "...",
	"receiverId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getReceiverList"/>
## Stripe.getReceiverList
Method description

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| The api key obtained from Stripe.

#### Request example
```json
{	"apiKey": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="createOrder"/>
## Stripe.createOrder
Creates a new order object.

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| currency| String     | 3-letter ISO code representing the currency in which the order should be made. Stripe will validate that all entries in items match the currency specified here.
| coupon  | String     | A coupon code that represents a discount to be applied to this order. Must be one-time duration and in same currency as the order.
| customer| String     | The ID of an existing customer to use for this order. If provided, the customer email and shipping address will be used to create the order. Subsequently, the customer will also be charged to pay the order. If email or shipping are also provided, they will override the values retrieved from the customer object.
| email   | String     | The email address of the customer placing the order.
| items   | JSON       | List of items constituting the order.
| metadata| JSON       | A set of key/value pairs that you can attach to an order object. It can be useful for storing additional information about the order in a structured format.
| shipping| JSON       | Shipping address for the order. Required if any of the SKUs are for products that have shippable set to true.

#### Request example
```json
{	
	"apiKey": "...",
	"currency": "usd",
	"email": "anthony.anderson@example.com",
	"items": "[{\"type\": \"sku\", \"parent\": \"sku_9BtKAR1ZXD42en\"}]",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "or_18tVaP2eZvKYlo2CP5mgybEM",
			  "object": "order",
			  "amount": 3084,
			  "amount_returned": 3084,
			  "application": null,
			  "application_fee": null,
			  "charge": "ch_18z3WS2eZvKYlo2ChBcCbkN5",
			  "created": 1473829529,
			  "currency": "usd",
			  "customer": null,
			  "email": "jenny@example.com",
			  "items": [
			    {
			      "object": "order_item",
			      "amount": 3084,
			      "currency": "usd",
			      "description": "T-shirt",
			      "parent": "sku_98dMiVopxu0m3r",
			      "quantity": 2,
			      "type": "sku"
			    },
			    {
			      "object": "order_item",
			      "amount": 0,
			      "currency": "usd",
			      "description": "Taxes (included)",
			      "parent": null,
			      "quantity": null,
			      "type": "tax"
			    },
			    {
			      "object": "order_item",
			      "amount": 0,
			      "currency": "usd",
			      "description": "Free shipping",
			      "parent": "ship_free-shipping",
			      "quantity": null,
			      "type": "shipping"
			    }
			  ],
			  "livemode": false,
			  "metadata": {
			  },
			  "returns": {
			    "object": "list",
			    "data": [
			      {
			        "id": "orret_18z4Ju2eZvKYlo2CqDgoOMW5",
			        "object": "order_return",
			        "amount": 3084,
			        "created": 1475154686,
			        "currency": "usd",
			        "items": [
			          {
			            "object": "order_item",
			            "amount": 3084,
			            "currency": "usd",
			            "description": "T-shirt",
			            "parent": "sku_98dMiVopxu0m3r",
			            "quantity": 2,
			            "type": "sku"
			          },
			          {
			            "object": "order_item",
			            "amount": 0,
			            "currency": "usd",
			            "description": "Taxes (included)",
			            "parent": null,
			            "quantity": null,
			            "type": "tax"
			          },
			          {
			            "object": "order_item",
			            "amount": 0,
			            "currency": "usd",
			            "description": "Free shipping",
			            "parent": "ship_free-shipping",
			            "quantity": null,
			            "type": "shipping"
			          }
			        ],
			        "livemode": false,
			        "order": "or_18tVaP2eZvKYlo2CP5mgybEM",
			        "refund": "re_18z4Ju2eZvKYlo2CGOBWgZtx"
			      }
			    ],
			    "has_more": false,
			    "total_count": 1,
			    "url": "/v1/order_returns?order=or_18tVaP2eZvKYlo2CP5mgybEM"
			  },
			  "selected_shipping_method": "ship_free-shipping",
			  "shipping": {
			    "address": {
			      "city": "Anytown",
			      "country": "US",
			      "line1": "1234 Main Street",
			      "line2": null,
			      "postal_code": "123456",
			      "state": null
			    },
			    "carrier": null,
			    "name": "Jenny Rosen",
			    "phone": null,
			    "tracking_number": null
			  },
			  "shipping_methods": [
			    {
			      "id": "ship_free-shipping",
			      "amount": 0,
			      "currency": "usd",
			      "delivery_estimate": null,
			      "description": "Free shipping"
			    }
			  ],
			  "status": "canceled",
			  "status_transitions": null,
			  "updated": 1475154686
			}
		}
	}
}
```

<a name="getOrder"/>
## Stripe.getOrder
Retrieves the details of an existing order. Supply the unique order ID from either an order creation request or the order list, and Stripe will return the corresponding order information.

| Field  | Type       | Description
|--------|------------|----------
| apiKey | credentials| The api key obtained from Stripe.
| orderId| String     | Id of receiver to retrive.

#### Request example
```json
{	
	"apiKey": "...",
	"orderId": "or_18tVaP2eZvKYlo2CP5mgybEM"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "or_18tVaP2eZvKYlo2CP5mgybEM",
			  "object": "order",
			  "amount": 3084,
			  "amount_returned": 3084,
			  "application": null,
			  "application_fee": null,
			  "charge": "ch_18z3WS2eZvKYlo2ChBcCbkN5",
			  "created": 1473829529,
			  "currency": "usd",
			  "customer": null,
			  "email": "jenny@example.com",
			  "items": [
			    {
			      "object": "order_item",
			      "amount": 3084,
			      "currency": "usd",
			      "description": "T-shirt",
			      "parent": "sku_98dMiVopxu0m3r",
			      "quantity": 2,
			      "type": "sku"
			    },
			    {
			      "object": "order_item",
			      "amount": 0,
			      "currency": "usd",
			      "description": "Taxes (included)",
			      "parent": null,
			      "quantity": null,
			      "type": "tax"
			    },
			    {
			      "object": "order_item",
			      "amount": 0,
			      "currency": "usd",
			      "description": "Free shipping",
			      "parent": "ship_free-shipping",
			      "quantity": null,
			      "type": "shipping"
			    }
			  ],
			  "livemode": false,
			  "metadata": {
			  },
			  "returns": {
			    "object": "list",
			    "data": [
			      {
			        "id": "orret_18z4Ju2eZvKYlo2CqDgoOMW5",
			        "object": "order_return",
			        "amount": 3084,
			        "created": 1475154686,
			        "currency": "usd",
			        "items": [
			          {
			            "object": "order_item",
			            "amount": 3084,
			            "currency": "usd",
			            "description": "T-shirt",
			            "parent": "sku_98dMiVopxu0m3r",
			            "quantity": 2,
			            "type": "sku"
			          },
			          {
			            "object": "order_item",
			            "amount": 0,
			            "currency": "usd",
			            "description": "Taxes (included)",
			            "parent": null,
			            "quantity": null,
			            "type": "tax"
			          },
			          {
			            "object": "order_item",
			            "amount": 0,
			            "currency": "usd",
			            "description": "Free shipping",
			            "parent": "ship_free-shipping",
			            "quantity": null,
			            "type": "shipping"
			          }
			        ],
			        "livemode": false,
			        "order": "or_18tVaP2eZvKYlo2CP5mgybEM",
			        "refund": "re_18z4Ju2eZvKYlo2CGOBWgZtx"
			      }
			    ],
			    "has_more": false,
			    "total_count": 1,
			    "url": "/v1/order_returns?order=or_18tVaP2eZvKYlo2CP5mgybEM"
			  },
			  "selected_shipping_method": "ship_free-shipping",
			  "shipping": {
			    "address": {
			      "city": "Anytown",
			      "country": "US",
			      "line1": "1234 Main Street",
			      "line2": null,
			      "postal_code": "123456",
			      "state": null
			    },
			    "carrier": null,
			    "name": "Jenny Rosen",
			    "phone": null,
			    "tracking_number": null
			  },
			  "shipping_methods": [
			    {
			      "id": "ship_free-shipping",
			      "amount": 0,
			      "currency": "usd",
			      "delivery_estimate": null,
			      "description": "Free shipping"
			    }
			  ],
			  "status": "canceled",
			  "status_transitions": null,
			  "updated": 1475154686
			}
		}
	}
}
```

<a name="updateOrder"/>
## Stripe.updateOrder
Updates the specific order by setting the values of the parameters passed. Any parameters not provided will be left unchanged. This request accepts only the metadata, and status as arguments.

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| orderId | credentials| Id of order to update.
| coupon  | String     | A coupon code that represents a discount to be applied to this order. Must be one-time duration and in same currency as the order.
| metadata| JSON       | A set of key/value pairs that you can attach to an order object. It can be useful for storing additional information about the order in a structured format.
| shipping| JSON       | Shipping address for the order. Required if any of the SKUs are for products that have shippable set to true.
| status  | credentials| Current order status. One of `created`, `paid`, `canceled`, `fulfilled`, or `returned`.

#### Request example
```json
{	
	"apiKey": "...",
	"orderId": "or_18tVaP2eZvKYlo2CP5mgybEM",
	"metadata": "...",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "or_18tVaP2eZvKYlo2CP5mgybEM",
			  "object": "order",
			  "amount": 3084,
			  "amount_returned": 3084,
			  "application": null,
			  "application_fee": null,
			  "charge": "ch_18z3WS2eZvKYlo2ChBcCbkN5",
			  "created": 1473829529,
			  "currency": "usd",
			  "customer": null,
			  "email": "jenny@example.com",
			  "items": [
			    {
			      "object": "order_item",
			      "amount": 3084,
			      "currency": "usd",
			      "description": "T-shirt",
			      "parent": "sku_98dMiVopxu0m3r",
			      "quantity": 2,
			      "type": "sku"
			    },
			    {
			      "object": "order_item",
			      "amount": 0,
			      "currency": "usd",
			      "description": "Taxes (included)",
			      "parent": null,
			      "quantity": null,
			      "type": "tax"
			    },
			    {
			      "object": "order_item",
			      "amount": 0,
			      "currency": "usd",
			      "description": "Free shipping",
			      "parent": "ship_free-shipping",
			      "quantity": null,
			      "type": "shipping"
			    }
			  ],
			  "livemode": false,
			  "metadata": {
			    "order_id": "6735"
			  },
			  "returns": {
			    "object": "list",
			    "data": [
			      {
			        "id": "orret_18z4Ju2eZvKYlo2CqDgoOMW5",
			        "object": "order_return",
			        "amount": 3084,
			        "created": 1475154686,
			        "currency": "usd",
			        "items": [
			          {
			            "object": "order_item",
			            "amount": 3084,
			            "currency": "usd",
			            "description": "T-shirt",
			            "parent": "sku_98dMiVopxu0m3r",
			            "quantity": 2,
			            "type": "sku"
			          },
			          {
			            "object": "order_item",
			            "amount": 0,
			            "currency": "usd",
			            "description": "Taxes (included)",
			            "parent": null,
			            "quantity": null,
			            "type": "tax"
			          },
			          {
			            "object": "order_item",
			            "amount": 0,
			            "currency": "usd",
			            "description": "Free shipping",
			            "parent": "ship_free-shipping",
			            "quantity": null,
			            "type": "shipping"
			          }
			        ],
			        "livemode": false,
			        "order": "or_18tVaP2eZvKYlo2CP5mgybEM",
			        "refund": "re_18z4Ju2eZvKYlo2CGOBWgZtx"
			      }
			    ],
			    "has_more": false,
			    "total_count": 1,
			    "url": "/v1/order_returns?order=or_18tVaP2eZvKYlo2CP5mgybEM"
			  },
			  "selected_shipping_method": "ship_free-shipping",
			  "shipping": {
			    "address": {
			      "city": "Anytown",
			      "country": "US",
			      "line1": "1234 Main Street",
			      "line2": null,
			      "postal_code": "123456",
			      "state": null
			    },
			    "carrier": null,
			    "name": "Jenny Rosen",
			    "phone": null,
			    "tracking_number": null
			  },
			  "shipping_methods": [
			    {
			      "id": "ship_free-shipping",
			      "amount": 0,
			      "currency": "usd",
			      "delivery_estimate": null,
			      "description": "Free shipping"
			    }
			  ],
			  "status": "canceled",
			  "status_transitions": null,
			  "updated": 1475154686
			}
		}
	}
}
```

<a name="payOrder"/>
## Stripe.payOrder
Pay an order by providing a source to create a payment.

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| orderId | String     | The ID of an order to pay.
| customer| String     | The ID of an existing customer that will be charged in this request.
| source  | String     | A payment source to be charged, such as a credit card. If you also pass a customer ID, the source must be the ID of a source belonging to the customer. Otherwise, if you do not pass a customer ID, the source you provide must either be a token, like the ones returned by Stripe.js, or a object containing a user's credit card details, with the options described below. Although not all information is required, the extra info helps prevent fraud.
| metadata| JSON       | A set of key/value pairs that you can attach to an order object. It can be useful for storing additional information about the order in a structured format.
| email   | String     | The email address of the customer placing the order. If a customer is specified, that customer's email address will be used.

#### Request example
```json
{	
	"apiKey": "...",
	"orderId": "tok_189fTS2eZvKYlo2CcYJIOGkr",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "id": "or_18tVaP2eZvKYlo2CP5mgybEM",
			  "object": "order",
			  "amount": 3084,
			  "amount_returned": 3084,
			  "application": null,
			  "application_fee": null,
			  "charge": "ch_18zRBY2eZvKYlo2C2g0wvnvx",
			  "created": 1473829529,
			  "currency": "usd",
			  "customer": null,
			  "email": "jenny@example.com",
			  "items": [
			    {
			      "object": "order_item",
			      "amount": 3084,
			      "currency": "usd",
			      "description": "T-shirt",
			      "parent": "sku_98dMiVopxu0m3r",
			      "quantity": 2,
			      "type": "sku"
			    },
			    {
			      "object": "order_item",
			      "amount": 0,
			      "currency": "usd",
			      "description": "Taxes (included)",
			      "parent": null,
			      "quantity": null,
			      "type": "tax"
			    },
			    {
			      "object": "order_item",
			      "amount": 0,
			      "currency": "usd",
			      "description": "Free shipping",
			      "parent": "ship_free-shipping",
			      "quantity": null,
			      "type": "shipping"
			    }
			  ],
			  "livemode": false,
			  "metadata": {
			  },
			  "returns": {
			    "object": "list",
			    "data": [
			      {
			        "id": "orret_18z4Ju2eZvKYlo2CqDgoOMW5",
			        "object": "order_return",
			        "amount": 3084,
			        "created": 1475154686,
			        "currency": "usd",
			        "items": [
			          {
			            "object": "order_item",
			            "amount": 3084,
			            "currency": "usd",
			            "description": "T-shirt",
			            "parent": "sku_98dMiVopxu0m3r",
			            "quantity": 2,
			            "type": "sku"
			          },
			          {
			            "object": "order_item",
			            "amount": 0,
			            "currency": "usd",
			            "description": "Taxes (included)",
			            "parent": null,
			            "quantity": null,
			            "type": "tax"
			          },
			          {
			            "object": "order_item",
			            "amount": 0,
			            "currency": "usd",
			            "description": "Free shipping",
			            "parent": "ship_free-shipping",
			            "quantity": null,
			            "type": "shipping"
			          }
			        ],
			        "livemode": false,
			        "order": "or_18tVaP2eZvKYlo2CP5mgybEM",
			        "refund": "re_18z4Ju2eZvKYlo2CGOBWgZtx"
			      }
			    ],
			    "has_more": false,
			    "total_count": 1,
			    "url": "/v1/order_returns?order=or_18tVaP2eZvKYlo2CP5mgybEM"
			  },
			  "selected_shipping_method": "ship_free-shipping",
			  "shipping": {
			    "address": {
			      "city": "Anytown",
			      "country": "US",
			      "line1": "1234 Main Street",
			      "line2": null,
			      "postal_code": "123456",
			      "state": null
			    },
			    "carrier": null,
			    "name": "Jenny Rosen",
			    "phone": null,
			    "tracking_number": null
			  },
			  "shipping_methods": [
			    {
			      "id": "ship_free-shipping",
			      "amount": 0,
			      "currency": "usd",
			      "delivery_estimate": null,
			      "description": "Free shipping"
			    }
			  ],
			  "status": "paid",
			  "status_transitions": null,
			  "updated": 1475154686
			}
		}
	}
}
```

<a name="getOrderList"/>
## Stripe.getOrderList
Returns a list of your orders. The orders are returned sorted by creation date, with the most recently created orders appearing first.

| Field            | Type       | Description
|------------------|------------|----------
| apiKey           | credentials| The api key obtained from Stripe.
| created          | String     | A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options:
| customer         | String     | Only return orders for the given customer.
| ids              | String     | Only return orders with the given IDs.
| status           | String     | Only return orders that have the given status. One of `created`, `paid`, `fulfilled`, or `refunded`.
| statusTransitions| String     | Filter orders based on when they were paid, fulfilled, canceled, or returned.
| upstreamIds      | String     | Only return orders with the given upstream order IDs.

#### Request example
```json
{	
	"apiKey": "...",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "object": "list",
			  "url": "/v1/orders",
			  "has_more": false,
			  "data": [
			    {
			      "id": "or_18tVaP2eZvKYlo2CP5mgybEM",
			      "object": "order",
			      "amount": 3084,
			      "amount_returned": 3084,
			      "application": null,
			      "application_fee": null,
			      "charge": "ch_18z3WS2eZvKYlo2ChBcCbkN5",
			      "created": 1473829529,
			      "currency": "usd",
			      "customer": null,
			      "email": "jenny@example.com",
			      "items": [
			        {
			          "object": "order_item",
			          "amount": 3084,
			          "currency": "usd",
			          "description": "T-shirt",
			          "parent": "sku_98dMiVopxu0m3r",
			          "quantity": 2,
			          "type": "sku"
			        },
			        {
			          "object": "order_item",
			          "amount": 0,
			          "currency": "usd",
			          "description": "Taxes (included)",
			          "parent": null,
			          "quantity": null,
			          "type": "tax"
			        },
			        {
			          "object": "order_item",
			          "amount": 0,
			          "currency": "usd",
			          "description": "Free shipping",
			          "parent": "ship_free-shipping",
			          "quantity": null,
			          "type": "shipping"
			        }
			      ],
			      "livemode": false,
			      "metadata": {
			      },
			      "returns": {
			        "object": "list",
			        "data": [
			          {
			            "id": "orret_18z4Ju2eZvKYlo2CqDgoOMW5",
			            "object": "order_return",
			            "amount": 3084,
			            "created": 1475154686,
			            "currency": "usd",
			            "items": [
			              {
			                "object": "order_item",
			                "amount": 3084,
			                "currency": "usd",
			                "description": "T-shirt",
			                "parent": "sku_98dMiVopxu0m3r",
			                "quantity": 2,
			                "type": "sku"
			              },
			              {
			                "object": "order_item",
			                "amount": 0,
			                "currency": "usd",
			                "description": "Taxes (included)",
			                "parent": null,
			                "quantity": null,
			                "type": "tax"
			              },
			              {
			                "object": "order_item",
			                "amount": 0,
			                "currency": "usd",
			                "description": "Free shipping",
			                "parent": "ship_free-shipping",
			                "quantity": null,
			                "type": "shipping"
			              }
			            ],
			            "livemode": false,
			            "order": "or_18tVaP2eZvKYlo2CP5mgybEM",
			            "refund": "re_18z4Ju2eZvKYlo2CGOBWgZtx"
			          }
			        ],
			        "has_more": false,
			        "total_count": 1,
			        "url": "/v1/order_returns?order=or_18tVaP2eZvKYlo2CP5mgybEM"
			      },
			      "selected_shipping_method": "ship_free-shipping",
			      "shipping": {
			        "address": {
			          "city": "Anytown",
			          "country": "US",
			          "line1": "1234 Main Street",
			          "line2": null,
			          "postal_code": "123456",
			          "state": null
			        },
			        "carrier": null,
			        "name": "Jenny Rosen",
			        "phone": null,
			        "tracking_number": null
			      },
			      "shipping_methods": [
			        {
			          "id": "ship_free-shipping",
			          "amount": 0,
			          "currency": "usd",
			          "delivery_estimate": null,
			          "description": "Free shipping"
			        }
			      ],
			      "status": "canceled",
			      "status_transitions": null,
			      "updated": 1475154686
			    },
			    {...},
			    {...}
			  ]
			}
		}
	}
}
```

<a name="returnOrder"/>
## Stripe.returnOrder
Return all or part of an order. The order must have a status of paid or fulfilled before it can be returned. Once all items have been returned, the order will become canceled or returned depending on which status the order started in.

| Field  | Type       | Description
|--------|------------|----------
| apiKey | credentials| The api key obtained from Stripe.
| orderId| JSON       | Order id.
| items  | JSON       | List of items to return.

#### Request example
```json
{	
	"apiKey": "...",
	"orderId": "...",
	"items": [{"type": "sku", "parent": "sku_9BtKAR1ZXD42en"}]
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "orret_18z4Ju2eZvKYlo2CqDgoOMW5",
			  "object": "order_return",
			  "amount": 3084,
			  "created": 1475154686,
			  "currency": "usd",
			  "items": [
			    {
			      "object": "order_item",
			      "amount": 3084,
			      "currency": "usd",
			      "description": "T-shirt",
			      "parent": "sku_98dMiVopxu0m3r",
			      "quantity": 2,
			      "type": "sku"
			    },
			    {
			      "object": "order_item",
			      "amount": 0,
			      "currency": "usd",
			      "description": "Taxes (included)",
			      "parent": null,
			      "quantity": null,
			      "type": "tax"
			    },
			    {
			      "object": "order_item",
			      "amount": 0,
			      "currency": "usd",
			      "description": "Free shipping",
			      "parent": "ship_free-shipping",
			      "quantity": null,
			      "type": "shipping"
			    }
			  ],
			  "livemode": false,
			  "order": "or_18tVaP2eZvKYlo2CP5mgybEM",
			  "refund": "re_18z4Ju2eZvKYlo2CGOBWgZtx"
			}
		}
	}
}
```

<a name="getOrderReturn"/>
## Stripe.getOrderReturn
Returns a list of your order returns. The returns are returned sorted by creation date, with the most recently created return appearing first.

| Field  | Type       | Description
|--------|------------|----------
| apiKey | credentials| The api key obtained from Stripe.
| orderId| JSON       | The identifier of the order return to be retrieved.

#### Request example
```json
{	
	"apiKey": "...",
	"orderId": "orret_18z4Ju2eZvKYlo2CqDgoOMW5"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "orret_18z4Ju2eZvKYlo2CqDgoOMW5",
			  "object": "order_return",
			  "amount": 3084,
			  "created": 1475154686,
			  "currency": "usd",
			  "items": [
			    {
			      "object": "order_item",
			      "amount": 3084,
			      "currency": "usd",
			      "description": "T-shirt",
			      "parent": "sku_98dMiVopxu0m3r",
			      "quantity": 2,
			      "type": "sku"
			    },
			    {
			      "object": "order_item",
			      "amount": 0,
			      "currency": "usd",
			      "description": "Taxes (included)",
			      "parent": null,
			      "quantity": null,
			      "type": "tax"
			    },
			    {
			      "object": "order_item",
			      "amount": 0,
			      "currency": "usd",
			      "description": "Free shipping",
			      "parent": "ship_free-shipping",
			      "quantity": null,
			      "type": "shipping"
			    }
			  ],
			  "livemode": false,
			  "order": "or_18tVaP2eZvKYlo2CP5mgybEM",
			  "refund": "re_18z4Ju2eZvKYlo2CGOBWgZtx"
			}
		}
	}
}
```

<a name="getOrderReturnList"/>
## Stripe.getOrderReturnList
Returns a list of your order returns. The returns are returned sorted by creation date, with the most recently created return appearing first.

| Field  | Type       | Description
|--------|------------|----------
| apiKey | credentials| The api key obtained from Stripe.
| created| String     | A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options:

#### Request example
```json
{	
	"apiKey": "...",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "object": "list",
			  "url": "/v1/order_returns",
			  "has_more": false,
			  "data": [
			    {
			      "id": "orret_18z4Ju2eZvKYlo2CqDgoOMW5",
			      "object": "sku",
			      "active": true,
			      "attributes": {
			        "color": "Cyan",
			        "gender": "Unisex",
			        "size": "Medium"
			      },
			      "created": 1473829395,
			      "currency": "usd",
			      "image": null,
			      "inventory": {
			        "quantity": 500,
			        "type": "finite",
			        "value": null
			      },
			      "livemode": false,
			      "metadata": {
			      },
			      "package_dimensions": null,
			      "price": 1500,
			      "product": "prod_9I00GcePCVmLik",
			      "updated": 1473829395
			    },
			    {...},
			    {...}
			  ]
			}
		}
	}
}
```

<a name="createProduct"/>
## Stripe.createProduct
Creates a new product object.

| Field            | Type       | Description
|------------------|------------|----------
| apiKey           | credentials| The api key obtained from Stripe.
| name             | String     | The product’s name, meant to be displayable to the customer.
| active           | String     | Whether or not the product is currently available for purchase. Defaults to `true`.
| attributes       | JSON       | A list of up to 5 alphanumeric attributes that each SKU can provide values for (e.g. `["color", "size"]`).
| caption          | String     | A short one-line description of the product, meant to be displayable to the customer.
| deactivateOn     | JSON       | An array of Connect application names or identifiers that should not be able to order the SKUs for this product.
| description      | String     | The product’s description, meant to be displayable to the customer.
| images           | JSON       | A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
| metadata         | JSON       | A set of key/value pairs that you can attach to a product object. It can be useful for storing additional information about the product in a structured format.
| packageDimensions| String     | The dimensions of this product for shipping purposes. A SKU associated with this product can override this value by having its own package_dimensions.
| shippable        | String     | Whether this product is shipped (i.e. physical goods). Defaults to true.
| url              | String     | A URL of a publicly-accessible webpage for this product.

#### Request example
```json
{	
	"apiKey": "...",
	"name": "T-shirt",
	"attributes": ["size", "gender"],
	"caption": "...",
	"deactivateOn": "...",
	"description": "Comfortable cotton t-shirt",
	"images": "...",
	"metadata": "...",
	"packageDimensions": "...",
	"shippable": "...",
	"url": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "id": "prod_9I00GcePCVmLik",
			  "object": "product",
			  "active": true,
			  "attributes": [],
			  "caption": null,
			  "created": 1475238070,
			  "deactivate_on": [],
			  "description": "Test",
			  "images": [],
			  "livemode": false,
			  "metadata": {
			  },
			  "name": "test",
			  "package_dimensions": null,
			  "shippable": true,
			  "skus": {
			    "object": "list",
			    "data": [],
			    "has_more": false,
			    "total_count": 0,
			    "url": "/v1/skus?product=prod_9I00GcePCVmLik\u0026active=true"
			  },
			  "updated": 1475238070,
			  "url": null
			}
		}
	}
}
```

<a name="getProduct"/>
## Stripe.getProduct
Store representations of products you sell in product objects, used in conjunction with SKUs. Products may be physical goods, to be shipped, or digital.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| productId| String     | The identifier of the product to be retrieved.

#### Request example
```json
{	
	"apiKey": "...",
	"productId": "prod_9I00GcePCVmLik"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "prod_9I00GcePCVmLik",
			  "object": "product",
			  "active": true,
			  "attributes": [],
			  "caption": null,
			  "created": 1475238070,
			  "deactivate_on": [ ],
			  "description": "Test",
			  "images": [],
			  "livemode": false,
			  "metadata": {
			  },
			  "name": "test",
			  "package_dimensions": null,
			  "shippable": true,
			  "skus": {
			    "object": "list",
			    "data": [],
			    "has_more": false,
			    "total_count": 0,
			    "url": "/v1/skus?product=prod_9I00GcePCVmLik\u0026active=true"
			  },
			  "updated": 1475238070,
			  "url": null
			}
		}
	}
}
```

<a name="updateProduct"/>
## Stripe.updateProduct
Updates the specific product by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
Note that a product's attributes are not editable. Instead, you would need to deactivate the existing product and create a new one with the new attribute values.

| Field            | Type       | Description
|------------------|------------|----------
| apiKey           | credentials| The api key obtained from Stripe.
| productId        | String     | The id of product to update.
| name             | String     | The product’s name, meant to be displayable to the customer.
| active           | String     | Whether or not the product is currently available for purchase. Defaults to `true`.
| attributes       | JSON       | A list of up to 5 alphanumeric attributes that each SKU can provide values for (e.g. `["color", "size"]`).
| caption          | String     | A short one-line description of the product, meant to be displayable to the customer.
| deactivateOn     | JSON       | An array of Connect application names or identifiers that should not be able to order the SKUs for this product.
| description      | String     | The product’s description, meant to be displayable to the customer.
| images           | JSON       | A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
| metadata         | JSON       | A set of key/value pairs that you can attach to a product object. It can be useful for storing additional information about the product in a structured format.
| packageDimensions| String     | The dimensions of this product for shipping purposes. A SKU associated with this product can override this value by having its own package_dimensions.
| shippable        | String     | Whether this product is shipped (i.e. physical goods). Defaults to true.
| url              | String     | A URL of a publicly-accessible webpage for this product.

#### Request example
```json
{	
	"apiKey": "...",
	"productId": "pr_18zQ0o2eZvKYlo2CxWcZi2sj",
	"name": "Test",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "prod_9I00GcePCVmLik",
			  "object": "product",
			  "active": true,
			  "attributes": [],
			  "caption": null,
			  "created": 1475238070,
			  "deactivate_on": [ ],
			  "description": "Test",
			  "images": [],
			  "livemode": false,
			  "metadata": {
			  },
			  "name": "test",
			  "package_dimensions": null,
			  "shippable": true,
			  "skus": {
			    "object": "list",
			    "data": [],
			    "has_more": false,
			    "total_count": 0,
			    "url": "/v1/skus?product=prod_9I00GcePCVmLik\u0026active=true"
			  },
			  "updated": 1475238070,
			  "url": null
			}
		}
	}
}

<a name="getProductList"/>
## Stripe.getProductList
Returns a list of your products. The products are returned sorted by creation date, with the most recently created products appearing first.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| ids      | String     | Only return products with the given IDs.
| shippable| String     | Only return products that can be shipped (i.e., physical, not digital products).
| url      | String     | Only return products with the given url.

#### Request example
```json
{	
	"apiKey": "...",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "object": "list",
			  "url": "/v1/products",
			  "has_more": false,
			  "data": [
			    {
			      "id": "prod_9I00GcePCVmLik",
			      "object": "product",
			      "active": true,
			      "attributes": [],
			      "caption": null,
			      "created": 1475238070,
			      "deactivate_on": [],
			      "description": "Test",
			      "images": [ ],
			      "livemode": false,
			      "metadata": {
			      },
			      "name": "test",
			      "package_dimensions": null,
			      "shippable": true,
			      "skus": {
			        "object": "list",
			        "data": [],
			        "has_more": false,
			        "total_count": 0,
			        "url": "/v1/skus?product=prod_9I00GcePCVmLik\u0026active=true"
			      },
			      "updated": 1475238070,
			      "url": null
			    },
			    {...},
			    {...}
			  ]
			}
		}
	}
}
```

<a name="deleteProduct"/>
## Stripe.deleteProduct
Delete a product. Deleting a product is only possible if it has no SKUs associated with it.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| productId| String     | The ID of the product to delete.

#### Request example
```json
{	
	"apiKey": "...",
	"productId": "prod_9I00GcePCVmLik"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "deleted": true,
			  "id": "pr_18zQ0o2eZvKYlo2CxWcZi2sj"
			}
		}
	}
}
```

<a name="createSKU"/>
## Stripe.createSKU
Creates a new SKU associated with a product.

| Field            | Type       | Description
|------------------|------------|----------
| apiKey           | credentials| The api key obtained from Stripe.
| currency         | String     | 3-letter ISO code for currency.
| inventory        | String     | Description of the SKU’s inventory.
| price            | Number     | The cost of the item as a nonnegative integer in the smallest currency unit (that is, 100 cents to charge $1.00, or 100 to charge ¥100, Japanese Yen being a 0-decimal currency).
| product          | String     | The ID of the product this SKU is associated with.
| active           | String     | Whether or not the SKU is available for purchase. Default to true.
| attributes       | JSON       | A dictionary of attributes and values for the attributes defined by the product. If, for example, a product’s attributes are ["size", "gender"], a valid SKU has the following dictionary of attributes: {"size": "Medium", "gender": "Unisex"}.
| image            | String     | The URL of an image for this SKU, meant to be displayable to the customer.
| metadata         | JSON       | A set of key/value pairs that you can attach to a SKU object. It can be useful for storing additional information about the SKU in a structured format.
| packageDimensions| JSON       | The dimensions of this SKU for shipping purposes.

#### Request example
```json
{	
	"apiKey": "...",
	"currency": "usd",
	"inventory": {"type": "finite", "quantity": 500},
	"price": 1500,
	"product": "pr_18zQ0o2eZvKYlo2CxWcZi2sj",
	"attributes": {"size": "Medium", "gender": "Unisex"},
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "sku_9BtKAR1ZXD42en",
			  "object": "sku",
			  "active": true,
			  "attributes": {
			    "color": "Cyan",
			    "gender": "Unisex",
			    "size": "Medium"
			  },
			  "created": 1473829395,
			  "currency": "usd",
			  "image": null,
			  "inventory": {
			    "quantity": 500,
			    "type": "finite",
			    "value": null
			  },
			  "livemode": false,
			  "metadata": {
			  },
			  "package_dimensions": null,
			  "price": 1500,
			  "product": "prod_9I00GcePCVmLik",
			  "updated": 1473829395
			}
		}
	}
}
```

<a name="getSKU"/>
## Stripe.getSKU
Retrieves the details of an existing SKU. Supply the unique SKU identifier from either a SKU creation request or from the product, and Stripe will return the corresponding SKU information.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| The api key obtained from Stripe.
| skuId | String     | The identifier of the SKU to be retrieved.

#### Request example
```json
{	
	"apiKey": "...",
	"skuId": "sku_9BtKAR1ZXD42en"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "sku_9BtKAR1ZXD42en",
			  "object": "sku",
			  "active": true,
			  "attributes": {
			    "color": "Cyan",
			    "gender": "Unisex",
			    "size": "Medium"
			  },
			  "created": 1473829395,
			  "currency": "usd",
			  "image": null,
			  "inventory": {
			    "quantity": 500,
			    "type": "finite",
			    "value": null
			  },
			  "livemode": false,
			  "metadata": {
			  },
			  "package_dimensions": null,
			  "price": 1500,
			  "product": "prod_9I00GcePCVmLik",
			  "updated": 1473829395
			}
		}
	}
}
```

<a name="updateSKU"/>
## Stripe.updateSKU
Updates the specific SKU by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
Note that a SKU's attributes are not editable. Instead, you would need to deactivate the existing SKU and create a new one with the new attribute values.

| Field            | Type       | Description
|------------------|------------|----------
| apiKey           | credentials| The api key obtained from Stripe.
| skuId            | String     | The identifier of the SKU to be updated.
| currency         | String     | 3-letter ISO code for currency.
| inventory        | String     | Description of the SKU’s inventory.
| price            | String     | The cost of the item as a nonnegative integer in the smallest currency unit (that is, 100 cents to charge $1.00, or 100 to charge ¥100, Japanese Yen being a 0-decimal currency).
| product          | String     | The ID of the product this SKU is associated with.
| active           | String     | Whether or not the SKU is available for purchase. Default to true.
| attributes       | JSON       | A dictionary of attributes and values for the attributes defined by the product. If, for example, a product’s attributes are ["size", "gender"], a valid SKU has the following dictionary of attributes: {"size": "Medium", "gender": "Unisex"}.
| image            | String     | The URL of an image for this SKU, meant to be displayable to the customer.
| metadata         | JSON       | A set of key/value pairs that you can attach to a SKU object. It can be useful for storing additional information about the SKU in a structured format.
| packageDimensions| JSON       | The dimensions of this SKU for shipping purposes.

#### Request example
```json
{	
	"apiKey": "...",
	"skuId": "sk_18tVYF2eZvKYlo2CbiWi3yjT",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "id": "sku_9BtKAR1ZXD42en",
			  "object": "sku",
			  "active": true,
			  "attributes": {
			    "color": "Cyan",
			    "gender": "Unisex",
			    "size": "Medium"
			  },
			  "created": 1473829395,
			  "currency": "usd",
			  "image": null,
			  "inventory": {
			    "quantity": 500,
			    "type": "finite",
			    "value": null
			  },
			  "livemode": false,
			  "metadata": {
			    "order_id": "6735"
			  },
			  "package_dimensions": null,
			  "price": 1500,
			  "product": "prod_9I00GcePCVmLik",
			  "updated": 1473829395
			}
		}
	}
}
```

<a name="getSKUList"/>
## Stripe.getSKUList
Returns a list of your SKUs. The SKUs are returned sorted by creation date, with the most recently created SKUs appearing first.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| The api key obtained from Stripe.
| attributes| String     | 
| ids       | String     | Only return SKUs with the given IDs.
| productId | String     | The ID of the product whose SKUs will be retrieved.

#### Request example
```json
{	
	"apiKey": "...",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "object": "list",
			  "url": "/v1/skus",
			  "has_more": false,
			  "data": [
			    {
			      "id": "sk_18tVYF2eZvKYlo2CbiWi3yjT",
			      "object": "sku",
			      "active": true,
			      "attributes": {
			        "color": "Cyan",
			        "gender": "Unisex",
			        "size": "Medium"
			      },
			      "created": 1473829395,
			      "currency": "usd",
			      "image": null,
			      "inventory": {
			        "quantity": 500,
			        "type": "finite",
			        "value": null
			      },
			      "livemode": false,
			      "metadata": {
			      },
			      "package_dimensions": null,
			      "price": 1500,
			      "product": "prod_9I00GcePCVmLik",
			      "updated": 1473829395
			    },
			    {...},
			    {...}
			  ]
			}
		}
	}
}
```

<a name="deleteSKU"/>
## Stripe.deleteSKU
Delete a SKU. Deleting a SKU is only possible until it has been used in an order.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| The api key obtained from Stripe.
| skuId | String     | The identifier of the SKU to be deleted.

#### Request example
```json
{	
	"apiKey": "...",
	"skuId": "sku_9BtKAR1ZXD42en"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "deleted": true,
			  "id": "sku_9BtKAR1ZXD42en"
			}
		}
	}
}
```

<a name="createCoupon"/>
## Stripe.createCoupon
You can create coupons easily via the coupon management page of the Stripe dashboard. Coupon creation is also accessible via the API if you need to create coupons on the fly.
A coupon has either a percent_off or an amount_off and currency. If you set an amount_off, that amount will be subtracted from any invoice’s subtotal. For example, an invoice with a subtotal of $10 will have a final total of $0 if a coupon with an amount_off of 2000 is applied to it and an invoice with a subtotal of $30 will have a final total of $10 if a coupon with an amount_off of 2000 is applied to it.

| Field           | Type       | Description
|-----------------|------------|----------
| apiKey          | credentials| The api key obtained from Stripe.
| couponId        | String     | Unique string of your choice that will be used to identify this coupon when applying it to a customer. This is often a specific code you’ll give to your customer to use when signing up (e.g. FALL25OFF). If you don’t want to specify a particular code, you can leave the ID blank and we’ll generate a random code for you.
| duration        | String     | Specifies how long the discount will be in effect. Can be `forever`, `once`, or `repeating`.
| amountOff       | String     | A positive integer representing the amount to subtract from an invoice total (required if percent_off is not passed)
| currency        | String     | Currency of the amount_off parameter (required if amount_off is passed)
| durationInMonths| String     | Required only if duration is repeating, in which case it must be a positive integer that specifies the number of months the discount will be in effect.
| maxRedemptions  | String     | A positive integer specifying the number of times the coupon can be redeemed before it’s no longer valid. For example, you might have a 50% off coupon that the first 20 readers of your blog can use.
| metadata        | JSON       | A set of key/value pairs that you can attach to a coupon object. It can be useful for storing additional information about the coupon in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| percentOff      | String     | A positive integer between 1 and 100 that represents the discount the coupon will apply (required if amount_off is not passed)
| redeemBy        | String     | Unix timestamp specifying the last time at which the coupon can be redeemed. After the redeem_by date, the coupon can no longer be applied to new customers.

#### Request example
```json
{	
	"apiKey": "...",
	"couponId": "plana-5000-yearly-30-off",
	"duration": "repeating",
	"currency": "usd",
	"durationInMonths": "3",
	"percentOff": "20",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "plana-5000-yearly-30-off",
			  "object": "coupon",
			  "amount_off": 1572,
			  "created": 1475026549,
			  "currency": "usd",
			  "duration": "forever",
			  "duration_in_months": null,
			  "livemode": false,
			  "max_redemptions": null,
			  "metadata": {
			  },
			  "percent_off": null,
			  "redeem_by": null,
			  "times_redeemed": 0,
			  "valid": true
			}
		}
	}
}
```

<a name="getCoupon"/>
## Stripe.getCoupon
Retrieves the coupon with the given ID.

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| couponId| String     | Unique string of your choice that will be used to identify this coupon when applying it to a customer. This is often a specific code you’ll give to your customer to use when signing up (e.g. FALL25OFF). If you don’t want to specify a particular code, you can leave the ID blank and we’ll generate a random code for you.

#### Request example
```json
{	
	"apiKey": "...",
	"couponId": "plana-5000-yearly-30-off"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "plana-5000-yearly-30-off",
			  "object": "coupon",
			  "amount_off": 1572,
			  "created": 1475026549,
			  "currency": "usd",
			  "duration": "forever",
			  "duration_in_months": null,
			  "livemode": false,
			  "max_redemptions": null,
			  "metadata": {
			  },
			  "percent_off": null,
			  "redeem_by": null,
			  "times_redeemed": 0,
			  "valid": true
			}
		}
	}
}
```

<a name="updateCoupon"/>
## Stripe.updateCoupon
Updates the metadata of a coupon. Other coupon details (currency, duration, amount_off) are, by design, not editable.

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| couponId| String     | Unique string of your choice that will be used to identify this coupon when applying it to a customer. This is often a specific code you’ll give to your customer to use when signing up (e.g. FALL25OFF). If you don’t want to specify a particular code, you can leave the ID blank and we’ll generate a random code for you.
| metadata| JSON       | A set of key/value pairs that you can attach to a coupon object. It can be useful for storing additional information about the coupon in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.

#### Request example
```json
{	
	"apiKey": "...",
	"couponId": "plana-5000-yearly-30-off",
	"metadata": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "plana-5000-yearly-30-off",
			  "object": "coupon",
			  "amount_off": 1572,
			  "created": 1475026549,
			  "currency": "usd",
			  "duration": "forever",
			  "duration_in_months": null,
			  "livemode": false,
			  "max_redemptions": null,
			  "metadata": {
			    "order_id": "6735"
			  },
			  "percent_off": null,
			  "redeem_by": null,
			  "times_redeemed": 0,
			  "valid": true
			}
		}
	}
}
```

<a name="deleteCoupon"/>
## Stripe.deleteCoupon
You can delete coupons via the coupon management page of the Stripe dashboard. However, deleting a coupon does not affect any customers who have already applied the coupon; it means that new customers can’t redeem the coupon. You can also delete coupons via the API.


| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| couponId| String     | Unique string of your choice that will be used to identify this coupon when applying it to a customer. This is often a specific code you’ll give to your customer to use when signing up (e.g. FALL25OFF). If you don’t want to specify a particular code, you can leave the ID blank and we’ll generate a random code for you.

#### Request example
```json
{	
	"apiKey": "...",
	"couponId": "plana-5000-yearly-30-off"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "deleted": true,
			  "id": "plana-5000-yearly-30-off"
			}
		}
	}
}
```

<a name="getCouponList"/>
## Stripe.getCouponList
Returns a list of your coupons.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| The api key obtained from Stripe.

#### Request example
```json
{	
	"apiKey": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "object": "list",
			  "url": "/v1/coupons",
			  "has_more": false,
			  "data": [
			    {
			      "id": "plana-5000-yearly-30-off",
			      "object": "coupon",
			      "amount_off": 1572,
			      "created": 1475026549,
			      "currency": "usd",
			      "duration": "forever",
			      "duration_in_months": null,
			      "livemode": false,
			      "max_redemptions": null,
			      "metadata": {
			      },
			      "percent_off": null,
			      "redeem_by": null,
			      "times_redeemed": 0,
			      "valid": true
			    },
			    {...},
			    {...}
			  ]
			}
		}
	}
}
```

<a name="deleteCustomerDiscount"/>
## Stripe.deleteCustomerDiscount
Removes the currently applied discount on a customer.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| The api key obtained from Stripe.
| customerId| String     | Id of customer to delete.

#### Request example
```json
{	
	"apiKey": "...",
	"customerId": "cus_9I1yraWQEUlyFj"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "deleted": true,
			  "id": "di_14Rjd02eZvKYlo2Cl8SvGHtJ"
			}
		}
	}
}
```

<a name="deleteSubscriptionDiscount"/>
## Stripe.deleteSubscriptionDiscount
Removes the currently applied discount on a subscription.

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| The api key obtained from Stripe.
| subscriptionId| String     | Id of subscribtion to delete.

#### Request example
```json
{	
	"apiKey": "...",
	"subscriptionId": "sub_9I1lOo21wR8yCe"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "deleted": true,
			  "id": "di_14Rjd02eZvKYlo2Cl8SvGHtJ"
			}
		}
	}
}
```

<a name="createInvoice"/>
## Stripe.createInvoice
If you need to invoice your customer outside the regular billing cycle, you can create an invoice that pulls in all pending invoice items, including prorations. The customer’s billing cycle and regular subscription won’t be affected.
Once you create the invoice, it’ll be picked up and paid automatically, though you can choose to pay it right away.

| Field              | Type       | Description
|--------------------|------------|----------
| apiKey             | credentials| The api key obtained from Stripe.
| customer           | String     | Customer Id
| applicationFee     | String     | A fee in cents that will be applied to the invoice and transferred to the application owner’s Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. 
| description        | String     | An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the description of the charge(s) that they are describing.
| metadata           | JSON       | A set of key/value pairs that you can attach to a customer object. It can be useful for storing additional information about the customer in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| statementDescriptor| String     | Extra information about a charge for the customer’s credit card statement.
| subscription       | String     | The ID of the subscription to invoice. If not set, the created invoice will include all pending invoice items for the customer. If set, the created invoice will exclude pending invoice items that pertain to other subscriptions.
| taxPercent         | String     | The percent tax rate applied to the invoice, represented as a decimal number.

#### Request example
```json
{	
	"apiKey": "...",
	"customer": "cus_9I1yraWQEUlyFj",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "in_18zRtZ2eZvKYlo2Cj0FPqd80",
			  "object": "invoice",
			  "amount_due": 999,
			  "application_fee": null,
			  "attempt_count": 0,
			  "attempted": false,
			  "charge": null,
			  "closed": false,
			  "currency": "usd",
			  "customer": "cus_9I1yraWQEUlyFj",
			  "date": 1475245309,
			  "description": null,
			  "discount": null,
			  "ending_balance": null,
			  "forgiven": false,
			  "lines": {
			    "data": [
			      {
			        "id": "ii_18yKaN2eZvKYlo2Co22dhawI",
			        "object": "line_item",
			        "amount": 999,
			        "currency": "usd",
			        "description": "Unused time on Foo after 27 Sep 2016",
			        "discountable": false,
			        "livemode": false,
			        "metadata": {
			        },
			        "period": {
			          "start": 1474978883,
			          "end": 1474978883
			        },
			        "plan": {
			          "id": "16598foo1474978869",
			          "object": "plan",
			          "amount": 100,
			          "created": 1474978873,
			          "currency": "usd",
			          "interval": "week",
			          "interval_count": 1,
			          "livemode": false,
			          "metadata": {
			          },
			          "name": "Foo",
			          "statement_descriptor": null,
			          "trial_period_days": null
			        },
			        "proration": true,
			        "quantity": 1,
			        "subscription": "sub_9GsKNJuNtntFFH",
			        "type": "invoiceitem"
			      }
			    ],
			    "total_count": 1,
			    "object": "list",
			    "url": "/v1/invoices/in_18zRtZ2eZvKYlo2Cj0FPqd80/lines"
			  },
			  "livemode": false,
			  "metadata": {
			  },
			  "next_payment_attempt": 1475248909,
			  "paid": false,
			  "period_end": 1475245268,
			  "period_start": 1472653268,
			  "receipt_number": null,
			  "starting_balance": 0,
			  "statement_descriptor": null,
			  "subscription": "sub_8vBAxymotaxUiw",
			  "subtotal": 999,
			  "tax": null,
			  "tax_percent": null,
			  "total": 999,
			  "webhooks_delivered_at": 1475245329
			}
		}
	}
}
```

<a name="getInvoice"/>
## Stripe.getInvoice
Retrieves the invoice with the given ID.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| invoiceId| String     | Invoice id.

#### Request example
```json
{	
	"apiKey": "...",
	"invoiceId": "in_18zRtZ2eZvKYlo2Cj0FPqd80"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "in_18zRtZ2eZvKYlo2Cj0FPqd80",
			  "object": "invoice",
			  "amount_due": 999,
			  "application_fee": null,
			  "attempt_count": 0,
			  "attempted": false,
			  "charge": null,
			  "closed": false,
			  "currency": "usd",
			  "customer": "cus_9I1yraWQEUlyFj",
			  "date": 1475245309,
			  "description": null,
			  "discount": null,
			  "ending_balance": null,
			  "forgiven": false,
			  "lines": {
			    "data": [
			      {
			        "id": "sub_9I1lOo21wR8yCe",
			        "object": "line_item",
			        "amount": 999,
			        "currency": "usd",
			        "description": null,
			        "discountable": true,
			        "livemode": true,
			        "metadata": {
			        },
			        "period": {
			          "start": 1477836560,
			          "end": 1480514960
			        },
			        "plan": {
			          "id": "diamond-beginner-305",
			          "object": "plan",
			          "amount": 999,
			          "created": 1475244516,
			          "currency": "usd",
			          "interval": "month",
			          "interval_count": 1,
			          "livemode": false,
			          "metadata": {
			          },
			          "name": "Diamond Beginner",
			          "statement_descriptor": null,
			          "trial_period_days": null
			        },
			        "proration": false,
			        "quantity": 1,
			        "subscription": null,
			        "type": "subscription"
			      }
			    ],
			    "total_count": 1,
			    "object": "list",
			    "url": "/v1/invoices/in_18zRtZ2eZvKYlo2Cj0FPqd80/lines"
			  },
			  "livemode": false,
			  "metadata": {
			  },
			  "next_payment_attempt": 1475248909,
			  "paid": false,
			  "period_end": 1475245268,
			  "period_start": 1472653268,
			  "receipt_number": null,
			  "starting_balance": 0,
			  "statement_descriptor": null,
			  "subscription": "sub_8vBAxymotaxUiw",
			  "subtotal": 999,
			  "tax": null,
			  "tax_percent": null,
			  "total": 999,
			  "webhooks_delivered_at": 1475245329
			}
		}
	}
}
```

<a name="getInvoiceLineItems"/>
## Stripe.getInvoiceLineItems
When retrieving an invoice, you'll get a lines property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.

| Field                    | Type       | Description
|--------------------------|------------|----------
| apiKey                   | credentials| The api key obtained from Stripe.
| invoice                  | String     | Invoice id.
| coupon                   | String     | Counpon id.
| customer                 | String     | In the case of upcoming invoices, the customer of the upcoming invoice is required. In other cases it is ignored.
| subscription             | String     | In the case of upcoming invoices, the subscription of the upcoming invoice is optional. In other cases it is ignored.
| subscriptionPlan         | String     | Subscription Plan
| subscriptionProrate      | String     | Subscription Prorate
| subscriptionProrationDate| String     | Subscription Proration Date
| subscriptionQuantity     | String     | Subscription Quantity
| subscriptionTrialEnd     | String     | Subscription Trial End

#### Request example
```json
{	
	"apiKey": "...",
	"invoice": "in_18zRtZ2eZvKYlo2Cj0FPqd80",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "object": "list",
			  "url": "/v1/invoices/in_18zRtZ2eZvKYlo2Cj0FPqd80/lines",
			  "has_more": false,
			  "data": [
			    {
			      "id": "ii_18yKaN2eZvKYlo2Co22dhawI",
			      "object": "line_item",
			      "amount": -100,
			      "currency": "usd",
			      "description": "Unused time on Foo after 27 Sep 2016",
			      "discountable": false,
			      "livemode": false,
			      "metadata": {
			      },
			      "period": {
			        "start": 1474978883,
			        "end": 1474978883
			      },
			      "plan": {
			        "id": "16598foo1474978869",
			        "object": "plan",
			        "amount": 100,
			        "created": 1474978873,
			        "currency": "usd",
			        "interval": "week",
			        "interval_count": 1,
			        "livemode": false,
			        "metadata": {
			        },
			        "name": "Foo",
			        "statement_descriptor": null,
			        "trial_period_days": null
			      },
			      "proration": true,
			      "quantity": 1,
			      "subscription": "sub_9GsKNJuNtntFFH",
			      "type": "invoiceitem"
			    },
			    {...},
			    {...}
			  ]
			}
		}
	}
}
```

<a name="updateInvoice"/>
## Stripe.updateInvoice
Until an invoice is paid, it is marked as open (closed=false). If you'd like to stop Stripe from automatically attempting payment on an invoice or would simply like to close the invoice out as no longer owed by the customer, you can update the closed parameter.

| Field              | Type       | Description
|--------------------|------------|----------
| apiKey             | credentials| The api key obtained from Stripe.
| invoiceId          | String     | Invoice id.
| applicationFee     | String     | A fee in cents that will be applied to the invoice and transferred to the application owner’s Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. 
| description        | String     | An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the description of the charge(s) that they are describing.
| metadata           | String     | A set of key/value pairs that you can attach to a customer object. It can be useful for storing additional information about the customer in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| statementDescriptor| String     | Extra information about a charge for the customer’s credit card statement.
| subscription       | String     | The ID of the subscription to invoice. If not set, the created invoice will include all pending invoice items for the customer. If set, the created invoice will exclude pending invoice items that pertain to other subscriptions.
| forgiven           | String     | Boolean representing whether an invoice is forgiven or not. To forgive an invoice, pass true. Forgiving an invoice instructs us to update the subscription status as if the invoice were successfully paid. Once an invoice has been forgiven, it cannot be unforgiven or reopened.
| closed             | String     | Boolean representing whether an invoice is closed or not. To close an invoice, pass true.
| taxPercent         | String     | The percent tax rate applied to the invoice, represented as a decimal number.

#### Request example
```json
{	
	"apiKey": "...",
	"invoiceId": "in_18zRtZ2eZvKYlo2Cj0FPqd80",
	"closed": "true",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "in_18zRtZ2eZvKYlo2Cj0FPqd80",
			  "object": "invoice",
			  "amount_due": 999,
			  "application_fee": null,
			  "attempt_count": 0,
			  "attempted": false,
			  "charge": null,
			  "closed": true,
			  "currency": "usd",
			  "customer": "cus_9I1yraWQEUlyFj",
			  "date": 1475245309,
			  "description": null,
			  "discount": null,
			  "ending_balance": null,
			  "forgiven": false,
			  "lines": {
			    "data": [
			      {
			        "id": "sub_9I1lOo21wR8yCe",
			        "object": "line_item",
			        "amount": 999,
			        "currency": "usd",
			        "description": null,
			        "discountable": true,
			        "livemode": true,
			        "metadata": {
			        },
			        "period": {
			          "start": 1477836560,
			          "end": 1480514960
			        },
			        "plan": {
			          "id": "diamond-beginner-305",
			          "object": "plan",
			          "amount": 999,
			          "created": 1475244516,
			          "currency": "usd",
			          "interval": "month",
			          "interval_count": 1,
			          "livemode": false,
			          "metadata": {
			          },
			          "name": "Diamond Beginner",
			          "statement_descriptor": null,
			          "trial_period_days": null
			        },
			        "proration": false,
			        "quantity": 1,
			        "subscription": null,
			        "type": "subscription"
			      }
			    ],
			    "total_count": 1,
			    "object": "list",
			    "url": "/v1/invoices/in_18zRtZ2eZvKYlo2Cj0FPqd80/lines"
			  },
			  "livemode": false,
			  "metadata": {
			  },
			  "next_payment_attempt": 1475248909,
			  "paid": false,
			  "period_end": 1475245268,
			  "period_start": 1472653268,
			  "receipt_number": null,
			  "starting_balance": 0,
			  "statement_descriptor": null,
			  "subscription": "sub_8vBAxymotaxUiw",
			  "subtotal": 999,
			  "tax": null,
			  "tax_percent": null,
			  "total": 999,
			  "webhooks_delivered_at": 1475245329
			}
		}
	}
}
```

<a name="payInvoice"/>
## Stripe.payInvoice
Stripe automatically creates and then attempts to pay invoices for customers on subscriptions. We’ll also retry unpaid invoices according to your retry settings. However, if you’d like to attempt to collect payment on an invoice out of the normal retry schedule or for some other reason, you can do so.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| invoiceId| String     | Invoice id.

#### Request example
```json
{	
	"apiKey": "...",
	"invoiceId": "in_18zRtZ2eZvKYlo2Cj0FPqd80"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "in_18zRtZ2eZvKYlo2Cj0FPqd80",
			  "object": "invoice",
			  "amount_due": 999,
			  "application_fee": null,
			  "attempt_count": 0,
			  "attempted": true,
			  "charge": "ch_18zRvN2eZvKYlo2CT5LTwgEC",
			  "closed": false,
			  "currency": "usd",
			  "customer": "cus_9I1yraWQEUlyFj",
			  "date": 1475245309,
			  "description": null,
			  "discount": null,
			  "ending_balance": null,
			  "forgiven": false,
			  "lines": {
			    "data": [
			      {
			        "id": "ii_18yKaN2eZvKYlo2Co22dhawI",
			        "object": "line_item",
			        "amount": 999,
			        "currency": "usd",
			        "description": "Unused time on Foo after 27 Sep 2016",
			        "discountable": false,
			        "livemode": false,
			        "metadata": {
			        },
			        "period": {
			          "start": 1474978883,
			          "end": 1474978883
			        },
			        "plan": {
			          "id": "16598foo1474978869",
			          "object": "plan",
			          "amount": 100,
			          "created": 1474978873,
			          "currency": "usd",
			          "interval": "week",
			          "interval_count": 1,
			          "livemode": false,
			          "metadata": {
			          },
			          "name": "Foo",
			          "statement_descriptor": null,
			          "trial_period_days": null
			        },
			        "proration": true,
			        "quantity": 1,
			        "subscription": "sub_9GsKNJuNtntFFH",
			        "type": "invoiceitem"
			      }
			    ],
			    "total_count": 1,
			    "object": "list",
			    "url": "/v1/invoices/in_18zRtZ2eZvKYlo2Cj0FPqd80/lines"
			  },
			  "livemode": false,
			  "metadata": {
			  },
			  "next_payment_attempt": 1475248909,
			  "paid": true,
			  "period_end": 1475245268,
			  "period_start": 1472653268,
			  "receipt_number": null,
			  "starting_balance": 0,
			  "statement_descriptor": null,
			  "subscription": "sub_8vBAxymotaxUiw",
			  "subtotal": 999,
			  "tax": null,
			  "tax_percent": null,
			  "total": 999,
			  "webhooks_delivered_at": 1475245329,
			  "last_payment_attempt": null
			}
		}
	}
}
```

<a name="getInvoiceList"/>
## Stripe.getInvoiceList
You can list all invoices, or list the invoices for a specific customer. The invoices are returned sorted by creation date, with the most recently created invoices appearing first.

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| customer| String     | The identifier of the customer whose invoices to return. If none is provided, all invoices will be returned.

#### Request example
```json
{	
	"apiKey": "...",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "object": "list",
			  "url": "/v1/invoices",
			  "has_more": false,
			  "data": [
			    {
			      "id": "in_18zRtZ2eZvKYlo2Cj0FPqd80",
			      "object": "invoice",
			      "amount_due": 999,
			      "application_fee": null,
			      "attempt_count": 0,
			      "attempted": false,
			      "charge": null,
			      "closed": false,
			      "currency": "usd",
			      "customer": "cus_9I1yraWQEUlyFj",
			      "date": 1475245309,
			      "description": null,
			      "discount": null,
			      "ending_balance": null,
			      "forgiven": false,
			      "lines": {
			        "data": [
			          {
			            "id": "sub_9I1lOo21wR8yCe",
			            "object": "line_item",
			            "amount": 999,
			            "currency": "usd",
			            "description": null,
			            "discountable": true,
			            "livemode": true,
			            "metadata": {
			            },
			            "period": {
			              "start": 1477836560,
			              "end": 1480514960
			            },
			            "plan": {
			              "id": "diamond-beginner-305",
			              "object": "plan",
			              "amount": 999,
			              "created": 1475244516,
			              "currency": "usd",
			              "interval": "month",
			              "interval_count": 1,
			              "livemode": false,
			              "metadata": {
			              },
			              "name": "Diamond Beginner",
			              "statement_descriptor": null,
			              "trial_period_days": null
			            },
			            "proration": false,
			            "quantity": 1,
			            "subscription": null,
			            "type": "subscription"
			          }
			        ],
			        "total_count": 1,
			        "object": "list",
			        "url": "/v1/invoices/in_18zRtZ2eZvKYlo2Cj0FPqd80/lines"
			      },
			      "livemode": false,
			      "metadata": {
			      },
			      "next_payment_attempt": 1475248909,
			      "paid": false,
			      "period_end": 1475245268,
			      "period_start": 1472653268,
			      "receipt_number": null,
			      "starting_balance": 0,
			      "statement_descriptor": null,
			      "subscription": "sub_8vBAxymotaxUiw",
			      "subtotal": 999,
			      "tax": null,
			      "tax_percent": null,
			      "total": 999,
			      "webhooks_delivered_at": 1475245329
			    },
			    {...},
			    {...}
			  ]
			}
		}
	}
}
```

<a name="createInvoiceItem"/>
## Stripe.createInvoiceItem
Adds an arbitrary charge or credit to the customer’s upcoming invoice.

| Field       | Type       | Description
|-------------|------------|----------
| apiKey      | credentials| The api key obtained from Stripe.
| amount      | Number     | The integer amount in cents of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer’s account, pass a negative amount.
| currency    | String     | 3-letter ISO code for currency.
| customer    | String     | The ID of the customer who will be billed when this invoice item is billed.
| description | String     | An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| discountable| String     | Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for all other invoice items.
| invoice     | String     | The ID of an existing invoice to add this invoice item to. When left blank, the invoice item will be added to the next upcoming scheduled invoice. Use this when adding invoice items in response to an invoice.created webhook. You cannot add an invoice item to an invoice that has already been paid, attempted or closed.
| metadata    | JSON       | A set of key/value pairs that you can attach to an invoice item object. It can be useful for storing additional information about the invoice item in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| subscription| String     | The ID of a subscription to add this invoice item to. When left blank, the invoice item will be be added to the next upcoming scheduled invoice. When set, scheduled invoices for subscriptions other than the specified subscription will ignore the invoice item. Use this when you want to express that an invoice item has been accrued within the context of a particular subscription.

#### Request example
```json
{	
	"apiKey": "...",
	"amount": 2500,
	"currency": "usd",
	"customer": "cus_9I1yraWQEUlyFj",
	"description": "One-time setup fee",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "ii_18yKaN2eZvKYlo2Co22dhawI",
			  "object": "invoiceitem",
			  "amount": 999,
			  "currency": "usd",
			  "customer": "cus_9I1yraWQEUlyFj",
			  "date": 1474978883,
			  "description": "Unused time on Foo after 27 Sep 2016",
			  "discountable": false,
			  "invoice": "in_18yKaO2eZvKYlo2CXEisc1Ih",
			  "livemode": false,
			  "metadata": {
			  },
			  "period": {
			    "start": 1474978883,
			    "end": 1475583679
			  },
			  "plan": {
			    "id": "16598foo1474978869",
			    "object": "plan",
			    "amount": 100,
			    "created": 1474978873,
			    "currency": "usd",
			    "interval": "week",
			    "interval_count": 1,
			    "livemode": false,
			    "metadata": {
			    },
			    "name": "Foo",
			    "statement_descriptor": null,
			    "trial_period_days": null
			  },
			  "proration": true,
			  "quantity": 1,
			  "subscription": "sub_9GsKNJuNtntFFH"
			}
		}
	}
}
```

<a name="getInvoiceItem"/>
## Stripe.getInvoiceItem
Retrieves the invoice item with the given ID.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| The api key obtained from Stripe.
| invoiceitem| String     | The ID of the desired invoice item.

#### Request example
```json
{	
	"apiKey": "...",
	"invoiceitem": "ii_18yKaN2eZvKYlo2Co22dhawI"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "ii_18yKaN2eZvKYlo2Co22dhawI",
			  "object": "invoiceitem",
			  "amount": 999,
			  "currency": "usd",
			  "customer": "cus_9I1yraWQEUlyFj",
			  "date": 1474978883,
			  "description": "Unused time on Foo after 27 Sep 2016",
			  "discountable": false,
			  "invoice": "in_18yKaO2eZvKYlo2CXEisc1Ih",
			  "livemode": false,
			  "metadata": {
			  },
			  "period": {
			    "start": 1474978883,
			    "end": 1475583679
			  },
			  "plan": {
			    "id": "16598foo1474978869",
			    "object": "plan",
			    "amount": 100,
			    "created": 1474978873,
			    "currency": "usd",
			    "interval": "week",
			    "interval_count": 1,
			    "livemode": false,
			    "metadata": {
			    },
			    "name": "Foo",
			    "statement_descriptor": null,
			    "trial_period_days": null
			  },
			  "proration": true,
			  "quantity": 1,
			  "subscription": "sub_9GsKNJuNtntFFH"
			}
		}
	}
}
```

<a name="updateInvoiceItem"/>
## Stripe.updateInvoiceItem
Updates the amount or description of an invoice item on an upcoming invoice. Updating an invoice item is only possible before the invoice it's attached to is closed.

| Field       | Type       | Description
|-------------|------------|----------
| apiKey      | credentials| The api key obtained from Stripe.
| itemId      | String     | Item id.
| amount      | Number     | The integer amount in cents of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer's account, pass a negative amount.
| description | String     | An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| discountable| String     | Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for all other invoice items. Cannot be set to true for prorations.
| metadata    | JSON       | A set of key/value pairs that you can attach to an invoice item object. It can be useful for storing additional information about the invoice item in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.

#### Request example
```json
{	
	"apiKey": "...",
	"itemId": "ii_18yKaN2eZvKYlo2Co22dhawI",
	"amount": 2500,
	"description": "One-time setup fee",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "ii_18yKaN2eZvKYlo2Co22dhawI",
			  "object": "invoiceitem",
			  "amount": 2500,
			  "currency": "usd",
			  "customer": "cus_9I1yraWQEUlyFj",
			  "date": 1474978883,
			  "description": "One-time setup fee",
			  "discountable": false,
			  "invoice": "in_18yKaO2eZvKYlo2CXEisc1Ih",
			  "livemode": false,
			  "metadata": {
			  },
			  "period": {
			    "start": 1474978883,
			    "end": 1475583679
			  },
			  "plan": {
			    "id": "16598foo1474978869",
			    "object": "plan",
			    "amount": 100,
			    "created": 1474978873,
			    "currency": "usd",
			    "interval": "week",
			    "interval_count": 1,
			    "livemode": false,
			    "metadata": {
			    },
			    "name": "Foo",
			    "statement_descriptor": null,
			    "trial_period_days": null
			  },
			  "proration": true,
			  "quantity": 1,
			  "subscription": "sub_9GsKNJuNtntFFH"
			}
		}
	}
}
```

<a name="deleteInvoiceItem"/>
## Stripe.deleteInvoiceItem
Removes an invoice item from the upcoming invoice. Removing an invoice item is only possible before the invoice it’s attached to is closed.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| The api key obtained from Stripe.
| invoiceitem| String     | The ID of the desired invoice item.

#### Request example
```json
{	
	"apiKey": "...",
	"invoiceitem": "ii_18yKaN2eZvKYlo2Co22dhawI"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "deleted": true,
			  "id": "ii_18yKaN2eZvKYlo2Co22dhawI"
			}
		}
	}
}
```

<a name="getInvoiceItemsList"/>
## Stripe.getInvoiceItemsList
Returns a list of your invoice items. Invoice items are returned sorted by creation date, with the most recently created invoice items appearing first.

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| customer| String     | The identifier of the customer whose invoice items to return. If none is provided, all invoice items will be returned.

#### Request example
```json
{	
	"apiKey": "...",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "object": "list",
			  "url": "/v1/invoiceitems",
			  "has_more": false,
			  "data": [
			    {
			      "id": "ii_18yKaN2eZvKYlo2Co22dhawI",
			      "object": "invoiceitem",
			      "amount": -100,
			      "currency": "usd",
			      "customer": "cus_9I1yraWQEUlyFj",
			      "date": 1474978883,
			      "description": "Unused time on Foo after 27 Sep 2016",
			      "discountable": false,
			      "invoice": "in_18yKaO2eZvKYlo2CXEisc1Ih",
			      "livemode": false,
			      "metadata": {
			      },
			      "period": {
			        "start": 1474978883,
			        "end": 1475583679
			      },
			      "plan": {
			        "id": "16598foo1474978869",
			        "object": "plan",
			        "amount": 100,
			        "created": 1474978873,
			        "currency": "usd",
			        "interval": "week",
			        "interval_count": 1,
			        "livemode": false,
			        "metadata": {
			        },
			        "name": "Foo",
			        "statement_descriptor": null,
			        "trial_period_days": null
			      },
			      "proration": true,
			      "quantity": 1,
			      "subscription": "sub_9GsKNJuNtntFFH"
			    },
			    {...},
			    {...}
			  ]
			}
		}
	}
}
```

<a name="createPlan"/>
## Stripe.createPlan
You can create plans easily via the plan management page of the Stripe dashboard. Plan creation is also accessible via the API if you need to create plans on the fly.

| Field              | Type       | Description
|--------------------|------------|----------
| apiKey             | credentials| The api key obtained from Stripe.
| planId             | String     | Unique string of your choice that will be used to identify this plan when subscribing a customer. This could be an identifier like “gold” or a primary key from your own database.
| amount             | Number     | A positive integer in cents (or 0 for a free plan) representing how much to charge (on a recurring basis).
| currency           | String     | 3-letter ISO code for currency.
| interval           | String     | Specifies billing frequency. Either day, week, month or year.
| name               | String     | Name of the plan, to be displayed on invoices and in the web interface.
| intervalCount      | String     | The number of intervals between each subscription billing. For example, interval=month and interval_count=3 bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
| metadata           | String     | A set of key/value pairs that you can attach to a plan object. It can be useful for storing additional information about the plan in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| statementDescriptor| String     | An arbitrary string to be displayed on your customer’s credit card statement. This may be up to 22 characters. As an example, if your website is RunClub and the item you’re charging for is your Silver Plan, you may want to specify a statement_descriptor of RunClub Silver Plan. The statement description may not include <>"' characters, and will appear on your customer’s statement in capital letters. Non-ASCII characters are automatically stripped. While most banks display this information consistently, some may display it incorrectly or not at all.
| trialPeriodDays    | String     | Specifies a trial period in (an integer number of) days. If you include a trial period, the customer won’t be billed for the first time until the trial period ends. If the customer cancels before the trial period is over, she’ll never be billed at all.

#### Request example
```json
{	
	"apiKey": "...",
	"planId": "gold-extended",
	"amount": 5000,
	"currency": "usd",
	"interval": "month",
	"name": "Gold extended",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "gold-extended",
			  "object": "plan",
			  "amount": 5000,
			  "created": 1475206866,
			  "currency": "usd",
			  "interval": "month",
			  "interval_count": 1,
			  "livemode": false,
			  "metadata": {
			  },
			  "name": "Gold extended",
			  "statement_descriptor": null,
			  "trial_period_days": null
			}
		}
	}
}
```

<a name="getPlan"/>
## Stripe.getPlan
Retrieves the plan with the given ID.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| The api key obtained from Stripe.
| planId| String     | The ID of the desired plan.

#### Request example
```json
{	
	"apiKey": "...",
	"planId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "ivory-starter-327",
			  "object": "plan",
			  "amount": 999,
			  "created": 1475206866,
			  "currency": "usd",
			  "interval": "month",
			  "interval_count": 1,
			  "livemode": false,
			  "metadata": {
			  },
			  "name": "Ivory Starter",
			  "statement_descriptor": null,
			  "trial_period_days": null
			}
		}
	}
}
```

<a name="updatePlan"/>
## Stripe.updatePlan
Updates the name of a plan. Other plan details (price, interval, etc.) are, by design, not editable.

| Field              | Type       | Description
|--------------------|------------|----------
| apiKey             | credentials| The api key obtained from Stripe.
| planId             | String     | The identifier of the plan to be updated.
| name               | String     | Name of the plan, to be displayed on invoices and in the web interface.
| metadata           | String     | A set of key/value pairs that you can attach to a plan object. It can be useful for storing additional information about the plan in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| statementDescriptor| String     | An arbitrary string to be displayed on your customer’s credit card statement. This may be up to 22 characters. As an example, if your website is RunClub and the item you’re charging for is your Silver Plan, you may want to specify a statement_descriptor of RunClub Silver Plan. The statement description may not include <>"' characters, and will appear on your customer’s statement in capital letters. Non-ASCII characters are automatically stripped. While most banks display this information consistently, some may display it incorrectly or not at all.

#### Request example
```json
{	
	"apiKey": "...",
	"planId": "ivory-starter-327",
	"name": "Bronze complete",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "ivory-starter-327",
			  "object": "plan",
			  "amount": 999,
			  "created": 1475206866,
			  "currency": "usd",
			  "interval": "month",
			  "interval_count": 1,
			  "livemode": false,
			  "metadata": {
			  },
			  "name": "Bronze complete",
			  "statement_descriptor": null,
			  "trial_period_days": null
			}
		}
	}
}
```

<a name="deletePlan"/>
## Stripe.deletePlan
You can delete plans via the plan management page of the Stripe dashboard. However, deleting a plan does not affect any current subscribers to the plan; it merely means that new subscribers can’t be added to that plan. You can also delete plans via the API.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| The api key obtained from Stripe.
| planId| String     | The identifier of the plan to be deleted.

#### Request example
```json
{	
	"apiKey": "...",
	"planId": "ivory-starter-327"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "deleted": true,
			  "id": "ivory-starter-327"
			}
		}
	}
}
```

<a name="getPlanList"/>
## Stripe.getPlanList
Returns a list of your plans.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| The api key obtained from Stripe.

#### Request example
```json
{	
	"apiKey": "...",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "object": "list",
			  "url": "/v1/plans",
			  "has_more": false,
			  "data": [
			    {
			      "id": "ivory-starter-327",
			      "object": "plan",
			      "amount": 999,
			      "created": 1475206866,
			      "currency": "usd",
			      "interval": "month",
			      "interval_count": 1,
			      "livemode": false,
			      "metadata": {
			      },
			      "name": "Ivory Starter",
			      "statement_descriptor": null,
			      "trial_period_days": null
			    },
			    {...},
			    {...}
			  ]
			}
		}
	}
}
```

<a name="createSubscription"/>
## Stripe.createSubscription
Creates a new subscription on an existing customer.

| Field                | Type       | Description
|----------------------|------------|----------
| apiKey               | credentials| The api key obtained from Stripe.
| applicationFeePercent| String     | A positive decimal (with at most four decimal places) between 1 and 100. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner’s Stripe account. The request must be made with an OAuth key in order to set an application fee percentage.
| coupon               | String     | The code of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that particular subscription.
| customer             | String     | The identifier of the customer to subscribe.
| plan                 | String     | The identifier of the plan to subscribe the customer to.
| source               | JSON       | The source can either be a token, like the ones returned by our Stripe.js, or a object containing a user's credit card details (with the options shown below). You must provide a source if the customer does not already have a valid source attached, and you are subscribing the customer for a plan that is not free. Passing source will create a new source object, make it the customer default source, and delete the old customer default if one exists. If you want to add an additional source to use with subscriptions, instead use the card creation API to add the card and then the customer update API to set it as the default. Whenever you attach a card to a customer, Stripe will automatically validate the card.
| quantity             | Number     | The quantity you'd like to apply to the subscription you're creating. For example, if your plan is $10/user/month, and your customer has 5 users, you could pass 5 as the quantity to have the customer charged $50 (5 x $10) monthly. If you update a subscription but don't change the plan ID (e.g. changing only the trial_end), the subscription will inherit the old subscription's quantity attribute unless you pass a new quantity parameter. If you update a subscription and change the plan ID, the new subscription will not inherit the quantity attribute and will default to 1 unless you pass a quantity parameter.
| metadata             | JSON       | A set of key/value pairs that you can attach to a subscription object. It can be useful for storing additional information about the subscription in a structured format.
| taxPercent           | String     | A positive decimal (with at most four decimal places) between 1 and 100. This represents the percentage of the subscription invoice subtotal that will be calculated and added as tax to the final amount each billing period. For example, a plan which charges $10/month with a tax_percent of 20.0 will charge $12 per invoice.
| trialEnd             | String     | Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. If set, trial_end will override the default trial period of the plan the customer is being subscribed to. The special value now can be provided to end the customer's trial immediately.

#### Request example
```json
{	
	"apiKey": "...",
	"customer": "cus_9HvesRZb9hIG69",
	"plan": "ivory-starter-327",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "sub_9HrdaoU42BIBGY",
			  "object": "subscription",
			  "application_fee_percent": null,
			  "cancel_at_period_end": false,
			  "canceled_at": null,
			  "created": 1475206899,
			  "current_period_end": 1477798899,
			  "current_period_start": 1475206899,
			  "customer": "cus_9HvesRZb9hIG69",
			  "discount": null,
			  "ended_at": null,
			  "livemode": false,
			  "metadata": {
			  },
			  "plan": {
			    "id": "ivory-starter-327",
			    "object": "plan",
			    "amount": 999,
			    "created": 1475206866,
			    "currency": "usd",
			    "interval": "month",
			    "interval_count": 1,
			    "livemode": false,
			    "metadata": {
			    },
			    "name": "Ivory Starter",
			    "statement_descriptor": null,
			    "trial_period_days": null
			  },
			  "quantity": 1,
			  "start": 1475206899,
			  "status": "active",
			  "tax_percent": null,
			  "trial_end": null,
			  "trial_start": null
			}
		}
	}
}
```

<a name="getSubscription"/>
## Stripe.getSubscription
Retrieves the subscription with the given ID.

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| The api key obtained from Stripe.
| subscriptionId| String     | ID of subscription to retrieve.

#### Request example
```json
{	
	"apiKey": "...",
	"subscriptionId": "sub_9HrdaoU42BIBGY"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "sub_9HrdaoU42BIBGY",
			  "object": "subscription",
			  "application_fee_percent": null,
			  "cancel_at_period_end": false,
			  "canceled_at": null,
			  "created": 1475206899,
			  "current_period_end": 1477798899,
			  "current_period_start": 1475206899,
			  "customer": "cus_9HrcdqQVqG9h0O",
			  "discount": null,
			  "ended_at": null,
			  "livemode": false,
			  "metadata": {
			  },
			  "plan": {
			    "id": "ivory-starter-327",
			    "object": "plan",
			    "amount": 999,
			    "created": 1475206866,
			    "currency": "usd",
			    "interval": "month",
			    "interval_count": 1,
			    "livemode": false,
			    "metadata": {
			    },
			    "name": "Ivory Starter",
			    "statement_descriptor": null,
			    "trial_period_days": null
			  },
			  "quantity": 1,
			  "start": 1475206899,
			  "status": "active",
			  "tax_percent": null,
			  "trial_end": null,
			  "trial_start": null
			}
		}
	}
}
```

<a name="updateSubscription"/>
## Stripe.updateSubscription
Updates an existing subscription to match the specified parameters. When changing plans or quantities, we will optionally prorate the price we charge next month to make up for any price changes. To preview how the proration will be calculated, use the upcoming invoice endpoint.

| Field                | Type       | Description
|----------------------|------------|----------
| apiKey               | credentials| The api key obtained from Stripe.
| subscriptionId       | String     | ID of subscription to updated.
| applicationFeePercent| String     | A positive decimal (with at most four decimal places) between 1 and 100. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner’s Stripe account. The request must be made with an OAuth key in order to set an application fee percentage.
| coupon               | String     | The code of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that particular subscription.
| customer             | String     | The identifier of the customer to subscribe.
| plan                 | String     | The identifier of the plan to subscribe the customer to.
| source               | JSON       | The source can either be a token, like the ones returned by our Stripe.js, or a object containing a user's credit card details (with the options shown below). You must provide a source if the customer does not already have a valid source attached, and you are subscribing the customer for a plan that is not free. Passing source will create a new source object, make it the customer default source, and delete the old customer default if one exists. If you want to add an additional source to use with subscriptions, instead use the card creation API to add the card and then the customer update API to set it as the default. Whenever you attach a card to a customer, Stripe will automatically validate the card.
| quantity             | Number     | The quantity you'd like to apply to the subscription you're creating. For example, if your plan is $10/user/month, and your customer has 5 users, you could pass 5 as the quantity to have the customer charged $50 (5 x $10) monthly. If you update a subscription but don't change the plan ID (e.g. changing only the trial_end), the subscription will inherit the old subscription's quantity attribute unless you pass a new quantity parameter. If you update a subscription and change the plan ID, the new subscription will not inherit the quantity attribute and will default to 1 unless you pass a quantity parameter.
| metadata             | JSON       | A set of key/value pairs that you can attach to a subscription object. It can be useful for storing additional information about the subscription in a structured format.
| taxPercent           | String     | A positive decimal (with at most four decimal places) between 1 and 100. This represents the percentage of the subscription invoice subtotal that will be calculated and added as tax to the final amount each billing period. For example, a plan which charges $10/month with a tax_percent of 20.0 will charge $12 per invoice.
| trialEnd             | String     | Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. If set, trial_end will override the default trial period of the plan the customer is being subscribed to. The special value now can be provided to end the customer's trial immediately.

#### Request example
```json
{	
	"apiKey": "...",
	"subscriptionId": "sub_9HrdaoU42BIBGY",
	"plan": "ivory-starter-327",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "sub_9HrdaoU42BIBGY",
			  "object": "subscription",
			  "application_fee_percent": null,
			  "cancel_at_period_end": false,
			  "canceled_at": null,
			  "created": 1475206899,
			  "current_period_end": 1477798899,
			  "current_period_start": 1475206899,
			  "customer": "cus_9HvesRZb9hIG69",
			  "discount": null,
			  "ended_at": null,
			  "livemode": false,
			  "metadata": {
			  },
			  "plan": {
			    "id": "ivory-starter-327",
			    "object": "plan",
			    "amount": 999,
			    "created": 1475206866,
			    "currency": "usd",
			    "interval": "month",
			    "interval_count": 1,
			    "livemode": false,
			    "metadata": {
			    },
			    "name": "Ivory Starter",
			    "statement_descriptor": null,
			    "trial_period_days": null
			  },
			  "quantity": 1,
			  "start": 1475206899,
			  "status": "active",
			  "tax_percent": null,
			  "trial_end": null,
			  "trial_start": null
			}
		}
	}
}
```

<a name="cancelSubscription"/>
## Stripe.cancelSubscription
Cancels a customer’s subscription. If you set the at_period_end parameter to true, the subscription will remain active until the end of the period, at which point it will be canceled and not renewed. By default, the subscription is terminated immediately. In either case, the customer will not be charged again for the subscription. Note, however, that any pending invoice items that you’ve created will still be charged for at the end of the period unless manually deleted. If you’ve set the subscription to cancel at period end, any pending prorations will also be left in place and collected at the end of the period, but if the subscription is set to cancel immediately, pending prorations will be removed.
By default, all unpaid invoices for the customer will be closed upon subscription cancellation. We do this in order to prevent unexpected payment retries once the customer has canceled a subscription. However, you can reopen the invoices manually after subscription cancellation to have us proceed with automatic retries, or you could even re-attempt payment yourself on all unpaid invoices before allowing the customer to cancel the subscription at all.

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| The api key obtained from Stripe.
| subscriptionId| String     | ID of subscription to retrieve.
| atPeriodEnd   | String     | A flag that if set to true will delay the cancellation of the subscription until the end of the current period.

#### Request example
```json
{	
	"apiKey": "...",
	"subscriptionId": "sub_9HrdaoU42BIBGY",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "sub_9HrdaoU42BIBGY",
			  "object": "subscription",
			  "application_fee_percent": null,
			  "cancel_at_period_end": false,
			  "canceled_at": null,
			  "created": 1475206899,
			  "current_period_end": 1477798899,
			  "current_period_start": 1475206899,
			  "customer": "cus_9HvesRZb9hIG69",
			  "discount": null,
			  "ended_at": null,
			  "livemode": false,
			  "metadata": {
			  },
			  "plan": {
			    "id": "ivory-starter-327",
			    "object": "plan",
			    "amount": 999,
			    "created": 1475206866,
			    "currency": "usd",
			    "interval": "month",
			    "interval_count": 1,
			    "livemode": false,
			    "metadata": {
			    },
			    "name": "Ivory Starter",
			    "statement_descriptor": null,
			    "trial_period_days": null
			  },
			  "quantity": 1,
			  "start": 1475206899,
			  "status": "canceled",
			  "tax_percent": null,
			  "trial_end": null,
			  "trial_start": null
			}
		}
	}
}
```

<a name="getSubscriptionList"/>
## Stripe.getSubscriptionList
By default, returns a list of subscriptions that have not been canceled. In order to list canceled subscriptions, specify status=canceled.

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| The api key obtained from Stripe.
| subscriptionId| String     | ID of subscription to retrieve.
| customer      | String     | The ID of the customer whose subscriptions will be retrieved
| plan          | String     | The ID of the plan whose subscriptions will be retrieved
| status        | String     | The status of the subscriptions to retrieve. One of: trialing, active, past_due, unpaid, canceled, or all. Passing in a value of canceled will return all canceled subscriptions, including those belonging to deleted customers. Passing in a value of all will return subscriptions of all statuses.

#### Request example
```json
{	
	"apiKey": "...",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": 
			  "object": "list",
			  "url": "/v1/subscriptions",
			  "has_more": false,
			  "data": [
			    {
			      "id": "sub_9HrdaoU42BIBGY",
			      "object": "subscription",
			      "application_fee_percent": null,
			      "cancel_at_period_end": false,
			      "canceled_at": null,
			      "created": 1475206899,
			      "current_period_end": 1477798899,
			      "current_period_start": 1475206899,
			      "customer": "cus_9HrcdqQVqG9h0O",
			      "discount": null,
			      "ended_at": null,
			      "livemode": false,
			      "metadata": {
			      },
			      "plan": {
			        "id": "ivory-starter-327",
			        "object": "plan",
			        "amount": 999,
			        "created": 1475206866,
			        "currency": "usd",
			        "interval": "month",
			        "interval_count": 1,
			        "livemode": false,
			        "metadata": {
			        },
			        "name": "Ivory Starter",
			        "statement_descriptor": null,
			        "trial_period_days": null
			      },
			      "quantity": 1,
			      "start": 1475206899,
			      "status": "active",
			      "tax_percent": null,
			      "trial_end": null,
			      "trial_start": null
			    },
			    {...},
			    {...}
			  ]
			}
		}
	}
}
```
