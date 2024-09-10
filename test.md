Great! Let's continue with the next sections of the documentation.

---

### `/docs/architecture/folder-structure.md`

```md
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
```

---

### `/docs/architecture/database.md`

```md
# Database Structure

The **CICON AI Shoe Repair App** uses **PostgreSQL** as its primary database. The database schema includes tables for managing users, orders, cobbler pricing, and more.

## Main Tables

### Users

| Column       | Type        | Description                         |
|--------------|-------------|-------------------------------------|
| id           | UUID        | Unique identifier for each user     |
| full_name    | VARCHAR      | The full name of the user           |
| email        | VARCHAR      | User email address                  |
| phone        | VARCHAR      | User phone number                   |
| created_at   | TIMESTAMP    | Timestamp for user creation         |

### Orders

| Column       | Type        | Description                         |
|--------------|-------------|-------------------------------------|
| id           | UUID        | Unique identifier for each order    |
| user_id      | UUID        | Foreign key linking to `users`      |
| status       | ENUM        | Order status (pending, confirmed, etc.) |
| amount       | DECIMAL      | Total amount for the order          |
| created_at   | TIMESTAMP    | Timestamp for order creation        |

### Cobbler Pricing

| Column       | Type        | Description                         |
|--------------|-------------|-------------------------------------|
| id           | UUID        | Unique identifier for each pricing entry |
| cobbler_id   | UUID        | Foreign key linking to `cobblers`   |
| shoe_type    | VARCHAR      | The type of shoe being repaired     |
| material     | VARCHAR      | Material type                      |
| part_of_item | VARCHAR      | Part of the shoe being repaired     |
| fault        | VARCHAR      | Description of the fault            |
| fix          | VARCHAR      | Description of the fix              |
| price        | DECIMAL      | Price for the repair                |

For a full schema dump, check the `/db/cicondb.sql` file.
```

---

### `/docs/api-routes/cobbler/get-prices.md`

```md
# API: GET /api/cobbler/get-prices

This API endpoint fetches the pricing details for cobbler services. It reads the prices from an Excel file located in the `/public` directory and returns them in JSON format.

## Example Request

```http
GET /api/cobbler/get-prices
```

## Response

```json
{
  "prices": [
    {
      "shoes": "Boots",
      "material": "Leather",
      "part_of_item": "Heel",
      "fault": "Worn Out",
      "fix": "Replace Heel",
      "size": "Large",
      "price": 50,
      "price_pair": 90
    },
    ...
  ]
}
```

## Error Responses

- **500 Internal Server Error**: Occurs if the Excel file can't be read or if the file is missing.

## Use Case

This endpoint is used to display cobbler pricing details on the frontend, allowing cobblers to review and amend their prices.
```

---

### `/docs/guides/cobbler-onboarding.md`

```md
# Cobbler Onboarding Guide

The cobbler onboarding flow allows cobblers to set up their Stripe accounts and start accepting payments. This process uses the Stripe API for account creation and onboarding link generation.

## Flow Overview

1. **Create Stripe Account**: The API creates a new Stripe connected account for the cobbler.
2. **Generate Onboarding Link**: An account onboarding link is generated and sent to the cobbler.
3. **Cobbler Completes Onboarding**: The cobbler is redirected to Stripe to complete their account setup.

## Key API Endpoints

### POST /api/stripe/create-account

Creates a new Stripe connected account for the cobbler.

### POST /api/stripe/generate-account-link

Generates an onboarding link for the cobbler to complete their Stripe account setup.

```http
POST /api/stripe/generate-account-link
{
  "accountId": "acct_1PmxIJRwFlCrWCeA"
}
```

## Frontend Flow

The **CobblerOnboarding.tsx** component handles the onboarding process. Once the onboarding link is generated, the cobbler is redirected to Stripe for account setup.
```

---

### `/docs/theming/daisyui.md`

```md
# Theming with DaisyUI

The **CICON AI Shoe Repair App** uses **DaisyUI** as its main UI component library. DaisyUI is built on top of Tailwind CSS and provides a set of customizable components with predefined themes.

## Key Features

- **Predefined Themes**: The app uses the "lemonade" theme from DaisyUI.
- **Responsive Components**: DaisyUI components are fully responsive and mobile-friendly.
- **Customizable**: You can easily change the theme by updating the `data-theme` attribute in the HTML body tag.

## Theme Setup

In the **RootLayout.tsx** file, the theme is applied using the `data-theme` attribute on the `body` element:

```tsx
<body data-theme="lemonade" className="min-h-screen flex items-center justify-center">
```

You can switch to other DaisyUI themes by changing the value of `data-theme`.

## Resources

- [DaisyUI Documentation](https://daisyui.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
```

---

### `/docs/troubleshooting.md`

```md
# Troubleshooting

This section contains common issues and troubleshooting tips for the **CICON AI Shoe Repair App**.

## Common Issues

### 1. Stripe Payment Fails

**Error**: "Payment method not found"
- **Solution**: Ensure that you have correctly set up your Stripe environment variables in the `.env.local` file and that the connected account ID is valid.

### 2. Twilio SMS Not Sending

**Error**: "Invalid phone number"
- **Solution**: Check that the phone number being passed to the Twilio API is in the correct format (`+[country code][phone number]`).

### 3. Database Connection Error

**Error**: "Could not connect to PostgreSQL"
- **Solution**: Verify that the PostgreSQL server is running and that the correct connection details are set in the environment variables.

### 4. Missing Excel File for Pricing

**Error**: "File not found"
- **Solution**: Ensure the `prices.xlsx` file exists in the `public` directory and is formatted correctly.
```

---

Let me know if you’d like to move forward with this, or if there’s anything specific you’d like to adjust in the documentation!