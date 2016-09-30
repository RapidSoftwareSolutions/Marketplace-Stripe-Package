# Stripe Package
This blocks allows you to translates a sting of text from one language to another
* Domain: stripe.com
* Credentials: secretKey, pubKey

## How to get credentials: 
0. Item one 
1. Item two

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

<a name="getBalanceHistory"/>
## Stripe.getBalanceHistory
Method description

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| The api key obtained from Stripe.
| currency     | String     | 3-letter ISO code for currency.
| startingAfter| String     | A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
| limit        | Number     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| type         | String     | Only returns transactions of the given type. One of: `charge`, `refund`, `adjustment`, `application_fee`, `application_fee_refund`, `transfer`, or `transfer_failure`

#### Request example
```json
{	"apiKey": "...",
	"currency": "...",
	"startingAfter": "...",
	"limit": 0,
	"type": "..."
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

<a name="createCharge"/>
## Stripe.createCharge
Method description

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
{	"apiKey": "...",
	"amount": "...",
	"currency": "...",
	"capture": "...",
	"description": "...",
	"receiptEmail": "...",
	"customer": "...",
	"source": "...",
	"statementDescriptor": "..."
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

<a name="createCustomer"/>
## Stripe.createCustomer
Method description

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
{	"apiKey": "...",
	"source": "...",
	"accountBalance": "...",
	"businessVatId": "...",
	"coupon": "...",
	"description": "...",
	"email": "...",
	"metadata": "...",
	"plan": "...",
	"taxPercent": "...",
	"trialEnd": "..."
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

<a name="getBalanceTransaction"/>
## Stripe.getBalanceTransaction
Method description

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| The api key obtained from Stripe.
| id    | credentials| The ID of the desired balance transaction (as found on any API object that affects the balance, e.g. a charge or transfer).

#### Request example
```json
{	"apiKey": "...",
	"id": "..."
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

<a name="getCharge"/>
## Stripe.getCharge
Method description

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| chargeId| String     | The identifier of the charge to be retrieved.

#### Request example
```json
{	"apiKey": "...",
	"chargeId": "..."
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

<a name="updateCharge"/>
## Stripe.updateCharge
Method description

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
{	"apiKey": "...",
	"chargeId": "...",
	"description": "...",
	"receiptEmail": "...",
	"fraudDetails": "...",
	"metadata": "...",
	"shipping": "..."
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

<a name="captureCharge"/>
## Stripe.captureCharge
Method description

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
{	"apiKey": "...",
	"chargeId": "...",
	"amount": "...",
	"applicationFee": "...",
	"receiptEmail": "...",
	"statementDescriptor": "..."
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

<a name="getChargesList"/>
## Stripe.getChargesList
Method description

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
{	"apiKey": "...",
	"created": "...",
	"customer": "...",
	"endingBefore": "...",
	"limit": "...",
	"source": "...",
	"startingAfter": "..."
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

<a name="getCustomer"/>
## Stripe.getCustomer
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| The api key obtained from Stripe.
| customerId| String     | The identifier of the customer to be retrieved.

#### Request example
```json
{	"apiKey": "...",
	"customerId": "..."
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

<a name="updateCustomer"/>
## Stripe.updateCustomer
Method description

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
{	"apiKey": "...",
	"customerId": "...",
	"source": "...",
	"accountBalance": "...",
	"businessVatId": "...",
	"coupon": "...",
	"description": "...",
	"email": "...",
	"metadata": "...",
	"plan": "...",
	"taxPercent": "...",
	"trialEnd": "..."
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

<a name="getBalanceTransaction"/>
## Stripe.getBalanceTransaction
Method description

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| The api key obtained from Stripe.
| id    | credentials| The ID of the desired balance transaction (as found on any API object that affects the balance, e.g. a charge or transfer).

#### Request example
```json
{	"apiKey": "...",
	"id": "..."
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

<a name="deleteCustomer"/>
## Stripe.deleteCustomer
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| The api key obtained from Stripe.
| customerId| String     | If of customer to update.

#### Request example
```json
{	"apiKey": "...",
	"customerId": "..."
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

<a name="getCustomerList"/>
## Stripe.getCustomerList
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

<a name="getDispute"/>
## Stripe.getDispute
Method description

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| disputeId| String     | ID of dispute to retrieve.

#### Request example
```json
{	"apiKey": "...",
	"disputeId": "..."
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

<a name="updateDispute"/>
## Stripe.updateDispute
Method description

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| disputeId| String     | ID of dispute to retrieve.
| evidence | JSON       | Evidence to upload to respond to a dispute. Updating any field in the hash will submit all fields in the hash for review.
| metadata | JSON       | A set of key/value pairs that you can attach to a dispute object. It can be useful for storing additional information about the dispute in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.

#### Request example
```json
{	"apiKey": "...",
	"disputeId": "...",
	"evidence": "...",
	"metadata": "..."
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

<a name="closeDispute"/>
## Stripe.closeDispute
Method description

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| disputeId| String     | ID of dispute to retrieve.

#### Request example
```json
{	"apiKey": "...",
	"disputeId": "..."
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

<a name="getDisputes"/>
## Stripe.getDisputes
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

<a name="getEvent"/>
## Stripe.getEvent
Method description

| Field  | Type       | Description
|--------|------------|----------
| apiKey | credentials| The api key obtained from Stripe.
| eventId| credentials| The api key obtained from Stripe.

#### Request example
```json
{	"apiKey": "...",
	"eventId": "..."
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

<a name="getEventList"/>
## Stripe.getEventList
Method description

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| The api key obtained from Stripe.
| type  | String     | A string containing a specific event name, or group of events using * as a wildcard. The list will be filtered to include only events with a matching event property.

#### Request example
```json
{	"apiKey": "...",
	"type": "..."
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

<a name="createFileUpload"/>
## Stripe.createFileUpload
Method description

| Field  | Type       | Description
|--------|------------|----------
| apiKey | credentials| The api key obtained from Stripe.
| file   | String     | A file to upload.
| purpose| String     | The purpoe of the uploaded file. Possible values are `business_logo`, `dispute_evidence`, `identity_document`, `incorporation_article`, `incorporation_document`, `payment_provider_transfer`, `product_feed`.

#### Request example
```json
{	"apiKey": "...",
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
			"to":"..."
		}
	}
}
```

<a name="createRefund"/>
## Stripe.createRefund
Method description

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
{	"apiKey": "...",
	"chargeId": "...",
	"amount": "...",
	"metadata": "...",
	"reason": "...",
	"refundApplicationFee": "...",
	"reverseTransfer": "..."
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

<a name="getRefund"/>
## Stripe.getRefund
Method description

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| refundId| String     | ID of refund to retrieve.

#### Request example
```json
{	"apiKey": "...",
	"refundId": "..."
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

<a name="updateRefund"/>
## Stripe.updateRefund
Method description

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| refundId| String     | ID of refund to retrieve.
| metadata| JSON       | A set of key/value pairs that you can attach to a refund object. It can be useful for storing additional information about the refund in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.

#### Request example
```json
{	"apiKey": "...",
	"refundId": "...",
	"metadata": "..."
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

<a name="getRefundList"/>
## Stripe.getRefundList
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

<a name="createCardToken"/>
## Stripe.createCardToken
Method description

| Field              | Type       | Description
|--------------------|------------|----------
| apiKey             | credentials| The api key obtained from Stripe.
| cardNumber         | String     | Number of card
| cardExpirationMonth| Number     | Expiration month of card
| cardExpirationYear | Number     | Expiration year of card
| cardCvc            | String     | CVC code of card

#### Request example
```json
{	"apiKey": "...",
	"cardNumber": "...",
	"cardExpirationMonth": 0,
	"cardExpirationYear": 0,
	"cardCvc": "..."
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

<a name="createBankAccountToken"/>
## Stripe.createBankAccountToken
Method description

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
{	"apiKey": "...",
	"bankAccountCountry": "...",
	"bankAccountCurrency": "...",
	"bankAccountAccountHolderName": "...",
	"bankAccountAccountHolderType": "...",
	"bankAccountRoutingNumber": "...",
	"bankAccountNumber": "..."
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

<a name="createPiiToken"/>
## Stripe.createPiiToken
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| apiKey          | credentials| The api key obtained from Stripe.
| personalIdNumber| String     | The bank account country

#### Request example
```json
{	"apiKey": "...",
	"personalIdNumber": "..."
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

<a name="getToken"/>
## Stripe.getToken
Method description

| Field  | Type       | Description
|--------|------------|----------
| apiKey | credentials| The api key obtained from Stripe.
| tokenId| String     | The ID of the desired token.

#### Request example
```json
{	"apiKey": "...",
	"tokenId": "..."
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

<a name="createTransfer"/>
## Stripe.createTransfer
Method description

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
{	"apiKey": "...",
	"amount": 0,
	"currency": "...",
	"destination": "...",
	"description": "...",
	"sourceTransaction": "...",
	"statementDescriptor": "...",
	"sourceType": "..."
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

<a name="getTransfer"/>
## Stripe.getTransfer
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| The api key obtained from Stripe.
| transferId| String     | The identifier of the transfer to be retrieved.

#### Request example
```json
{	"apiKey": "...",
	"transferId": "..."
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

<a name="updateTransfer"/>
## Stripe.updateTransfer
Method description

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| The api key obtained from Stripe.
| transferId | String     | Id of transfer to update.
| description| String     | An arbitrary string which you can attach to a transfer object. It is displayed when in the web interface alongside the transfer. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| metadata   | JSON       | A set of key/value pairs that you can attach to a transfer object. It can be useful for storing additional information about the transfer in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.

#### Request example
```json
{	"apiKey": "...",
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
			"to":"..."
		}
	}
}
```

<a name="getTransferList"/>
## Stripe.getTransferList
Method description

| Field          | Type       | Description
|----------------|------------|----------
| apiKey         | credentials| The api key obtained from Stripe.
| destination    | String     | Only return transfers for the destination specified by this account ID.
| recipientstatus| String     | Only return transfers for the recipient specified by this recipient ID.
| status         | String     | Only return transfers that have the given status: `pending`, `paid`, `failed`, `in_transit`, or `canceled`.

#### Request example
```json
{	"apiKey": "...",
	"destination": "...",
	"recipientstatus": "...",
	"status": "..."
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

<a name="createTransferReversal"/>
## Stripe.createTransferReversal
Method description

| Field               | Type       | Description
|---------------------|------------|----------
| apiKey              | credentials| The api key obtained from Stripe.
| description         | String     | An arbitrary string which you can attach to a reversal object. It is displayed alongside the reversal in the dashboard. This will be unset if you POST an empty value.
| metadata            | String     | A set of key/value pairs that you can attach to a reversal object. It can be useful for storing additional information about the reversal in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.
| refundApplicationFee| String     | Boolean indicating whether the application fee should be refunded when reversing this transfer. If a full transfer reversal is given, the full application fee will be refunded. Otherwise, the application fee will be refunded with an amount proportional to the amount of the transfer reversed.

#### Request example
```json
{	"apiKey": "...",
	"description": "...",
	"metadata": "...",
	"refundApplicationFee": "..."
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

<a name="getTransferReversal"/>
## Stripe.getTransferReversal
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| The api key obtained from Stripe.
| id        | String     | ID of reversal to retrieve.
| transferId| String     | ID of the transfer reversed.

#### Request example
```json
{	"apiKey": "...",
	"id": "...",
	"transferId": "..."
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

<a name="updateTransferReversal"/>
## Stripe.updateTransferReversal
Method description

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| The api key obtained from Stripe.
| id         | String     | ID of reversal to retrieve.
| transferId | String     | ID of the transfer reversed.
| metadata   | JSON       | A set of key/value pairs that you can attach to a reversal object. It can be useful for storing additional information about the reversal in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.
| description| String     | An arbitrary string which you can attach to a reversal object. It is displayed when in the web interface alongside the reversal. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.

#### Request example
```json
{	"apiKey": "...",
	"id": "...",
	"transferId": "...",
	"metadata": "...",
	"description": "..."
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

<a name="getTransferReversalList"/>
## Stripe.getTransferReversalList
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| The api key obtained from Stripe.
| transferId| String     | The ID of the transfer whose reversals will be retrieved.

#### Request example
```json
{	"apiKey": "...",
	"transferId": "..."
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

<a name="createAccount"/>
## Stripe.createAccount
Method description

| Field  | Type       | Description
|--------|------------|----------
| apiKey | credentials| The api key obtained from Stripe.
| country| String     | The country the account holder resides in or that the business is legally established in. For example, if you are in the United States and the business you’re creating an account for is legally represented in Canada, you would use “CA” as the country for the account being created.
| email  | String     | The email address of the account holder. For standalone accounts, Stripe will email your user with instructions for how to set up their account. For managed accounts, this is only to make the account easier to identify to you: Stripe will never directly reach out to your users.
| managed| String     | Whether you'd like to create a managed or standalone account. Managed accounts have extra parameters available to them, and require that you, the platform, handle all communication with the account holder. Standalone accounts are normal Stripe accounts: Stripe will email the account holder to setup a username and password, and handle all account management directly with them.

#### Request example
```json
{	"apiKey": "...",
	"country": "...",
	"email": "...",
	"managed": "..."
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

<a name="getAccount"/>
## Stripe.getAccount
Method description

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| accountId| String     | Id of account to retrive

#### Request example
```json
{	"apiKey": "...",
	"accountId": "..."
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

<a name="updateAccount"/>
## Stripe.updateAccount
Method description

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
{	"apiKey": "...",
	"accountId": "...",
	"businessLogo": "...",
	"businessName": "...",
	"businessPrimaryColor": "...",
	"businessUrl": "...",
	"debitNegativeBalances": "...",
	"declineChargeOn": "...",
	"defaultCurrency": "...",
	"email": "...",
	"externalAccount": "...",
	"legalEntity": "...",
	"metadata": "...",
	"productDescription": "...",
	"statementDescriptor": "...",
	"supportEmail": "...",
	"supportPhone": "...",
	"supportUrl": "...",
	"tosAcceptance": "...",
	"transferSchedule": "..."
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

<a name="deleteAccount"/>
## Stripe.deleteAccount
Method description

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| accountId| String     | Id of account to delete

#### Request example
```json
{	"apiKey": "...",
	"accountId": "..."
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

<a name="rejectAccount"/>
## Stripe.rejectAccount
Method description

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| accountId| String     | Id of account to reject
| reason   | String     | The reason for rejecting the account. May be one of `fraud`, `terms_of_service`, or `other`.

#### Request example
```json
{	"apiKey": "...",
	"accountId": "...",
	"reason": "..."
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

<a name="getAccountList"/>
## Stripe.getAccountList
Method description

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| The api key obtained from Stripe.
| endingBefore | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| limit        | Number     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| startingAfter| String     | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

#### Request example
```json
{	"apiKey": "...",
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
			"to":"..."
		}
	}
}
```

<a name="createFeeRefund"/>
## Stripe.createFeeRefund
Method description

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| appId   | String     | The identifier of the application fee to be refunded.
| amount  | Number     | A positive integer in cents representing how much of this fee to refund. Can only refund up to the unrefunded amount remaining of the fee.
| metadata| JSON       | A set of key/value pairs that you can attach to a refund object. It can be useful for storing additional information about the refund in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.

#### Request example
```json
{	"apiKey": "...",
	"appId": "...",
	"amount": 0,
	"metadata": "..."
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

<a name="getFeeRefund"/>
## Stripe.getFeeRefund
Method description

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| feeId   | String     | ID of the application fee refunded.
| refundId| String     | ID of refund to retrieve.

#### Request example
```json
{	"apiKey": "...",
	"feeId": "...",
	"refundId": "..."
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

<a name="updateFeeRefund"/>
## Stripe.updateFeeRefund
Method description

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| feeId   | String     | ID of the application fee refunded.
| refundId| String     | ID of refund to retrieve.
| metadata| JSON       | A set of key/value pairs that you can attach to an application fee refund object. It can be useful for storing additional information about the refund in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.

#### Request example
```json
{	"apiKey": "...",
	"feeId": "...",
	"refundId": "...",
	"metadata": "..."
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

<a name="getFeeRefundList"/>
## Stripe.getFeeRefundList
Method description

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| The api key obtained from Stripe.
| appId        | String     | The ID of the application fee whose refunds will be retrieved.
| endingBefore | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| limit        | Number     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| startingAfter| String     | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

#### Request example
```json
{	"apiKey": "...",
	"appId": "...",
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
			"to":"..."
		}
	}
}
```

<a name="getApplicationFee"/>
## Stripe.getApplicationFee
Method description

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| The api key obtained from Stripe.
| feeId | String     | The identifier of the fee to be retrieved.

#### Request example
```json
{	"apiKey": "...",
	"feeId": "..."
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

<a name="getApplicationFeeList"/>
## Stripe.getApplicationFeeList
Method description

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| The api key obtained  from Stripe.
| chargeId     | String     | Only return application fees for the charge specified by this charge ID.
| endingBefore | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| limit        | String     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| startingAfter| String     | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

#### Request example
```json
{	"apiKey": "...",
	"chargeId": "...",
	"endingBefore": "...",
	"limit": "...",
	"startingAfter": "..."
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

<a name="getCountrySpecsList"/>
## Stripe.getCountrySpecsList
Method description

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| The api key obtained from Stripe.
| endingBefore | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| limit        | String     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| startingAfter| String     | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

#### Request example
```json
{	"apiKey": "...",
	"endingBefore": "...",
	"limit": "...",
	"startingAfter": "..."
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

<a name="getCountrySpec"/>
## Stripe.getCountrySpec
Method description

| Field  | Type       | Description
|--------|------------|----------
| apiKey | credentials| The api key obtained from Stripe.
| country| String     | An ISO country code. Available country codes can be listed with the List Country Specs endpoint.

#### Request example
```json
{	"apiKey": "...",
	"country": "..."
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

<a name="createBankAccount"/>
## Stripe.createBankAccount
Method description

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
{	"apiKey": "...",
	"accountId": "...",
	"source": "...",
	"externalAccount": "...",
	"defaultForCurrency": "...",
	"metadata": "..."
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

<a name="getBankAccount"/>
## Stripe.getBankAccount
Method description

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| The api key obtained from Stripe.
| accountId    | String     | The account ID obtained from Stripe.
| bankAccountId| String     | The bank account ID obtained from Stripe.

#### Request example
```json
{	"apiKey": "...",
	"accountId": "...",
	"bankAccountId": "..."
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

<a name="updateBankAccount"/>
## Stripe.updateBankAccount
Method description

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| The api key obtained from Stripe.
| accountId    | String     | The account ID obtained from Stripe.
| bankAccountId| String     | The ID of the bank account to be updated.
| metadata     | JSON       | A set of key/value pairs that you can attach to an external account object. It can be useful for storing additional information about the external account in a structured format.

#### Request example
```json
{	"apiKey": "...",
	"accountId": "...",
	"bankAccountId": "...",
	"metadata": "..."
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

<a name="deleteBankAccount"/>
## Stripe.deleteBankAccount
Method description

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| The api key obtained from Stripe.
| accountId    | String     | The account ID obtained from Stripe.
| bankAccountId| String     | The bank account ID obtained from Stripe.

#### Request example
```json
{	"apiKey": "...",
	"accountId": "...",
	"bankAccountId": "..."
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

<a name="getBankAccountList"/>
## Stripe.getBankAccountList
Method description

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| The api key obtained from Stripe.
| accountId    | String     | The account ID obtained from Stripe.
| endingBefore | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| limit        | String     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| startingAfter| String     | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

#### Request example
```json
{	"apiKey": "...",
	"accountId": "...",
	"endingBefore": "...",
	"limit": "...",
	"startingAfter": "..."
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

<a name="createCard"/>
## Stripe.createCard
Method description

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
{	"apiKey": "...",
	"accountId": "...",
	"source": "...",
	"externalAccount": "...",
	"defaultForCurrency": "...",
	"metadata": "..."
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

<a name="getCard"/>
## Stripe.getCard
Method description

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| accountId| String     | The account ID obtained from Stripe.
| cardId   | String     | The card ID obtained from Stripe.

#### Request example
```json
{	"apiKey": "...",
	"accountId": "...",
	"cardId": "..."
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

<a name="updateCard"/>
## Stripe.updateCard
Method description

| Field             | Type       | Description
|-------------------|------------|----------
| apiKey            | credentials| The api key obtained from Stripe.
| accountId         | String     | The account ID obtained from Stripe.
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
{	"apiKey": "...",
	"accountId": "...",
	"cardId": "...",
	"addressCity": "...",
	"addressCountry": "...",
	"addressLine1": "...",
	"addressLine2": "...",
	"addressState": "...",
	"addressZip": "...",
	"defaultForCurrency": "...",
	"expMonth": "...",
	"expYear": "...",
	"metadata": "...",
	"name": "..."
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

<a name="deleteCard"/>
## Stripe.deleteCard
Method description

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| accountId| String     | The account ID obtained from Stripe.
| cardId   | String     | The card ID obtained from Stripe.

#### Request example
```json
{	"apiKey": "...",
	"accountId": "...",
	"cardId": "..."
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

<a name="getCardList"/>
## Stripe.getCardList
Method description

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| The api key obtained from Stripe.
| accountId    | String     | The account ID obtained from Stripe.
| endingBefore | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| limit        | String     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| startingAfter| String     | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

#### Request example
```json
{	"apiKey": "...",
	"accountId": "...",
	"endingBefore": "...",
	"limit": "...",
	"startingAfter": "..."
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
{	"apiKey": "...",
	"amount": "...",
	"currency": "...",
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
{	"apiKey": "...",
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
Method description

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
{	"apiKey": "...",
	"currency": "...",
	"coupon": "...",
	"customer": "...",
	"email": "...",
	"items": "...",
	"metadata": "...",
	"shipping": "..."
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

<a name="getOrder"/>
## Stripe.getOrder
Method description

| Field  | Type       | Description
|--------|------------|----------
| apiKey | credentials| The api key obtained from Stripe.
| orderId| String     | Id of receiver to retrive.

#### Request example
```json
{	"apiKey": "...",
	"orderId": "..."
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

<a name="updateOrder"/>
## Stripe.updateOrder
Method description

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
{	"apiKey": "...",
	"orderId": "...",
	"coupon": "...",
	"metadata": "...",
	"shipping": "...",
	"status": "..."
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

<a name="payOrder"/>
## Stripe.payOrder
Method description

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
{	"apiKey": "...",
	"orderId": "...",
	"customer": "...",
	"source": "...",
	"metadata": "...",
	"email": "..."
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

<a name="getOrderList"/>
## Stripe.getOrderList
Method description

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
{	"apiKey": "...",
	"created": "...",
	"customer": "...",
	"ids": "...",
	"status": "...",
	"statusTransitions": "...",
	"upstreamIds": "..."
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

<a name="returnOrder"/>
## Stripe.returnOrder
Method description

| Field  | Type       | Description
|--------|------------|----------
| apiKey | credentials| The api key obtained from Stripe.
| orderId| JSON       | Order id.
| items  | JSON       | List of items to return.

#### Request example
```json
{	"apiKey": "...",
	"orderId": "...",
	"items": "..."
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

<a name="getOrderReturn"/>
## Stripe.getOrderReturn
Method description

| Field  | Type       | Description
|--------|------------|----------
| apiKey | credentials| The api key obtained from Stripe.
| orderId| JSON       | The identifier of the order return to be retrieved.

#### Request example
```json
{	"apiKey": "...",
	"orderId": "..."
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

<a name="getOrderReturnList"/>
## Stripe.getOrderReturnList
Method description

| Field  | Type       | Description
|--------|------------|----------
| apiKey | credentials| The api key obtained from Stripe.
| created| String     | A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options:
| order  | String     | The order to retrieve returns for.

#### Request example
```json
{	"apiKey": "...",
	"created": "...",
	"order": "..."
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

<a name="createProduct"/>
## Stripe.createProduct
Method description

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
{	"apiKey": "...",
	"name": "...",
	"active": "...",
	"attributes": "...",
	"caption": "...",
	"deactivateOn": "...",
	"description": "...",
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
			"to":"..."
		}
	}
}
```

<a name="getProduct"/>
## Stripe.getProduct
Method description

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| productId| String     | The identifier of the product to be retrieved.

#### Request example
```json
{	"apiKey": "...",
	"productId": "..."
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

<a name="updateProduct"/>
## Stripe.updateProduct
Method description

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
{	"apiKey": "...",
	"productId": "...",
	"name": "...",
	"active": "...",
	"attributes": "...",
	"caption": "...",
	"deactivateOn": "...",
	"description": "...",
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
			"to":"..."
		}
	}
}
```

<a name="getProductList"/>
## Stripe.getProductList
Method description

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| ids      | String     | Only return products with the given IDs.
| shippable| String     | Only return products that can be shipped (i.e., physical, not digital products).
| url      | String     | Only return products with the given url.

#### Request example
```json
{	"apiKey": "...",
	"ids": "...",
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
			"to":"..."
		}
	}
}
```

<a name="deleteProduct"/>
## Stripe.deleteProduct
Method description

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| productId| String     | The ID of the product to delete.

#### Request example
```json
{	"apiKey": "...",
	"productId": "..."
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

<a name="createSKU"/>
## Stripe.createSKU
Method description

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
{	"apiKey": "...",
	"currency": "...",
	"inventory": "...",
	"price": 0,
	"product": "...",
	"active": "...",
	"attributes": "...",
	"image": "...",
	"metadata": "...",
	"packageDimensions": "..."
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

<a name="getSKU"/>
## Stripe.getSKU
Method description

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| The api key obtained from Stripe.
| skuId | String     | The identifier of the SKU to be retrieved.

#### Request example
```json
{	"apiKey": "...",
	"skuId": "..."
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

<a name="updateSKU"/>
## Stripe.updateSKU
Method description

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
{	"apiKey": "...",
	"skuId": "...",
	"currency": "...",
	"inventory": "...",
	"price": "...",
	"product": "...",
	"active": "...",
	"attributes": "...",
	"image": "...",
	"metadata": "...",
	"packageDimensions": "..."
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

<a name="getSKUList"/>
## Stripe.getSKUList
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| The api key obtained from Stripe.
| attributes| String     | 
| ids       | String     | Only return SKUs with the given IDs.
| productId | String     | The ID of the product whose SKUs will be retrieved.

#### Request example
```json
{	"apiKey": "...",
	"attributes": "...",
	"ids": "...",
	"productId": "..."
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

<a name="deleteSKU"/>
## Stripe.deleteSKU
Method description

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| The api key obtained from Stripe.
| skuId | String     | The identifier of the SKU to be deleted.

#### Request example
```json
{	"apiKey": "...",
	"skuId": "..."
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

<a name="createCoupon"/>
## Stripe.createCoupon
Method description

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
{	"apiKey": "...",
	"couponId": "...",
	"duration": "...",
	"amountOff": "...",
	"currency": "...",
	"durationInMonths": "...",
	"maxRedemptions": "...",
	"metadata": "...",
	"percentOff": "...",
	"redeemBy": "..."
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

<a name="getCoupon"/>
## Stripe.getCoupon
Method description

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| couponId| String     | Unique string of your choice that will be used to identify this coupon when applying it to a customer. This is often a specific code you’ll give to your customer to use when signing up (e.g. FALL25OFF). If you don’t want to specify a particular code, you can leave the ID blank and we’ll generate a random code for you.

#### Request example
```json
{	"apiKey": "...",
	"couponId": "..."
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

<a name="updateCoupon"/>
## Stripe.updateCoupon
Method description

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| couponId| String     | Unique string of your choice that will be used to identify this coupon when applying it to a customer. This is often a specific code you’ll give to your customer to use when signing up (e.g. FALL25OFF). If you don’t want to specify a particular code, you can leave the ID blank and we’ll generate a random code for you.
| metadata| JSON       | A set of key/value pairs that you can attach to a coupon object. It can be useful for storing additional information about the coupon in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.

#### Request example
```json
{	"apiKey": "...",
	"couponId": "...",
	"metadata": "..."
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

<a name="deleteCoupon"/>
## Stripe.deleteCoupon
Method description

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| couponId| String     | Unique string of your choice that will be used to identify this coupon when applying it to a customer. This is often a specific code you’ll give to your customer to use when signing up (e.g. FALL25OFF). If you don’t want to specify a particular code, you can leave the ID blank and we’ll generate a random code for you.

#### Request example
```json
{	"apiKey": "...",
	"couponId": "..."
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

<a name="getCouponList"/>
## Stripe.getCouponList
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

<a name="deleteCustomerDiscount"/>
## Stripe.deleteCustomerDiscount
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| The api key obtained from Stripe.
| customerId| String     | Id of customer to delete.

#### Request example
```json
{	"apiKey": "...",
	"customerId": "..."
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

<a name="deleteSubscriptionDiscount"/>
## Stripe.deleteSubscriptionDiscount
Method description

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| The api key obtained from Stripe.
| subscriptionId| String     | Id of subscribtion to delete.

#### Request example
```json
{	"apiKey": "...",
	"subscriptionId": "..."
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

<a name="createInvoice"/>
## Stripe.createInvoice
Method description

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
{	"apiKey": "...",
	"customer": "...",
	"applicationFee": "...",
	"description": "...",
	"metadata": "...",
	"statementDescriptor": "...",
	"subscription": "...",
	"taxPercent": "..."
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

<a name="getInvoice"/>
## Stripe.getInvoice
Method description

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| invoiceId| String     | Invoice id.

#### Request example
```json
{	"apiKey": "...",
	"invoiceId": "..."
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

<a name="getInvoiceLineItems"/>
## Stripe.getInvoiceLineItems
Method description

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
{	"apiKey": "...",
	"invoice": "...",
	"coupon": "...",
	"customer": "...",
	"subscription": "...",
	"subscriptionPlan": "...",
	"subscriptionProrate": "...",
	"subscriptionProrationDate": "...",
	"subscriptionQuantity": "...",
	"subscriptionTrialEnd": "..."
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

<a name="updateInvoice"/>
## Stripe.updateInvoice
Method description

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
{	"apiKey": "...",
	"invoiceId": "...",
	"applicationFee": "...",
	"description": "...",
	"metadata": "...",
	"statementDescriptor": "...",
	"subscription": "...",
	"forgiven": "...",
	"closed": "...",
	"taxPercent": "..."
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

<a name="payInvoice"/>
## Stripe.payInvoice
Method description

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| The api key obtained from Stripe.
| invoiceId| String     | Invoice id.

#### Request example
```json
{	"apiKey": "...",
	"invoiceId": "..."
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

<a name="getInvoiceList"/>
## Stripe.getInvoiceList
Method description

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| customer| String     | The identifier of the customer whose invoices to return. If none is provided, all invoices will be returned.

#### Request example
```json
{	"apiKey": "...",
	"customer": "..."
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

<a name="getInvoiceList"/>
## Stripe.getInvoiceList
Method description

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| customer| String     | The identifier of the customer whose invoices to return. If none is provided, all invoices will be returned.

#### Request example
```json
{	"apiKey": "...",
	"customer": "..."
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

<a name="createInvoiceItem"/>
## Stripe.createInvoiceItem
Method description

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
{	"apiKey": "...",
	"amount": 0,
	"currency": "...",
	"customer": "...",
	"description": "...",
	"discountable": "...",
	"invoice": "...",
	"metadata": "...",
	"subscription": "..."
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

<a name="getInvoiceItem"/>
## Stripe.getInvoiceItem
Method description

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| The api key obtained from Stripe.
| invoiceitem| String     | The ID of the desired invoice item.

#### Request example
```json
{	"apiKey": "...",
	"invoiceitem": "..."
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

<a name="updateInvoiceItem"/>
## Stripe.updateInvoiceItem
Method description

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
{	"apiKey": "...",
	"itemId": "...",
	"amount": 0,
	"description": "...",
	"discountable": "...",
	"metadata": "..."
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

<a name="deleteInvoiceItem"/>
## Stripe.deleteInvoiceItem
Method description

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| The api key obtained from Stripe.
| invoiceitem| String     | The ID of the desired invoice item.

#### Request example
```json
{	"apiKey": "...",
	"invoiceitem": "..."
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

<a name="getInvoiceItemsList"/>
## Stripe.getInvoiceItemsList
Method description

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| The api key obtained from Stripe.
| customer| String     | The identifier of the customer whose invoice items to return. If none is provided, all invoice items will be returned.

#### Request example
```json
{	"apiKey": "...",
	"customer": "..."
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

<a name="createPlan"/>
## Stripe.createPlan
Method description

| Field              | Type       | Description
|--------------------|------------|----------
| apiKey             | credentials| The api key obtained from Stripe.
| planId             | String     | Unique string of your choice that will be used to identify this plan when subscribing a customer. This could be an identifier like “gold” or a primary key from your own database.
| amount             | String     | A positive integer in cents (or 0 for a free plan) representing how much to charge (on a recurring basis).
| currency           | String     | 3-letter ISO code for currency.
| interval           | String     | Specifies billing frequency. Either day, week, month or year.
| name               | String     | Name of the plan, to be displayed on invoices and in the web interface.
| intervalCount      | String     | The number of intervals between each subscription billing. For example, interval=month and interval_count=3 bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
| metadata           | String     | A set of key/value pairs that you can attach to a plan object. It can be useful for storing additional information about the plan in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| statementDescriptor| String     | An arbitrary string to be displayed on your customer’s credit card statement. This may be up to 22 characters. As an example, if your website is RunClub and the item you’re charging for is your Silver Plan, you may want to specify a statement_descriptor of RunClub Silver Plan. The statement description may not include <>"' characters, and will appear on your customer’s statement in capital letters. Non-ASCII characters are automatically stripped. While most banks display this information consistently, some may display it incorrectly or not at all.
| trialPeriodDays    | String     | Specifies a trial period in (an integer number of) days. If you include a trial period, the customer won’t be billed for the first time until the trial period ends. If the customer cancels before the trial period is over, she’ll never be billed at all.

#### Request example
```json
{	"apiKey": "...",
	"planId": "...",
	"amount": "...",
	"currency": "...",
	"interval": "...",
	"name": "...",
	"intervalCount": "...",
	"metadata": "...",
	"statementDescriptor": "...",
	"trialPeriodDays": "..."
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

<a name="getPlan"/>
## Stripe.getPlan
Method description

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| The api key obtained from Stripe.
| planId| String     | The ID of the desired plan.

#### Request example
```json
{	"apiKey": "...",
	"planId": "..."
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

<a name="updatePlan"/>
## Stripe.updatePlan
Method description

| Field              | Type       | Description
|--------------------|------------|----------
| apiKey             | credentials| The api key obtained from Stripe.
| planId             | String     | The identifier of the plan to be updated.
| name               | String     | Name of the plan, to be displayed on invoices and in the web interface.
| metadata           | String     | A set of key/value pairs that you can attach to a plan object. It can be useful for storing additional information about the plan in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| statementDescriptor| String     | An arbitrary string to be displayed on your customer’s credit card statement. This may be up to 22 characters. As an example, if your website is RunClub and the item you’re charging for is your Silver Plan, you may want to specify a statement_descriptor of RunClub Silver Plan. The statement description may not include <>"' characters, and will appear on your customer’s statement in capital letters. Non-ASCII characters are automatically stripped. While most banks display this information consistently, some may display it incorrectly or not at all.

#### Request example
```json
{	"apiKey": "...",
	"planId": "...",
	"name": "...",
	"metadata": "...",
	"statementDescriptor": "..."
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

<a name="deletePlan"/>
## Stripe.deletePlan
Method description

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| The api key obtained from Stripe.
| planId| String     | The identifier of the plan to be deleted.

#### Request example
```json
{	"apiKey": "...",
	"planId": "..."
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

<a name="getPlanList"/>
## Stripe.getPlanList
Method description

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| The api key obtained from Stripe.
| planId| String     | The identifier of the plan to be deleted.

#### Request example
```json
{	"apiKey": "...",
	"planId": "..."
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

<a name="createSubscription"/>
## Stripe.createSubscription
Method description

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
{	"apiKey": "...",
	"applicationFeePercent": "...",
	"coupon": "...",
	"customer": "...",
	"plan": "...",
	"source": "...",
	"quantity": 0,
	"metadata": "...",
	"taxPercent": "...",
	"trialEnd": "..."
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

<a name="getSubscription"/>
## Stripe.getSubscription
Method description

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| The api key obtained from Stripe.
| subscriptionId| String     | ID of subscription to retrieve.

#### Request example
```json
{	"apiKey": "...",
	"subscriptionId": "..."
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

<a name="updateSubscription"/>
## Stripe.updateSubscription
Method description

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
{	"apiKey": "...",
	"subscriptionId": "...",
	"applicationFeePercent": "...",
	"coupon": "...",
	"customer": "...",
	"plan": "...",
	"source": "...",
	"quantity": 0,
	"metadata": "...",
	"taxPercent": "...",
	"trialEnd": "..."
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

<a name="cancelSubscription"/>
## Stripe.cancelSubscription
Method description

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| The api key obtained from Stripe.
| subscriptionId| String     | ID of subscription to retrieve.
| atPeriodEnd   | String     | A flag that if set to true will delay the cancellation of the subscription until the end of the current period.

#### Request example
```json
{	"apiKey": "...",
	"subscriptionId": "...",
	"atPeriodEnd": "..."
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

<a name="getSubscriptionList"/>
## Stripe.getSubscriptionList
Method description

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| The api key obtained from Stripe.
| subscriptionId| String     | ID of subscription to retrieve.
| customer      | String     | The ID of the customer whose subscriptions will be retrieved
| plan          | String     | The ID of the plan whose subscriptions will be retrieved
| status        | String     | The status of the subscriptions to retrieve. One of: trialing, active, past_due, unpaid, canceled, or all. Passing in a value of canceled will return all canceled subscriptions, including those belonging to deleted customers. Passing in a value of all will return subscriptions of all statuses.

#### Request example
```json
{	"apiKey": "...",
	"subscriptionId": "...",
	"customer": "...",
	"plan": "...",
	"status": "..."
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

