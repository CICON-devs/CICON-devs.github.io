# Payment Integration Guide

The **CICON AI Shoe Repair App** uses Stripe for payment processing. This guide will walk you through the integration of Stripe for handling payments in the app.

## Flow Overview

1. **Create a PaymentIntent**: A PaymentIntent is created for each transaction to represent the payment process.
2. **Confirm Payment**: The payment is confirmed when the user provides their card details.
3. **Handle Payment Success/Failure**: Stripe handles the payment, and the app is updated accordingly.

## PaymentIntent Creation

To create a PaymentIntent, make a request to the `/api/stripe/payment-intent` endpoint. This will create a PaymentIntent on Stripe and return the `clientSecret`, which is used to confirm the payment.

```http
POST /api/stripe/payment-intent
{
  "amount": 5000, // Amount in pennies
  "connectedAccountId": "acct_12345"
}
```

### Example Response

```json
{
  "clientSecret": "pi_random_payment_intent_id"
}
```

## Frontend Payment Flow

The payment process is handled using **Stripe Elements**. A `CardElement` is used to securely collect the user’s card details, and the payment is confirmed using the `clientSecret` obtained from the PaymentIntent.

Here’s a simplified example of confirming a payment:

```ts
const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
  payment_method: {
    card: elements.getElement(CardElement),
  },
});
```

### Payment Success

If the payment is successful:

```json
{
  "status": "succeeded"
}
```

You can then proceed with your post-payment logic, such as updating the order status or displaying a confirmation to the user.

### Payment Requires Capture

If the payment is on hold (requires confirmation from the cobbler), it will return:

```json
{
  "status": "requires_capture"
}
```

In this case, the payment is held until the cobbler confirms the price, and Stripe captures the payment later.