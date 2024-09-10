---
sidebar_position: 1
---

# Folder Structure

The **CICON AI Shoe Repair App** is structured to separate the concerns of API routes, components, and context for better maintainability and scalability. Here’s an overview of the folder structure:

```bash
app/
├── api
│   ├── cobbler/              # API routes for cobbler-related operations
│   ├── stripe/               # API routes for Stripe integration
│   └── twilio/               # API route for Twilio SMS integration
├── cobbler/
│   ├── onboarding/           # Pages and components related to the cobbler onboarding process
│   ├── price-confirmation/   # Pages for price confirmation during repair flow
│   └── prices/               # Cobbler price setup components
├── context/
│   └── StageContext.tsx      # React context to manage multi-stage process states
├── components/               # Reusable components used across different pages
├── stages/                   # Pages and components for each stage in the shoe repair process
│   ├── AnalysisComponent.tsx # AI analysis component for uploaded photos
│   ├── BasketComponent.tsx   # Basket and price calculation component
│   ├── CheckoutComponent.tsx # Payment integration with Stripe
│   ├── ShoeShowcaseComponent.tsx  # Displays uploaded shoes and fault details
├── split-payment-test/        # Test components for split payments in Stripe
├── styles/                   # Global and component-level styles (including DaisyUI)
└── public/                   # Static assets, such as images
```

The main directories in the app include:
- **api**: For all server-side API routes.
- **cobbler**: For cobbler-specific components and flows.
- **context**: React context for shared state across multiple components.
- **components**: Common UI components used throughout the application.
- **stages**: Components related to the shoe repair process.

For details on each section, refer to the relevant part of the documentation.