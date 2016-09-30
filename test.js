const assert = require('chai').assert;
const request = require('supertest-as-promised');
const app = require('../index');

const atPeriodEnd = '', 
	quantity = '', 
	applicationFeePercent = '', 
	trialPeriodDays = '', 
	intervalCount = '', 
	interval = '', 
	planId = 'ivory-infinite-327', 
	itemId = 'ii_18yKaN2eZvKYlo2Co22dhawI', 
	invoiceitem = '', 
	discountable = '', 
	closed = '', 
	forgiven = '', 
	subscriptionTrialEnd = '', 
	subscriptionQuantity = '', 
	subscriptionProrationDate = '', 
	subscriptionProrate = '', 
	subscriptionPlan = '', 
	invoice = '', 
	invoiceId = 'in_18zNXS2eZvKYlo2CYVqbkbFQ', 
	subscription = '', 
	subscriptionId = '', 
	redeemBy = '', 
	percentOff = '', 
	maxRedemptions = '', 
	durationInMonths = '', 
	amountOff = '', 
	duration = '', 
	couponId = '', 
	skuId = 'sk_18tVYF2eZvKYlo2CbiWi3yjT', 
	image = '', 
	product = '', 
	price = '300', 
	inventory = '', 
	productId = 'pr_18z5CL2eZvKYlo2CCpcxSLZT', 
	url = '', 
	shippable = '', 
	packageDimensions = '', 
	images = '', 
	deactivateOn = '', 
	caption = '', 
	attributes = '', 
	active = '', 
	order = '', 
	upstreamIds = '', 
	statusTransitions = '', 
	ids = '', 
	orderId = '6735', 
	items = '', 
	receiverId = '1544190', 
	refundMispayments = '', 
	name = 'test', 
	expYear = '', 
	expMonth = '', 
	addressZip = '', 
	addressState = '', 
	addressLine2 = '', 
	addressLine1 = '', 
	addressCountry = '', 
	addressCity = '', 
	cardId = 'card_18zNr32eZvKYlo2CSHSutaFp', 
	bankAccountId = '', 
	defaultForCurrency = '', 
	feeId = 'fee_9EkkFV1uz0mEyZ', 
	appId = 'fr_9HxmwVVwj13L8B', 
	transferSchedule = '', 
	tosAcceptance = '', 
	supportUrl = '', 
	supportPhone = '', 
	supportEmail = '', 
	productDescription = '', 
	legalEntity = '', 
	externalAccount = '', 
	defaultCurrency = '', 
	declineChargeOn = '', 
	debitNegativeBalances = '', 
	businessUrl = '', 
	businessPrimaryColor = '', 
	businessName = '', 
	businessLogo = '', 
	accountId = '', 
	managed = 'true', 
	country = 'USA', 
	status = '', 
	recipientstatus = '', 
	transferId = '', 
	sourceType = '', 
	sourceTransaction = '', 
	destination = '', 
	tokenId = '', 
	personalIdNumber = '', 
	bankAccountNumber = '', 
	bankAccountRoutingNumber = '', 
	bankAccountAccountHolderType = '', 
	bankAccountAccountHolderName = '', 
	bankAccountCurrency = '', 
	bankAccountCountry = '', 
	cardCvc = '133', 
	cardExpirationYear = '2017', 
	cardExpirationMonth = '11', 
	cardNumber = '4242424242424242', 
	refundId = 're_18zNHM2eZvKYlo2CavAxD7Op', 
	reverseTransfer = '', 
	refundApplicationFee = '', 
	reason = '', 
	purpose = '', 
	file = 'https://yt3.ggpht.com/-v0soe-ievYE/AAAAAAAAAAI/AAAAAAAAAAA/OixOH_h84Po/s900-c-k-no-mo-rj-c0xffffff/photo.jpg', 
	eventId = 'evt_18zNpY2eZvKYlo2CKRnTS5pI', 
	evidence = '{"customer_name": "Alexander Smith", "product_description": "Comfortable cotton t-shirt","shipping_documentation": "file_18wzPK2eZvKYlo2CKdXyu53D"}', 
	disputeId = 'dp_17Vv962eZvKYlo2CU7XhGGzB', 
	customerId = 'cus_9Hxb4yPEnIfRmo', 
	endingBefore = '', 
	created = '', 
	applicationFee = '', 
	shipping = '', 
	fraudDetails = '', 
	chargeId = 'ch_18zNpY2eZvKYlo2Cm37H95Sz', 
	id = 'tr_18yKar2eZvKYlo2CoN8TUvb6', 
	trialEnd = '', 
	taxPercent = '', 
	plan = '', 
	metadata = '', 
	email = 'dima.shirokoff@rapidapi.com', 
	coupon = '', 
	businessVatId = '', 
	accountBalance = '', 
	statementDescriptor = '', 
	source = '', 
	customer = 'cus_9Hxb4yPEnIfRmo', 
	receiptEmail = 'dima.shirokoff@rapidapi.com', 
	description = 'Test', 
	capture = '', 
	amount = '300', 
	type = '', 
	limit = '3', 
	startingAfter = '', 
	currency = 'usd', 
	apiKey = 'sk_test_BQokikJOvBiI2HlWgH4olfQ2';
	

describe('Stripe package', () => {	
it('/getAccountBalance', () => {
	return request(app)
	.post('/api/Stripe/getAccountBalance')
	.send({args:{ apiKey,}})
	.expect(200)
	.then((res) => {});
});

it('/getBalanceHistory', () => {
	return request(app)
	.post('/api/Stripe/getBalanceHistory')
	.send({args:{ apiKey, currency, startingAfter, limit, type,}})
	.expect(200)
	.then((res) => {});
});

it('/createCharge', () => {
	return request(app)
	.post('/api/Stripe/createCharge')
	.send({args:{ apiKey, amount, currency, capture, description, receiptEmail, customer, source, statementDescriptor,}})
	.expect(200)
	.then((res) => {});
});

it('/createCustomer', () => {
	return request(app)
	.post('/api/Stripe/createCustomer')
	.send({args:{ apiKey, source, accountBalance, businessVatId, coupon, description, email, metadata, plan, taxPercent, trialEnd,}})
	.expect(200)
	.then((res) => {});
});

it('/getBalanceTransaction', () => {
	return request(app)
	.post('/api/Stripe/getBalanceTransaction')
	.send({args:{ apiKey, id,}})
	.expect(200)
	.then((res) => {});
});

it('/getCharge', () => {
	return request(app)
	.post('/api/Stripe/getCharge')
	.send({args:{ apiKey, chargeId,}})
	.expect(200)
	.then((res) => {});
});

it('/updateCharge', () => {
	return request(app)
	.post('/api/Stripe/updateCharge')
	.send({args:{ apiKey, chargeId, description, receiptEmail, fraudDetails, metadata, shipping,}})
	.expect(200)
	.then((res) => {});
});

it('/captureCharge', () => {
	return request(app)
	.post('/api/Stripe/captureCharge')
	.send({args:{ apiKey, chargeId, amount, applicationFee, receiptEmail, statementDescriptor,}})
	.expect(200)
	.then((res) => {});
});

it('/getChargesList', () => {
	return request(app)
	.post('/api/Stripe/getChargesList')
	.send({args:{ apiKey, created, customer, endingBefore, limit, source, startingAfter,}})
	.expect(200)
	.then((res) => {});
});

it('/getCustomer', () => {
	return request(app)
	.post('/api/Stripe/getCustomer')
	.send({args:{ apiKey, customerId,}})
	.expect(200)
	.then((res) => {});
});

it('/updateCustomer', () => {
	return request(app)
	.post('/api/Stripe/updateCustomer')
	.send({args:{ apiKey, customerId, source, accountBalance, businessVatId, coupon, description, email, metadata, plan, taxPercent, trialEnd,}})
	.expect(200)
	.then((res) => {});
});

it('/getBalanceTransaction', () => {
	return request(app)
	.post('/api/Stripe/getBalanceTransaction')
	.send({args:{ apiKey, id,}})
	.expect(200)
	.then((res) => {});
});

it('/deleteCustomer', () => {
	return request(app)
	.post('/api/Stripe/deleteCustomer')
	.send({args:{ apiKey, customerId,}})
	.expect(200)
	.then((res) => {});
});

it('/getCustomerList', () => {
	return request(app)
	.post('/api/Stripe/getCustomerList')
	.send({args:{ apiKey,}})
	.expect(200)
	.then((res) => {});
});

it('/getDispute', () => {
	return request(app)
	.post('/api/Stripe/getDispute')
	.send({args:{ apiKey, disputeId,}})
	.expect(200)
	.then((res) => {});
});

it('/updateDispute', () => {
	return request(app)
	.post('/api/Stripe/updateDispute')
	.send({args:{ apiKey, disputeId, evidence, metadata,}})
	.expect(200)
	.then((res) => {});
});

it('/closeDispute', () => {
	return request(app)
	.post('/api/Stripe/closeDispute')
	.send({args:{ apiKey, disputeId,}})
	.expect(200)
	.then((res) => {});
});

it('/getDisputes', () => {
	return request(app)
	.post('/api/Stripe/getDisputes')
	.send({args:{ apiKey,}})
	.expect(200)
	.then((res) => {});
});

it('/getEvent', () => {
	return request(app)
	.post('/api/Stripe/getEvent')
	.send({args:{ apiKey, eventId,}})
	.expect(200)
	.then((res) => {});
});

it('/getEventList', () => {
	return request(app)
	.post('/api/Stripe/getEventList')
	.send({args:{ apiKey, type,}})
	.expect(200)
	.then((res) => {});
});

it('/createFileUpload', () => {
	return request(app)
	.post('/api/Stripe/createFileUpload')
	.send({args:{ apiKey, file, purpose,}})
	.expect(200)
	.then((res) => {});
});

it('/createRefund', () => {
	return request(app)
	.post('/api/Stripe/createRefund')
	.send({args:{ apiKey, chargeId, amount, metadata, reason, refundApplicationFee, reverseTransfer,}})
	.expect(200)
	.then((res) => {});
});

it('/getRefund', () => {
	return request(app)
	.post('/api/Stripe/getRefund')
	.send({args:{ apiKey, refundId,}})
	.expect(200)
	.then((res) => {});
});

it('/updateRefund', () => {
	return request(app)
	.post('/api/Stripe/updateRefund')
	.send({args:{ apiKey, refundId, metadata,}})
	.expect(200)
	.then((res) => {});
});

it('/getRefundList', () => {
	return request(app)
	.post('/api/Stripe/getRefundList')
	.send({args:{ apiKey,}})
	.expect(200)
	.then((res) => {});
});

it('/createCardToken', () => {
	return request(app)
	.post('/api/Stripe/createCardToken')
	.send({args:{ apiKey, cardNumber, cardExpirationMonth, cardExpirationYear, cardCvc,}})
	.expect(200)
	.then((res) => {});
});

it('/createBankAccountToken', () => {
	return request(app)
	.post('/api/Stripe/createBankAccountToken')
	.send({args:{ apiKey, bankAccountCountry, bankAccountCurrency, bankAccountAccountHolderName, bankAccountAccountHolderType, bankAccountRoutingNumber, bankAccountNumber,}})
	.expect(200)
	.then((res) => {});
});

it('/createPiiToken', () => {
	return request(app)
	.post('/api/Stripe/createPiiToken')
	.send({args:{ apiKey, personalIdNumber,}})
	.expect(200)
	.then((res) => {});
});

it('/getToken', () => {
	return request(app)
	.post('/api/Stripe/getToken')
	.send({args:{ apiKey, tokenId,}})
	.expect(200)
	.then((res) => {});
});

it('/createTransfer', () => {
	return request(app)
	.post('/api/Stripe/createTransfer')
	.send({args:{ apiKey, amount, currency, destination, description, sourceTransaction, statementDescriptor, sourceType,}})
	.expect(200)
	.then((res) => {});
});

it('/getTransfer', () => {
	return request(app)
	.post('/api/Stripe/getTransfer')
	.send({args:{ apiKey, transferId,}})
	.expect(200)
	.then((res) => {});
});

it('/updateTransfer', () => {
	return request(app)
	.post('/api/Stripe/updateTransfer')
	.send({args:{ apiKey, transferId, description, metadata,}})
	.expect(200)
	.then((res) => {});
});

it('/getTransferList', () => {
	return request(app)
	.post('/api/Stripe/getTransferList')
	.send({args:{ apiKey, destination, recipientstatus, status,}})
	.expect(200)
	.then((res) => {});
});

it('/createTransferReversal', () => {
	return request(app)
	.post('/api/Stripe/createTransferReversal')
	.send({args:{ apiKey, description, metadata, refundApplicationFee,}})
	.expect(200)
	.then((res) => {});
});

it('/getTransferReversal', () => {
	return request(app)
	.post('/api/Stripe/getTransferReversal')
	.send({args:{ apiKey, id, transferId,}})
	.expect(200)
	.then((res) => {});
});

it('/updateTransferReversal', () => {
	return request(app)
	.post('/api/Stripe/updateTransferReversal')
	.send({args:{ apiKey, id, transferId, metadata, description,}})
	.expect(200)
	.then((res) => {});
});

it('/getTransferReversalList', () => {
	return request(app)
	.post('/api/Stripe/getTransferReversalList')
	.send({args:{ apiKey, transferId,}})
	.expect(200)
	.then((res) => {});
});

it('/createAccount', () => {
	return request(app)
	.post('/api/Stripe/createAccount')
	.send({args:{ apiKey, country, email, managed,}})
	.expect(200)
	.then((res) => {});
});

it('/getAccount', () => {
	return request(app)
	.post('/api/Stripe/getAccount')
	.send({args:{ apiKey, accountId,}})
	.expect(200)
	.then((res) => {});
});

it('/updateAccount', () => {
	return request(app)
	.post('/api/Stripe/updateAccount')
	.send({args:{ apiKey, accountId, businessLogo, businessName, businessPrimaryColor, businessUrl, debitNegativeBalances, declineChargeOn, defaultCurrency, email, externalAccount, legalEntity, metadata, productDescription, statementDescriptor, supportEmail, supportPhone, supportUrl, tosAcceptance, transferSchedule,}})
	.expect(200)
	.then((res) => {});
});

it('/deleteAccount', () => {
	return request(app)
	.post('/api/Stripe/deleteAccount')
	.send({args:{ apiKey, accountId,}})
	.expect(200)
	.then((res) => {});
});

it('/rejectAccount', () => {
	return request(app)
	.post('/api/Stripe/rejectAccount')
	.send({args:{ apiKey, accountId, reason,}})
	.expect(200)
	.then((res) => {});
});

it('/getAccountList', () => {
	return request(app)
	.post('/api/Stripe/getAccountList')
	.send({args:{ apiKey, endingBefore, limit, startingAfter,}})
	.expect(200)
	.then((res) => {});
});

it('/createFeeRefund', () => {
	return request(app)
	.post('/api/Stripe/createFeeRefund')
	.send({args:{ apiKey, appId, amount, metadata,}})
	.expect(200)
	.then((res) => {});
});

it('/getFeeRefund', () => {
	return request(app)
	.post('/api/Stripe/getFeeRefund')
	.send({args:{ apiKey, feeId, refundId,}})
	.expect(200)
	.then((res) => {});
});

it('/updateFeeRefund', () => {
	return request(app)
	.post('/api/Stripe/updateFeeRefund')
	.send({args:{ apiKey, feeId, refundId, metadata,}})
	.expect(200)
	.then((res) => {});
});

it('/getFeeRefundList', () => {
	return request(app)
	.post('/api/Stripe/getFeeRefundList')
	.send({args:{ apiKey, appId, endingBefore, limit, startingAfter,}})
	.expect(200)
	.then((res) => {});
});

it('/getApplicationFee', () => {
	return request(app)
	.post('/api/Stripe/getApplicationFee')
	.send({args:{ apiKey, feeId,}})
	.expect(200)
	.then((res) => {});
});

it('/getApplicationFeeList', () => {
	return request(app)
	.post('/api/Stripe/getApplicationFeeList')
	.send({args:{ apiKey, chargeId, endingBefore, limit, startingAfter,}})
	.expect(200)
	.then((res) => {});
});

it('/getCountrySpecsList', () => {
	return request(app)
	.post('/api/Stripe/getCountrySpecsList')
	.send({args:{ apiKey, endingBefore, limit, startingAfter,}})
	.expect(200)
	.then((res) => {});
});

it('/getCountrySpec', () => {
	return request(app)
	.post('/api/Stripe/getCountrySpec')
	.send({args:{ apiKey, country,}})
	.expect(200)
	.then((res) => {});
});

it('/createBankAccount', () => {
	return request(app)
	.post('/api/Stripe/createBankAccount')
	.send({args:{ apiKey, accountId, source, externalAccount, defaultForCurrency, metadata,}})
	.expect(200)
	.then((res) => {});
});

it('/getBankAccount', () => {
	return request(app)
	.post('/api/Stripe/getBankAccount')
	.send({args:{ apiKey, accountId, bankAccountId,}})
	.expect(200)
	.then((res) => {});
});

it('/updateBankAccount', () => {
	return request(app)
	.post('/api/Stripe/updateBankAccount')
	.send({args:{ apiKey, accountId, bankAccountId, metadata,}})
	.expect(200)
	.then((res) => {});
});

it('/deleteBankAccount', () => {
	return request(app)
	.post('/api/Stripe/deleteBankAccount')
	.send({args:{ apiKey, accountId, bankAccountId,}})
	.expect(200)
	.then((res) => {});
});

it('/getBankAccountList', () => {
	return request(app)
	.post('/api/Stripe/getBankAccountList')
	.send({args:{ apiKey, accountId, endingBefore, limit, startingAfter,}})
	.expect(200)
	.then((res) => {});
});

it('/createCard', () => {
	return request(app)
	.post('/api/Stripe/createCard')
	.send({args:{ apiKey, accountId, source, externalAccount, defaultForCurrency, metadata,}})
	.expect(200)
	.then((res) => {});
});

it('/getCard', () => {
	return request(app)
	.post('/api/Stripe/getCard')
	.send({args:{ apiKey, accountId, cardId,}})
	.expect(200)
	.then((res) => {});
});

it('/updateCard', () => {
	return request(app)
	.post('/api/Stripe/updateCard')
	.send({args:{ apiKey, accountId, cardId, addressCity, addressCountry, addressLine1, addressLine2, addressState, addressZip, defaultForCurrency, expMonth, expYear, metadata, name,}})
	.expect(200)
	.then((res) => {});
});

it('/deleteCard', () => {
	return request(app)
	.post('/api/Stripe/deleteCard')
	.send({args:{ apiKey, accountId, cardId,}})
	.expect(200)
	.then((res) => {});
});

it('/getCardList', () => {
	return request(app)
	.post('/api/Stripe/getCardList')
	.send({args:{ apiKey, accountId, endingBefore, limit, startingAfter,}})
	.expect(200)
	.then((res) => {});
});

it('/createReceiver', () => {
	return request(app)
	.post('/api/Stripe/createReceiver')
	.send({args:{ apiKey, amount, currency, email, description, metadata, refundMispayments,}})
	.expect(200)
	.then((res) => {});
});

it('/getReceiver', () => {
	return request(app)
	.post('/api/Stripe/getReceiver')
	.send({args:{ apiKey, receiverId,}})
	.expect(200)
	.then((res) => {});
});

it('/getReceiverList', () => {
	return request(app)
	.post('/api/Stripe/getReceiverList')
	.send({args:{ apiKey,}})
	.expect(200)
	.then((res) => {});
});

it('/createOrder', () => {
	return request(app)
	.post('/api/Stripe/createOrder')
	.send({args:{ apiKey, currency, coupon, customer, email, items, metadata, shipping,}})
	.expect(200)
	.then((res) => {});
});

it('/getOrder', () => {
	return request(app)
	.post('/api/Stripe/getOrder')
	.send({args:{ apiKey, orderId,}})
	.expect(200)
	.then((res) => {});
});

it('/updateOrder', () => {
	return request(app)
	.post('/api/Stripe/updateOrder')
	.send({args:{ apiKey, orderId, coupon, metadata, shipping, status,}})
	.expect(200)
	.then((res) => {});
});

it('/payOrder', () => {
	return request(app)
	.post('/api/Stripe/payOrder')
	.send({args:{ apiKey, orderId, customer, source, metadata, email,}})
	.expect(200)
	.then((res) => {});
});

it('/getOrderList', () => {
	return request(app)
	.post('/api/Stripe/getOrderList')
	.send({args:{ apiKey, created, customer, ids, status, statusTransitions, upstreamIds,}})
	.expect(200)
	.then((res) => {});
});

it('/returnOrder', () => {
	return request(app)
	.post('/api/Stripe/returnOrder')
	.send({args:{ apiKey, orderId, items,}})
	.expect(200)
	.then((res) => {});
});

it('/getOrderReturn', () => {
	return request(app)
	.post('/api/Stripe/getOrderReturn')
	.send({args:{ apiKey, orderId,}})
	.expect(200)
	.then((res) => {});
});

it('/getOrderReturnList', () => {
	return request(app)
	.post('/api/Stripe/getOrderReturnList')
	.send({args:{ apiKey, created, order,}})
	.expect(200)
	.then((res) => {});
});

it('/createProduct', () => {
	return request(app)
	.post('/api/Stripe/createProduct')
	.send({args:{ apiKey, name, active, attributes, caption, deactivateOn, description, images, metadata, packageDimensions, shippable, url,}})
	.expect(200)
	.then((res) => {});
});

it('/getProduct', () => {
	return request(app)
	.post('/api/Stripe/getProduct')
	.send({args:{ apiKey, productId,}})
	.expect(200)
	.then((res) => {});
});

it('/updateProduct', () => {
	return request(app)
	.post('/api/Stripe/updateProduct')
	.send({args:{ apiKey, productId, name, active, attributes, caption, deactivateOn, description, images, metadata, packageDimensions, shippable, url,}})
	.expect(200)
	.then((res) => {});
});

it('/getProductList', () => {
	return request(app)
	.post('/api/Stripe/getProductList')
	.send({args:{ apiKey, ids, shippable, url,}})
	.expect(200)
	.then((res) => {});
});

it('/deleteProduct', () => {
	return request(app)
	.post('/api/Stripe/deleteProduct')
	.send({args:{ apiKey, productId,}})
	.expect(200)
	.then((res) => {});
});

it('/createSKU', () => {
	return request(app)
	.post('/api/Stripe/createSKU')
	.send({args:{ apiKey, currency, inventory, price, product, active, attributes, image, metadata, packageDimensions,}})
	.expect(200)
	.then((res) => {});
});

it('/getSKU', () => {
	return request(app)
	.post('/api/Stripe/getSKU')
	.send({args:{ apiKey, skuId,}})
	.expect(200)
	.then((res) => {});
});

it('/updateSKU', () => {
	return request(app)
	.post('/api/Stripe/updateSKU')
	.send({args:{ apiKey, skuId, currency, inventory, price, product, active, attributes, image, metadata, packageDimensions,}})
	.expect(200)
	.then((res) => {});
});

it('/getSKUList', () => {
	return request(app)
	.post('/api/Stripe/getSKUList')
	.send({args:{ apiKey, attributes, ids, productId,}})
	.expect(200)
	.then((res) => {});
});

it('/deleteSKU', () => {
	return request(app)
	.post('/api/Stripe/deleteSKU')
	.send({args:{ apiKey, skuId,}})
	.expect(200)
	.then((res) => {});
});

it('/createCoupon', () => {
	return request(app)
	.post('/api/Stripe/createCoupon')
	.send({args:{ apiKey, couponId, duration, amountOff, currency, durationInMonths, maxRedemptions, metadata, percentOff, redeemBy,}})
	.expect(200)
	.then((res) => {});
});

it('/getCoupon', () => {
	return request(app)
	.post('/api/Stripe/getCoupon')
	.send({args:{ apiKey, couponId,}})
	.expect(200)
	.then((res) => {});
});

it('/updateCoupon', () => {
	return request(app)
	.post('/api/Stripe/updateCoupon')
	.send({args:{ apiKey, couponId, metadata,}})
	.expect(200)
	.then((res) => {});
});

it('/deleteCoupon', () => {
	return request(app)
	.post('/api/Stripe/deleteCoupon')
	.send({args:{ apiKey, couponId,}})
	.expect(200)
	.then((res) => {});
});

it('/getCouponList', () => {
	return request(app)
	.post('/api/Stripe/getCouponList')
	.send({args:{ apiKey,}})
	.expect(200)
	.then((res) => {});
});

it('/deleteCustomerDiscount', () => {
	return request(app)
	.post('/api/Stripe/deleteCustomerDiscount')
	.send({args:{ apiKey, customerId,}})
	.expect(200)
	.then((res) => {});
});

it('/deleteSubscriptionDiscount', () => {
	return request(app)
	.post('/api/Stripe/deleteSubscriptionDiscount')
	.send({args:{ apiKey, subscriptionId,}})
	.expect(200)
	.then((res) => {});
});

it('/createInvoice', () => {
	return request(app)
	.post('/api/Stripe/createInvoice')
	.send({args:{ apiKey, customer, applicationFee, description, metadata, statementDescriptor, subscription, taxPercent,}})
	.expect(200)
	.then((res) => {});
});

it('/getInvoice', () => {
	return request(app)
	.post('/api/Stripe/getInvoice')
	.send({args:{ apiKey, invoiceId,}})
	.expect(200)
	.then((res) => {});
});

it('/getInvoiceLineItems', () => {
	return request(app)
	.post('/api/Stripe/getInvoiceLineItems')
	.send({args:{ apiKey, invoice, coupon, customer, subscription, subscriptionPlan, subscriptionProrate, subscriptionProrationDate, subscriptionQuantity, subscriptionTrialEnd,}})
	.expect(200)
	.then((res) => {});
});

it('/updateInvoice', () => {
	return request(app)
	.post('/api/Stripe/updateInvoice')
	.send({args:{ apiKey, invoiceId, applicationFee, description, metadata, statementDescriptor, subscription, forgiven, closed, taxPercent,}})
	.expect(200)
	.then((res) => {});
});

it('/payInvoice', () => {
	return request(app)
	.post('/api/Stripe/payInvoice')
	.send({args:{ apiKey, invoiceId,}})
	.expect(200)
	.then((res) => {});
});

it('/getInvoiceList', () => {
	return request(app)
	.post('/api/Stripe/getInvoiceList')
	.send({args:{ apiKey, customer,}})
	.expect(200)
	.then((res) => {});
});

it('/createInvoiceItem', () => {
	return request(app)
	.post('/api/Stripe/createInvoiceItem')
	.send({args:{ apiKey, amount, currency, customer, description, discountable, invoice, metadata, subscription,}})
	.expect(200)
	.then((res) => {});
});

it('/getInvoiceItem', () => {
	return request(app)
	.post('/api/Stripe/getInvoiceItem')
	.send({args:{ apiKey, invoiceitem,}})
	.expect(200)
	.then((res) => {});
});

it('/updateInvoiceItem', () => {
	return request(app)
	.post('/api/Stripe/updateInvoiceItem')
	.send({args:{ apiKey, itemId, amount, description, discountable, metadata,}})
	.expect(200)
	.then((res) => {});
});

it('/deleteInvoiceItem', () => {
	return request(app)
	.post('/api/Stripe/deleteInvoiceItem')
	.send({args:{ apiKey, invoiceitem,}})
	.expect(200)
	.then((res) => {});
});

it('/getInvoiceItemsList', () => {
	return request(app)
	.post('/api/Stripe/getInvoiceItemsList')
	.send({args:{ apiKey, customer,}})
	.expect(200)
	.then((res) => {});
});

it('/createPlan', () => {
	return request(app)
	.post('/api/Stripe/createPlan')
	.send({args:{ apiKey, planId, amount, currency, interval, name, intervalCount, metadata, statementDescriptor, trialPeriodDays,}})
	.expect(200)
	.then((res) => {});
});

it('/getPlan', () => {
	return request(app)
	.post('/api/Stripe/getPlan')
	.send({args:{ apiKey, planId,}})
	.expect(200)
	.then((res) => {});
});

it('/updatePlan', () => {
	return request(app)
	.post('/api/Stripe/updatePlan')
	.send({args:{ apiKey, planId, name, metadata, statementDescriptor,}})
	.expect(200)
	.then((res) => {});
});

it('/deletePlan', () => {
	return request(app)
	.post('/api/Stripe/deletePlan')
	.send({args:{ apiKey, planId,}})
	.expect(200)
	.then((res) => {});
});

it('/getPlanList', () => {
	return request(app)
	.post('/api/Stripe/getPlanList')
	.send({args:{ apiKey, planId,}})
	.expect(200)
	.then((res) => {});
});

it('/createSubscription', () => {
	return request(app)
	.post('/api/Stripe/createSubscription')
	.send({args:{ apiKey, applicationFeePercent, coupon, customer, plan, source, quantity, metadata, taxPercent, trialEnd,}})
	.expect(200)
	.then((res) => {});
});

it('/getSubscription', () => {
	return request(app)
	.post('/api/Stripe/getSubscription')
	.send({args:{ apiKey, subscriptionId,}})
	.expect(200)
	.then((res) => {});
});

it('/updateSubscription', () => {
	return request(app)
	.post('/api/Stripe/updateSubscription')
	.send({args:{ apiKey, subscriptionId, applicationFeePercent, coupon, customer, plan, source, quantity, metadata, taxPercent, trialEnd,}})
	.expect(200)
	.then((res) => {});
});

it('/cancelSubscription', () => {
	return request(app)
	.post('/api/Stripe/cancelSubscription')
	.send({args:{ apiKey, subscriptionId, atPeriodEnd,}})
	.expect(200)
	.then((res) => {});
});

it('/getSubscriptionList', () => {
	return request(app)
	.post('/api/Stripe/getSubscriptionList')
	.send({args:{ apiKey, subscriptionId, customer, plan, status,}})
	.expect(200)
	.then((res) => {});
});

});