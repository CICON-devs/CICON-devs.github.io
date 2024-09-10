---
sidebar_position: 2
---

# Environment Setup

Before starting the development or deployment of the **CICON AI Shoe Repair App**, make sure the following environment variables are set in your `.env.local` file:

```
LIVE_NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
LIVE_STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=
```

These environment variables are crucial for integrating with third-party services like **Stripe** and **Twilio**. Make sure you have access to their APIs and have created the necessary accounts.

Once the environment variables are set, move on to the [installation guide](installation.md).