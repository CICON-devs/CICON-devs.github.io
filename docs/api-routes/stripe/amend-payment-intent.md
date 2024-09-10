# API: POST /api/stripe/amend-payment-intent

This API route is used to amend the price of a repair job based on the cobbler's assessment. Depending on whether the cobbler agrees with the initial price or not, the PaymentIntent is either captured, cancelled, or recreated with a new price.

## Example Request

```http
POST /api/stripe/amend-payment-intent
{
  "cobblerId": "acct_12345",
  "paymentIntentId": "pi_12345",
  "orderId": "12345",
  "isRepairable": true,
  "agreeWithPrice": false,
  "newPrice": 6000,
  "reason": "Additional fixes needed"
}
```

## Response

### Success (200)

```json
{
  "success": true,
  "url": "https://checkout.stripe.com/pay/cs_test_a1b2c3d4e5"
}
```

### Error (400/500)

```json
{
  "error": "Payment intent could not be updated"
}
```

## Parameters

- **cobblerId**: The ID of the cobbler (Stripe connected account).
- **paymentIntentId**: The ID of the PaymentIntent to be amended.
- **orderId**: The ID of the order.
- **isRepairable**: Boolean indicating whether the repair is possible.
- **agreeWithPrice**: Boolean indicating whether the cobbler agrees with the original price.
- **newPrice**: The amended price (if the cobbler does not agree with the initial price).
- **reason**: Reason for the price amendment or cancellation.

## Use Case

This route is invoked when the cobbler reviews a repair job and either accepts the price or suggests a new price. The payment process is then adjusted based on their input.