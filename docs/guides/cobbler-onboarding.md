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
  "accountId": "stripe_connected_account_number"
}
```

## Frontend Flow

The **CobblerOnboarding.tsx** component handles the onboarding process. Once the onboarding link is generated, the cobbler is redirected to Stripe for account setup.