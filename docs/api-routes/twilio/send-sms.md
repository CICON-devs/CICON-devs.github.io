# API: POST /api/twilio/send-sms

This API route sends an SMS message using Twilio's messaging service. The route takes in a recipient phone number and message content, and sends the SMS via the Twilio API.

## Example Request

```http
POST /api/twilio/send-sms
{
  "to": "+1234567890",
  "message": "Your repair has been completed!"
}
```

## Response

### Success (200)

```json
{
  "sid": "SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
}
```

### Error (500)

```json
{
  "error": "Failed to send SMS"
}
```

## Parameters

- **to**: The recipient's phone number in E.164 format (e.g., `+1234567890`).
- **message**: The content of the SMS message to be sent.

## Use Case

This API route is used to send status updates or notifications to customers regarding their shoe repair jobs, such as informing them that the repair is complete or ready for pickup.
