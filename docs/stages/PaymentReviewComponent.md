---
sidebar_position: 7
---
# PaymentReviewComponent

The `PaymentReviewComponent` displays a summary of the payment after a successful transaction. It shows the services and products the user paid for and provides a message about the payment being on hold.

## Props

- **services**: Array of selected services.
- **products**: Array of selected products.
- **totalAmount**: Total amount paid by the user.

## Example Usage

```jsx
<PaymentReviewComponent
  services={services}
  products={products}
  totalAmount={totalAmount}
/>
```

## Key Features

- **Order Review**: Displays the services and products selected by the user.
- **Payment Summary**: Shows the total amount paid and confirms the payment status.
