[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/Stripe/functions?utm_source=RapidAPIGitHub_StripeFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)

# Stripe Package
This blocks allows you to translates a sting of text from one language to another
* Domain: stripe.com
* Credentials: apiKey.

## How to get credentials: 
0. Sign in [stripe dashboard](https://dashboard.stripe.com/dashboard). 
1. Go to [your account settings](https://dashboard.stripe.com/account).
2. Choose [*API Keys* folder](https://dashboard.stripe.com/account/apikeys).
3. Copy and save your *Secret Key*.

## Stripe.getAccountBalance
Retrieves the current account balance, based on the authentication that was used to make the request.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.

## Stripe.getBalanceHistory
Returns a list of transactions that have contributed to the Stripe account balance (e.g., charges, transfers, and so forth). The transactions are returned in sorted order, with the most recent transactions appearing first.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Required: The api key obtained from Stripe.
| currency     | String     | 3-letter ISO code for currency.
| startingAfter| String     | A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
| limit        | Number     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| type         | String     | Only returns transactions of the given type. One of: `charge`, `refund`, `adjustment`, `application_fee`, `application_fee_refund`, `transfer`, or `transfer_failure`

## Stripe.createCharge
To charge a credit card, you create a charge object. If your API key is in test mode, the supplied payment source (e.g., card or Bitcoin receiver) won't actually be charged, though everything else will occur as if in live mode. (Stripe assumes that the charge would have completed successfully).

| Field              | Type       | Description
|--------------------|------------|----------
| apiKey             | credentials| Required: The api key obtained from Stripe.
| amount             | String     | Required: A positive integer in the smallest currency unit (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a 0-decimal currency) representing how much to charge the card. The minimum amount is $0.50 US or equivalent in charge currency.
| applicationFee     | String     | A fee in cents that will be applied to the charge and transferred to the application owner's Stripe account. To use an application fee, the request must be made on behalf of another account, using the Stripe-Account header, an OAuth key, or the destination parameter. For more information, see the application fees documentation.
| currency           | String     | Required: 3-letter ISO code for currency.
| capture            | String     | Boolean. Whether or not to immediately capture the charge. When false, the charge issues an authorization (or pre-authorization), and will need to be captured later. Uncaptured charges expire in 7 days. For more information, see authorizing charges and settling later.
| description        | String     | An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the description of the charge(s) that they are describing.
| receiptEmail       | String     | The email address to send this charge's receipt to. The receipt will not be sent until the charge is paid. If this charge is for a customer, the email address specified here will override the customer's email address. Receipts will not be sent for test mode charges. If `receipt_email` is specified for a charge in live mode, a receipt will be sent regardless of your email settings.
| customer           | String     | The ID of an existing customer that will be charged in this request.
| source             | String     | A payment source to be charged, such as a credit card. If you also pass a customer ID, the source must be the ID of a source belonging to the customer. Otherwise, if you do not pass a customer ID, the source you provide must either be a token, like the ones returned by Stripe.js, or a object containing a user's credit card details, with the options described below. Although not all information is required, the extra info helps prevent fraud.child attributes
| statementDescriptor| String     | An arbitrary string to be displayed on your customer`s credit card statement. This may be up to 22 characters. As an example, if your website is RunClub and the item you`re charging for is a race ticket, you may want to specify a statement_descriptor of RunClub 5K race ticket. The statement description may not include <> characters, and will appear on your customer`s statement in capital letters. Non-ASCII characters are automatically stripped. While most banks display this information consistently, some may display it incorrectly or not at all.

## Stripe.createCustomer
Creates a new customer object.

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| Required: The api key obtained from Stripe.
| source        | String     | Required: The source can either be a token, like the ones returned by our Stripe.js, or a dictionary containing a user’s credit card details (with the options shown below).child arguments
| accountBalance| String     | An integer amount in cents that is the starting account balance for your customer. A negative amount represents a credit that will be used before attempting any charges to the customer’s card; a positive amount will be added to the next invoice.
| businessVatId | String     | The customer’s VAT identification number. If you are using Relay, this field gets passed to tax provider you are using for your orders. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| coupon        | String     | If you provide a coupon code, the customer will have a discount applied on all recurring charges. Charges you create through the API will not have the discount.
| description   | String     | An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| email         | String     | Customer’s email address. It’s displayed alongside the customer in your dashboard and can be useful for searching and tracking. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| metadata      | JSON       | A set of key/value pairs that you can attach to a customer object. It can be useful for storing additional information about the customer in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| plan          | String     | The identifier of the plan to subscribe the customer to. If provided, the returned customer object will have a list of subscriptions that the customer is currently subscribed to. If you subscribe a customer to a plan without a free trial, the customer must have a valid card as well.
| taxPercent    | String     | A positive decimal (with at most four decimal places) between 1 and 100. This represents the percentage of the subscription invoice subtotal that will be calculated and added as tax to the final amount each billing period. For example, a plan which charges $10/month with a tax_percent of 20.0 will charge $12 per invoice. Can only be used if a plan is provided.
| trialEnd      | String     | Unix timestamp representing the end of the trial period the customer will get before being charged. If set, trial_end will override the default trial period of the plan the customer is being subscribed to. The special value now can be provided to end the customer’s trial immediately. Only applies when the plan parameter is also provided.

Metadata example:

```JSON
{
	"custom_key": "customValue"
}
```

## Stripe.getBalanceTransaction
Retrieves the balance transaction with the given ID.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| id        | credentials| Required: The ID of the desired balance transaction (as found on any API object that affects the balance, e.g. a charge or transfer).

## Stripe.getCharge
To charge a credit card, you create a charge object. If your API key is in test mode, the supplied payment source (e.g., card or Bitcoin receiver) won't actually be charged, though everything else will occur as if in live mode. (Stripe assumes that the charge would have completed successfully).

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| chargeId  | String     | Required: The identifier of the charge to be retrieved.

## Stripe.updateCharge
Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

| Field       | Type       | Description
|-------------|------------|----------
| apiKey      | credentials| Required: The api key obtained from Stripe.
| chargeId    | String     | Required: Id of a charge.
| description | String     | An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the description of the charge(s) that they are describing.
| receiptEmail| String     | The email address to send this charge's receipt to. The receipt will not be sent until the charge is paid. If this charge is for a customer, the email address specified here will override the customer's email address. Receipts will not be sent for test mode charges. If `receipt_email` is specified for a charge in live mode, a receipt will be sent regardless of your email settings.
| fraudDetails| JSON       | JSON Object. A set of key/value pairs you can attach to a charge giving information about its riskiness. If you believe a charge is fraudulent, include a user_report key with a value of fraudulent. If you believe a charge is safe, include a user_report key with a value of safe. Note that you must refund a charge before setting the user_report to fraudulent. Stripe will use the information you send to improve our fraud detection algorithms.
| metadata    | JSON       | A set of key/value pairs that you can attach to a charge object. It can be useful for storing additional information about the charge in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.
| shipping    | String     | Shipping information for the charge. Helps prevent fraud on charges for physical goods.

`metadata` example:

```JSON
{
	"custom_key": "customValue"
}
```
`fraudDetails` example: 

```JSON
{
	"user_report": "safe"
}
```

## Stripe.captureCharge
Capture the payment of an existing, uncaptured, charge. This is the second half of the two-step payment flow, where first you created a charge with the capture option set to false.

| Field              | Type       | Description
|--------------------|------------|----------
| apiKey             | credentials| Required: The api key obtained from Stripe.
| chargeId           | String     | Required: Id of a charge.
| amount             | String     | The amount to capture, which must be less than or equal to the original amount. Any additional amount will be automatically refunded.
| applicationFee     | String     | An application fee to add on to this charge. Can only be used with Stripe Connect.
| receiptEmail       | credentials| The email address to send this charge’s receipt to. This will override the previously-specified email address for this charge, if one was set. Receipts will not be sent in test mode.
| statementDescriptor| credentials| An arbitrary string to be displayed on your customer’s credit card statement. This may be up to 22 characters. As an example, if your website is RunClub and the item you’re charging for is a race ticket, you may want to specify a statement_descriptor of RunClub 5K race ticket. The statement description may not include <> characters, and will appear on your customer’s statement in capital letters. Non-ASCII characters are automatically stripped. Updating this value will overwrite the previous statement descriptor of this charge. While most banks display this information consistently, some may display it incorrectly or not at all

## Stripe.getChargesList
Returns a list of charges you’ve previously created. The charges are returned in sorted order, with the most recent charges appearing first.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Required: The api key obtained from Stripe.
| created      | String     | A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options: child arguments
| customer     | String     | Only return charges for the customer specified by this customer ID.
| endingBefore | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| limit        | String     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| source       | String     | A filter on the list based on the source of the charge. The value can be a dictionary with the following options:
| startingAfter| String     | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

## Stripe.getCustomer
Retrieves the details of an existing customer. You need only supply the unique customer identifier that was returned upon customer creation.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| customerId| String     | Required: The identifier of the customer to be retrieved.

## Stripe.updateCustomer
Updates the specified customer by setting the values of the parameters passed.

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| Required: The api key obtained from Stripe.
| customerId    | String     | Required: If of customer to update.
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

`metadata` example:

```JSON
{
	"custom_key": "customValue"
}
```

## Stripe.deleteCustomer
Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| customerId| String     | Required: If of customer to update.

## Stripe.getCustomerList
Returns a list of your customers. The customers are returned sorted by creation date, with the most recent customers appearing first.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Required: The api key obtained from Stripe.
| endingBefore | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| limit        | String     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| startingAfter| String     | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

## Stripe.getDispute
Retrieves the dispute with the given ID.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| disputeId | String     | Required: ID of dispute to retrieve.

## Stripe.updateDispute
When you get a dispute, contacting your customer is always the best first step. If that doesn’t work, you can submit evidence in order to help us resolve the dispute in your favor.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| disputeId | String     | Required: ID of dispute to retrieve.
| evidence  | JSON       | JSON Object. Evidence to upload to respond to a dispute. Updating any field in the hash will submit all fields in the hash for review.
| metadata  | JSON       | A set of key/value pairs that you can attach to a dispute object. It can be useful for storing additional information about the dispute in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.

`metadata` example:

```JSON
{
	"custom_key": "customValue"
}
```
`evidence` example: 

```JSON
{
	"customer_name": "Natalie Martin",
	"product_description": "Comfortable cotton t-shirt",
	"shipping_documentation": "file_19NFpA2eZvKYlo2CeIrPEhbu"	
}
```

## Stripe.closeDispute
Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially ‘dismissing’ the dispute, acknowledging it as lost

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| disputeId | String     | Required: ID of dispute to retrieve.

## Stripe.getDisputes
Returns a list of your disputes.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Required: The api key obtained from Stripe.
| endingBefore | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| limit        | String     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| startingAfter| String     | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

## Stripe.getEvent
Retrieves the details of an event. Supply the unique identifier of the event, which you might have received in a webhook.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| eventId   | credentials| Required: The api key obtained from Stripe.

## Stripe.getEventList
List events, going back up to 30 days.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Required: The api key obtained from Stripe.
| type         | String     | A string containing a specific event name, or group of events using * as a wildcard. The list will be filtered to include only events with a matching event property.
| endingBefore | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| limit        | String     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| startingAfter| String     | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

## Stripe.createFileUpload
Upload a file to Stripe

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| file      | File       | Required: A file to upload.
| purpose   | String     | Required: The purpoe of the uploaded file. Possible values are `business_logo`, `dispute_evidence`, `identity_document`, `incorporation_article`, `incorporation_document`, `payment_provider_transfer`, `product_feed`.

## Stripe.createRefund
Creates a refund.

| Field               | Type       | Description
|---------------------|------------|----------
| apiKey              | credentials| Required: The api key obtained from Stripe.
| chargeId            | String     | Required: The identifier of the charge to refund.
| amount              | String     | A positive integer in cents representing how much of this charge to refund. Can only refund up to the unrefunded amount remaining of the charge.
| metadata            | JSON       | A set of key/value pairs that you can attach to a refund object. It can be useful for storing additional information about the refund in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.
| reason              | String     | String indicating the reason for the refund. If set, possible values are duplicate, fraudulent, and requested_by_customer. Specifying fraudulent as the reason when you believe the charge to be fraudulent will help us improve our fraud detection algorithms.
| refundApplicationFee| String     | Boolean indicating whether the application fee should be refunded when refunding this charge. If a full charge refund is given, the full application fee will be refunded. Else, the application fee will be refunded with an amount proportional to the amount of the charge refunded. An application fee can only be refunded by the application that created the charge.
| reverseTransfer     | String     | Boolean indicating whether the transfer should be reversed when refunding this charge. The transfer will be reversed for the same amount being refunded (either the entire or partial amount). A transfer can only be reversed by the application that created the charge.

`metadata` example:

```JSON
{
	"custom_key": "customValue"
}
```

## Stripe.getRefund
Retrieves the details of an existing refund.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| refundId  | String     | Required: ID of refund to retrieve.

## Stripe.updateRefund
Updates the specified refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| refundId  | String     | Required: ID of refund to retrieve.
| metadata  | JSON       | A set of key/value pairs that you can attach to a refund object. It can be useful for storing additional information about the refund in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.

`metadata` example:

```JSON
{
	"custom_key": "customValue"
}
```

## Stripe.getRefundList
Returns a list of all refunds you’ve previously created. The refunds are returned in sorted order, with the most recent refunds appearing first. For convenience, the 10 most recent refunds are always available by default on the charge object.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Required: The api key obtained from Stripe.
| endingBefore | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| limit        | String     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| startingAfter| String     | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

## Stripe.createCardToken
Creates a single use token that wraps the details of a credit card.

| Field                  | Type       | Description
|------------------------|------------|----------
| apiKey                 | credentials| Required: The api key obtained from Stripe.
| cardNumber             | String     | Required: Number of card
| cardExpirationMonth    | Number     | Required: Expiration month of card
| cardExpirationYear     | Number     | Required: Expiration year of card
| cardCvc                | String     | Required: CVC code of card

## Stripe.createBankAccountToken
Creates a single use token that wraps the details of a bank account.

| Field                           | Type       | Description
|---------------------------------|------------|----------
| apiKey                          | credentials| Required: The api key obtained from Stripe.
| bankAccountCountry              | String     | Required: The bank account country
| bankAccountCurrency             | String     | Required: The bank account currency
| bankAccountAccountHolderName    | String     | Required: The bank account holder name
| bankAccountAccountHolderType    | String     | Required: The bank account holder type
| bankAccountRoutingNumber        | String     | Required: The bank account routing number
| bankAccountNumber               | String     | Required: The bank account number

## Stripe.createPiiToken
Creates a single use token that wraps the details of personally identifiable information (PII).

| Field               | Type       | Description
|---------------------|------------|----------
| apiKey              | credentials| Required: The api key obtained from Stripe.
| personalIdNumber    | String     | Required: The bank account country

## Stripe.getToken
Retrieves the token with the given ID.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| tokenId   | String     | Required: The ID of the desired token.

## Stripe.createTransfer
To send funds from your Stripe account to a third-party recipient or to your own bank account, you create a new transfer object.

| Field              | Type       | Description
|--------------------|------------|----------
| apiKey             | credentials| Required: The api key obtained from Stripe.
| amount             | Number     | Required: A positive integer in cents representing how much to transfer.
| currency           | String     | Required: 3-letter ISO code for currency
| destination        | String     | Required: The id of a bank account or a card to send the transfer to, or the string `default_for_currency` to use the default external account for the specified currency. 
| description        | String     | An arbitrary string which you can attach to a transfer object. It is displayed when in the web interface alongside the transfer.
| sourceTransaction  | String     | You can use this parameter to transfer funds from a charge (or other transaction) before they are added to your available balance. A pending balance will transfer immediately but the funds will not become available until the original charge becomes available.
| statementDescriptor| String     | A string to be displayed on the recipient's bank or card statement. This may be at most 22 characters. Attempting to use a statement_descriptor longer than 22 characters will return an error. Note: Most banks will truncate this information and/or display it inconsistently. Some may not display it at all.
| sourceType         | String     | Valid options are: alipay_account, bank_account, bitcoin_receiver, and card.

## Stripe.getTransfer
Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or the transfer list, and Stripe will return the corresponding transfer information.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| transferId| String     | Required: The identifier of the transfer to be retrieved.

## Stripe.updateTransfer
Updates the specified transfer by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| Required: The api key obtained from Stripe.
| transferId | String     | Required: Id of transfer to update.
| description| String     | An arbitrary string which you can attach to a transfer object. It is displayed when in the web interface alongside the transfer. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| metadata   | JSON       | A set of key/value pairs that you can attach to a transfer object. It can be useful for storing additional information about the transfer in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.

`metadata` example:

```JSON
{
	"custom_key": "customValue"
}
```

## Stripe.getTransferList
Returns a list of existing transfers sent to third-party bank accounts or that Stripe has sent you. The transfers are returned in sorted order, with the most recently created transfers appearing first.

| Field          | Type       | Description
|----------------|------------|----------
| apiKey         | credentials| Required: The api key obtained from Stripe.
| destination    | String     | Only return transfers for the destination specified by this account ID.
| recipientstatus| String     | Only return transfers for the recipient specified by this recipient ID.
| status         | String     | Only return transfers that have the given status: `pending`, `paid`, `failed`, `in_transit`, or `canceled`.

## Stripe.createTransferReversal
When you create a new reversal, you must specify a transfer to create it on.

| Field               | Type       | Description
|---------------------|------------|----------
| apiKey              | credentials| Required: The api key obtained from Stripe.
| transferId          | credentials| Required: The identifier of the transfer to be reversed.
| description         | String     | An arbitrary string which you can attach to a reversal object. It is displayed alongside the reversal in the dashboard. This will be unset if you POST an empty value.
| metadata            | JSON       | A set of key/value pairs that you can attach to a reversal object. It can be useful for storing additional information about the reversal in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.
| refundApplicationFee| String     | Boolean indicating whether the application fee should be refunded when reversing this transfer. If a full transfer reversal is given, the full application fee will be refunded. Otherwise, the application fee will be refunded with an amount proportional to the amount of the transfer reversed.

`metadata` example:

```JSON
{
	"custom_key": "customValue"
}
```

## Stripe.getTransferReversal
By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a specific reversal stored on the transfer.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| id        | String     | Required: ID of reversal to retrieve.
| transferId| String     | Required: ID of the transfer reversed.

## Stripe.updateTransferReversal
Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| Required: The api key obtained from Stripe.
| id         | String     | Required: ID of reversal to retrieve.
| transferId | String     | Required: ID of the transfer reversed.
| metadata   | JSON       | A set of key/value pairs that you can attach to a reversal object. It can be useful for storing additional information about the reversal in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.
| description| String     | An arbitrary string which you can attach to a reversal object. It is displayed when in the web interface alongside the reversal. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.

`metadata` example:

```JSON
{
	"custom_key": "customValue"
}
```

## Stripe.getTransferReversalList
You can see a list of the reversals belonging to a specific transfer.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| transferId| String     | Required: The ID of the transfer whose reversals will be retrieved.

## Stripe.createAccount
With Connect, you can create Stripe accounts for your users. To do this, you'll first need to register your platform.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| country   | String     | The country the account holder resides in or that the business is legally established in. For example, if you are in the United States and the business you’re creating an account for is legally represented in Canada, you would use “CA” as the country for the account being created.
| email     | String     | Required: The email address of the account holder. For standalone accounts, Stripe will email your user with instructions for how to set up their account. For managed accounts, this is only to make the account easier to identify to you: Stripe will never directly reach out to your users.
| managed   | String     | Whether you'd like to create a managed or standalone account. Managed accounts have extra parameters available to them, and require that you, the platform, handle all communication with the account holder. Standalone accounts are normal Stripe accounts: Stripe will email the account holder to setup a username and password, and handle all account management directly with them.

## Stripe.getAccount
Retrieves the details of the account.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| accountId | String     | Required: Id of account to retrive

## Stripe.updateAccount
Updates an account by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

| Field                | Type       | Description
|----------------------|------------|----------
| apiKey               | credentials| Required: The api key obtained from Stripe.
| accountId            | String     | Required: Id of account to update
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
| tosAcceptance        | JSON       | JSON Object. Details on who accepted the Stripe terms of service, and when they accepted it
| transferSchedule     | JSON       | JSON Object. Details on when this account will make funds from charges available, and when they will be paid out to the account holder’s bank account.

`metadata` example:
```JSON
{
	"custom_key": "customValue"
}
```

`tosAcceptance` example: 
```JSON
{
	"date": "1480941861",
	"ip": "127.0.0.1",
	"user_agent": "Mozilla/5.0 (X11; Linux x86_64)"
}
```

`transferSchedule` example: 
```JSON
{
	"delay_days": 7,
	"interval": "daily"
}
```

## Stripe.deleteAccount
Managed accounts created using test-mode keys can be deleted at any time. Managed accounts created using live-mode keys may only be deleted once all balances are zero.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| accountId | String     | Required: Id of account to delete

## Stripe.rejectAccount
Managed accounts created using test-mode keys can be rejected at any time. Managed accounts created using live-mode keys may only be rejected once all balances are zero.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| accountId | String     | Required: Id of account to reject
| reason    | String     | Required: The reason for rejecting the account. May be one of `fraud`, `terms_of_service`, or `other`.

## Stripe.getAccountList
Returns a list of accounts connected to your platform via Connect. If you’re not a platform, the list will be empty.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Required: The api key obtained from Stripe.
| endingBefore | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| limit        | Number     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| startingAfter| String     | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

## Stripe.createFeeRefund
Refunds an application fee that has previously been collected but not yet refunded. Funds will be refunded to the Stripe account that the fee was originally collected from.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| appId     | String     | Required: The identifier of the application fee to be refunded.
| amount    | Number     | A positive integer in cents representing how much of this fee to refund. Can only refund up to the unrefunded amount remaining of the fee.
| metadata  | JSON       | A set of key/value pairs that you can attach to a refund object. It can be useful for storing additional information about the refund in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.

`metadata` example:
```JSON
{
	"custom_key": "customValue"
}
```


## Stripe.getFeeRefund
By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details about a specific refund stored on the application fee.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| feeId     | String     | Required: ID of the application fee refunded.
| refundId  | String     | Required: ID of refund to retrieve.

## Stripe.updateFeeRefund
Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| feeId     | String     | Required: ID of the application fee refunded.
| refundId  | String     | Required: ID of refund to retrieve.
| metadata  | JSON       | A set of key/value pairs that you can attach to an application fee refund object. It can be useful for storing additional information about the refund in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.

`metadata` example:
```JSON
{
	"custom_key": "customValue"
}
```

## Stripe.getFeeRefundList
You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available by default on the application fee object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional refunds.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Required: The api key obtained from Stripe.
| appId        | String     | Required: The ID of the application fee whose refunds will be retrieved.
| endingBefore | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| limit        | Number     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| startingAfter| String     | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

## Stripe.getApplicationFee
Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the application fee.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| feeId     | String     | Required: The identifier of the fee to be retrieved.

## Stripe.getApplicationFeeList
Returns a list of application fees you’ve previously collected. The application fees are returned in sorted order, with the most recent fees appearing first.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| The api key obtained  from Stripe.
| chargeId     | String     | Only return application fees for the charge specified by this charge ID.
| endingBefore | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| limit        | String     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| startingAfter| String     | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

## Stripe.getCountrySpecsList
Lists all Country Spec objects available in the API.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Required: The api key obtained from Stripe.
| endingBefore | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| limit        | String     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| startingAfter| String     | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

## Stripe.getCountrySpec
Returns a Country Spec for a given Country code.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| country   | String     | Required: An ISO country code. Available country codes can be listed with the List Country Specs endpoint.

## Stripe.createBankAccount
When you create a new bank account, you must specify a Customer to create it on.

| Field             | Type       | Description
|-------------------|------------|----------
| apiKey            | credentials| Required: The api key obtained from Stripe.
| accountId         | String     | The account ID obtained from Stripe.
| source            | String     | When adding a bank account to a customer, the parameter name is source. When adding to an account, the parameter name is external_account. The value can either be a token, like the ones returned by Stripe.js, or a dictionary containing a user’s bank account details (with the options shown below).
| externalAccount   | String     | When adding a bank account to a customer, the parameter name is source. When adding to an account, the parameter name is external_account. The value can either be a token, like the ones returned by Stripe.js, or a dictionary containing a user’s bank account details (with the options shown below).
| defaultForCurrency| String     | If you set this to true (or if this is the first bank account being added in this currency) this bank account will become the default bank account for its currency.
| metadata          | JSON       | A set of key/value pairs that you can attach to an external account object. It can be useful for storing additional information about the external account in a structured format.

`metadata` example:
```JSON
{
	"custom_key": "customValue"
}
```


## Stripe.getBankAccount
By default, you can see the 10 most recent bank accounts stored on a Customer directly on the object, but you can also retrieve details about a specific bank account stored on the Stripe account.

| Field            | Type       | Description
|------------------|------------|----------
| apiKey           | credentials| Required: The api key obtained from Stripe.
| accountId        | String     | Required: The account ID obtained from Stripe.
| bankAccountId    | String     | Required: The bank account ID obtained from Stripe.

## Stripe.updateBankAccount
Updates the metadata, account_holder_name, and account_holder_type of a bank account belonging to a Customer. Other bank account details are not editable by design.

| Field            | Type       | Description
|------------------|------------|----------
| apiKey           | credentials| Required: The api key obtained from Stripe.
| accountId        | String     | Required: The account ID obtained from Stripe.
| bankAccountId    | String     | Required: The ID of the bank account to be updated.
| metadata         | JSON       | A set of key/value pairs that you can attach to an external account object. It can be useful for storing additional information about the external account in a structured format.

`metadata` example:
```JSON
{
	"custom_key": "customValue"
}
```

## Stripe.deleteBankAccount
You can delete bank accounts from a Customer.

| Field            | Type       | Description
|------------------|------------|----------
| apiKey           | credentials| Required: The api key obtained from Stripe.
| accountId        | String     | Required: The account ID obtained from Stripe.
| bankAccountId    | String     | Required: The bank account ID obtained from Stripe.

## Stripe.getBankAccountList
You can see a list of the bank accounts belonging to a Customer. Note that the 10 most recent external accounts are always available by default on the corresponding Stripe object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional bank accounts.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Required: The api key obtained from Stripe.
| accountId    | String     | The account ID obtained from Stripe.
| endingBefore | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| limit        | String     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| startingAfter| String     | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

## Stripe.createCard
When you create a new credit card, you must specify a customer or recipient to create it on.

| Field             | Type       | Description
|-------------------|------------|----------
| apiKey            | credentials| Required: The api key obtained from Stripe.
| customerId        | String     | The customer ID obtained from Stripe.
| source            | String     | When adding a bank account to a customer, the parameter name is source. When adding to an account, the parameter name is external_account. The value can either be a token, like the ones returned by Stripe.js, or a dictionary containing a user’s bank account details (with the options shown below).
| externalAccount   | String     | When adding a bank account to a customer, the parameter name is source. When adding to an account, the parameter name is external_account. The value can either be a token, like the ones returned by Stripe.js, or a dictionary containing a user’s bank account details (with the options shown below).
| defaultForCurrency| String     | If you set this to true (or if this is the first bank account being added in this currency) this bank account will become the default bank account for its currency.
| metadata          | JSON       | A set of key/value pairs that you can attach to an external account object. It can be useful for storing additional information about the external account in a structured format.

`metadata` example:
```JSON
{
	"custom_key": "customValue"
}
```

## Stripe.getCard
You can always see the 10 most recent cards directly on a customer or recipient; this method lets you retrieve details about a specific card stored on the customer or recipient.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| customerId| String     | Required: The customer ID obtained from Stripe.
| cardId    | String     | Required: The card ID obtained from Stripe.

## Stripe.updateCard
If you need to update only some card details, like the billing address or expiration date, you can do so without having to re-enter the full card details. Stripe also works directly with card networks so that your customers can continue using your service without interruption.

| Field             | Type       | Description
|-------------------|------------|----------
| apiKey            | credentials| Required: The api key obtained from Stripe.
| customerId        | String     | Required: The customer ID obtained from Stripe.
| cardId            | String     | Required: The card ID obtained from Stripe.
| addressCity       | String     | City.
| addressCountry    | String     | Country.
| addressLine1      | String     | Line 1.
| addressLine2      | String     | Line 2.
| addressState      | String     | State.
| addressZip        | String     | State.
| defaultForCurrency| String     | Only applicable on accounts (not customers or recipients). If set to true, this card will become the default external account for its currency..
| expMonth          | String     | Month.
| expYear           | String     | Year.
| metadata          | JSON       | A set of key/value pairs that you can attach to a customer object. It can be useful for storing additional information about the customer in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| name              | String     | Name.

`metadata` example:
```JSON
{
	"custom_key": "customValue"
}
```

## Stripe.deleteCard
You can delete cards from a customer or recipient.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| customerId| String     | Required: The customer ID obtained from Stripe.
| cardId    | String     | Required: The card ID obtained from Stripe.

## Stripe.getCardList
You can see a list of the cards belonging to a customer or recipient. Note that the 10 most recent sources are always available on the customer object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional cards.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Required: The api key obtained from Stripe.
| accountId    | String     | Required: The account ID obtained from Stripe.
| endingBefore | String     | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
| limit        | String     | A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
| startingAfter| String     | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.

## Stripe.createReceiver
Creates a bitcoin reciver

| Field            | Type       | Description
|------------------|------------|----------
| apiKey           | credentials| Required: The api key obtained from Stripe.
| amount           | String     | Required: The account ID obtained from Stripe.
| currency         | String     | Required: Only USD currently supported
| email            | String     | Required: Email of the customerId
| description      | String     | The receiver’s description.
| metadata         | JSON       | A set of key/value pairs that you can attach to an order object. It can be useful for storing additional information about the order in a structured format.
| refundMispayments| String     | Refund Mispayments

`metadata` example:
```JSON
{
	"custom_key": "customValue"
}
```

## Stripe.getReceiver
Retrieves a receiver

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| receiverId| String     | Required: Id of receiver to retrive.

## Stripe.getReceiverList
List all receivers

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.

## Stripe.createOrder
Creates a new order object.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| currency  | String     | Required: 3-letter ISO code representing the currency in which the order should be made. Stripe will validate that all entries in items match the currency specified here.
| coupon    | String     | A coupon code that represents a discount to be applied to this order. Must be one-time duration and in same currency as the order.
| customer  | String     | The ID of an existing customer to use for this order. If provided, the customer email and shipping address will be used to create the order. Subsequently, the customer will also be charged to pay the order. If email or shipping are also provided, they will override the values retrieved from the customer object.
| email     | String     | The email address of the customer placing the order.
| items     | JSON       | JSON Array of Objects. List of items constituting the order.
| metadata  | JSON       | A set of key/value pairs that you can attach to an order object. It can be useful for storing additional information about the order in a structured format.
| shipping  | JSON       | JSON Object. Shipping address for the order. Required if any of the SKUs are for products that have shippable set to true.

`metadata` example:
```JSON
{
	"custom_key": "customValue"
}
```

`shipping` example:

```JSON
{
	"name": "David Smith",
	"address": {
		"line1": "1234 Main Street",
		"city": "San Francisco",
		"country": "US",
		"postal_code": 94111	
	}
}
```

`items` example: 
```JSON
[{
  	"object": "order_item",
  	"amount": 1500,
  	"currency": "usd",
  	"description": "T-shirt",
  	"parent": "sku_9gd6NzjBt6AsZm",
  	"quantity": 1,
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
}]
```

## Stripe.getOrder
Retrieves the details of an existing order. Supply the unique order ID from either an order creation request or the order list, and Stripe will return the corresponding order information.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| orderId   | String     | Required: Id of receiver to retrive.

## Stripe.updateOrder
Updates the specific order by setting the values of the parameters passed. Any parameters not provided will be left unchanged. This request accepts only the metadata, and status as arguments.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| orderId   | String     | Required: Id of order to update.
| coupon    | String     | A coupon code that represents a discount to be applied to this order. Must be one-time duration and in same currency as the order.
| metadata  | JSON       | A set of key/value pairs that you can attach to an order object. It can be useful for storing additional information about the order in a structured format.
| shipping  | JSON       | JSON Object. Shipping address for the order. Required if any of the SKUs are for products that have shippable set to true.
| status    | credentials| Current order status. One of `created`, `paid`, `canceled`, `fulfilled`, or `returned`.

`metadata` example:
```JSON
{
	"custom_key": "customValue"
}
```
`shipping` example:
```JSON
{
	"carrier": "USPS",
	"tracking_number": 1337
}
```

## Stripe.payOrder
Pay an order by providing a `source` to create a payment.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| orderId   | String     | Required: The ID of an order to pay.
| customer  | String     | The ID of an existing customer that will be charged in this request.
| source    | String     | A payment source to be charged, such as a credit card. If you also pass a customer ID, the source must be the ID of a source belonging to the customer. Otherwise, if you do not pass a customer ID, the source you provide must either be a token, like the ones returned by Stripe.js, or a object containing a user's credit card details, with the options described below. Although not all information is required, the extra info helps prevent fraud.
| metadata  | JSON       | A set of key/value pairs that you can attach to an order object. It can be useful for storing additional information about the order in a structured format.
| email     | String     | The email address of the customer placing the order. If a customer is specified, that customer's email address will be used.

`metadata` example:
```JSON
{
	"custom_key": "customValue"
}
```

## Stripe.getOrderList
Returns a list of your orders. The orders are returned sorted by creation date, with the most recently created orders appearing first.

| Field            | Type       | Description
|------------------|------------|----------
| apiKey           | credentials| Required: The api key obtained from Stripe.
| created          | String     | A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options:
| customer         | String     | Only return orders for the given customer.
| ids              | String     | Only return orders with the given IDs.
| status           | String     | Only return orders that have the given status. One of `created`, `paid`, `fulfilled`, or `refunded`.
| statusTransitions| String     | Filter orders based on when they were paid, fulfilled, canceled, or returned.
| upstreamIds      | String     | Only return orders with the given upstream order IDs.

## Stripe.returnOrder
Return all or part of an order. The order must have a status of paid or fulfilled before it can be returned. Once all items have been returned, the order will become canceled or returned depending on which status the order started in.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| orderId   | String     | Required: Order id.
| items     | JSON       | JSON Array of Object. List of items to return.

`items` example:
```JSON
[{
	"type": "sku",
	"parent": "sku_6zVDZYQHj7oq88"
}]
```

## Stripe.getOrderReturn
Retrieves the details of an existing order return. Supply the unique order ID from either an order return creation request or the order return list, and Stripe will return the corresponding order information.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| orderId   | String     | Required: The identifier of the order return to be retrieved.

## Stripe.getOrderReturnList
Returns a list of your order returns. The returns are returned sorted by creation date, with the most recently created return appearing first.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| created   | String     | A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options:
| order     | String     | The order to retrieve returns for.

## Stripe.createProduct
Creates a new product object.

| Field            | Type       | Description
|------------------|------------|----------
| apiKey           | credentials| Required: The api key obtained from Stripe.
| id               | String     | The identifier for the product. Must be unique. If not provided, an identifier will be randomly generated.
| name             | String     | Required: The product’s name, meant to be displayable to the customer.
| active           | String     | Whether or not the product is currently available for purchase. Defaults to `true`.
| attributes       | JSON       | JSON Array. A list of up to 5 alphanumeric attributes that each SKU can provide values for (e.g. `["color", "size"]`).
| caption          | String     | A short one-line description of the product, meant to be displayable to the customer.
| deactivateOn     | JSON       | JSON Array. An array of Connect application names or identifiers that should not be able to order the SKUs for this product.
| description      | String     | The product’s description, meant to be displayable to the customer.
| images           | JSON       | JSON Array. A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
| metadata         | JSON       | JSON Object. A set of key/value pairs that you can attach to a product object. It can be useful for storing additional information about the product in a structured format.
| packageDimensions| String     | The dimensions of this product for shipping purposes. A SKU associated with this product can override this value by having its own package_dimensions.
| shippable        | String     | Whether this product is shipped (i.e. physical goods). Defaults to true.
| url              | String     | A URL of a publicly-accessible webpage for this product.

`attributes` example:
```JSON
["size", "gender"]
```

`deactivateOn` example:
```JSON
["app1", "app2"]
```

`images` example:
```JSON
["http://example.com/image1.png", "http://example.com/image1.jpg"]
```

`metadata` example:
```JSON
{
	"custom_key": "customValue"
}
```

## Stripe.getProduct
Retrieves the details of an existing product. Supply the unique product ID from either a product creation request or the product list, and Stripe will return the corresponding product information.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| productId | String     | Required: The identifier of the product to be retrieved.

## Stripe.updateProduct
Updates the specific product by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

| Field            | Type       | Description
|------------------|------------|----------
| apiKey           | credentials| Required: The api key obtained from Stripe.
| productId        | String     | Required: The id of product to update.
| name             | String     | The product’s name, meant to be displayable to the customer.
| active           | String     | Whether or not the product is currently available for purchase. Defaults to `true`.
| attributes       | JSON       | JSON Array. A list of up to 5 alphanumeric attributes that each SKU can provide values for (e.g. `["color", "size"]`).
| caption          | String     | A short one-line description of the product, meant to be displayable to the customer.
| deactivateOn     | JSON       | JSON Array. An array of Connect application names or identifiers that should not be able to order the SKUs for this product.
| description      | String     | The product’s description, meant to be displayable to the customer.
| images           | JSON       | JSON Array. A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
| metadata         | JSON       | A set of key/value pairs that you can attach to a product object. It can be useful for storing additional information about the product in a structured format.
| packageDimensions| String     | The dimensions of this product for shipping purposes. A SKU associated with this product can override this value by having its own package_dimensions.
| shippable        | String     | Whether this product is shipped (i.e. physical goods). Defaults to true.
| url              | String     | A URL of a publicly-accessible webpage for this product.

`attributes` example:
```JSON
["size", "gender"]
```

`deactivateOn` example:
```JSON
["app1", "app2"]
```

`images` example:
```JSON
["http://example.com/image1.png", "http://example.com/image1.jpg"]
```

`metadata` example:
```JSON
{
	"custom_key": "customValue"
}
```
## Stripe.getProductList
Returns a list of your products. The products are returned sorted by creation date, with the most recently created products appearing first.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| ids       | String     | Only return products with the given IDs.
| shippable | String     | Only return products that can be shipped (i.e., physical, not digital products).
| url       | String     | Only return products with the given url.

## Stripe.deleteProduct
Delete a product. Deleting a product is only possible if it has no SKUs associated with it.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| productId | String     | Required: The ID of the product to delete.

## Stripe.createSKU
Creates a new SKU associated with a product.

| Field            | Type       | Description
|------------------|------------|----------
| apiKey           | credentials| Required: The api key obtained from Stripe.
| id               | String     | The identifier for the SKU. Must be unique. If not provided, an identifier will be randomly generated.
| currency         | String     | Required: 3-letter ISO code for currency.
| inventory        | JSON       | Required: Description of the SKU’s inventory. Example: `{"type": "finite", "quantity": 500, "value": "in_stock"}`
| price            | Number     | Required: The cost of the item as a nonnegative integer in the smallest currency unit (that is, 100 cents to charge $1.00, or 100 to charge ¥100, Japanese Yen being a 0-decimal currency).
| product          | String     | Required: The ID of the product this SKU is associated with.
| active           | String     | Whether or not the SKU is available for purchase. Default to true.
| attributes       | JSON       | A dictionary of attributes and values for the attributes defined by the product. If, for example, a product’s attributes are `["size", "gender"]`, a valid SKU has the following dictionary of attributes: `{"size": "Medium", "gender": "Unisex"}`.
| image            | String     | The URL of an image for this SKU, meant to be displayable to the customer.
| metadata         | JSON       | A set of key/value pairs that you can attach to a SKU object. It can be useful for storing additional information about the SKU in a structured format.
| packageDimensions| JSON       | JSON Object. The dimensions of this SKU for shipping purposes.

`packageDimensions`:
```JSON
{
	"height": "Required: Height, in inches. Maximum precision is 2 decimal places.",
	"length": "Required: Length, in inches. Maximum precision is 2 decimal places.",
	"weight": "Required: Weight, in ounces. Maximum precision is 2 decimal places.",
	"width":  "Required: Width, in inches. Maximum precision is 2 decimal places."
}
```

## Stripe.getSKU
Retrieves the details of an existing SKU. Supply the unique SKU identifier from either a SKU creation request or from the product, and Stripe will return the corresponding SKU information.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| skuId     | String     | Required: The identifier of the SKU to be retrieved.

## Stripe.updateSKU
Updates the specific SKU by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

| Field            | Type       | Description
|------------------|------------|----------
| apiKey           | credentials| Required: The api key obtained from Stripe.
| skuId            | String     | Required: The identifier of the SKU to be updated.
| currency         | String     | 3-letter ISO code for currency.
| inventory        | String     | Description of the SKU’s inventory.
| price            | String     | The cost of the item as a nonnegative integer in the smallest currency unit (that is, 100 cents to charge $1.00, or 100 to charge ¥100, Japanese Yen being a 0-decimal currency).
| product          | String     | The ID of the product this SKU is associated with.
| active           | String     | Whether or not the SKU is available for purchase. Default to true.
| attributes       | JSON       | A dictionary of attributes and values for the attributes defined by the product. If, for example, a product’s attributes are ["size", "gender"], a valid SKU has the following dictionary of attributes: {"size": "Medium", "gender": "Unisex"}.
| image            | String     | The URL of an image for this SKU, meant to be displayable to the customer.
| metadata         | JSON       | A set of key/value pairs that you can attach to a SKU object. It can be useful for storing additional information about the SKU in a structured format.
| packageDimensions| JSON       | The dimensions of this SKU for shipping purposes.

## Stripe.getSKUList
Returns a list of your SKUs. The SKUs are returned sorted by creation date, with the most recently created SKUs appearing first.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| attributes| String     | 
| ids       | String     | Only return SKUs with the given IDs.
| productId | String     | The ID of the product whose SKUs will be retrieved.

## Stripe.deleteSKU
Delete a SKU. Deleting a SKU is only possible until it has been used in an order.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| skuId     | String     | Required: The identifier of the SKU to be deleted.

## Stripe.createCoupon
You can create coupons easily via the coupon management page of the Stripe dashboard. Coupon creation is also accessible via the API if you need to create coupons on the fly.

| Field           | Type       | Description
|-----------------|------------|----------
| apiKey          | credentials| Required: The api key obtained from Stripe.
| couponId        | String     | Unique string of your choice that will be used to identify this coupon when applying it to a customer. This is often a specific code you’ll give to your customer to use when signing up (e.g. FALL25OFF). If you don’t want to specify a particular code, you can leave the ID blank and we’ll generate a random code for you.
| duration        | String     | Required: Specifies how long the discount will be in effect. Can be `forever`, `once`, or `repeating`.
| amountOff       | String     | A positive integer representing the amount to subtract from an invoice total (required if percent_off is not passed)
| currency        | String     | Currency of the amount_off parameter (required if amount_off is passed)
| durationInMonths| String     | Required only if duration is repeating, in which case it must be a positive integer that specifies the number of months the discount will be in effect.
| maxRedemptions  | String     | A positive integer specifying the number of times the coupon can be redeemed before it’s no longer valid. For example, you might have a 50% off coupon that the first 20 readers of your blog can use.
| metadata        | JSON       | A set of key/value pairs that you can attach to a coupon object. It can be useful for storing additional information about the coupon in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| percentOff      | String     | A positive integer between 1 and 100 that represents the discount the coupon will apply (required if amount_off is not passed)
| redeemBy        | String     | Unix timestamp specifying the last time at which the coupon can be redeemed. After the redeem_by date, the coupon can no longer be applied to new customers.

`metadata` example:
```JSON
{
	"custom_key": "customValue"
}
```

## Stripe.getCoupon
Retrieves the coupon with the given ID.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| couponId  | String     | Required: Unique string of your choice that will be used to identify this coupon when applying it to a customer. This is often a specific code you’ll give to your customer to use when signing up (e.g. FALL25OFF). If you don’t want to specify a particular code, you can leave the ID blank and we’ll generate a random code for you.

## Stripe.updateCoupon
Updates the metadata of a coupon. Other coupon details (currency, duration, amount_off) are, by design, not editable.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| couponId  | String     | Required: Unique string of your choice that will be used to identify this coupon when applying it to a customer. This is often a specific code you’ll give to your customer to use when signing up (e.g. FALL25OFF). If you don’t want to specify a particular code, you can leave the ID blank and we’ll generate a random code for you.
| metadata  | JSON       | A set of key/value pairs that you can attach to a coupon object. It can be useful for storing additional information about the coupon in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.

`metadata` example:
```JSON
{
	"custom_key": "customValue"
}
```

## Stripe.deleteCoupon
You can delete coupons via the coupon management page of the Stripe dashboard. However, deleting a coupon does not affect any customers who have already applied the coupon; it means that new customers can’t redeem the coupon. You can also delete coupons via the API.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| couponId  | String     | Required: Unique string of your choice that will be used to identify this coupon when applying it to a customer. This is often a specific code you’ll give to your customer to use when signing up (e.g. FALL25OFF). If you don’t want to specify a particular code, you can leave the ID blank and we’ll generate a random code for you.

## Stripe.getCouponList
Returns a list of your coupons.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.

## Stripe.deleteCustomerDiscount
Removes the currently applied discount on a customer.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| customerId| String     | Required: Id of customer to delete.

## Stripe.deleteSubscriptionDiscount
Removes the currently applied discount on a subscription.

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| Required: The api key obtained from Stripe.
| subscriptionId| String     | Required: Id of subscribtion to delete.

## Stripe.createInvoice
If you need to invoice your customer outside the regular billing cycle, you can create an invoice that pulls in all pending invoice items, including prorations. The customer’s billing cycle and regular subscription won’t be affected.

| Field              | Type       | Description
|--------------------|------------|----------
| apiKey             | credentials| Required: The api key obtained from Stripe.
| customer           | String     | Required: Customer Id
| applicationFee     | String     | A fee in cents that will be applied to the invoice and transferred to the application owner’s Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. 
| description        | String     | An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the description of the charge(s) that they are describing.
| metadata           | JSON       | A set of key/value pairs that you can attach to a customer object. It can be useful for storing additional information about the customer in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| statementDescriptor| String     | Extra information about a charge for the customer’s credit card statement.
| subscription       | String     | The ID of the subscription to invoice. If not set, the created invoice will include all pending invoice items for the customer. If set, the created invoice will exclude pending invoice items that pertain to other subscriptions.
| taxPercent         | String     | The percent tax rate applied to the invoice, represented as a decimal number.

`metadata` example:
```JSON
{
	"custom_key": "customValue"
}
```

## Stripe.getInvoice
Retrieves the invoice with the given ID.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| invoiceId | String     | Required: Invoice id.

## Stripe.getInvoiceLineItems
When retrieving an invoice, you'll get a lines property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.

| Field                    | Type       | Description
|--------------------------|------------|----------
| apiKey                   | credentials| Required: The api key obtained from Stripe.
| invoice                  | String     | Required: Invoice id.
| coupon                   | String     | Counpon id.
| customer                 | String     | In the case of upcoming invoices, the customer of the upcoming invoice is required. In other cases it is ignored.
| subscription             | String     | In the case of upcoming invoices, the subscription of the upcoming invoice is optional. In other cases it is ignored.
| subscriptionPlan         | String     | Subscription Plan
| subscriptionProrate      | String     | Subscription Prorate
| subscriptionProrationDate| String     | Subscription Proration Date
| subscriptionQuantity     | String     | Subscription Quantity
| subscriptionTrialEnd     | String     | Subscription Trial End

## Stripe.updateInvoice
Until an invoice is paid, it is marked as open (closed=false). If you'd like to stop Stripe from automatically attempting payment on an invoice or would simply like to close the invoice out as no longer owed by the customer, you can update the closed parameter.

| Field              | Type       | Description
|--------------------|------------|----------
| apiKey             | credentials| Required: The api key obtained from Stripe.
| invoiceId          | String     | Required: Invoice id.
| applicationFee     | String     | A fee in cents that will be applied to the invoice and transferred to the application owner’s Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. 
| description        | String     | An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the description of the charge(s) that they are describing.
| metadata           | JSON       | A set of key/value pairs that you can attach to a customer object. It can be useful for storing additional information about the customer in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| statementDescriptor| String     | Extra information about a charge for the customer’s credit card statement.
| subscription       | String     | The ID of the subscription to invoice. If not set, the created invoice will include all pending invoice items for the customer. If set, the created invoice will exclude pending invoice items that pertain to other subscriptions.
| forgiven           | String     | Boolean representing whether an invoice is forgiven or not. To forgive an invoice, pass true. Forgiving an invoice instructs us to update the subscription status as if the invoice were successfully paid. Once an invoice has been forgiven, it cannot be unforgiven or reopened.
| closed             | String     | Boolean representing whether an invoice is closed or not. To close an invoice, pass true.
| taxPercent         | String     | The percent tax rate applied to the invoice, represented as a decimal number.

`metadata` example:
```JSON
{
	"custom_key": "customValue"
}
```

## Stripe.payInvoice
Stripe automatically creates and then attempts to pay invoices for customers on subscriptions. We’ll also retry unpaid invoices according to your retry settings. However, if you’d like to attempt to collect payment on an invoice out of the normal retry schedule or for some other reason, you can do so.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| invoiceId | String     | Required: Invoice id.

## Stripe.getInvoiceList
You can list all invoices, or list the invoices for a specific customer. The invoices are returned sorted by creation date, with the most recently created invoices appearing first.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| customer  | String     | The identifier of the customer whose invoices to return. If none is provided, all invoices will be returned.

## Stripe.createInvoiceItem
Adds an arbitrary charge or credit to the customer’s upcoming invoice.

| Field       | Type       | Description
|-------------|------------|----------
| apiKey      | credentials| Required: The api key obtained from Stripe.
| amount      | Number     | Required: The integer amount in cents of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer’s account, pass a negative amount.
| currency    | String     | Required: 3-letter ISO code for currency.
| customer    | String     | Required: The ID of the customer who will be billed when this invoice item is billed.
| description | String     | An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| discountable| String     | Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for all other invoice items.
| invoice     | String     | The ID of an existing invoice to add this invoice item to. When left blank, the invoice item will be added to the next upcoming scheduled invoice. Use this when adding invoice items in response to an invoice.created webhook. You cannot add an invoice item to an invoice that has already been paid, attempted or closed.
| metadata    | JSON       | A set of key/value pairs that you can attach to an invoice item object. It can be useful for storing additional information about the invoice item in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| subscription| String     | The ID of a subscription to add this invoice item to. When left blank, the invoice item will be be added to the next upcoming scheduled invoice. When set, scheduled invoices for subscriptions other than the specified subscription will ignore the invoice item. Use this when you want to express that an invoice item has been accrued within the context of a particular subscription.

`metadata` example:
```JSON
{
	"custom_key": "customValue"
}
```

## Stripe.getInvoiceItem
Retrieves the invoice item with the given ID.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| Required: The api key obtained from Stripe.
| invoiceitem| String     | Required: The ID of the desired invoice item.

## Stripe.updateInvoiceItem
Updates the amount or description of an invoice item on an upcoming invoice. Updating an invoice item is only possible before the invoice it's attached to is closed.

| Field       | Type       | Description
|-------------|------------|----------
| apiKey      | credentials| Required: The api key obtained from Stripe.
| itemId      | String     | Required: Required: Item id.
| amount      | Number     | Required: The integer amount in cents of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer's account, pass a negative amount.
| description | String     | An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| discountable| String     | Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for all other invoice items. Cannot be set to true for prorations.
| metadata    | JSON       | A set of key/value pairs that you can attach to an invoice item object. It can be useful for storing additional information about the invoice item in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata.You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.

`metadata` example:
```JSON
{
	"custom_key": "customValue"
}
```

## Stripe.deleteInvoiceItem
Removes an invoice item from the upcoming invoice. Removing an invoice item is only possible before the invoice it’s attached to is closed.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| Required: The api key obtained from Stripe.
| invoiceitem| String     | Required: The ID of the desired invoice item.

## Stripe.getInvoiceItemsList
Returns a list of your invoice items. Invoice items are returned sorted by creation date, with the most recently created invoice items appearing first.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| customer  | String     | The identifier of the customer whose invoice items to return. If none is provided, all invoice items will be returned.

## Stripe.createPlan
Returns a list of your invoice items. Invoice items are returned sorted by creation date, with the most recently created invoice items appearing first.

| Field              | Type       | Description
|--------------------|------------|----------
| apiKey             | credentials| Required: The api key obtained from Stripe.
| planId             | String     | Required: Unique string of your choice that will be used to identify this plan when subscribing a customer. This could be an identifier like “gold” or a primary key from your own database.
| amount             | String     | Required: A positive integer in cents (or 0 for a free plan) representing how much to charge (on a recurring basis).
| currency           | String     | Required: 3-letter ISO code for currency.
| interval           | String     | Required: Specifies billing frequency. Either day, week, month or year.
| name               | String     | Required: Name of the plan, to be displayed on invoices and in the web interface.
| intervalCount      | String     | The number of intervals between each subscription billing. For example, interval=month and interval_count=3 bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
| metadata           | JSON       | A set of key/value pairs that you can attach to a plan object. It can be useful for storing additional information about the plan in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| statementDescriptor| String     | An arbitrary string to be displayed on your customer’s credit card statement. This may be up to 22 characters. As an example, if your website is RunClub and the item you’re charging for is your Silver Plan, you may want to specify a statement_descriptor of RunClub Silver Plan. The statement description may not include <>"' characters, and will appear on your customer’s statement in capital letters. Non-ASCII characters are automatically stripped. While most banks display this information consistently, some may display it incorrectly or not at all.
| trialPeriodDays    | String     | Specifies a trial period in (an integer number of) days. If you include a trial period, the customer won’t be billed for the first time until the trial period ends. If the customer cancels before the trial period is over, she’ll never be billed at all.

`metadata` example:
```JSON
{
	"custom_key": "customValue"
}
```

## Stripe.getPlan
Retrieves the plan with the given ID.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| planId    | String     | Required: The ID of the desired plan.

## Stripe.updatePlan
Updates the name of a plan. Other plan details (price, interval, etc.) are, by design, not editable.

| Field              | Type       | Description
|--------------------|------------|----------
| apiKey             | credentials| Required: The api key obtained from Stripe.
| planId             | String     | Required: The identifier of the plan to be updated.
| name               | String     | Name of the plan, to be displayed on invoices and in the web interface.
| metadata           | JSON       | A set of key/value pairs that you can attach to a plan object. It can be useful for storing additional information about the plan in a structured format. This will be unset if you POST an empty value.This can be unset by updating the value to null and then saving.
| statementDescriptor| String     | An arbitrary string to be displayed on your customer’s credit card statement. This may be up to 22 characters. As an example, if your website is RunClub and the item you’re charging for is your Silver Plan, you may want to specify a statement_descriptor of RunClub Silver Plan. The statement description may not include <>"' characters, and will appear on your customer’s statement in capital letters. Non-ASCII characters are automatically stripped. While most banks display this information consistently, some may display it incorrectly or not at all.

`metadata` example:
```JSON
{
	"custom_key": "customValue"
}
```

## Stripe.deletePlan
You can delete plans via the plan management page of the Stripe dashboard. However, deleting a plan does not affect any current subscribers to the plan; it merely means that new subscribers can’t be added to that plan. You can also delete plans via the API.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.
| planId    | String     | Required: The identifier of the plan to be deleted.

## Stripe.getPlanList
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from Stripe.

## Stripe.createSubscription
Creates a new subscription on an existing customer.

| Field                | Type       | Description
|----------------------|------------|----------
| apiKey               | credentials| Required: The api key obtained from Stripe.
| applicationFeePercent| String     | A positive decimal (with at most four decimal places) between 1 and 100. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner’s Stripe account. The request must be made with an OAuth key in order to set an application fee percentage.
| coupon               | String     | The code of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that particular subscription.
| customer             | String     | Required: The identifier of the customer to subscribe.
| plan                 | String     | Required: The identifier of the plan to subscribe the customer to.
| source               | JSON       | JSON Object. The source can either be a token, like the ones returned by our Stripe.js, or a object containing a user's credit card details (with the options shown below). You must provide a source if the customer does not already have a valid source attached, and you are subscribing the customer for a plan that is not free. Passing source will create a new source object, make it the customer default source, and delete the old customer default if one exists. If you want to add an additional source to use with subscriptions, instead use the card creation API to add the card and then the customer update API to set it as the default. Whenever you attach a card to a customer, Stripe will automatically validate the card.
| quantity             | Number     | The quantity you'd like to apply to the subscription you're creating. For example, if your plan is $10/user/month, and your customer has 5 users, you could pass 5 as the quantity to have the customer charged $50 (5 x $10) monthly. If you update a subscription but don't change the plan ID (e.g. changing only the trial_end), the subscription will inherit the old subscription's quantity attribute unless you pass a new quantity parameter. If you update a subscription and change the plan ID, the new subscription will not inherit the quantity attribute and will default to 1 unless you pass a quantity parameter.
| metadata             | JSON       | A set of key/value pairs that you can attach to a subscription object. It can be useful for storing additional information about the subscription in a structured format.
| taxPercent           | String     | A positive decimal (with at most four decimal places) between 1 and 100. This represents the percentage of the subscription invoice subtotal that will be calculated and added as tax to the final amount each billing period. For example, a plan which charges $10/month with a tax_percent of 20.0 will charge $12 per invoice.
| trialEnd             | String     | Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. If set, trial_end will override the default trial period of the plan the customer is being subscribed to. The special value now can be provided to end the customer's trial immediately.

`metadata` example:
```JSON
{
	"custom_key": "customValue"
}
```

## Stripe.getSubscription
Retrieves the subscription with the given ID.

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| Required: The api key obtained from Stripe.
| subscriptionId| String     | Required: ID of subscription to retrieve.

## Stripe.updateSubscription
Updates an existing subscription to match the specified parameters. When changing plans or quantities, we will optionally prorate the price we charge next month to make up for any price changes. To preview how the proration will be calculated, use the upcoming invoice endpoint.

| Field                | Type       | Description
|----------------------|------------|----------
| apiKey               | credentials| Required: The api key obtained from Stripe.
| subscriptionId       | String     | Required: ID of subscription to updated.
| applicationFeePercent| String     | A positive decimal (with at most four decimal places) between 1 and 100. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner’s Stripe account. The request must be made with an OAuth key in order to set an application fee percentage.
| coupon               | String     | The code of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that particular subscription.
| customer             | String     | The identifier of the customer to subscribe.
| plan                 | String     | The identifier of the plan to subscribe the customer to.
| source               | JSON       | The source can either be a token, like the ones returned by our Stripe.js, or a object containing a user's credit card details (with the options shown below). You must provide a source if the customer does not already have a valid source attached, and you are subscribing the customer for a plan that is not free. Passing source will create a new source object, make it the customer default source, and delete the old customer default if one exists. If you want to add an additional source to use with subscriptions, instead use the card creation API to add the card and then the customer update API to set it as the default. Whenever you attach a card to a customer, Stripe will automatically validate the card.
| quantity             | Number     | The quantity you'd like to apply to the subscription you're creating. For example, if your plan is $10/user/month, and your customer has 5 users, you could pass 5 as the quantity to have the customer charged $50 (5 x $10) monthly. If you update a subscription but don't change the plan ID (e.g. changing only the trial_end), the subscription will inherit the old subscription's quantity attribute unless you pass a new quantity parameter. If you update a subscription and change the plan ID, the new subscription will not inherit the quantity attribute and will default to 1 unless you pass a quantity parameter.
| metadata             | JSON       | A set of key/value pairs that you can attach to a subscription object. It can be useful for storing additional information about the subscription in a structured format.
| taxPercent           | String     | A positive decimal (with at most four decimal places) between 1 and 100. This represents the percentage of the subscription invoice subtotal that will be calculated and added as tax to the final amount each billing period. For example, a plan which charges $10/month with a tax_percent of 20.0 will charge $12 per invoice.
| trialEnd             | String     | Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. If set, trial_end will override the default trial period of the plan the customer is being subscribed to. The special value now can be provided to end the customer's trial immediately.

`metadata` example:
```JSON
{
	"custom_key": "customValue"
}
```


## Stripe.cancelSubscription
Cancels a customer's subscription. If you set the at_period_end parameter to true, the subscription will remain active until the end of the period, at which point it will be canceled and not renewed.

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| Required: The api key obtained from Stripe.
| subscriptionId| String     | Required: ID of subscription to retrieve.
| atPeriodEnd   | String     | A flag that if set to true will delay the cancellation of the subscription until the end of the current period.

## Stripe.getSubscriptionList
By default, returns a list of subscriptions that have not been canceled. In order to list canceled subscriptions, specify `status=canceled`.

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| Required: The api key obtained from Stripe.
| subscriptionId| String     | ID of subscription to retrieve.
| customer      | String     | The ID of the customer whose subscriptions will be retrieved
| plan          | String     | The ID of the plan whose subscriptions will be retrieved
| status        | String     | The status of the subscriptions to retrieve. One of: trialing, active, past_due, unpaid, canceled, or all. Passing in a value of canceled will return all canceled subscriptions, including those belonging to deleted customers. Passing in a value of all will return subscriptions of all statuses.

