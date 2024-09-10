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