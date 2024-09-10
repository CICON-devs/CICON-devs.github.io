# API: POST /api/stripe/create-account

This API route creates a new Stripe connected account for cobblers. It is the first step in the cobbler onboarding process, where a Stripe account is generated to enable cobblers to receive payments.

## Example Request

```http
POST /api/stripe/create-account
```

## Response

### Success (200)

```json
{
  "accountId": "acct_12345"
}
```

### Error (500)

```json
{
  "error": "Failed to create Stripe account"
}
```

## Use Case

This API route is called during the cobbler onboarding process to create a connected account on Stripe. The cobbler is then redirected to complete their account setup on Stripe's platform using the generated onboarding link.
