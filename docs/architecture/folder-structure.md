---
sidebar_position: 1
---

# Folder Structure

This document provides an overview of the folder structure for the CICON AI Shoe Repair application. The application is organized into several directories that manage different functionalities such as API routes, components, contexts, and stages.

## Folder Structure

```bash
app/
├── api
│   ├── cobbler
│   │   ├── get-prices
│   │   │   └── route.ts
│   │   └── save-prices
│   │       └── route.ts
│   ├── record-orders
│   │   ├── initialize-order
│   │   │   └── route.ts
│   │   └── update-order
│   ├── stripe
│   │   ├── amend-payment-intent
│   │   │   └── route.ts
│   │   ├── create-account
│   │   │   └── route.ts
│   │   ├── generate-account-link
│   │   │   └── route.ts
│   │   ├── get-payment-intent-details
│   │   │   └── [paymentIntentId]
│   │   │       └── route.ts
│   │   └── payment-intent
│   │       └── route.ts
│   └── twilio
│       └── send-sms
│           └── route.ts
├── cobbler
│   ├── onboarding
│   │   ├── CobblerOnboarding.tsx
│   │   ├── complete
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   ├── prices
│   │   │   ├── PricesPage.tsx
│   │   │   ├── page.tsx
│   │   │   └── type1
│   │   │       └── page.tsx
│   │   ├── refresh
│   │   │   └── page.tsx
│   │   └── success
│   │       └── page.tsx
│   └── price-confirmation
│       ├── PriceAmendComponent.tsx
│       └── [orderId]
│           └── page.tsx
├── context
│   └── StageContext.tsx
├── layout.tsx
├── lib
│   └── prisma.ts
├── page.tsx
├── split-payment-test
│   ├── PaymentIntentDetails.tsx
│   └── page.tsx
└── stages
    ├── AnalysisComponent.tsx
    ├── BasketComponent.tsx
    ├── CheckoutComponent.tsx
    ├── DetailsComponent.tsx
    ├── PaymentReviewComponent.tsx
    ├── PromptAndPhotoUploadComponent.tsx
    ├── ShoeShowcaseComponent.tsx
    └── [stage]
        └── page.tsx
```

## Folder Breakdown

### `/api`

This folder contains all the server-side API routes for the application, including:
- **Cobbler Routes**: Handles cobbler-related tasks such as fetching and saving prices.
- **Order Routes**: Initializes and updates repair orders.
- **Stripe Routes**: Manages payment processing, account creation, and payment intent details.
- **Twilio Routes**: Integrates Twilio to send SMS notifications.

### `/cobbler`

This folder contains the React components and pages related to the cobbler onboarding and price confirmation flows. Key components include:
- **CobblerOnboarding.tsx**: Initiates the onboarding process for cobblers.
- **Price Confirmation**: Contains components for confirming or amending repair prices.


### `/context`

- **StageContext.tsx**: A React context that manages the state of the application across different stages.

### `/lib`

- **prisma.ts**: Contains the Prisma client configuration to interact with the PostgreSQL database.

### `/split-payment-test`

This folder contains test pages and components for testing the Stripe split payment functionality.

### `/stages`

This folder contains the components that handle the different stages of the shoe repair process, including:
- **AnalysisComponent.tsx**: Analyzes the uploaded images and returns repair suggestions.
- **BasketComponent.tsx**: Displays available repair services and products.
- **CheckoutComponent.tsx**: Handles the Stripe payment process.
- **PromptAndPhotoUploadComponent.tsx**: Allows users to upload images and describe the faults.
- **ShoeShowcaseComponent.tsx**: Displays the uploaded images and parsed fault details.
- **DetailsComponent.tsx**: A placeholder component for collecting user details.

---

This folder structure organizes the app in a way that separates core concerns, making the codebase easier to maintain and scale.
```

Let me know if you need further adjustments!