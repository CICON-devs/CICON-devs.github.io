---
sidebar_position: 6
---

# CheckoutComponent

The `CheckoutComponent` handles the payment process using Stripe. Users can review their selected services and products and proceed to complete the payment.

## Props

- **totalAmount**: The total amount to be paid.
- **services**: Array of selected services.
- **products**: Array of selected products.
- **changePage**: Function to trigger the page change after successful payment.

## Example Usage

```jsx
<CheckoutComponent
  totalAmount={totalAmount}
  services={selectedServices}
  products={selectedProducts}
  changePage={handlePaymentSuccess}
/>
```

## Key Functions

- **handlePayment**: Triggers the payment process using the Stripe API.
- **generateOrderId**: Generates a random order ID for the transaction.
