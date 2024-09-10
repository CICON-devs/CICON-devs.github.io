---
sidebar_position: 5
---
# BasketComponent

The `BasketComponent` allows users to select the repair services and products they want for their shoes. The component calculates the total price and triggers a page change to the checkout stage.

## Props

- **repairServices**: Array of available repair services.
- **productSuggestions**: Array of product suggestions (optional).
- **changePage**: Function to trigger the page change to the checkout stage.

## Example Usage

```jsx
const repairServices = [
  { name: 'Sole Replacement', price: 50 },
  { name: 'Heel Repair', price: 20 }
];
const productSuggestions = [
  { name: 'Shoe Polish', price: 5 }
];

<BasketComponent
  repairServices={repairServices}
  productSuggestions={productSuggestions}
  changePage={(totalAmount, selectedServices, selectedProducts) => { ... }}
/>
```

## Key Functions

- **handleSelectService**: Toggles the selection of a repair service.
- **handleSelectProduct**: Toggles the selection of a product.
- **handleCheckout**: Calculates the total price and triggers the page change.